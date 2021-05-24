import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import rootReducer from './redux/reducers/rootReducer';
import countReducer from './redux/reducers/countReducer';
import {
  COUNT_UP,
  countUp,
  COUNT_DOWN,
  countDown,
} from './redux/actions/countAction';

class DemoRedux extends Component {
  countUp = () => {
    // Muốn sử dụng phải delete mapDispatchToProps ở dưới export default connect(mapStateToProps)(DemoRedux);
    // console.log(this.props.countUp);
    // this.props.dispatch({
    //   type: COUNT_UP,
    //   payload: {number: 20},
    // });
  };

  //   countDown = () => {
  //     this.props.dispatch({
  //       type: COUNT_DOWN,
  //       payload: {
  //         number: 20,
  //       },
  //     });
  //   };

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Demo Redux: {this.props.userName} </Text>
        <Text style={styles.text}>Number: {this.props.number}</Text>
        <View style={styles.btnBlock}>
          <TouchableOpacity
            onPress={() => {
              this.props.countUp(1);
            }}>
            <Text>Count Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.countDown();
            }}>
            <Text>Count Down</Text>
          </TouchableOpacity>
        </View>
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
  text: {
    fontSize: 24,
  },
  btnBlock: {
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'space-around',
    width: '100%',
  },
});

const mapStateToProps = state => {
  return {
    number: state.countReducer.number,
    userName: state.userReducer.userName,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    countUp: param => {
      dispatch(countUp(param));
    },
    countDown: param => {
      //   dispatch({
      //     type: COUNT_DOWN,
      //     payload: {
      //       number: 1,
      //     },
      //   });
      dispatch(countDown(param));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DemoRedux);
