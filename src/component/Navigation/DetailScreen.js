import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class DetailScreen extends Component {
  render() {
    console.log('\n', JSON.stringify(this.props, null, 2));
    return (
      <View>
        <Text>Detail Screen</Text>
        {this.props.route.params && <Text>{this.props.route.params.name}</Text>}
        <TouchableOpacity
          style={{
            width: 100,
            height: 50,
            backgroundColor: '#bff',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}
          onPress={() => this.props.navigation.goBack()}>
          <Text>Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 100,
            height: 50,
            backgroundColor: '#bff',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}
          onPress={
            () => this.props.navigation.push('DetailScreen', {user: 'Ahihi'}) //=> de di tiep vo nhung mh trong
          }>
          <Text>Move to Detail</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 100,
            height: 50,
            backgroundColor: '#bff',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}
          onPress={() => this.props.navigation.popToTop()} //=> Rut tat ca cac Stack ra roi tra ve thang Top dau tien
        >
          <Text>Move to Top</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
