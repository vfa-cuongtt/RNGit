import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class StackChild extends Component {
  render() {
    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="DemoScreen" component={DemoScreen} />
        <Stack.Screen name="DemoScreen2" component={DemoScreen2} />
      </Stack.Navigator>
    );
  }
}

const DemoScreen = ({navigation}) => (
  <View>
    <Text>DemoScreen</Text>
    <TouchableOpacity onPress={() => navigation.navigate('DemoScreen2')}>
      <Text>Go to Demo Screen2</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('DetailScreen')}>
      <Text>Go to Detail Screen</Text>
    </TouchableOpacity>
  </View>
);
const DemoScreen2 = () => (
  <View>
    <Text>DemoScreen</Text>
  </View>
);
