import { ADD_SEARCH_HISTORY, CLEAR_SEARCH_HISTORY, ADD_LESSON } from './actionTypes';

const initialState = {
  searchHistory: [],
  lessons: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SEARCH_HISTORY:
      return {
        ...state,
        searchHistory: [...state.searchHistory, action.payload]
      };
    case CLEAR_SEARCH_HISTORY:
      return {
        ...state,
        searchHistory: []
      };
    case ADD_LESSON:
      return {
        ...state,
        lessons: [...state.lessons, action.payload]
      };
    default:
      return state;
  }
};

export default rootReducer;
