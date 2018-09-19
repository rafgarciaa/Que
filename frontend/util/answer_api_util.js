export const fetchAnswers = () => {
  return $.ajax({
    method: 'GET',
    url: `api/answers`,
  });
};

export const fetchAnswer = id => {
  return $.ajax({
    method: 'GET',
    url: `api/answers/${id}`,
  });
};

export const createAnswer = answer => {
  return $.ajax({
    method: 'POST',
    url: `api/answers`,
    data: {
      answer
    }
  });
};

export const deleteAnswer = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/answers/${id}`,
  });
};
