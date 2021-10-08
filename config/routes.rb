Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :apartments
    end
  end
  devise_for :users
  get '*path', to: 'home#index', constraints: ->(request) { request.format.html? }
  root 'home#index'
end
