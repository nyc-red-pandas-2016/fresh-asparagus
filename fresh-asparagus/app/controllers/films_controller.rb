class FilmsController < ApplicationController

  def show
    @film = Film.find_by(id: params[:id])
    @comments = @film.comments
    @reviews = @film.reviews
    # @reviewComments
    @user_id = current_user.id
    @user_trusted = current_user.trusted
  end
end
