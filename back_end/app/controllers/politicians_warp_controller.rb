class PoliticiansWarpController < WarpCable::Controller

  def index(params)
    Politician.after_create do
      yield Politician.all
    end
    Politician.after_update do
      yield Politician.all
    end
    Politician.after_destroy do
      yield Politician.all
    end
      yield Politician.all
  end

  def create(params)
      Politician.create(politician_params)
  end

  def destroy(params)
      Politician.destroy(params[:id])
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