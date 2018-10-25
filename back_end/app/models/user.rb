class User < ApplicationRecord
    has_many :user_politicians
    has_many :politicians, through: :user_politicians

    has_secure_password
end
