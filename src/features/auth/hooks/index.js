import { useDispatch, useSelector } from 'react-redux';
import { login, logout, register } from '../redux/authSlice';

const useAuth = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const loginUser = (credentials) => {
    dispatch(login(credentials));
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  const registerUser = (data) => {
    dispatch(register(data));
  };

  return {
    ...authState,
    loginUser,
    logoutUser,
    registerUser,
  };
};

export default useAuth;
