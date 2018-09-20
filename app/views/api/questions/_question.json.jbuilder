json.extract! question, :id, :body, :author_id, :topic_id, :created_at
json.answerIds question.answers.pluck(:id)
