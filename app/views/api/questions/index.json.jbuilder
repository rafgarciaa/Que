json.questions do
  @questions.each do |question|
    json.set! question.id do
      json.partial! "/api/questions/question", question: question
    end
  end
end

json.users do
  @questions.each do |question|
    user = question.author
    json.set! user.id do
      json.extract! user, :id, :first_name, :last_name
    end
  end
end
