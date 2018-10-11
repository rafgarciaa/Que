@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :id, :body, :user_id, :answer_id
  end
end
