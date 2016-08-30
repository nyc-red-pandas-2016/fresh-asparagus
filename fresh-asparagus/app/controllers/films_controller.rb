class FilmsController < ApplicationController

  def show
    @film = Film.find_by(id: params[:id])
    @comments = @film.comments
    @reviews = @film.reviews
    # @reviewComments
    if current_user
      @user_id = current_user.id
      @user_trusted = current_user.trusted
    else
      @user_id = 0
      @user_trusted = false
    end
  end
end
