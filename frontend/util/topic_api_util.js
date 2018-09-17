export const fetchTopics = () => {
  return $.ajax({
    method: 'GET',
    url: `api/topics`,
  });
};

export const fetchTopic = id => {
  return $.ajax({
    method: 'GET',
    url: `api/topics/${id}`,
  });
};
