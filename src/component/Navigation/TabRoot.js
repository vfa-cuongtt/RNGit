import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import StackRoot from './StackRoot';
import StackChild from './StackChild';

const Tab = createBottomTabNavigator();
export default class TabRoot extends Component {
  screenOptions = ({route}) => ({
    tabBarIcon: ({focused, color, size}) => {
      let iconName;

      if (route.name === 'HomeTab') {
        iconName = focused
          ? 'ios-information-circle'
          : 'ios-information-circle-outline';
      } else if (route.name === 'SettingTab') {
        iconName = focused ? 'settings' : 'settings-outline';
      }

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  });

  render() {
    return (
      <Tab.Navigator
        initialRouteName="HomeTab"
        screenOptions={this.screenOptions}>
        <Tab.Screen name="HomeTab" component={StackChild} />
        <Tab.Screen name="SettingTab" component={SettingTab} />
      </Tab.Navigator>
    );
  }
}

class HomeTab extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>Home Tab</Text>
        <TouchableOpacity onPress={() => navigation.navigate()}>
          <Text>Go to Setting Tab</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class PortfolioTab extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>Portfolio Tab</Text>
      </View>
    );
  }
}

class SettingTab extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>Setting Tab</Text>
      </View>
    );
  }
}
