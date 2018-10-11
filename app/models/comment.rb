class Comment < ApplicationRecord
  validates :body, :answer_id, :user_id, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: 'User'

  belongs_to :answer,
    foreign_key: :answer_id,
    class_name: 'Answer'
end
