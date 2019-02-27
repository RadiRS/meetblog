import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from 'react-navigation-redux-helpers';

const middleware = [thunk];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
