import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Box from './Box';

const imageUrl = [
  {
    id: 1,
    url: require('../../../assets/shoe2.jpg'),
  },
  {
    id: 2,
    url: require('../../../assets/shoe3.jpg'),
  },
  {
    id: 3,
    url: require('../../../assets/shoe3.jpg'),
  },
  {
    id: 4,
    url: require('../../../assets/shoe4.jpg'),
  },
];

export default class BoxBottom extends Component {
  render() {
    return (
      <View style={style.box3}>
        {[...imageUrl].map((item, key) => {
          //   console.log('item', item);
          return <Box key={key} imageUrl={item.url} />;
        })}
        {/* <Box imageUrl={imageUrl} />; */}
      </View>
    );
  }
}

const style = StyleSheet.create({
  box3: {
    flex: 1,
  },
});
