class UserPoliticiansController < ApplicationController
  def index
    user_politicians = UserPolitician.all 
    render json: user_politicians
  end 
end
