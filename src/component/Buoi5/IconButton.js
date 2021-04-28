import React, {Component} from 'react';
import {Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

export default class IconButton extends Component {
  render() {
    console.log(this.props);
    return (
      <TouchableOpacity style={styles.buttonIcon}>
        <Image style={styles.buttonIcon} source={this.props.icon} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonIcon: {
    width: 40,
    height: 40,
    marginVertical: 20,
    marginHorizontal: 5,
  },
  bottom: {
    flexDirection: 'row',
  },
});
