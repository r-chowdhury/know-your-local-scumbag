class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :address, :city, :state, :zip
end
