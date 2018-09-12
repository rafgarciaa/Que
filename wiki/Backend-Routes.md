# Backend Routes

## HTML

+ `GET /` `StaticPagesController#root`

## API Endpoints

### `users`
+ `GET /api/users` - returns the user information. Displays answers, questions, topics followed
+ `POST /api/users` - sign up

### `session`
+ `POST /api/session` - login
+ `DELETE /api/session` - logout

### `questions`
+ `GET /api/questions` - returns relevant questions (filtered by `data`/`params`)
+ `GET /api/questions/:id` - returns question
+ `POST /api/questions` - creates a question
+ `PATCH /api/questions/:id` - edit a question
+ `DELETE /api/questions/:id` - remove a question

### `answers`
+ `GET /api/questions/:id/answers` - returns relevant answers relating to the question
+ `POST /api/questions/:id/answer` - create an answer
+ `DELETE /api/questions/:id/answer` - remove an answer

### `topics`
+ `GET /api/topic/:id/questions` - returns relevant questions relating to the topic
+ `GET /api/topic/:id/answers` - returns relevant answers relating to the topic
