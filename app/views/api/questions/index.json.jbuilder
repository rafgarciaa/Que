@questions.each do |question|
  json.set! question.id do
    json.extract! question, :body, :topic_id, :created_at
  end
end
