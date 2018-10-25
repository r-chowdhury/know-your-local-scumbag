class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :address, :city, :state, :zip
end
