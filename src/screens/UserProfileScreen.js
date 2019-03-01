import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { Text, View, Container, Content, Thumbnail } from 'native-base';
// Actions
import { followingUser } from '../public/redux/actions';
// Components
import ButtonIconComponent from '../components/common/buttons/IconButton';
import ButtonComponent from '../components/common/buttons/Button';
import Post from '../components/post/Post';
import PopUpMenuComponent from '../components/profile/PopUpMenu';

class UserProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    // const handleLogout = navigation.getParam('handleLogout');
    return {
      headerTransparent: true,
      headerTintColor: '#079D75',
      headerLeft: (
        <ButtonIconComponent
          onPress={() => navigation.navigate('Home')}
          transparent={true}
          iconName="arrow-left"
        />
      )
      // headerRight: <PopUpMenuComponent handleLogout={handleLogout} />
    };
  };

  // componentDidMount() {
  //   this.props.navigation.setParams({
  //     handleLogout: this.props.logoutUser
  //   });
  // }

  // keyExtractor = item => item.toString();

  // renderItem = ({ item }) => (
  //   <Post
  //     data={item}
  //     onPress={() => this.handlePressPost(item)}
  //     handleDelete={() => this.handleDeletePost(item)}
  //     handleUpdate={() => this.handleUpdatePost(item)}
  //   />
  // );

  render() {
    let { data } = this.props.navigation.state.params;
    const { user, followingUser } = this.props;

    return (
      <Container style={styles.container}>
        <Content contentContainerStyle={styles.contentContainer}>
          <View style={styles.viewContainer}>
            <Thumbnail
              style={styles.profileImg}
              source={{
                uri: data.profile.avatar
              }}
            />
            <Text style={styles.profileNameText}>{data.profile.full_name}</Text>
          </View>
          <View style={styles.follContainer}>
            <Text style={styles.follText}>
              {data.following.length} Following
            </Text>
            <Text style={styles.follText}>{data.follower.length} Follower</Text>
          </View>
          <ButtonComponent
            onPress={() => followingUser(user.id, data.profile.user_id)}
            block
            label={
              data.follower.find(u => u.user_id === user.id)
                ? 'Unfollow'
                : 'Follow'
            }
          />
          {/* let productInStateOrders = state.orders.find(
        m => m.id === action.payload.data.id
      ); */}
          {/* <View>
            <FlatList
              data={data.posts}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              refreshing={isLoading}
              onRefresh={() => this.handleRefresh()}
            />
          </View> */}
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

const mapStateToProps = ({ user }) => ({
  user: user.data
});

export default connect(
  mapStateToProps,
  { followingUser }
)(UserProfileScreen);
