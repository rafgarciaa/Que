class Question < ApplicationRecord
  validates :body, :author_id, :topic_id, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: 'User'

  belongs_to :topic,
    foreign_key: :topic_id,
    class_name: 'Topic'

  has_many :answers,
    foreign_key: :question_id,
    class_name: 'Answer',
    dependent: :destroy
end
