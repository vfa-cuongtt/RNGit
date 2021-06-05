import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import TabRoot from './TabRoot';

const Stack = createStackNavigator();

export default class StackRoot extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="TabScreen" component={TabRoot} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    );
  }
}

const TreeNavigate = {
  RootStack: {
    TabScreen: {
      HomeTab: {
        DemoScreen: 'DemoScreen',
        DemoScreen2: 'DemoScreen2',
      },
      SettingTab: 'SettingTab',
    },
    HomeScreen: 'HomeScreen',
    DetailScreen: 'DetailScreen',
  },
};
