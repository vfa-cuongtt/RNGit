import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const DATA = [
  {
    name: 'Wanda',
    avatar: require('../../../assets/zalo/wanda.jpg'),
  },
  {
    name: 'Yasuo',
    avatar: require('../../../assets/zalo/yasuo.jpg'),
  },
  {
    name: 'Captian',
    avatar: require('../../../assets/zalo/captain.jpg'),
  },
  {
    name: 'Flash',
    avatar: require('../../../assets/zalo/flash.jpg'),
  },
];

export default class HeaderItem extends Component {
  renderItems = ({item}) => {
    return (
      <View style={styles.avatar}>
        <Image style={styles.icon} source={item.avatar} />
        <Text style={styles.name}>{item.name}</Text>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon name="back-in-time" size={20} />
          <Text> Danh Sách tìm kiếm gần đây </Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            data={DATA}
            renderItem={this.renderItems}
            keyExtractor={item => {
              return item.name;
            }}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
  avatar: {
    // width: '100%',
    // height: 100,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  icon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  name: {
    paddingVertical: 5,
  },
});
