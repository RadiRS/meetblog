import React, { Component } from 'react';
import { Card, Text, View, Thumbnail } from 'native-base';
import { StyleSheet } from 'react-native';

class Post extends Component {
  render() {
    return (
      <View noShadow style={styles.container}>
        <Text style={styles.titleHeaderPost}>
          Based On Your Reading History
        </Text>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            41 Things You Should Say "No" to For a Happier 2019
          </Text>
          <Thumbnail
            square
            large
            style={styles.titleImage}
            source={{ uri: 'http://lorempixel.com/640/480' }}
          />
        </View>
        <Text style={styles.author}>Danny Forest</Text>
        <View style={styles.containerFooterPost}>
          <Text style={styles.textFooterPost}>12/21/2018</Text>
          <Text style={styles.textFooterPost}>6 min read</Text>
        </View>
      </View>
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
