import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

export default class ResultContent extends Component {
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
            onPress={this.props.onPressPlayButton}>
            {/* <LinearGradient
              start={{x: 0.0, y: 0.25}}
              end={{x: 0.5, y: 1.0}}
              style={[styles.button]}
              colors={this.props.disable ? ['#bbb'] : ['#864686', '#ff9aff']}> */}
            <Text style={styles.buttonText}>Play</Text>
            {/* </LinearGradient> */}
          </TouchableOpacity>
          <TouchableOpacity>
            {/* <LinearGradient
              start={{x: 0.0, y: 0.25}}
              end={{x: 0.5, y: 1.0}}
              style={[styles.button]}
              colors={['#bf9f36', '#ffce36']}> */}
            <Text style={styles.buttonText}>Reset</Text>
            {/* </LinearGradient> */}
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
