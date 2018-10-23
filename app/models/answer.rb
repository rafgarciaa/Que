class Answer < ApplicationRecord
  validates :body, :user_id, :question_id, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: 'User'

  belongs_to :question,
    foreign_key: :question_id,
    class_name: 'Question'

  has_many :comments,
    foreign_key: :answer_id,
    class_name: 'Comment',
    dependent: :destroy
end
