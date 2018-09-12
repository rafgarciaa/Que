# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Question.destroy_all

demo_user = User.create!({
  first_name: 'Demo',
  last_name: 'User',
  email: 'demo_user@email.com',
  password: 'starwars'})

question1 = Question.create!({
  body: 'What is the meaning of life?',
  author_id: demo_user.id,
  topic_id: 1,
  })

question2 = Question.create!({
  body: 'Who is sennacy?',
  author_id: demo_user.id,
  topic_id: 1,
  })

question3 = Question.create!({
  body: 'What constitutes great code?',
  author_id: demo_user.id,
  topic_id: 1,
  })
