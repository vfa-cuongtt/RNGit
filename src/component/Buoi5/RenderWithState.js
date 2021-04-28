import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class RenderWithState extends Component {
  // C1: Khai báo state
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       isLogin: false,
  //     };
  //   }

  // C2: Khai báo rút gọn state
  state = {
    isLogin: false,
  };

  handleLogin = () => {
    this.setState(
      {
        isLogin: true,
      },
      () => {
        console.log(this.state.isLogin);
      },
    );
  };

  handleLogout = () => {
    this.setState(
      {
        isLogin: false,
      },
      () => {
        console.log(this.state.isLogin);
      },
    );
  };

  renderLogin = () => {
    if (this.state.isLogin) {
      return (
        <>
          <Text style={styles.text}>Hello RN </Text>
          <TouchableOpacity style={styles.button} onPress={this.handleLogout}>
            <Text style={styles.text}>Logout</Text>
          </TouchableOpacity>
        </>
      );
    }

    return (
      <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    );
  };

  render() {
    console.log('render');
    return <View style={styles.container}>{this.renderLogin()}</View>;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#fbf',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginVertical: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
