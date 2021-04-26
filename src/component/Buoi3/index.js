import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import TopBox from '../Buoi4/TopBox';
import BoxBottom from '../Buoi4/BoxBottom';

export default class Buoi3 extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={[style.box1, style.colorGreen]}>
          <TopBox />
        </View>
        {/* <ScrollView> */}
        <View style={[style.box1, style.colorPurple]}>
          <BoxBottom />
          <BoxBottom />
        </View>
        {/* </ScrollView> */}
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    flex: 1,
    borderRadius: 10,
  },

  colorGreen: {
    backgroundColor: '#96CC96',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorPurple: {
    backgroundColor: '#C9C9FF',
    flexDirection: 'row',
  },
});
