import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import gameReducer from '../redux/reducers/GameReduce';
import {PLAYER_SELECT} from '../redux/actions/gameAction';

class SelectContent extends Component {
  render() {
    return this.props.arrayGame.map(item => (
      <TouchableOpacity
        onPress={() => {
          this.props.onSelectItem(item);
        }}
        disabled={this.props.disable}
        key={item.id}
        style={[styles.borderItem, item.status && styles.selectedItem]}>
        <Image style={styles.imgItem} source={item.image} />
      </TouchableOpacity>
    ));
  }
}

const styles = StyleSheet.create({
  borderItem: {
    borderWidth: 3,
    borderRadius: 8,
    // borderColor: 'yellow',
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgItem: {
    width: 50,
    height: 50,
  },
  selectedItem: {
    borderColor: 'yellow',
  },
});

const mapStateToProps = state => {
  return {
    arrayGame: state.gameReducer.arrayGame,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectItem: item => {
      dispatch({
        type: PLAYER_SELECT,
        payload: item,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SelectContent);
