import axios from 'axios';
import {
  GET_CARDS_LIST,
  GET_CARDS_LIST_SUCCESS,
  GET_CARDS_LIST_FAIL,
  SET_SEARCH_TAG
} from '../constants/actionTypes';

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

    /*const API_URL = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${accessToken}`;*/
    const API_URL = `https://api.instagram.com/v1/tags/${tag}/media/recent?access_token=${accessToken}`;

    axios.get(API_URL)
      .then(function (response) {
        dispatch(getCardsListRequestSucccess(response.data.data));
      })
      .catch(function (error) {
        dispatch(getCardsListRequestFail(error));
      });
  };
}

export function setSearchTag (tag) {
  return {
    type: SET_SEARCH_TAG,
    tag
  };
}
