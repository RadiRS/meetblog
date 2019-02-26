import React from 'react';
import { Text, View, Button } from 'react-native';
import Menu, {
  MenuItem,
  MenuDivider,
  Position
} from 'react-native-enhanced-popup-menu';

const PopUpMenu = props => {
  let textRef = React.createRef();
  let menuRef = null;

  const setMenuRef = ref => (menuRef = ref);
  const hideMenu = () => menuRef.hide();
  const showMenu = () =>
    menuRef.show(textRef.current, (stickTo = Position.TOP_RIGHT));

  const onPress = () => showMenu();

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
      <Text ref={textRef} style={{ fontSize: 20, textAlign: 'center' }}>
        Text component
      </Text>

      <Button title="Show menu" onPress={onPress} />

      <Menu ref={setMenuRef}>
        <MenuItem onPress={hideMenu}>Item 1</MenuItem>
        <MenuItem onPress={hideMenu}>Item 2</MenuItem>
        <MenuItem onPress={hideMenu} disabled>
          Item 3
        </MenuItem>
        <MenuDivider />
        <MenuItem onPress={hideMenu}>Item 4</MenuItem>
      </Menu>
    </View>
  );
};

export default PopUpMenu;
