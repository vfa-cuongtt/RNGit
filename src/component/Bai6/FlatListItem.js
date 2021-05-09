import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

export default class FlatListItem extends Component {
  listItem = [
    {id: 1, data: 1},
    {id: 2, data: 2},
    {id: 3, data: 3},
    {id: 4, data: 4},
    {id: 5, data: 5},
    {id: 6, data: 6},
    {id: 7, data: 7},
    {id: 8, data: 8},
    {id: 9, data: 9},
  ];
  renderItem = ({item}) => {
    console.log('item', item);
    return (
      <View
        style={[
          styles.item,
          {
            backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(
              16,
            )}`,
          },
        ]}>
        <Text>item {item.data}</Text>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          // horizontal={true}
          refreshing={true}
          onRefresh={() => {
            console.log('refresh call');
          }}
          data={this.listItem}
          keyExtractor={item => {
            console.log('test', item);
            return item.id.toString();
          }}
          renderItem={this.renderItem}
        />
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
    backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  },
});
