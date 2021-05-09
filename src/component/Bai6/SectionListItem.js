import React, {Component} from 'react';
import {Text, View, StyleSheet, SafeAreaView, SectionList} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

//  const DATA  = [
//     {
//       title: 'Title 1',
//       data: [
//         {id: 1.1, item: 1.1},
//         {id: 1.2, item: 1.2},
//         {id: 1.3, item: 1.3},
//       ],
//     },
//     {
//       title: 'Title 2',
//       data: [
//         {id: 2.1, item: 2.1},
//         {id: 2.2, item: 2.2},
//         {id: 2.3, item: 2.3},
//       ],
//     },
//     {
//       title: 'Title 3',
//       data: [
//         {id: 3.1, item: 3.1},
//         {id: 3.2, item: 3.2},
//         {id: 3.3, item: 3.3},
//       ],
//     },
//     {
//       title: 'Title 4',
//       data: [
//         {id: 4.1, item: 4.1},
//         {id: 4.2, item: 4.2},
//         {id: 4.3, item: 4.3},
//       ],
//     },
//     {
//       title: 'Title 5',
//       data: [
//         {id: 5.1, item: 5.1},
//         {id: 5.2, item: 5.2},
//         {id: 5.3, item: 5.3},
//       ],
//     },
//   ];

export default class SectionListItem extends Component {
  renderItem = ({item}) => {
    return (
      <View style={styles.itemContent}>
        <Text style={styles.itemTxt}>{item}</Text>
      </View>
    );
  };
  renderSectionHeader = ({section: {title}}) => {
    // console.log('param', param);
    return (
      <Text style={styles.header}>
        {title}
        <Icon    name="rightcircle" size={20} color="#4F8EF7" />
      </Text>
    );
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SectionList
          stickySectionHeadersEnabled={true}
          sections={DATA}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
          renderSectionHeader={this.renderSectionHeader}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  itemContent: {
    padding: 15,
  },
  itemTxt: {
    fontSize: 20,
    marginLeft: 15,
    padding: 10,
    backgroundColor: '#dcdcdc',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#ffe4e1',
    paddingLeft: 15,
  },
  icons: {
    marginLeft: 10,
  },
});
