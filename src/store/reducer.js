
import {
  SET_MATCH,
  SET_RANK,
  SET_TOTAL_VOTES
} from './actions';

const initialState = {
  // theme: false,
  match: [],
  rank: [],
  totalVotes: 0
};

const store = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MATCH: {
      return {
        ...state,
        match: [...action.payload],
      };
    }

    case SET_RANK: {
      return {
        ...state,
        rank: [...action.payload],
      };
    }

    case SET_TOTAL_VOTES: {
      return {
        ...state,
        totalVotes: action.payload,
      };
    }

    default:
      return state;
  }
};

export default store;

