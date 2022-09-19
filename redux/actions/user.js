import Cookies from 'js-cookie';
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { appFirebase } from '../../services/firebase';
const auth = getAuth(appFirebase);

export const loginUser = (email, password, router) => {
  return async (dispatch) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      Cookies.set('user-token', response.user.stsTokenManager.accessToken, {
        expires: 7,
      });
      dispatch({
        type: 'AUTH_USER',
        payload: response.user,
      });
      router.push('/', { shallow: true });
    } catch (error) {
      dispatch({
        type: 'AUTH_ERROR',
        payload: error.message,
      });
    }
  };
};

export const persistUser = (router) => {
  return (dispatch) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type: 'AUTH_USER',
          payload: user,
        });
      } else {
        Cookies.remove('user-token');
        router.push('/login');
      }
    });
  };
};

export const logOut = (router) => {
  return async (dispatch) => {
    try {
      await signOut(auth);
      dispatch({
        type: 'USER_LOGOUT',
      });
      router.push('/login');
      Cookies.remove('user-token');
    } catch (error) {
      dispatch({
        type: 'AUTH_ERROR',
        payload: error.message,
      });
    }
  };
};
