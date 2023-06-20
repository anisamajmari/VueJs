export default {
  // Log in mutations
  setAuth(state, payload) {
    state.isLoggedIn = payload.isAuth;
  },
};
