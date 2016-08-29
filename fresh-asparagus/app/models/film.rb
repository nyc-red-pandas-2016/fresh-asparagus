class Film < ApplicationRecord

  validates :title, :director, :summary, :year, presence: true

  belongs_to :category
  has_many :votes, as: :votable
  has_many :comments, as: :commentable
  has_many :reviews

end
