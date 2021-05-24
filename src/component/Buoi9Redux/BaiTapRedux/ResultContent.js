import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import gameReducer from '../redux/reducers/GameReduce';
import {play, getResult, reset} from '../redux/actions/gameAction';

class ResultContent extends Component {
  onPressPlayButton = () => {
    if (this.props.times > 0) {
      const random = setInterval(() => {
        const id = Math.floor(Math.random() * 3);
        this.props.onPressPlayButton(id);
      }, 200);

      setTimeout(() => {
        clearInterval(random);
        this.props.getResult();
      }, 1500);
    } else {
      Alert.alert('Lượt chơi đã hết', 'Bạn đã thua, ấn resest để chơi lại', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  };

  onPressResetButton = () => {
    this.props.onPressResetButton();
  };

  render() {
    return (
      <View>
        <View style={styles.infoContent}>
          <Text style={styles.infoText}>Score: {this.props.score}</Text>
          <Text style={styles.infoText}>Timer: {this.props.times}</Text>
        </View>
        <View style={styles.buttonContent}>
          <TouchableOpacity
            disabled={this.props.disable}
            onPress={this.onPressPlayButton}>
            <LinearGradient
              start={{x: 0.0, y: 0.25}}
              end={{x: 0.5, y: 1.0}}
              style={[styles.button]}
              colors={this.props.disable ? ['#bbb'] : ['#864686', '#ff9aff']}>
              <Text style={styles.buttonText}>Play</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onPressResetButton}>
            <LinearGradient
              start={{x: 0.0, y: 0.25}}
              end={{x: 0.5, y: 1.0}}
              style={[styles.button]}
              colors={['#bf9f36', '#ffce36']}>
              <Text style={styles.buttonText}>Reset</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  infoContent: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#00fecd',
  },
  buttonContent: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: '#fecd34',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 10,
  },
});

const mapStateToProps = state => {
  return {
    times: state.gameReducer.times,
    score: state.gameReducer.score,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPressPlayButton: id => dispatch(play(id)),
    getResult: () => dispatch(getResult()),
    onPressResetButton: () => dispatch(reset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultContent);
