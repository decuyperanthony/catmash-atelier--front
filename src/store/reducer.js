
import {
  SET_MATCH,
  SET_CAT_RANKING,
  SET_MORE_CAT,
  SET_TOTAL_VOTES,
  SET_TOTAL_CATS
} from './actions';

const initialState = {
  // theme: false,
  match: [],
  rank: [],
  totalVotes: 0,
  totalCats: 0,
  offset: 10
};

const store = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MATCH: {
      return {
        ...state,
        match: [...action.payload],
      };
    }

    case SET_CAT_RANKING: {
      return {
        ...state,
        rank: [...action.payload],
      };
    }

    case SET_MORE_CAT: {
      return {
        ...state,
        offset: state.offset + 10,
        rank: [...state.rank, ...action.payload],
      };
    }

    case SET_TOTAL_VOTES: {
      return {
        ...state,
        totalVotes: action.payload,
      };
    }

    case SET_TOTAL_CATS: {
      return {
        ...state,
        totalCats: action.payload,
      };
    }

    default:
      return state;
  }
};

export default store;

