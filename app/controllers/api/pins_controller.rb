class Api::PinsController < ApplicationController
    
  def create
    @pin = current_user.pins.new(pin_params)

    if @pin.save
      render "api/pins/show"
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  def index
    @pins = Pin.all
    render 'api/pins/index'
  end

  def user_index
    @pins = User.find(params[:user_id]).pins
    render 'api/pins/index'
  end

  def board_index
    @pins = Board.find(params[:board_id]).pins
    render 'api/pins/index'
  end

  def show
    @pin = Pin.find(params[:id])
  end

  def destroy
    @pin = Pin.find(params[:id])
    @pin.destroy
    render "api/pins/index"
  end

  private

  def pin_params
    params.require(:pin).permit(:maker_id, :board_id, :pic, :description)
  end
    
end
