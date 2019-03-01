import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, Thumbnail, Text, View, Icon } from 'native-base';
import { getUserProfile } from '../public/redux/actions/profileActions';

class DetailPostScreen extends Component {
  render() {
    const { title, img_Content, slug, content, created_at } = this.props.post;
    const { username, id } = this.props.post.user;
    const { getUserProfile, user } = this.props;

    return (
      <Container>
        <Content>
          <View style={styles.headerContent}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{slug}</Text>
            <View style={styles.infoContainer}>
              {img_Content ? (
                <Thumbnail
                  source={{
                    uri: img_Content
                  }}
                />
              ) : null}

              <Text
                onPress={user.id === id ? null : () => getUserProfile(id)}
                style={styles.authorText}
              >
                {username}
              </Text>
              <Text style={styles.datePost}>{created_at} - 11 min read</Text>
            </View>
          </View>
          <Thumbnail
            square
            style={styles.imgPost}
            source={{ uri: 'http://lorempixel.com/640/480' }}
          />
          <View style={styles.containerBody}>
            <Text style={styles.bodyText}>{content}</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = {
  headerContent: {
    padding: 20
  },
  title: {
    fontFamily: 'Marat Sans DemiBold',
    fontSize: 50
  },
  subTitle: {
    fontFamily: 'Marat Sans Reguler',
    fontSize: 30,
    color: '#8E9A95'
  },
  infoContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
    // justifyContent: 'space-between'
  },
  authorText: {
    marginLeft: 5
  },
  datePost: {
    marginLeft: 20
  },
  imgPost: {
    flex: 1,
    height: 400,
    width: null
  },
  containerBody: {
    padding: 20
  },
  bodyText: {
    fontFamily: 'Marat Sans Reguler',
    fontSize: 25
  }
};

const mapStateToProps = ({ post, user }) => ({
  post: post.result,
  user: user.data
});

const mapDispatchToProps = {
  getUserProfile
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailPostScreen);
