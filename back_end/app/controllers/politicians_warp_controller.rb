class PoliticiansWarpController < ApplicationWarpController

  def index(params)
    user = current_user
    Politician.after_create do
      yield user.politicians.order(:id).reload
    end
    Politician.after_update do
      yield user.politicians.order(:id).reload
    end
    Politician.after_destroy do
      yield user.politicians.order(:id).reload
    end
    yield current_user.politicians.order(:id).reload
  end

  def create(params)
      Politician.create(politician_params)
  end

  def update(params)
      politician = Politician.find(params[:id])
      politician.update(politician_params)
      Politician.all.order(:id)
  end

  def politician_params
      params.permit(:name, :address, :party, :photo_url, :position, :website_url, :address_url, :phone_number, :number_of_likes )
  end

end