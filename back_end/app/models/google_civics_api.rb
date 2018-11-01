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

  def self.parse_offices(offices_array, officials_array, user) #pass in parsed_data["offices"]
    offices_array.each do |office|
      office["officialIndices"].each do |index|
        self.create_new_official_instance(index, office, officials_array, user) #index from official indices
        #office hash
        #array of official objects from api
      end
    end
  end 

  def self.create_new_official_instance(index, office, officials_object_array, user)
    politician_object = officials_object_array[index]
    
    new_politician = Politician.find_or_create_by(
      name: politician_object["name"] ?  politician_object["name"] : "Unknown",
      address: politician_object["address"] ? politician_object["address"][0]["line1"] : "Unknown",
      party: politician_object["party"] ? politician_object["party"] : "Unknown",
      photo_url: politician_object["photoUrl"] ? politician_object["photoUrl"] : "https://a-z-animals.com/media/animals/images/470x370/giraffe_10.jpg",
      position: office["name"] 
    ) 
    
    UserPolitician.create(user_id: user.id, politician_id: new_politician.id)
  end 
end 