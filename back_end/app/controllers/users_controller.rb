class UsersController < ApplicationController
  before_action :user_params
  skip_before_action :authorized, only: [:create]

  def profile
    render json: { user: UserSerializer.new(current_user) }, status: :accepted
  end

  def create
    @user = User.create(user_params)
    if @user.valid?
      @token = encode_token(user_id: @user.id)
      render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
    else
      render json: { error: 'failed to create user' }, status: :not_acceptable
    end
    GoogleCivicsApi.get_officials(@user)
  end

  def index 
    users = User.all 
    users_politicians = User.all.map do |user|
      user.politicians 
    end 
    render json: users, include: [ :politicians]
  end 


  private
  def user_params 
    params.require(:user).permit(:name, :email, :password, :address, :city, :state, :zip)
  end
end