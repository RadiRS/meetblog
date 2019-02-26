import React, { Component } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { View, Text, Button, Icon } from 'native-base';

class AuthMethodSceen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>Meet Blog</Text>
        <Text style={styles.textSubTitle}>
          Ideas thet set your mind in motion
        </Text>
        <Button style={styles.button}>
          <Icon style={styles.iconButton} name="google" type="FontAwesome" />
          <Text uppercase={false} style={styles.textButton}>
            Sign up with Google
          </Text>
        </Button>
        <Button style={styles.button}>
          <Icon style={styles.iconButton} name="facebook" type="FontAwesome" />
          <Text uppercase={false} style={styles.textButton}>
            Sign up with Facebook
          </Text>
        </Button>
        <Button
          onPress={() => this.props.navigation.navigate('Signup')}
          style={styles.button}
        >
          <Icon style={styles.iconButton} name="envelope" type="FontAwesome" />
          <Text uppercase={false} style={styles.textButton}>
            Sign up with email
          </Text>
        </Button>
        <Text style={styles.textAlready}>
          Already have an acount ? {'\t'}
          <Text
            style={styles.textSignin}
            onPress={() => this.props.navigation.navigate('Signin')}
          >
            Sign in
          </Text>
        </Text>
        <Text style={styles.textFooter}>
          By creating an account, i accept Meet Blog's {'\n'}
          Terms of Services
        </Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBF3EB'
  },
  textTitle: {
    fontFamily: 'PlayfairDisplay-Bold',
    fontSize: 50,
    marginBottom: 30,
    textAlign: 'center'
  },
  textSubTitle: {
    fontFamily: 'Marat Sans Light',
    fontSize: 30,
    width: '60%',
    marginBottom: 20,
    textAlign: 'center'
  },
  textButton: {
    fontFamily: 'Marat Sans Light',
    flex: 1,
    fontSize: 20,
    color: '#181A18',
    paddingLeft: 0
  },
  textFooter: {
    fontFamily: 'Marat Sans Light',
    fontSize: 20,
    color: '#8E9A95',
    textAlign: 'center',
    position: 'absolute',
    bottom: 20
  },
  textAlready: {
    fontFamily: 'Marat Sans Light',
    fontSize: 20,
    color: '#8E9A95',
    marginTop: 50
  },
  textSignin: {
    fontFamily: 'Marat Sans Light',
    fontSize: 20,
    color: '#079D75'
  },
  iconButton: {
    flex: 0.1,
    fontSize: 20,
    color: '#181A18',
    marginLeft: 20,
    alignSelf: 'center'
  },

  button: {
    backgroundColor: '#fff',
    width: 320,
    height: 60,
    marginTop: 18,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    borderRadius: 6
  }
};

export default AuthMethodSceen;
