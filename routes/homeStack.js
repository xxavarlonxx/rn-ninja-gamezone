import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/header';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

const openMenu = () => {};

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='GameZone' navigation={navigation} />,
        headerLeft: (
          <MaterialIcons
            name='menu'
            size={28}
            onPress={() => navigation.openDrawer()}
            style={{ position: 'absolute', left: 16 }}
          />
        ),
      };
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      headerTitle: () => <Header title='Review Detail' />,
    },
  },
};

const homeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: '#eee' },
    headerTintColor: '#444',
  },
});

export default homeStack;
