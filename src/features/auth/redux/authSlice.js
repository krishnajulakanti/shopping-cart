import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import api from '../../../api';
import { loginApi, registerApi } from '../../../api';

export const login = createAsyncThunk('auth/login', async (credentials) => {
  // const response = await api.login(credentials);
  const response = await loginApi(credentials);
  if (response.data.length === 0) {
    throw new Error('Invalid email or password');
  }
  return response.data[0];
});

export const register = createAsyncThunk('auth/register', async (data) => {
  // const response = await api.register(data);
  const response = await registerApi(data);
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        console.log(state.user, "state.user");
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;
export const selectUser = (state) => state.auth.user;
export default authSlice.reducer;
