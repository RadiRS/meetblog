import axios from 'axios';
import NavigationService from '../../../services/navigation';
import { REST_API } from '../../../services/api';
import { _storeData, _retrieveData } from '../../../lib/helpers/asynStorage';
import { GET_ERRORS, GET_POSTS, GET_POST } from './types';

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
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const getPost = data => async dispatch => {
  dispatch({
    type: GET_POST,
    payload: data
  });
  NavigationService.navigate('DetailPost');
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
