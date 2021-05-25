import React, {Component, PureComponent} from 'react';
import {Text, View} from 'react-native';

export default class Child extends PureComponent {
  state = {number: 2};
  //   static getDerivedStateFromProps(props, state) {
  //     console.log('Child_getDerivedStateFromProps', props, state);

  //     if (props.number > state.number) {
  //       return (state.number = props.number);
  //     }
  //     return null;
  //   }

  /**
   * Chuc nang tuong tu thang  getDerivedStateFromProps
   * @param {*} props
   * @param {*} state
   */
  //   UNSAFE_componentWillReceiveProps(props) {
  //     console.log('componentWillReceiveProps', props);
  //     if (props.number > this.state.number) {
  //       this.setState({number: props.number});
  //     }
  //   }

  /**
   * Ngăn reRender giao diện Hoặc dùng PureComponent( chỉ check dc giá trị nguyên thuỷ(numbẻ, string,...))
   *
   * =>>>>dung de kiem tra xem props co thay doi ko => render giao dien
   *
   * PureComponent => React tu handle render giao dien
   * shouldComponentUpdate => tu handle nextProps de render giao dien
   * => kieu du lieu phuc tap hon nhu Object, Array
   *
   * @returns {boolean} true/false
   */
  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log('shouldComponentUpdate', nextProps, nextState);
  //     // if (nextProps.name) {
  //     //   return true;
  //     // }

  //     return false;
  //   }

  //   componentDidUpdate() {
  //     console.log('componentDidUpdate');
  //     if (this.state.number < 5) {
  //       this.setState({number: 6});
  //     }
  //   }

  /**
   * Dùng để clear phiên xử lý trước,
   * những xử lý chạy background
   */
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('Child');
    return (
      <View style={{marginTop: '20%'}}>
        {/* <Text> number Child: {this.props.name} </Text> */}
      </View>
    );
  }
}
