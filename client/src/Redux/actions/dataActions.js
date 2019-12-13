import {
  SET_ERRORS,
  CLEAR_ERRORS
} from '../types';
import axios from 'axios';

export const getAllGames = () => (dispatch) => {
  axios.get('https://europe-west1-react-game-website.cloudfunctions.net/api/getAllGames')
    .then((result) => {
      dispatch({
        payload: result.data
      });
    })
    .catch((error) => {
      dispatch({
        payload: null
      });
    });
};

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

export const getGame = (gameId) => (dispatch) => {
  axios
    .get(`https://europe-west1-react-game-website.cloudfunctions.net/api/getGame/${gameId}`)
    .then((result) => {
      dispatch({
        payload: result.data
      });
    })
    .catch((error) => {
      dispatch({
        payload: null
      });
    });
};

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
