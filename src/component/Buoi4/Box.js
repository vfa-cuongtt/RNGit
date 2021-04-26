import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class Box extends Component {
  constructor(props) {
    super(props);
    console.log('props', props.imageUrl);
  }
  render() {
    return (
      <View style={[style.box4, style.colorBlue]}>
        <Image style={style.icon} source={this.props.imageUrl}></Image>
      </View>
    );
  }
}
const style = StyleSheet.create({
  box4: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorBlue: {
    backgroundColor: '#3D85C6',
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
