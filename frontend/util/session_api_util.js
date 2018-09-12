export const login = user => {
  return $.ajax({
    method: 'POST',
    url: `api/session`,
    data: {
      user: {
        email: user.email,
        password: user.password
      }
    }
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: `api/session`
  });
};

export const signup = user => {
  return $.ajax({
    method: 'POST',
    url: `api/users`,
    data: {
      user: {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: user.password,
      }
    }
  });
};
