class Politician < ApplicationRecord
  has_many :user_politicians
  has_many :users, through: :user_politicians

end
