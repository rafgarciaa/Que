json.answers do
  @answers.each do |answer|
    json.set! answer.id do
      json.partial! "api/answers/answer", answer: answer
    end
  end
end

json.users do
  @answers.each do |answer|
    user = answer.user
    json.set! user.id do
      json.extract! user, :id, :first_name, :last_name
    end
  end
end
