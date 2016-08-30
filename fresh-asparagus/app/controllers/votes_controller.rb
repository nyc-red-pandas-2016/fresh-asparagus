class VotesController < ApplicationController

  before_action :authenticate_user!

  def create
    vote = Vote.new(vote_params)
    if current_user.votes.where(votable_id: vote.votable_id, votable_type: vote.votable_type).length == 0 && vote.save
      render json: vote
    end
  end

  private

  def vote_params
    params.require(:vote).permit(:votable_id, :votable_type, :user_id)
  end

end
