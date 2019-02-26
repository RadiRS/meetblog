import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import {
  View,
  Text,
  Button,
  Icon,
  Label,
  Input,
  Form,
  Item
} from 'native-base';
StatusBar.setHidden(false);
class SignupScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>Sign up with email</Text>
        <Text style={styles.textSubTitle}>
          Sign up with email and we'll send a magic link to your inbox so you
          can login
        </Text>
        <Form style={styles.form}>
          <Label style={styles.formLabel}>Your full name</Label>
          <Item style={styles.formItem}>
            <Input style={styles.formInput} />
          </Item>
          <Label style={styles.formLabel}>Your email</Label>
          <Item style={styles.formItem}>
            <Input style={styles.formInput} textContentType="emailAddress" />
          </Item>
          <Label style={styles.formLabel}>Your password</Label>
          <Item style={styles.formItem}>
            <Input style={styles.formInput} secureTextEntry={true} />
          </Item>
          <Button
            onPress={() => this.props.navigation.navigate('Home')}
            style={styles.button}
          >
            <Text uppercase={false} style={styles.textButton}>
              Create account
            </Text>
          </Button>
        </Form>
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
    fontSize: 30,
    marginBottom: 30,
    textAlign: 'center'
  },
  textSubTitle: {
    fontFamily: 'Marat Sans Light',
    fontSize: 27,
    marginBottom: 20,
    width: '70%',
    textAlign: 'center'
  },
  form: {
    width: '90%',
    alignItems: 'center',
    marginTop: 30
  },
  formLabel: {
    fontFamily: 'Marat Sans Light',
    fontSize: 22
    // marginVertical: 10
  },
  formItem: {
    marginBottom: 10
  },
  formInput: {
    // marginBottom: 10
  },
  textButton: {
    fontFamily: 'Marat Sans Demibold',
    textAlign: 'center',
    color: '#fff',
    fontSize: 25,
    paddingLeft: 0
  },
  textAlready: {
    fontSize: 18,
    color: '#8E9A95',
    marginTop: 40
  },
  textSignin: {
    fontSize: 18,
    color: '#079D75'
  },
  textFooter: {
    fontFamily: 'Marat Sans Light',
    fontSize: 18,
    color: '#8E9A95',
    textAlign: 'center',
    position: 'absolute',
    bottom: 20
  },
  button: {
    backgroundColor: '#079D75',
    width: 250,
    height: 60,
    marginTop: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 6
  }
};

export default SignupScreen;