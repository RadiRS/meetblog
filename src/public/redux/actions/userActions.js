import axios from 'axios';
import NavigationService from '../../../services/navigation';
import { REST_API } from '../../../services/api';
import { REGISTER_USER, GET_ERRORS, LOGIN_USER } from './types';

export const registerUser = data => dispatch => {
  axios
    .post(`${REST_API}/user/register`, data)
    .then(res => {
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
