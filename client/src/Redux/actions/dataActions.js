import {
  SET_ERRORS,
  CLEAR_ERRORS
} from '../types';
import axios from 'axios';

export const getUserData = (userHandle) => (dispatch) => {
  axios
    .get(`https://europe-west1-react-game-website.cloudfunctions.net/api/user/${userHandle}`)
    .then((res) => {
      dispatch({
        type: SET_SCREAMS,
        payload: res.data
      });
    })
    .catch(() => {
      dispatch({
        type: SET_SCREAMS,
        payload: null
      });
    });
};

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
