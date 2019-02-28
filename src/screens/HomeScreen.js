import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StatusBar, FlatList } from 'react-native';
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

  keyExtractor = item => item.toString();

  renderItem = ({ item }) => <Post onPress={() => alert(item)} />;

  handlePress = () => {
    this.props.navigation.navigate('DetailPost');
  };

  render() {
    return (
      <Container style={styles.container}>
        {/* <Post onPress={() => this.handlePress()} /> */}
        {/* <FlatList
          style={styles.flatListFooter}
          data={this.state.data1}
          keyExtractor={item => this.keyExtractor(item)}
          renderItem={item => this.renderItem(item)}
        /> */}
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

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect()(HomeScreen);
