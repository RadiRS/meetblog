import React, { Component } from 'react';
import { Card, Text, View, Thumbnail } from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native';

class Post extends Component {
  render() {
    const { onPress, data } = this.props;

    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.titleHeaderPost}>{data.slug}</Text>
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
        <Text style={styles.author}>{data.users.username}</Text>
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

export default Post;
