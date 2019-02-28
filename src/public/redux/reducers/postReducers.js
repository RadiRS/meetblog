import { GET_POSTS, GET_POST } from '../actions/types';

const initialState = {
  data: [],
  result: {},
  isLoading: true
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        data: payload,
        isLoading: false
      };

    case GET_POST:
      return {
        ...state,
        result: payload,
        isLoading: false
      };

    default:
      return state;
  }
};
