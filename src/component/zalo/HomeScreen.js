import React, {Component} from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
import HeaderItem from './HeaderItem';
import FriendList from './FriendList';

const DATA = [
  {
    name: 'Wanda',
    avatar: '',
  },
  {
    name: 'Yasuo',
    avatar: '',
  },
  {
    name: 'Captian',
    avatar: '',
  },
  {
    name: 'Flash',
    avatar: '',
  },
];

export default class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        {/* <Text> textInComponent </Text> */}
        <HeaderItem />
        <FriendList />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
