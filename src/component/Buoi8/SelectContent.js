import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';

export default class SelectContent extends Component {
  render() {
    return this.props.arrayGame.map(item => (
      <TouchableOpacity
        onPress={() => {
          this.props.onSelectItem(item);
        }}
        disabled={this.props.disable}
        key={item.id}
        style={[styles.borderItem, item.status && styles.selectedItem]}>
        <Image style={styles.imgItem} source={item.image} />
      </TouchableOpacity>
    ));
  }
}

const styles = StyleSheet.create({
  borderItem: {
    borderWidth: 3,
    borderRadius: 8,
    // borderColor: 'yellow',
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgItem: {
    width: 50,
    height: 50,
  },
  selectedItem: {
    borderColor: 'yellow',
  },
});
