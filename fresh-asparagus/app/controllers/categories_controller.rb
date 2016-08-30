class CategoriesController < ApplicationController

  def index
    @categories = Category.all
    # render json: @categories.to_json
  end

  def show
    @films = Category.find_by(id: params[:id]).films
  end
end
