class CreateUserPoliticians < ActiveRecord::Migration[5.2]
  def change
    create_table :user_politicians do |t|
      t.belongs_to :user
      t.belongs_to :politician

      t.timestamps
    end
  end
end
