class CreatePoliticians < ActiveRecord::Migration[5.2]
  def change
    create_table :politicians do |t|
      t.string :name 
      t.string :address 
      t.string :party
      t.string :photo_url 
      t.string :position
      t.string :website
      t.string :address_url
      t.string :phone_number
      t.integer :number_of_likes



      t.timestamps
    end
  end
end
