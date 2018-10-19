class GoogleCivicsApi
  url = "https://www.googleapis.com/civicinfo/v2/representatives?key=#{ENV["civics_api_key"]}&address=17110%20Simon%20Court%20Richmond%20TX"
  response = RestClient.get(url)
  @@parsed_data = JSON.parse(response)

  def self.officials_instances
    # officials_object_array = @@parsed_data["officials"]

    # officials_name = officials_object_array.map do |official|
    #   official["name"]
    # end

    # address_object = {}
    # officials_object_array.each do |official|
    #   house_number = official["address"][0]["line1"] + official["address"][0]["line2"] + official["address"][0]["city"] + official["address"][0]["state"] + official["address"][0]["zip"]

    #   address_object["house_number"] = house_number
    #   byebug
    # end
    officials_object_array = @@parsed_data["officials"]
    officials_object_array.each do |official|
      Politician.create(name: official["name"], address: official["address"][0]["line1"], party: official["party"])
    end 

    return Politician.all
    
  end 

  
end 