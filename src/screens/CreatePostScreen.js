import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  Textarea,
  Form,
  Input,
  Item,
  Icon,
  Label
} from 'native-base';
// Actions
import { addPost } from '../public/redux/actions';
// Components
import ButtonIconComponent from '../components/common/buttons/IconButton';
import ButtonComponent from '../components/common/buttons/Button';

class CreatePostScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const handlePublishButton = navigation.getParam('handlePublishButton');
    return {
      headerStyle: {
        backgroundColor: '#079D75'
      },
      headerTintColor: '#079D75',
      headerLeft: (
        <ButtonIconComponent
          onPress={() => navigation.navigate('Home')}
          transparent={true}
          iconName="times"
        />
      ),
      headerRight: (
        <View style={{ alignItems: 'center' }}>
          <ButtonComponent
            onPress={() => handlePublishButton()}
            transparent={true}
            label="Publish"
          />
        </View>
      )
    };
  };

  state = {
    user_id: '',
    title: '',
    slug: '',
    content: '',
    img_content: '',
    status: 0,
    type: 0
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      // alert(JSON.stringify(nextProps.error));
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({
      handlePublishButton: this.HandlePublishButton
    });
  }

  HandlePublishButton = () => {
    const data = {
      user_id: this.props.user.id,
      title: this.state.title,
      slug: this.state.slug,
      content: this.state.content,
      img_content: this.state.img_content || 'http://lorempixel.com/640/480',
      type: 1,
      status: 1
    };

    this.props.addPost(data);

    // alert(JSON.stringify(data));
  };

  render() {
    return (
      <Container style={styles.container}>
        <Content padder>
          <Form>
            <Item floatingLabel>
              <Label>
                <Text style={styles.textTitle}>Title</Text>
              </Label>
              <Input
                onChangeText={title => this.setState({ title })}
                style={styles.inputText}
              />
            </Item>
            <Item floatingLabel>
              <Label>
                <Text style={styles.textSlug}>Slug</Text>
              </Label>
              <Input
                onChangeText={slug => this.setState({ slug })}
                style={styles.inputText}
              />
            </Item>
            <Textarea
              onChangeText={content => this.setState({ content })}
              style={styles.textContent}
              rowSpan={100}
              placeholder="Content"
            />
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  content: {},
  textTitle: {
    fontSize: 20
  },
  inputText: {
    fontSize: 25
  },
  textSlug: {
    fontSize: 15
  },
  textContent: {
    flexBasis: '100%',
    fontSize: 25,
    marginHorizontal: 10
  }
};

const mapStateToProps = ({ user, error }) => ({
  user: user.data,
  error
});

const mapDispatchToProps = {
  addPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePostScreen);
