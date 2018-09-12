# Database Schema

## `Users`
| column name       | data type | details                   |
|:------------------|:---------:|:--------------------------|
| `id`              | integer   | not null, primary key     |
| `first_name`      | string    | not null                  |
| `last_name`       | string    | not null                  |
| `email`           | string    | not null, indexed, unique |
| `password_digest` | string    | not null                  |
| `session_token`   | string    | not null, indexed, unique |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |

+ index on `email, unique: true`
+ index on `session_token, unique: true`
+ a user `has many` questions
+ a user `has many` answers

## `Questions`
| column name       | data type   | details                  |
|:------------------|:-----------:|:-------------------------|
| `id`              | integer     | not null, primary key    |
| `body`            | string      | not null                 |
| `author_id`       | integer     | not null, foreign key    |
| `topic_id`        | integer     | foreign key              |
| `created_at`      | datetime    | not null                 |
| `updated_at`      | datetime    | not null                 |

+ `author_id` references Users table
+ `topic_id` references Topics table
+ topic is optional for a question
+ a question `belongs to` a topic (defaults to general if none specified)
+ a question `belongs to` an author (users)

## `Topics`
| column name       | data type   | details                   |
|:------------------|:-----------:|:--------------------------|
| `id`              | integer     | not null, primary key     |
| `name`            | string      | not null                  |
| `created_at`      | datetime    | not null                  |
| `updated_at`      | datetime    | not null                  |

+ not sure what to include here ?
+ a topic has many questions

## `Answers`
| column name       | data type   | details                   |
|:------------------|:-----------:|:--------------------------|
| `id`              | integer     | not null, primary key     |
| `body`            | text        | not null                  |
| `question_id`     | integer     | not null, foreign key     |
| `user_id`         | integer     | not null, foreign key     |
| `created_at`      | datetime    | not null                  |
| `updated_at`      | datetime    | not null                  |

+ `question_id` references Questions table
+ `user_id` references Users table
+ an answer `belongs to` a question
+ an answer `belongs to` a user

## `Comments`
| column name         | data type   | details                   |
|:--------------------|:-----------:|:--------------------------|
| `id`                | integer     | not null, primary key     |
| `body`              | text        | not null                  |
| `answer_id`         | integer     | not null, foreign key     |
| `user_id`           | integer     | not null, foreign key     |
| `created_at`        | datetime    | not null                  |
| `updated_at`        | datetime    | not null                  |

+ `answer_id` references Answers table
+ `user_id` references Users table
+ a comment `belongs to` a user
+ a comment `belongs to` an answer
