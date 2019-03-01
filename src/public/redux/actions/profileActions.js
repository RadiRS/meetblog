import axios from 'axios';
import NavigationService from '../../../services/navigation';
import { REST_API } from '../../../services/api';
import {
  _storeData,
  _retrieveData,
  _removeData
} from '../../../lib/helpers/asynStorage';
import {
  REGISTER_USER,
  GET_ERRORS,
  LOGIN_USER,
  AUTHENTICATED_USER,
  ADD_PROFILE
} from './types';

export const addProfile = data => async dispatch => {
  const userToken = await _retrieveData('token');
  axios
    .post(`${REST_API}/user/profile`, data, {
      headers: { Authorization: `Bearer ${userToken}` }
    })
    .then(res => {
      NavigationService.navigate('Profile');
      dispatch({
        type: ADD_PROFILE,
        payload: res.data[0]
      });
    })
    .catch(err => {
      NavigationService.navigate('UpdateProfile');
    });
};

export const getUserProfile = id => async dispatch => {
  const userToken = await _retrieveData('token');
  axios
    .get(`${REST_API}/user/profile/${id}`, {
      headers: { Authorization: `Bearer ${userToken}` }
    })
    .then(res => {
      NavigationService.navigate('UserProfile', { data: res.data });
      // dispatch({
      //   type: ADD_PROFILE,
      //   payload: res.data[0]
      // });
    })
    .catch(err => {
      alert(JSON.stringify(err));
      // NavigationService.navigate('UpdateProfile');
    });
};
