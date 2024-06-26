import { useDispatch, useSelector } from 'react-redux';
import { login, logout, register, selectUser } from '../redux/authSlice';

const useAuth = () => {

  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  console.log(authState, "authState2");

  const loginUser = (credentials) => {
    dispatch(login(credentials));
    console.log(authState, "authState");
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
