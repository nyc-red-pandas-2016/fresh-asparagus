class User < ApplicationRecord

  has_secure_password
  validates :email, uniqueness: true
  validates :email, :name, presence: true

  has_many :votes
  has_many :reviews
  has_many :comments

end
