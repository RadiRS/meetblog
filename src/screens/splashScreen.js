import React, { Component } from 'react';
import { _retrieveData } from '../lib/helpers/asynStorage';
import { StatusBar, ActivityIndicator, ImageBackground } from 'react-native';

StatusBar.setHidden(true);

const imgBackground = require('../assets/img/splashBackground.jpg');

class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      // const userToken = _retrieveData('userToken');
      const userToken = false;
      this.props.navigation.navigate(userToken ? 'Home' : 'AuthMethod');
    }, 2000);
  }

  render() {
    return (
      <ImageBackground
        resizeMode="cover"
        source={imgBackground}
        style={styles.container}
      >
        <ActivityIndicator size="large" />
      </ImageBackground>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default SplashScreen;
