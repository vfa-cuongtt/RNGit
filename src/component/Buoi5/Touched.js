import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';

export default class Touched extends Component {
  handleOnPress = param => {
    console.log('press', param);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
        {/* <Button title="Button" color="red" /> */}
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          //Khong truyen parma vua khởi tạo layout là chay luon
          //   onPress={this.handleOnPress}>

          // dung callback function de truyen param
          onPress={() => this.handleOnPress('Hello')}>
          <Text style={styles.text}>TouchableOpacity</Text>
        </TouchableOpacity>
        <TouchableHighlight
          underlayColor={'red'}
          style={styles.button}
          onPress={this.handleOnPress}>
          <Text style={styles.text}>TouchableHighlight</Text>
        </TouchableHighlight>
        <TouchableWithoutFeedback
          style={styles.button}
          onPress={this.handleOnPress}>
          <Text style={styles.text}>Touchable Without Feedback</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#bfb',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  text: {
    fontSize: 20,
  },
});
