import {
  SET_ERRORS,
  CLEAR_ERRORS,
  SET_GAMES,
  SET_GAME,
  SET_REVIEWS,
  SUBMIT_COMMENT,
  POST_SCREAM
} from "./types";
import axios from "axios";
import * as firebase from "firebase/app";
import "firebase/firestore";

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyCvLjPLMrWCj2S-_ePYo3mgIpBlWBHiC-U",
  authDomain: "react-game-website.firebaseapp.com",
  projectId: "react-game-website"
});

let db = firebase.firestore();

export async function getAllGames() {
  const url =
    "https://europe-west1-react-game-website.cloudfunctions.net/api/getAllGames";
  let allGames = null;
  const pullAll = fetch(url)
    .then(resp => resp.json())
    .then(function(data) {
      allGames = data;
    })
    .catch(function(error) {
      console.log(error);
    });
  await pullAll;
  return allGames;
}

export async function getReviews(gameTitle) {
  const fetch = await db
    .collection("reviews")
    .get()
    .then(function(handleData) {
      let ar = [];
      handleData.forEach(function(doc) {
        if(doc.data().gameTitle === gameTitle) {
           ar.push(doc.data());
        }
      });
      return ar;
    });
  return fetch;
}

export const getGame = gameId => dispatch => {
  axios
    .get(`games/${gameId}`)
    .then(result => {
      dispatch({
        type: SET_GAME,
        payload: result.data
      });
    })
    .catch(error => {
      dispatch({
        type: SET_GAME,
        payload: null
      });
    });
};

export const postReview = newScream => dispatch => {
  // dispatch({ type: LOADING_UI });
  axios
    .post("/scream", newScream)
    .then(res => {
      dispatch({
        type: POST_SCREAM,
        payload: res.data
      });
      dispatch(clearErrors());
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};

export const submitComment = (screamId, commentData) => dispatch => {
  axios
    .post(`/scream/${screamId}/comment`, commentData)
    .then(res => {
      dispatch({
        type: SUBMIT_COMMENT,
        payload: res.data
      });
      dispatch(clearErrors());
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};

export const clearErrors = () => dispatch => {
  dispatch({ type: CLEAR_ERRORS });
};
