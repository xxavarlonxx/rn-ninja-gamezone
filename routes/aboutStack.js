import { createStackNavigator } from 'react-navigation-stack';
import Header from '../shared/header';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import About from '../screens/About';

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header title='About GameZone' navigation={navigation} />
        ),
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
};

const aboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: '#eee' },
    headerTintColor: '#444',
  },
});

export default aboutStack;
