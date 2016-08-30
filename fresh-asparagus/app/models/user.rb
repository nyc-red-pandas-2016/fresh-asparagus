class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates :email, uniqueness: true

  validates :email, :name, presence: true

  has_many :votes

  has_many :reviews

  has_many :comments

  def is_admin?
    self.admin_code == "FocusVitaminWaterXXX"
  end
end
