class CreatePoliticians < ActiveRecord::Migration[5.2]
  def change
    create_table :politicians do |t|
      t.string :name 
      t.string :address 
      t.string :party
      t.string :photo_url 
      t.string :position


      t.timestamps
    end
  end
end
