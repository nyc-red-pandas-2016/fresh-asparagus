class AsparagusController < ApplicationController

  def show
    review = Review.find(params[:id])
    comments = review.comments
    render json: comments
  end

end
