# Que

[Live!](https://que-app.herokuapp.com/#/index)

Que is a single-page application (SPA) inspired by Quora, which allows users to ask questions and answer other user generated questions.

---

## Features

### Sign Up / Log In
Users are required to sign up or log in with their credentials before they can traverse through Que.

![Session Page](https://github.com/rafgarciaa/Que/blob/master/app/assets/images/session_page.png)

### Questions
Asking questions is the main foundation of Que as they stimulate conversation and user engagement.
Upon successful log-in or sign-up, `QuestionIndexContainer` component is loaded and questions are loaded
onto the applications state.

![Homepage](https://github.com/rafgarciaa/Que/blob/master/app/assets/images/homepage.png)

Users are able to ask questions through clicking the `Add` button on the navigation bar, or
through the `Add a question...` prompt below the navigation bar. Clicking either will open a
modal where users can type in their question and choose a topic.

![Question Modal](https://github.com/rafgarciaa/Que/blob/master/app/assets/images/question_modal.png)

### Answers
Answers keep the conversation going as they provide insight on any question. Answers belong to a
single question. Therefore, there isn't a need for an answer index page to view answers. However,
answers belonging to a single question are rendered in the `QuestionView` page.

![Question View](https://github.com/rafgarciaa/Que/blob/master/app/assets/images/question_view.png)

Answers are submitted via a rich text-editor utilizing [react-quill](https://github.com/zenoamaro/react-quill).

![Answer Editor](https://github.com/rafgarciaa/Que/blob/master/app/assets/images/answer_editor.png)


### Topics
A single question belong to a single topic. Based on this relationship, users are able to
filter their view of questions that fall under specific topics.

![Topic View](https://github.com/rafgarciaa/Que/blob/master/app/assets/images/topic_view.png)

---

## Technologies Used
+ Database: PostgreSQL
+ Backend: Ruby on Rails
+ Frontend: React and Redux

---

## Future Implementations
+ Comments (under construction)
+ Upvotes and Downvotes
+ Search Feature
+ Infinite Scrolling
+ User Profiles
