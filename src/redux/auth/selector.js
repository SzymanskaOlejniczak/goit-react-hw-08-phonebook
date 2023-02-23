export const getIsLoggedIn = state => state.auth.data.isLoggedIn;
export const getUseremail = state => state.auth.data.user.email;
export const getUsername = state => state.auth.data.user.name;
export const getIsAuthError = state => state.auth.error;

export const authSelectors = {
    getIsLoggedIn,
    getUsername,
    getUseremail,
    getIsAuthError,
  };