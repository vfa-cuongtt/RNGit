import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

export default class ScrollViewItem extends Component {
  listItem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  renderItem = () => {
    return this.listItem.map((i, index) => {
      return (
        <View
          style={[
            styles.item,
            {
              backgroundColor: `#${Math.floor(
                Math.random() * 16777215,
              ).toString(16)}`,
            },
          ]}
          key={index}>
          <Text>Item {i}</Text>
        </View>
      );
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>{this.renderItem()}</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 50,
  },
  item: {
    borderRadius: 10,
    height: 100,
    marginVertical: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
