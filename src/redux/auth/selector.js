const getIsLoggedIn = state => state.auth.data.isLoggedIn;
const getUseremail = state => state.auth.data.user.email;
const getUsername = state => state.auth.data.user.name;
const getIsAuthError = state => state.auth.error;

export const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getUseremail,
  getIsAuthError,
};
