export const selectUser = (state) => state.auth.user;

export const selectAuthLoading = (state) => state.auth.loading;

export const selectAuthError = (state) => state.auth.error;

export const selectIsAuthenticated = (state) => !!state.auth.user?.isLoggedIn;

