import axios from 'axios';
import NavigationService from '../../../services/navigation';
import { REST_API } from '../../../services/api';
import { _storeData, _retrieveData } from '../../../lib/helpers/asynStorage';
import {
  REGISTER_USER,
  GET_ERRORS,
  LOGIN_USER,
  AUTHENTICATED_USER
} from './types';

export const authenticatedUser = () => async dispatch => {
  const userToken = await _retrieveData('token');
  axios
    .get(`${REST_API}/user/self`, {
      headers: { Authorization: `Bearer ${userToken}` }
    })
    .then(res => {
      NavigationService.navigate('Home');
      dispatch({
        type: AUTHENTICATED_USER,
        payload: res.data[0]
      });
    })
    .catch(err => {
      NavigationService.navigate('AuthMethod');
    });
};

export const registerUser = data => dispatch => {
  axios
    .post(`${REST_API}/user/register`, data)
    .then(res => {
      _storeData('token', res.data.token);
      NavigationService.navigate('Signin');
      dispatch({
        type: REGISTER_USER,
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

export const loginUser = data => dispatch => {
  axios
    .post(`${REST_API}/user/login`, data)
    .then(res => {
      _storeData('token', res.data.token);
      // alert(res.data.token);
      NavigationService.navigate('Home');
      dispatch({
        type: LOGIN_USER,
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
