import {
  SET_GAMES,
  SET_GAME,
} from '../types';

const initialState = {
  games: [],
  game: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_GAMES:
      return {
        ...state,
        games: action.payload
      };
      case SET_GAME:
        return {
          ...state,
          game: action.payload
        };
    default:
      return state;
  }
}
