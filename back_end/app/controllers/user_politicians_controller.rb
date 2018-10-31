class UserPoliticiansController < ApplicationController
  def index
    user_politicians = UserPolitician.all
    render json: user_politicians, include: [ :politician ]
  end 
end
