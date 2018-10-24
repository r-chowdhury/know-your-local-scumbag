Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:index]
  resources :politicians, only: [:index]
  resources :user_politicians, only: [:index]
end
