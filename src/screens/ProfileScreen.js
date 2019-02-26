import React, { Component } from 'react';
import { DrawerActions } from 'react-navigation';
import { Text, View, Container, Content, Thumbnail } from 'native-base';

// Components
import ButtonIconComponent from '../components/common/buttons/IconButton';
import PopUpMenuComponent from '../components/profile/PopUpMenu';

class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTransparent: true,
      // headerStyle: {
      //   backgroundColor: '#079D75'
      // },
      headerTintColor: '#079D75',
      headerLeft: (
        <ButtonIconComponent
          onPress={() => navigation.navigate('Home')}
          transparent={true}
          iconName="arrow-left"
        />
      ),
      headerRight: (
        <ButtonIconComponent
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          transparent={true}
          iconName="ellipsis-v"
        />
      )
    };
  };

  render() {
    return (
      <Container style={styles.container}>
        <Content contentContainerStyle={styles.contentContainer}>
          <View style={styles.viewContainer}>
            <Thumbnail
              style={styles.profileImg}
              source={{
                uri: 'http://lorempixel.com/640/480/people'
              }}
            />
            <Text style={styles.profileNameText}>Radi Rusadi</Text>
          </View>
          <View style={styles.follContainer}>
            <Text style={styles.follText}>1 Following</Text>
            <Text style={styles.follText}>1 Follwers</Text>
          </View>
          <PopUpMenuComponent />
        </Content>
      </Container>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#EBF3EB'
  },
  contentContainer: {
    backgroundColor: '#8E9A95'
  },
  viewContainer: {
    flex: 1,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#079D75'
  },
  profileImg: {
    width: 100,
    height: 100,
    borderRadius: 100
  },
  profileNameText: {
    fontFamily: 'Marat Sans Reguler',
    fontSize: 40,
    color: '#fff'
  },
  follContainer: {
    flex: 1,
    backgroundColor: '#8E9A95',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  follText: {
    fontFamily: 'Marat Sans Reguler',
    fontSize: 20,
    color: '#fff'
  }
};

export default ProfileScreen;
