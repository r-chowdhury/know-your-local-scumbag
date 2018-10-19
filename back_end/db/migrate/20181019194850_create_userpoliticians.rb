class CreateUserpoliticians < ActiveRecord::Migration[5.2]
  def change
    create_table :userpoliticians do |t|

      t.timestamps
    end
  end
end
