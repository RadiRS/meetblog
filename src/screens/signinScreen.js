import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { View, Text, Button, Form, Item, Label, Input } from 'native-base';

StatusBar.setHidden(false);

class SigninScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>Sign in</Text>
        <Text style={styles.textSubTitle}>
          Ideas thet set your mind in motion
        </Text>
        <Form style={styles.form}>
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
              Login
            </Text>
          </Button>
        </Form>
        <Text style={styles.textAlready}>
          Dont have account ? {'\t'}
          <Text
            style={styles.textSignin}
            onPress={() => this.props.navigation.navigate('Signup')}
          >
            Sign up
          </Text>
        </Text>
        <Text style={styles.textFooter}>
          By creating an account, i accept Meet Blog's {'\n'}
          <Text>Terms of Services</Text>
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
    fontFamily: 'sans-serif',
    fontSize: 50,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  textSubTitle: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center'
  },
  textButton: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    paddingLeft: 0
  },
  textFooter: {
    marginTop: 100,
    fontSize: 18,
    color: '#8E9A95',
    textAlign: 'center',
    position: 'absolute',
    bottom: 10
  },
  textAlready: {
    fontSize: 18,
    color: '#8E9A95',
    marginTop: 50
  },
  textSignin: {
    fontSize: 18,
    color: '#079D75'
  },
  button: {
    backgroundColor: '#079D75',
    width: 250,
    height: 60,
    marginTop: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 6
  },
  form: {
    height: 300,
    width: '90%',
    alignItems: 'center',
    marginTop: 30
  },
  formLabel: {
    fontSize: 20,
    marginVertical: 10
  },
  formItem: {
    marginBottom: 10
  },
  formInput: {
    // marginBottom: 10
  }
};

export default SigninScreen;
