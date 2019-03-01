import axios from 'axios';
import NavigationService from '../../../services/navigation';
import { REST_API } from '../../../services/api';
import { getUserProfile } from './profileActions';
import {
  _storeData,
  _retrieveData,
  _removeData
} from '../../../lib/helpers/asynStorage';

export const followingUser = (user_id, following_id) => async dispatch => {
  const userToken = await _retrieveData('token');

  const data = {
    user_id,
    following_id
  };

  axios
    .post(`${REST_API}/following`, data, {
      headers: { Authorization: `Bearer ${userToken}` }
    })
    .then(res => {
      // NavigationService.navigate('Home');
      // dispatch({
      //   type: ADD_PROFILE,
      //   payload: res.data[0]
      // });
      dispatch(getUserProfile(following_id));
    })
    .catch(err => {
      // NavigationService.navigate('UpdateProfile');
    });
};
