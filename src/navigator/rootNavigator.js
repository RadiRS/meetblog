import {
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';

// Screens
import {
  Splash,
  AuthMethod,
  Signin,
  Signup,
  Home,
  Profile,
  DetailPost
} from '../screens';
import DrawerNavigator from '../components/drawer/DrawerNavigator';

// Home Stack Navigator
const AppHomeStackNavigator = createStackNavigator({
  Home,
  DetailPost
});

// Profile Stack Navigator
const AppProfileStackNavigator = createStackNavigator({
  Profile
});

// App Drawer Navigator
const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: AppHomeStackNavigator
    },
    Profile: {
      screen: AppProfileStackNavigator
    }
  },
  {
    drawerPosition: 'left',
    drawerType: 'slide',
    drawerWidth: 400,
    contentComponent: DrawerNavigator,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToogleRoute: 'DrawerToggle'
  }
);

// App Switch Navigator
const AppSwitchNavigator = createSwitchNavigator({
  // Splash,
  // AuthMethod,
  // Signin,
  // Signup,
  AppDrawerNavigator
});

// App Container
const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;
