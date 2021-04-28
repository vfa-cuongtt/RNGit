import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import angry from '../../../assets/icon/angry.png';
import care from '../../../assets/icon/care.png';
import haha from '../../../assets/icon/haha.png';
import like from '../../../assets/icon/like.png';
import love from '../../../assets/icon/love.png';
import sad from '../../../assets/icon/sad.png';

import IconButton from './IconButton';

const iconUrl = [
  {url: require('../../../assets/icon/angry.png')},
  {url: require('../../../assets/icon/care.png')},
  {url: require('../../../assets/icon/haha.png')},
  {url: require('../../../assets/icon/like.png')},
  {url: require('../../../assets/icon/love.png')},
  {url: require('../../../assets/icon/sad.png')},
];

export default class RenderIcon extends Component {
  renderIcon = () => {
    return iconUrl.map((item, index) => {
      return <IconButton icon={item.url} />;
    });
  };

  state = {
    icon: require('../../../assets/icon/angry.png'),
  };

  handChangeIcon = icon => {
    this.setState({
      icon,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.icon} source={this.state.icon} />

        <View style={styles.bottom}>{this.renderIcon()}</View>
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

  buttonIcon: {
    width: 50,
    height: 50,
    marginVertical: 20,
    marginHorizontal: 10,
  },
  bottom: {
    flexDirection: 'row',
  },
});
