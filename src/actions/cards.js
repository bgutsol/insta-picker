import axios from 'axios';
import {
  GET_CARDS_LIST,
  GET_CARDS_LIST_SUCCESS,
  GET_CARDS_LIST_FAIL,
  SET_SEARCH_TAG
} from 'Constants/actionTypes';
import { getInstagramMediaByTag } from 'Constants/api';
import { preprocessCardsFromData } from '../utils/cards';

export function getCardsListRequest () {
  return {
    type: GET_CARDS_LIST
  };
}

export function getCardsListRequestSucccess (data) {
  return {
    type: GET_CARDS_LIST_SUCCESS,
    data
  };
}

export function getCardsListRequestFail (error) {
  return {
    type: GET_CARDS_LIST_FAIL,
    error
  };
}

export function fetchCardsList (accessToken, tag) {
  return (dispatch, getState) => {
    dispatch(getCardsListRequest());

    axios.get(getInstagramMediaByTag(accessToken, tag))
      .then(response => {
        const cards = preprocessCardsFromData(response.data);

        dispatch(getCardsListRequestSucccess(cards))
      })
      .catch(error => dispatch(getCardsListRequestFail(error)));
  };
}

export function setSearchTag (tag) {
  return {
    type: SET_SEARCH_TAG,
    tag
  };
}
