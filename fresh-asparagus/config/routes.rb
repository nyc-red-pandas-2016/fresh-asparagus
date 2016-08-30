Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'categories#index'

  resources :categories, only: [:show]
  resources :films, only: [:show]
  resources :reviews, only: [:create, :new, :index]
  resources :comments, only: [:create, :new, :index]
  resources :votes, only: [:create, :new]
  resources :static, only: [:index]

end
