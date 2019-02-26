import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Button, Icon, View, Text, Container } from 'native-base';
import { DrawerActions } from 'react-navigation';

// Components
import ButtonIconComponent from '../components/common/buttons/IconButton';
import Post from '../components/post/Post';

StatusBar.setHidden(false);

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
      headerStyle: {
        backgroundColor: '#079D75'
      },
      headerTintColor: '#fff',
      headerLeft: (
        <ButtonIconComponent
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          transparent={true}
          iconName="bars"
        />
      ),
      headerRight: (
        <>
          <ButtonIconComponent
            onPress={() => alert('Tes')}
            transparent={true}
            iconName="bell"
          />
          <ButtonIconComponent
            onPress={() => alert('Tes')}
            transparent={true}
            iconName="search"
          />
        </>
      )
    };
  };

  handlePress = () => {
    this.props.navigation.navigate('DetailPost');
  };

  render() {
    return (
      <Container style={styles.container}>
        <Post onPress={() => this.handlePress()} />
        <Post onPress={() => this.handlePress()} />
        <Post onPress={() => this.handlePress()} />
        <Post onPress={() => this.handlePress()} />
      </Container>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#EBF3EB',
    padding: 0
  }
};

export default HomeScreen;