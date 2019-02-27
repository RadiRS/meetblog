import React, { Component } from 'react';
import NavigationService from './src/services/navigation';
import AppContainerNavigator from './src/navigator/rootNavigator';
import { Provider } from 'react-redux';
import store from './src/public/redux/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainerNavigator
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}
