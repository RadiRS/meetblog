import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import { Button, Icon } from 'native-base';
import { DrawerActions } from 'react-navigation';

StatusBar.setHidden(false);

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
      headerStyle: {
        backgroundColor: '#E40044'
      },
      headerTintColor: '#fff',
      headerLeft: (
        <View style={{ alignItems: 'center' }}>
          <Button
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            // transparent={true}
          >
            <Icon iconName="menu" />
            <Text>dkd</Text>
          </Button>
        </View>
      ),
      headerRight: (
        <View style={{ flexDirection: 'row' }}>
          <Button
            onShow={true}
            // onPress={() => navigation.navigate('Search')}
            transparent={true}
            iconName="search"
          />
          <Button
            onShow={true}
            onPress={() => alert('log-in')}
            transparent={true}
            iconName="log-out"
          />
          <Button
            onShow={true}
            // onPress={() => navigation.navigate('CartList')}
            transparent={true}
            iconName="cart"
            mg={5}
          />
        </View>
      )
    };
  };
  render() {
    return (
      <View>
        <Text> Ini Home Screen </Text>
      </View>
    );
  }
}

export default HomeScreen;
