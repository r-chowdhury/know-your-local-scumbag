# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ryhan = User.create(name: "Ryhan Chowdhury", email: "ryhan@email.com", password: "ryhan123", address: "17110 Simon Court", city: "Richmond", state: "Texas", zip: "77407")
GoogleCivicsApi.get_officials(ryhan)
sleep(1)
kenny = User.create(name: "Kenny Yang", email: "kenny@email.com", password: "kenny123", address: "1713 Fannin Street", city: "Houston", state: "Texas", zip: "77002")
GoogleCivicsApi.get_officials(kenny)
