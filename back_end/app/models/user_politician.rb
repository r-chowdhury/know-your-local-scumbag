class UserPolitician < ApplicationRecord
    belongs_to :user 
    belongs_to :politician
end
