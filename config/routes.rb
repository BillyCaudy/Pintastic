Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show] do
      resources :boards, only: [:index], to: 'boards#user_index'
      resources :pins, only: [:index], to: 'pins#user_index'
    end
    resource :session, only: [:create, :destroy]
    resources :boards, only: [:index, :show, :create, :update, :destroy] do
      resources :pins, only: [:index], to: 'pins#board_index'
    end
    resources :pins, only: [:index, :show, :create, :update, :destroy]
  end

  root 'static_pages#root'
end
