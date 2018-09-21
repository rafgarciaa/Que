# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Question.destroy_all
Topic.destroy_all
Answer.destroy_all

demo_user = User.create!({
  first_name: 'Demo',
  last_name: 'User',
  email: 'demo_user@email.com',
  password: 'starwars',
})

user1 = User.create!({
  first_name: 'Raf',
  last_name: 'Garcia',
  email: 'rafg@email.com',
  password: 'starwars',
})

user2 = User.create!({
  first_name: 'Andre',
  last_name: 'Chow',
  email: 'andrec@email.com',
  password: 'starwars',
})



topic1 = Topic.create!({ name: 'General' })
topic2 = Topic.create!({ name: 'Programming' })
topic3 = Topic.create!({ name: 'Random' })



question1 = Question.create!({
  body: 'What is the meaning of life?',
  author_id: demo_user.id,
  topic_id: topic1.id,
})

question2 = Question.create!({
  body: 'Who is sennacy?',
  author_id: demo_user.id,
  topic_id: topic3.id,
})

question3 = Question.create!({
  body: 'What constitutes great code?',
  author_id: demo_user.id,
  topic_id: topic2.id,
})

question4 = Question.create!({
  body: 'What do you do in a fire?',
  author_id: user2.id,
  topic_id: topic3.id,
})



answer1 = Answer.create!({
  body: 'Make your code dry! Always refactor.',
  user_id: user2.id,
  question_id: question3.id
})

answer2 = Answer.create!({
  body: '42 LOL',
  user_id: user1.id,
  question_id: question1.id
})

answer3 = Answer.create!({
  body: 'App Academy Cat Representative',
  user_id: user1.id,
  question_id: question2.id
})

answer4 = Answer.create!({
  body: 'Git commit. Git push. Git out!',
  user_id: user1.id,
  question_id: question4.id,
})

answer5 = Answer.create!({
  body: 'To write clean code',
  user_id: user2.id,
  question_id: question1.id
})
