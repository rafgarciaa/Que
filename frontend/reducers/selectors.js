export const selectAllQuestions = state => {
  return Object.values(state.entities.questions);
};

export const selectAllTopics = state => {
  return Object.values(state.entities.topics);
};

export const selectAllAnswers = state => {
  return Object.values(state.entities.answers); 
};
