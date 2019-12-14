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


// this function gets all games from the database
export const getAllGames = () => (dispatch) => {
  axios.get('https://europe-west1-react-game-website.cloudfunctions.net/api/getAllGames').then((result) => {
      dispatch({
        type: SET_GAMES,
        payload: result.data
      });
    })
    .catch((error) => {
      dispatch({
        type: SET_GAMES,
        payload: []
      });
    });
};

// this function gets one game from the database

export const getGame = (gameId) => (dispatch) => {
  axios.get(`https://europe-west1-react-game-website.cloudfunctions.net/api/getGame/${gameId}`).then((result) => {
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


export const getAllGamesPerGenre = (genre) => (dispatch) => {
  axios.get(`https://europe-west1-react-game-website.cloudfunctions.net/api/getAllGamesPerGenre/${genre}`).then((result) => {
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
