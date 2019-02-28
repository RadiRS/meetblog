import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Text, View, Thumbnail } from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native';
import IconButton from '../common/buttons/IconButton';

class Post extends Component {
  render() {
    const { onPress, data, user, handleDelete, handleUpdate } = this.props;

    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={styles.containerSlug}>
          <Text style={styles.titleHeaderPost}>{data.slug}</Text>
          {user.data.id === data.user.id ? (
            <View style={styles.containerButtonGroup}>
              <IconButton onPress={handleDelete} small iconName="trash" />
              <IconButton onPress={handleUpdate} small iconName="edit" />
            </View>
          ) : null}
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{data.title}</Text>
          {data.img_content ? (
            <Thumbnail
              square
              large
              style={styles.titleImage}
              source={{ uri: data.img_content }}
            />
          ) : null}
        </View>
        <Text style={styles.author}>{data.user.username}</Text>
        <View style={styles.containerFooterPost}>
          <Text style={styles.textFooterPost}>{data.created_at}</Text>
          <Text style={styles.textFooterPost}>6 min read</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#fff',
    padding: 20,
    height: 250,
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderBottomColor: '#8E9A95'
  },
  containerSlug: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  containerButtonGroup: {
    flexDirection: 'row'
  },
  titleHeaderPost: {
    color: '#8E9A90'
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    flex: 0.7,
    fontSize: 27,
    fontFamily: 'Marat Sans DemiBold'
  },
  titleImage: {
    flex: 0.3
  },
  containerFooterPost: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textFooterPost: {
    color: '#8E9A95'
  }
});

const mapStateToProps = ({ user }) => ({
  user
});

export default connect(
  mapStateToProps,
  null
)(Post);
