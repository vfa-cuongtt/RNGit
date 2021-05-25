import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Child from './Child';

export default class Lifecycle extends Component {
  /**
   * Phuong thức khởi tạo
   * es6 co đem state ra khỏi contructor
   */
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      name: '',
    };
    // console.log('constructor');
  }

  /**
   * dùng dể so sáng props và state để render lại
   * ---- CHAY XUYEN SUOT -----
   * chay tu mounting -> updating
   * moi lan statr thay doi se chay lai thang nay
   *
   * Không dùng dc con trỏ this nên không thể setState=> render giao diện
   *
   * @returns
   */
  // static getDerivedStateFromProps(props, state) {
  //   // console.log('getDerivedStateFromProps');
  //   return null;
  // }

  renderText = () => {
    return <Text>Ahihi</Text>;
  };

  render() {
    console.log('render Cha  ');
    return (
      <SafeAreaView>
        <Text> Number: {this.state.number} </Text>
        <TouchableOpacity
          onPress={() => {
            this.setState({number: this.state.number + 1});
          }}>
          <Text>Count Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.setState({name: 'Rn-02'});
          }}>
          <Text>Set Name</Text>
        </TouchableOpacity>

        {this.state.name !== 'RN' && <Child name={this.state.name} />}
      </SafeAreaView>
    );
  }

  componentDidMount() {
    // console.log('componentDidMount');
  }
}

const styles = StyleSheet.create({});
