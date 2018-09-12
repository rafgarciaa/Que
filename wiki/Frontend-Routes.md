## Frontend Routes
The components are organized as follows:
+ `Root`
  + `App`
    + `NavBar`
    + (main components go here)
    + `Footer`

The following routes, defined in `App`, will render components between `NavBar` and `Footer`.

+ `/`
  + `splash`
+ `/feed`
  + `questionIndex`
    + `questionIndexItem`
  + `topicsIndex`

+ `/users/:userId`
  + `ProfileComponent`
  + `AnswerIndex`
    + `AnswerIndexItem`
    + `CommentIndex`

+ `/questions/new`
  + `QuestionForm`

+ `/questions/:questionId`
  + `QuestionShow`
  + `AnswerIndex`
    + `AnswerIndexItem`
    + `CommentIndex`
