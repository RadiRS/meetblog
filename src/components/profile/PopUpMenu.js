import React from 'react';
import NavigationServices from '../../services/navigation';
import { Text, View } from 'react-native';
import Menu, {
  MenuItem,
  MenuDivider,
  Position
} from 'react-native-enhanced-popup-menu';
import ButtonIconComponent from '../common/buttons/IconButton';

const PopUpMenu = props => {
  const { handleLogout } = props;
  let textRef = React.createRef();
  let menuRef = null;

  const setMenuRef = ref => (menuRef = ref);
  const hideMenu = () => menuRef.hide();
  const showMenu = () =>
    menuRef.show(textRef.current, (stickTo = Position.TOP_RIGHT));

  const onPress = () => showMenu();

  return (
    <View>
      <Text ref={textRef} />
      <ButtonIconComponent
        onPress={onPress}
        transparent={true}
        iconName="ellipsis-v"
      />
      <Menu ref={setMenuRef}>
        <MenuItem onPress={() => NavigationServices.navigate('UpdateProfile')}>
          Edit Profile
        </MenuItem>
        <MenuItem onPress={() => handleLogout()}>Logout</MenuItem>
      </Menu>
    </View>
  );
};

export default PopUpMenu;
