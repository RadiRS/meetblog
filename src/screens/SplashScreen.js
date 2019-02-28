import React, { Component } from 'react';
import { connect } from 'react-redux';
import { _retrieveData } from '../lib/helpers/asynStorage';
import { StatusBar, ActivityIndicator, ImageBackground } from 'react-native';
import { authenticatedUser } from '../public/redux/actions/';

StatusBar.setHidden(true);

const imgBackground = require('../assets/img/splashBackground.jpg');

class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.authenticatedUser();
    }, 2000);
  }

  render() {
    return (
      <ImageBackground
        resizeMode="cover"
        source={imgBackground}
        style={styles.container}
      >
        <ActivityIndicator style={styles.spinner} size="large" />
      </ImageBackground>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  spinner: {
    color: '#fff'
  }
};

export default connect(
  null,
  { authenticatedUser }
)(SplashScreen);
