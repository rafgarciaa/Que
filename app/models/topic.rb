class Topic < ApplicationRecord
  validates :name, presence: true

  has_many :questions,
    foreign_key: :topic_id,
    class_name: 'Question'
end
