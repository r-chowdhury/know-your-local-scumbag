class GoogleCivicsApi

  def self.get_officials(user)
    
    url = self.create_api_url(user)
    response = RestClient.get(url)
    parsed_data = JSON.parse(response)

    self.parse_offices(parsed_data["offices"], parsed_data["officials"], user)

  end 

  private
  
  def self.create_api_url(user)
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
    url
  end 

  def self.create_address_url(address)
    url = "https://maps.google.com/?q="
    address_array = [ address[0]["line1"], address[0]["city"], address[0]["state"], address[0]["zip"] ] 
    address_array.each do |address_segment|
      url += "#{address_segment}+"
    end 
    return url
  end 

  def self.parse_offices(offices_array, officials_array, user) #pass in parsed_data["offices"]
    offices_array.each do |office|
      office["officialIndices"].each do |index|
        self.create_new_official_instance(index, office, officials_array, user) #index from official indices
      end
    end
  end 

  def self.create_new_official_instance(index, office, officials_object_array, user)
    politician_object = officials_object_array[index]
    new_politician = Politician.find_or_create_by(
      name: politician_object["name"] ?  politician_object["name"] : "Unknown",
      address: politician_object["address"] ? "#{politician_object["address"][0]["line1"]}, #{politician_object["address"][0]["city"]}, #{politician_object["address"][0]["state"]}, #{politician_object["address"][0]["zip"]}"  : "Unknown",
      party: politician_object["party"] ? politician_object["party"] : "Unknown",
      photo_url: politician_object["photoUrl"] ? politician_object["photoUrl"] : "https://a-z-animals.com/media/animals/images/470x370/giraffe_10.jpg",
      position: office["name"],
      website: politician_object["urls"] ? politician_object["urls"][0] : "Unknown",
      address_url: politician_object["address"] ? self.create_address_url(politician_object["address"]) : "Unknown",
      phone_number: politician_object["phones"] ? politician_object["phones"][0] : "Unknown",
      # number_of_likes: 0
    )
    UserPolitician.create(user_id: user.id, politician_id: new_politician.id)
  end 

end 