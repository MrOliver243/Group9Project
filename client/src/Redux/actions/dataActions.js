import { SET_ERRORS, CLEAR_ERRORS, SET_GAMES, SET_GAME } from '../types';
import axios from 'axios';

export const getUserData = (userHandle) => (dispatch) => {
  axios
    .get(`https://europe-west1-react-game-website.cloudfunctions.net/api/user/${userHandle}`)
    .then((res) => {
      dispatch({
        payload: res.data
      });
    })
    .catch(() => {
      dispatch({
        payload: null
      });
    });
};

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

// this function gets all games from the database

export const getAllGames = () => (dispatch) => {
  axios.get('https://europe-west1-react-game-website.cloudfunctions.net/api/getAllGames')
    .then((result) => {
      dispatch({
        type: SET_GAMES,
        payload: result.data
      });
    })
    .catch((error) => {
      dispatch({
        type: SET_GAMES,
        payload: null
      });
    });
};

// not sure if this function is needed

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

// this function gets one game from the database

export const getGame = (gameId) => (dispatch) => {
  axios
    .get(`https://europe-west1-react-game-website.cloudfunctions.net/api/getGame/${gameId}`)
    .then((result) => {
      dispatch({
        type: SET_GAME,
        payload: result.data
      });
    })
    .catch((error) => {
      dispatch({
        type: SET_GAME,
        payload: null
      });
    });
};

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
