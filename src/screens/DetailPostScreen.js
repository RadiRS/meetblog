import React, { Component } from 'react';
import { Container, Content, Thumbnail, Text, View, Icon } from 'native-base';

class DetailPostScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <View style={styles.headerContent}>
            <Text style={styles.title}>
              Surprising Advice From a Wealthy Man
            </Text>
            <Text style={styles.subTitle}>It just might change your life</Text>
            <View style={styles.infoContainer}>
              <Thumbnail
                source={{
                  uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/ramanathan_pdy/128.jpg'
                }}
              />
              <Text style={styles.authorText}>Zander Nethercutt</Text>
              <Text style={styles.datePost}>4 days ago - 11 min read</Text>
            </View>
          </View>
          <Thumbnail
            square
            style={styles.imgPost}
            source={{ uri: 'http://lorempixel.com/640/480' }}
          />
          <View style={styles.containerBody}>
            <Text style={styles.bodyText}>
              loremUt corrupti blanditiis officia. Soluta perferendis voluptas
              illo vel quo explicabo et. Non velit maiores numquam aut quia.
              Odit expedita vero architecto sunt commodi fuga quis dolorem quos.
              Tenetur optio iure at similique. Rerum libero eius rerum
              consequatur vitae non voluptatem quia repellendus. Sint ex
              dignissimos velit. Ipsa et molestiae ducimus voluptas. Quae quam
              eos et doloribus asperiores quas quae dolores. Voluptatem
              consequuntur distinctio aut ipsam ut dolorem. Laudantium porro
              voluptatem rem quo et velit a debitis rerum. Numquam consequatur
              voluptatibus asperiores voluptates eius sequi ut ab voluptatem.
              dignissimos velit. Ipsa et molestiae ducimus voluptas. Quae quam
              eos et doloribus asperiores quas quae dolores. Voluptatem
              consequuntur distinctio aut ipsam ut dolorem. Laudantium porro
              voluptatem rem quo et velit a debitis rerum. Numquam consequatur
              voluptatibus asperiores voluptates eius sequi ut ab voluptatem.
            </Text>
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

export default DetailPostScreen;
