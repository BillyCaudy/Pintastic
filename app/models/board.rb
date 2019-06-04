class Board < ApplicationRecord
    validates :maker_id, :name, presence: true
    
    belongs_to :user, foreign_key: :maker_id
    has_many :pins, dependent: :destroy
end
