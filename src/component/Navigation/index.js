import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import ValidationFormik from '../Validation/ValidationFormik';
import StackRoot from './StackRoot';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
export default class RootNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <StackRoot />
      </NavigationContainer>
    );
  }
}
