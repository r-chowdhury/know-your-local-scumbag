class GoogleCivicsApi

  def self.get_officials
    User.all.each do |user|
      url = "https://www.googleapis.com/civicinfo/v2/representatives?address="
      address_array = user.address.split
      url += address_array[0]
      address_array[1.. -1].each do |address|
        url += "%20#{address}"
      end 
      url += "%2C%20#{user.city}"
      url += "%2C%20#{user.state}"
      url += "%2C%20#{user.zip}"
      url += "&includeOffices=true&key=#{ENV["civics_api_key"]}"
      response = RestClient.get(url)
      parsed_data = JSON.parse(response)
      sleep(2)
      
      officials_object_array = parsed_data["officials"]
      politician_instance_array = officials_object_array.map do |official|  
        politician_parameters = ["name", "address", "party", "photoUrl"]
        politician_parameters.each do |parameter|
          if official[parameter] == nil
            official[parameter] = "Unknown"
          end
        end
        x = Politician.find_or_create_by(name: official["name"], address: official["address"][0]["line1"], party: official["party"], photo_url: official["photoUrl"])
        y = UserPolitician.create(politician_id: x.id, user_id: user.id)
      end 
    end 
  end 


end 