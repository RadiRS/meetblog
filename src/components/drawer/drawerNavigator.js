import React from 'react';
import { FlatList } from 'react-native';
import {
  Container,
  Content,
  Header,
  Left,
  List,
  ListItem,
  Text,
  Thumbnail,
  View
} from 'native-base';

const DrawerNavigator = () => {
  const data1 = ['Home', 'Audio', 'Bookmarks', 'Interests'];
  const data2 = ['Become a member'];
  const data3 = ['New post', 'Stats', 'Posts'];
  const data4 = ['Settings', 'Help'];

  keyExtractor = item => item.toString();

  renderItem = ({ item }) => (
    <ListItem noBorder>
      <Text style={styles.textList}>{item}</Text>
    </ListItem>
  );

  return (
    <Container style={styles.container}>
      <Header style={styles.headers}>
        <Thumbnail
          style={styles.avatarThumbnail}
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg'
          }}
        />
        <Text style={styles.textName}>Radi Rusadi</Text>
        <Text style={styles.textSub}>See profile</Text>
      </Header>
      <Content contentContainerStyle={styles.contentContainer}>
        <FlatList
          style={styles.flatList}
          data={data1}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
        <FlatList
          style={styles.flatList}
          data={data2}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
        <FlatList
          style={styles.flatList}
          data={data3}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />

        <View style={styles.listFooter}>
          <Thumbnail
            square
            style={styles.logoThumbnail}
            source={{ uri: 'http://lorempixel.com/640/480' }}
          />
          <FlatList
            horizontal
            style={styles.flatListFooter}
            data={data4}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
          />
        </View>
      </Content>
    </Container>
  );
};

const styles = {
  container: {
    // paddingLeft: 20
  },
  contentContainer: {
    paddingLeft: 10
  },
  headers: {
    backgroundColor: '#079D75',
    height: 200,
    flexDirection: 'column',
    paddingLeft: 30
  },
  avatarThumbnail: {
    height: 80,
    width: 80,
    borderRadius: 100
  },
  textName: {
    fontSize: 30,
    marginVertical: 10,
    fontFamily: 'Marat Sans Light',
    color: '#fff'
  },
  textSub: {
    fontSize: 20,
    fontFamily: 'Marat Sans Light'
  },
  flatList: {
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0'
  },
  flatListFooter: {
    // borderTopWidth: 1,
    // borderTopColor: '#f0f0f0'
  },
  listFooter: {
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    // flex: 1,
    flexDirection: 'row',
    paddingTop: 20
  },
  textList: {
    fontFamily: 'Marat Sans Light',
    fontSize: 20
  },
  logoThumbnail: {
    alignSelf: 'center',
    marginLeft: 20
  }
};

export default DrawerNavigator;
