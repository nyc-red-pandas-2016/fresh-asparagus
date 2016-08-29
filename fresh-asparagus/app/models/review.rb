class Review < ApplicationRecord

  belongs_to :user
  belongs_to :film
  has_many :votes, as: :votable
  has_many :comments, as: :commentable

  validates :content, :star_rating, presence: true

end
