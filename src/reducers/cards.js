import {
  GET_CARDS_LIST,
  GET_CARDS_LIST_SUCCESS,
  GET_CARDS_LIST_FAIL,
  SET_SEARCH_TAG
} from 'Constants/actionTypes';
import initialState from './initialState';

const list = function (state = initialState.cards, action) {
  switch (action.type) {
    case GET_CARDS_LIST:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        hasError: false
      };
    case GET_CARDS_LIST_SUCCESS:
      return {
        ...state,
        cards: action.data,
        isLoading: false,
        isLoaded: true
      };
    case GET_CARDS_LIST_FAIL:
      return {
        ...state,
        hasError: true,
        isLoading: false,
        isLoaded: true
      };
    case SET_SEARCH_TAG:
      return {
        ...state,
        searchTag: action.tag
      };
    default:
      return state;
  }
};

export default list;
