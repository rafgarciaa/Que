@topics.each do |topic|
  json.set! topic.id do
    json.partial! "/api/topics/topic", topic: topic
  end
end
