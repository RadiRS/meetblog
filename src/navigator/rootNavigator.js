import {
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';

// Screens
import { Splash, AuthMethod, Signin, Signup, Home, Profile } from '../screens';

// Home Stack Navigator
const AppHomeStackNavigator = createStackNavigator({
  Home
});

// // Profile Stack Navigator
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
    useNativeAnimations: true,
    drawerType: 'slide',
    contentOptions: {
      activeTintColor: '#E40044',
      itemsContainerStyle: {
        marginVertical: 0
      },
      iconContainerStyle: {
        opacity: 1
      }
    }
  }
);

// App Switch Navigator
const AppSwitchNavigator = createSwitchNavigator({
  // Splash,
  AuthMethod,
  Signin,
  Signup,
  AppDrawerNavigator
});

// App Container
const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;
