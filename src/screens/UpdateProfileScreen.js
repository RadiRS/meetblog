import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  Form,
  Item,
  Label,
  Text,
  Input,
  ListItem,
  Left,
  Right,
  Radio,
  View,
  DatePicker
} from 'native-base';
import ButtonIconComponent from '../components/common/buttons/IconButton';
import ButtonComponent from '../components/common/buttons/Button';

class UpdateProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const handleUpdateButton = navigation.getParam('handleUpdateButton');
    return {
      headerStyle: {
        backgroundColor: '#079D75'
      },
      headerTintColor: '#079D75',
      headerLeft: (
        <ButtonIconComponent
          onPress={() => navigation.navigate('Profile')}
          transparent={true}
          iconName="times"
        />
      ),
      headerRight: (
        <View style={{ alignItems: 'center' }}>
          <ButtonComponent
            onPress={() => handleUpdateButton()}
            transparent={true}
            label="Update"
          />
        </View>
      )
    };
  };

  state = {
    full_name: '',
    gender: '',
    date_of_birth: new Date(),
    avatar: ''
  };

  componentDidMount() {
    // let { item } = this.props.navigation.state.params;
    // this.setState({ ...item });
    this.props.navigation.setParams({
      handleUpdateButton: this.handleUpdateButton
    });
  }

  setDate = date => {
    this.setState({ date_of_birth: date });
  };

  handleUpdateButton = () => {
    const data = {
      user_id: this.props.user.id,
      full_name: this.state.full_name,
      gender: this.state.gender,
      content: this.state.content,
      date_of_birth: this.state.date_of_birth,
      avatar:
        this.state.avatar ||
        'https://s3.amazonaws.com/uifaces/faces/twitter/justinrhee/128.jpg'
    };

    // this.props.updatePost(data, this.state.id);

    alert(JSON.stringify(data));
  };

  render() {
    let { full_name, gender, date_of_birth } = this.state;

    return (
      <Container style={styles.container}>
        <Content padder>
          {/* <Form> */}
          <Item floatingLabel>
            <Label>
              <Text style={styles.labelText}>Full Name</Text>
            </Label>
            <Input
              style={styles.inputText}
              onChangeText={full_name => this.setState({ full_name })}
              value={full_name}
            />
          </Item>
          <ListItem
            onPress={() => this.setState({ gender: 'Male' })}
            selected={gender === 'Male' ? true : false}
          >
            <Left>
              <Text>Male</Text>
            </Left>
            <Right>
              <Radio
                color={'#f0ad4e'}
                selectedColor={'#5cb85c'}
                selected={gender === 'Male' ? true : false}
              />
            </Right>
          </ListItem>

          <ListItem
            onPress={() => this.setState({ gender: 'Female' })}
            selected={gender === 'Female' ? true : false}
          >
            <Left>
              <Text>Female</Text>
            </Left>
            <Right>
              <Radio
                color={'#f0ad4e'}
                selectedColor={'#5cb85c'}
                selected={gender === 'Female' ? true : false}
              />
            </Right>
          </ListItem>

          <View style={styles.containerView}>
            <Text>Date: {date_of_birth.toString().substr(4, 12)}</Text>
            <DatePicker
              defaultDate={new Date(2019, 4, 4)}
              minimumDate={new Date(1995, 1, 1)}
              maximumDate={new Date(2019, 12, 31)}
              locale={'en'}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={'fade'}
              androidMode={'default'}
              placeHolderText="Select date"
              textStyle={{ color: 'green' }}
              placeHolderTextStyle={{ color: '#d3d3d3' }}
              onDateChange={this.setDate}
              disabled={false}
            />
          </View>
          {/* </Form> */}
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
  labelText: {
    fontSize: 20
  },
  containerView: {
    flex: 1,
    height: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  inputText: {
    fontSize: 25
  }
};

const mapStateToProps = ({ user }) => ({
  user: user.data
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateProfileScreen);
