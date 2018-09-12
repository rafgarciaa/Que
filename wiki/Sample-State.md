# Sample State

```js
{
  entities: {
    questions: {
      1: {
        id: 1,
        body: "what is the meaning of life?",
        authorId: 11,
        topicId: 4
      },
      2: {
        id: 2,
        body: "Who is sennacy of App Academy?",
        authorId: 25,
        topicId: 2
      },
      3: {
        id: 3,
        body: "What constitutes great code?",
        authorId: 11,
        topicId: 3
      }
    },

    topics: {
      1: {
        id: 1,
        name: "General"
      },
      2: {
        id: 2,
        name: "App Academy"
      },
      3: {
        id: 3,
        name: "Programming"
      },
      4: {
        id: 4,
        name: "Existential"
      }
    }

    answers: {
      5: {
        id: 5,
        body: "42",
        questionId: 1,
        userId: 25
      },
      6: {
        id: 6,
        body: "Sennacy is the (cat) representative of App Academy",
        questionId: 2,
        userId: 11,
      }
    },

    comments: {
      1: {
        id: 1,
        body: "hhgttg ftw!",
        answerId: 5,
        userId: 25
      },
      2: {
        id: 2,
        body: "His website is out there in the wild somewhere."
        answerId: 6,
        userId: 11
      }
    }

    users: {
      11: {
        id: 11,
        name: "Raf Garcia",
        email: thisEmail@email.com,
        questionIds: [1, 3],
        answerIds: [6]
      },
      25: {
        id: 25,
        username: "John Smith",
        email: thatEmail@email.com,
        questionIds: [2],
        answerIds: [5]
      }
    }
  },

  ui: {
    loading: true/false
  },

  errors: {
    login: ["Incorrect username/password combination"],
    questionForm: ["Question body cannot be blank"],
  },

  session: { currentUserId: 11 }
}
```
