import React, {Component} from 'react';
import {Text, StyleSheet, View, Dimensions, Image} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {width: screenWidth} = Dimensions.get('window'); //=> Dung ham Dimensions  de lay gia trij Width height cuar mh

export default class ProductItem extends Component {
  render() {
    console.log(this.props.product.id);
    return (
      <View style={styles.productItem}>
        <View style={styles.productItemHeader}>
          <View style={styles.productPrince}>
            <MaterialIcons name="attach-money" size={18} />
            <Text style={styles.productPrinceText}>
              {this.props.product.price}
            </Text>
          </View>

          <AntIcon name="heart" color="red" size={20} />
        </View>
        <Image
          source={{uri: this.props.product.image}}
          style={styles.productImage}
        />
        <Text style={styles.productName}> {this.props.product.name} </Text>
      </View>
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
    backgroundColor: '#dcf1f9',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  productItem: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: (screenWidth - 60) / 2,
    height: 200,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 20,
    marginHorizontal: 7,
    shadowOffset: {
      height: 8,
      width: 8,
    },
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 8,
    //elevation: 15 chi danh cho android giong z-index lam noi cai box len
  },
  productItemFlexEnd: {
    alignSelf: 'flex-end',
  },
  productImage: {
    width: 140,
    height: 110,
    alignSelf: 'center', //=> check canh giua hinh
  },
  productItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productPrince: {
    flexDirection: 'row',
  },
  productPrinceText: {
    fontWeight: 'bold',
  },
  productName: {
    fontSize: 16,
    fontWeight: '400',
  },
});
