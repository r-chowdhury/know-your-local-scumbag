class UserPoliticiansController < ApplicationController
  def index
    user_politicians = UserPolitician.where(user_id: current_user.id) 
    render json: user_politicians, include: [ :politician ]
  end 
end
