import axios from 'axios';
import NavigationService from '../../../services/navigation';
import { REST_API } from '../../../services/api';
import { _storeData, _retrieveData } from '../../../lib/helpers/asynStorage';
import {
  GET_ERRORS,
  GET_POSTS,
  GET_POST,
  ADD_POST,
  GET_POSTS_USER
} from './types';

export const addPost = data => async dispatch => {
  const userToken = await _retrieveData('token');
  axios
    .post(`${REST_API}/post`, data, {
      headers: { Authorization: `Bearer ${userToken}` }
    })
    .then(res => {
      dispatch(getPosts());
      NavigationService.navigate('Home');
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const getPosts = () => async dispatch => {
  const userToken = await _retrieveData('token');
  axios
    .get(`${REST_API}/posts`, {
      headers: { Authorization: `Bearer ${userToken}` }
    })
    .then(res => {
      dispatch({
        type: GET_POSTS,
        payload: res.data
      });
      NavigationService.navigate('Home');
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const getPostsUser = id => async dispatch => {
  const userToken = await _retrieveData('token');
  axios
    .get(`${REST_API}/posts_user/${id}`, {
      headers: { Authorization: `Bearer ${userToken}` }
    })
    .then(res => {
      dispatch({
        type: GET_POSTS_USER,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const getPost = data => dispatch => {
  dispatch({
    type: GET_POST,
    payload: data
  });
  NavigationService.navigate('DetailPost');
};

export const deletePost = data => async dispatch => {
  const userToken = await _retrieveData('token');
  axios
    .delete(`${REST_API}/post/${data.id}`, {
      headers: { Authorization: `Bearer ${userToken}` }
    })
    .then(res => {
      dispatch(getPosts());
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const updatePost = (data, id) => async dispatch => {
  const userToken = await _retrieveData('token');
  axios
    .patch(`${REST_API}/post/${id}`, data, {
      headers: { Authorization: `Bearer ${userToken}` }
    })
    .then(res => {
      dispatch(getPosts());
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// const userToken = await _retrieveData('token');
// axios
//   .get(`${REST_API}/post/${data.id}`, {
//     headers: { Authorization: `Bearer ${userToken}` }
//   })
//   .then(res => {
//     dispatch({
//       type: GET_POST,
//       payload: res.data[0]
//     });
//     NavigationService.navigate('DetailPost');
//   })
//   .catch(err => {
//     dispatch({
//       type: GET_ERRORS,
//       payload: err.response.data
//     });
//   });
