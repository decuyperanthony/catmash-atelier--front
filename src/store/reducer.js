
import {
  SET_MATCH,
  SET_RANK
} from './actions';

const initialState = {
  // theme: false,
  match: [],
  rank: []
};

// export default (state = initialState, action = {}) => {
//   switch (action.type) {
//     case SET_MATCH: {
//       return {
//         ...state,
//         match: [...action.payload],
//       };
//     }
//     case SET_RANK: {
//       return {
//         ...state,
//         rank: [...action.payload],
//       };
//     }
//     // case TOGGLE_THEME: {
//     //   const toggleTheme = !state.theme;
//     //   return {
//     //     ...state,
//     //     theme: toggleTheme,
//     //   };
//     // }

//     default: {
//       return state;
//     }
//   }
// };

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

    default:
      return state;
  }
};

export default store;

