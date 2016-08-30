class ReviewsController < ApplicationController

  before_action :authenticate_user!

  def create
    review = Review.new(review_params)
    if review.save
      render json: review
    end
  end

  private

  def review_params
    params.require(:review).permit(:content, :film_id, :star_rating, :user_id)
  end

end
