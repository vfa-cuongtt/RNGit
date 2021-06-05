import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class HomeScreen extends Component {
  state = {
    name: 'Hello anh dep trai',
    user: {
      name: 'RN',
      address: 'Ahihi',
    },
  };

  render() {
    // console.log('\n', JSON.stringify(this.props.navigation, null, 2));

    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text>Home Screen</Text>
        <TouchableOpacity
          style={{
            width: 100,
            height: 50,
            backgroundColor: '#bff',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}
          onPress={() =>
            this.props.navigation.navigate('DetailScreen', {
              name: this.state.name,
              user: this.state.user,
            })
          }>
          <Text>Go to Detail</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
