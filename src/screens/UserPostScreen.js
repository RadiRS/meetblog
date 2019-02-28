import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StatusBar, FlatList } from 'react-native';
import { Button, Icon, View, Text, Container } from 'native-base';
import { DrawerActions } from 'react-navigation';
// Actions
import { getPostsUser, getPost } from '../public/redux/actions';
// Components
import ButtonIconComponent from '../components/common/buttons/IconButton';
import Post from '../components/post/Post';
import Spinner from '../components/common/spinner/SpinnerComponent';

StatusBar.setHidden(false);

class UserPostScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Posts',
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
    this.props.getPostsUser(this.props.user.id);
  }

  handleRefresh = () => {
    this.props.getPostsUser(this.props.user.id);
  };

  keyExtractor = item => item.toString();

  renderItem = ({ item }) => (
    <Post onPress={() => this.handlePressPost(item)} data={item} />
  );

  handlePressPost = item => {
    this.props.getPost(item);
  };

  render() {
    const { post } = this.props;

    return (
      <Container style={styles.container}>
        <FlatList
          data={post}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          // refreshing={isLoading}
          // onRefresh={() => this.handleRefresh()}
        />
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

const mapStateToProps = ({ user, post }) => ({
  user: user.data,
  post: post.data
});

const mapDispatchToProps = {
  getPostsUser,
  getPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPostScreen);
