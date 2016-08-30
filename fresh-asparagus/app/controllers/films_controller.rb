class FilmsController < ApplicationController

  def show
    @film = Film.find_by(id: params[:id])
    @comments = @film.comments
    @reviews = @film.reviews
    @votes = @film.votes.length
    # @reviewComments
    if current_user
      @user_id = current_user.id
      @isAdmin = current_user.is_admin?
    else
      @user_id = 0
      @isAdmin = false
    end
  end
end
