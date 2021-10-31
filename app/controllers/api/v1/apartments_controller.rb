class Api::V1::ApartmentsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    @apartments = Apartment.all

    render json: @apartments
  end

  def create
    @apartment = Apartment.create(apartment_params)
    puts 'WE MADE IT!!!!!!!!!!!'
    if @apartment.save
      render json: apartment, status: :created
    else
      render json: apartment.errors, status: unprocessible_entity
    end
  end

  private

  def apartment_params
    debugger
    params.require(:apartment).permit(:manager, :street, :state, :city, :price, :bathrooms, :bedrooms, :pets)
  end
end
