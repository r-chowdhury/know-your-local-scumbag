class GoogleCivicsApi

  def self.get_officials
    url = "https://www.googleapis.com/civicinfo/v2/representatives?key=#{ENV["civics_api_key"]}&address="
    User.all.each do |user|
      address_array = user.address.split
      url += address_array[0]
      address_array[1.. -1].each do |address|
        url += "%20#{address}"
      end 
      url += "%20#{user.city}"
      url += "%20#{user.state}"
      response = RestClient.get(url)
      parsed_data = JSON.parse(response)
      
      officials_object_array = parsed_data["officials"]
      politician_instance_array = officials_object_array.map do |official|
        Politician.create(name: official["name"], address: official["address"][0]["line1"], party: official["party"])
      end 

      politician_instance_array.each do |politician_object|
        UserPolitician.create(politician_id: politician_object.id, user_id: user.id)
      end
    end 
  end 
      

  
  
end 