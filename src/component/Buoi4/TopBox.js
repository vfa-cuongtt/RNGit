import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class TopBox extends Component {
  render() {
    return (
      <View style={[style.box2, style.colorYellow]}>
        <Image
          style={style.icon}
          source={require('../../../assets/Shoe/shoe1.jpg')}></Image>
        {/* <Text>aaaa</Text> */}
      </View>
    );
  }
}

const style = StyleSheet.create({
  box2: {
    flex: 1,
    backgroundColor: 'red',
    width: '90%',
    height: '100%',
    marginVertical: 40,
    paddingHorizontal: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  colorYellow: {
    backgroundColor: '#F4B940',
  },
  icon: {
    width: 200,
    height: 200,
    borderColor: 20,
    borderRadius: 100,
  },
});
