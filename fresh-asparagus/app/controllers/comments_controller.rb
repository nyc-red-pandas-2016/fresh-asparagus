class CommentsController < ApplicationController

  before_action :authenticate_user!

  def create
    comment = Comment.new(comment_params)
    if comment.save
      render json: comment
    end
  end

  def show
    comment = Comment.find(params[:id])
    votes = comment.votes.length.to_s
    render json: votes
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :commentable_id, :commentable_type, :user_id)
  end
end
