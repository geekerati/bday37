class User < ActiveRecord::Base
  has_many :messages
  has_one :coupon
  validates :name, presence: true
  validates :phone, presence: true
  validates :phone, uniqueness: true
  validates :birthday, presence: true
  validates_acceptance_of :agree  
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable # :registerable
  # dragonfly_accessor :last_sign_in_ip
  # image_accessor :last_sign_in_ip
end
