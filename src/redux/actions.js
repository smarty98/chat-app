import { ADD_SEARCH_HISTORY, CLEAR_SEARCH_HISTORY, ADD_LESSON } from './actionTypes';

export const addSearchHistory = (term) => ({
  type: ADD_SEARCH_HISTORY,
  payload: term
});

export const clearSearchHistory = () => ({
  type: CLEAR_SEARCH_HISTORY
});

export const addLesson = (lesson) => ({
  type: ADD_LESSON,
  payload: lesson
});
