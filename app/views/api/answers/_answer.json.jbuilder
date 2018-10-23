json.extract! answer, :id, :body, :user_id, :question_id, :created_at
json.commentIds answer.comments.pluck(:id)
