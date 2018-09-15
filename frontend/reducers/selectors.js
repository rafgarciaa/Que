export const selectAllQuestions = state => {
  return Object.values(state.entities.questions);
};
