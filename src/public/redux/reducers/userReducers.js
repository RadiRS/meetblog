import { REGISTER_USER, LOGIN_USER } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  data: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
      return {
        ...state,
        data: payload
      };

    case LOGIN_USER:
      return {
        ...state,
        data: payload,
        isAuthenticated: true
      };

    default:
      return state;
  }
};
