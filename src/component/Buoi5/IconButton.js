import React, {Component} from 'react';
import {Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

export default class IconButton extends Component {
  handChangeIcon = icon => {
    const {changeIcon} = this.props;
    changeIcon(icon);
  };

  render() {
    console.log(this.props);
    return (
      <TouchableOpacity
        style={styles.buttonIcon}
        onPress={() => this.handChangeIcon(this.props.icon)}>
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
