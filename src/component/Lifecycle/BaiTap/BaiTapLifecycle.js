import axios from 'axios';
import React, {Component} from 'react';
import {Text, View, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProductItem from './ProductItem';
export default class BaiTapLifecycle extends Component {
  state = {
    product: {},
    listProduct: [],
  };
  componentDidMount() {
    // cho nao log ra api a
    console.log(' run into component did mount');
    axios({
      method: 'GET',
      url: 'http://svcy3.myclass.vn/api/Product',
    })
      .then(resp => {
        this.setState({
          product: resp.data.content[0],
          listProduct: resp.data.content,
        });
      })
      .catch(err => {
        console.log('err', err);
      });
  }

  // _renderItem = ({item)} => {
  //   return <ProductItem product={item} />;
  // };

  _renderItem = ({item}) => {
    return <ProductItem product={item} />;
  };

  render() {
    return (
      <SafeAreaView style={styles.areaView}>
        <View style={styles.container}>
          <FlatList
            contentContainerStyle={styles.listProduct}
            // style={styles.listProduct}
            horizontal={false}
            numColumns={2}
            data={this.state.listProduct}
            keyExtractor={(item, index) => `${item.name}_${item.index}`}
            renderItem={this._renderItem}
            // ItemSeparatorComponent= {()=> {<View style={{height: 20}}/>}} ko su dung voi numColumns cong dung la cach deu
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
    backgroundColor: '#dcf1f9',
  },
  container: {
    flex: 1,

    paddingHorizontal: 20,
  },
  listProduct: {
    justifyContent: 'space-between',
  },
});
