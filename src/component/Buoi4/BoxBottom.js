import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Box from './Box';

const imageUrl = [
  {
    id: 1,
    url: require('../../../assets/Shoe/shoe2.jpg'),
    title: 'giay moi mua doi 1',
  },
  {
    id: 2,
    url: require('../../../assets/Shoe/shoe3.jpg'),
    title: 'giay moi mua doi 2',
  },
  {
    id: 3,
    url: require('../../../assets/Shoe/shoe4.jpg'),
    title: 'giay moi mua doi 3',
  },
  {
    id: 4,
    url: require('../../../assets/Shoe/shoe5.jpg'),
    title: 'giay moi mua doi 4',
  },
];

export default class BoxBottom extends Component {
  render() {
    return (
      <View style={style.box3}>
        {[...imageUrl].map((item, key) => {
          //   console.log('item', item);
          return <Box key={key} image={item} />;
        })}
      </View>
    );
  }
}

const style = StyleSheet.create({
  box3: {
    flex: 1,
  },
});
