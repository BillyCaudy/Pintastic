class Pin < ApplicationRecord
    validates :maker_id, :board_id, presence: true
    
    belongs_to :user,
        foreign_key: :maker_id
    belongs_to :board
    has_one_attached :pic, dependent: :destroy
end
