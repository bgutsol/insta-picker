import axios from 'axios';
import {
  GET_CARDS_LIST,
  GET_CARDS_LIST_SUCCESS,
  GET_CARDS_LIST_FAIL
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

export function fetchCardsList (accessToken, tagName) {
  return (dispatch, getState) => {
    dispatch(getCardsListRequest());

    const API_URL = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${accessToken}`;
    /*const API_URL = `https://api.instagram.com/v1/tags/${tagName}/media/recent?access_token=${accessToken}`;*/

    console.log('fetching');

    axios.get(API_URL)
      .then(function (response) {
        dispatch(getCardsListRequestSucccess(response.data.data));
      })
      .catch(function (error) {
        dispatch(getCardsListRequestFail(error));
      });
  };
}
