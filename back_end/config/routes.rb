Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:index, :create]
  resources :user_politicians
  warp_resources :politicians
  #resources :politicians, only: [:index]


  post "/login", to: "auth#create"
  get "/profile", to: "users#profile"
end
