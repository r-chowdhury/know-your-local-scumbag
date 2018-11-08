class UserPoliticiansController < ApplicationController
  skip_before_action :authorized
  def index
    user_politicians = UserPolitician.all.where(user_id: current_user.id)
    render json: user_politicians
  end 

  def update
    user_politician = UserPolitician.find(params[:id])
    user_politician.update(user_politicians_params) 
    render json: {success: true, user_politician: user_politician}
  end 

  private
  def user_politicians_params 
    params.require(:user_politician).permit(:upvote_toggled, :downvote_toggled)
  end
end