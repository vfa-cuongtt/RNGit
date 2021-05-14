import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class PlayerItem extends Component {
  render() {
    const {imageGame, imagePlayer} = this.props;
    return (
      <View style={styles.player}>
        <View style={styles.border}>
          <Image style={styles.imageGame} source={imageGame} />
        </View>
        <View style={styles.triangle} />
        <Image style={styles.imageGame} source={imagePlayer} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  player: {
    alignItems: 'center',
  },
  imageGame: {
    height: 90,
    width: 90,
  },
  border: {
    borderWidth: 3,
    borderRadius: 8,
    borderColor: 'yellow',
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 100,
    width: 100,
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 9,
    borderRightWidth: 9,
    borderTopWidth: 9,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    // transform: [{rotate: '180deg'}],
    borderTopColor: 'yellow',
  },
});
