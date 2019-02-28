import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StatusBar, FlatList } from 'react-native';
import { Button, Icon, View, Text, Container } from 'native-base';
import { DrawerActions } from 'react-navigation';
// Actions
import { getPosts, getPost } from '../public/redux/actions';
// Components
import ButtonIconComponent from '../components/common/buttons/IconButton';
import Post from '../components/post/Post';
import Spinner from '../components/common/spinner/SpinnerComponent';

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

  componentDidMount() {
    this.props.getPosts();
  }

  handleRefresh = () => {
    this.props.getPosts();
  };

  keyExtractor = item => item.toString();

  renderItem = ({ item }) => (
    <Post onPress={() => this.handlePressPost(item)} data={item} />
  );

  handlePressPost = item => {
    // this.props.navigation.navigate('DetailPost');
    this.props.getPost(item);
  };

  render() {
    const { data, isLoading } = this.props.post;

    return (
      <Container style={styles.container}>
        {isLoading ? (
          <Spinner />
        ) : (
          <FlatList
            data={data}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
            refreshing={isLoading}
            onRefresh={() => this.handleRefresh()}
          />
        )}
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

const mapStateToProps = ({ post }) => ({
  post
});

const mapDispatchToProps = {
  getPosts,
  getPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
