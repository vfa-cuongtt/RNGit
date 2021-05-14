import {format} from 'prettier';
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {
  BackgroundImage,
  Paper,
  Player,
  Bot,
  Scissor,
  Rock,
} from '../../../assets';

import PlayerItem from './PlayerItem';
import SelectContent from './SelectContent';
import ResultContent from './ResultContent';

// arr =[{id: name, img: path, status: true},{id: name, img: path, status: false},{id: name, img: path, status: false}]
export default class BaiTapOanTuXi extends Component {
  /**
   *  ImageBackground để set BGImage
   *  overlay: Để làm cho màu của background tối đi thì ta thêm 1 view đè lên background-image sau đó set màu để overlay cái BG đó
   *  StatusBar: hien thi show thông tin trên thanh StatusBar dựa trên device dark/light Mode
   */
  state = {
    playerSelect: {
      id: 'scissor',
      image: Scissor,
      status: true,
    },
    botSelect: {
      id: 'rock',
      image: Rock,
      status: false,
    },
    isSelect: 'scissor',
    score: 0,
    times: 9,
    disable: false,
    arrayGame: [
      {
        id: 'scissor',
        image: Scissor,
        status: true,
      },
      {
        id: 'rock',
        image: Rock,
        status: false,
      },
      {
        id: 'paper',
        image: Paper,
        status: false,
      },
    ],
  };

  onSelectItem = selectItem => {
    //Cach 1: tao state isSelect
    // this.setState({playImage: selectItem.image, isSelect: selectItem.id});

    //Cach 2 Xu ly status voi Array arrayGame
    const arrayGame = this.state.arrayGame;
    const index = arrayGame.findIndex(item => item.id === selectItem.id);

    if (!arrayGame[index].status) {
      const previousSelectIndex = arrayGame.findIndex(item => item.status);
      arrayGame[index].status = true;
      arrayGame[previousSelectIndex].status = false;
    }

    this.setState({playerSelect: selectItem, arrayGame}, () => {
      // console.log('test___', this.state.arrayGame);
    });
  };

  onPressPlayButton = () => {
    // thuc hien lien tuc 1 khoang thoi gian
    this.setState({disable: true});
    const random = setInterval(() => {
      this.state.botSelect.image = this.state.arrayGame[
        Math.floor(Math.random() * 3)
      ].image;
      this.setState({
        botSelect: this.state.botSelect,
      });
    }, 100);

    setTimeout(() => {
      clearInterval(random);
      let times, score;
      switch (this.state.playerSelect.id) {
        case 'paper':
          if (this.state.botSelect.id === 'paper') {
            times = this.state.times - 1;
          } else if (this.state.botSelect.id === 'scissor') {
            score = this.state.score - 1;
            times = this.state.times - 1;
          } else {
            score = this.state.score + 1;
            times = this.state.times + 1;
          }
          break;
        case 'scissor':
          if (this.state.botSelect.id === 'scissor') {
            times = this.state.times - 1;
          } else if (this.state.botSelect.id === 'rock') {
            score = this.state.score - 1;
            times = this.state.times - 1;
          } else {
            score = this.state.score + 1;
            times = this.state.times + 1;
          }
          break;
        case 'rock':
          if (this.state.botSelect.id === 'rock') {
            times = this.state.times - 1;
          } else if (this.state.botSelect.id === 'paper') {
            score = this.state.score - 1;
            times = this.state.times - 1;
          } else {
            score = this.state.score + 1;
            times = this.state.times + 1;
          }
          break;
        default:
          break;
      }

      // C2 dung 1 bien Count++ đếm cái count nếu count > 1 số nhất định thì sẽ clearInterval

      this.setState({disable: false, times, score});
    }, 5000);
  };

  render() {
    return (
      <ImageBackground
        style={styles.backgroundContent}
        source={BackgroundImage}>
        <StatusBar barStyle="light-content" />
        <View style={styles.overlay}>
          <SafeAreaView style={styles.container}>
            <View style={styles.playerContent}>
              <PlayerItem
                imageGame={this.state.playerSelect.image}
                imagePlayer={Player}
              />
              <PlayerItem
                imageGame={this.state.botSelect.image}
                imagePlayer={Bot}
              />
            </View>
            <View style={styles.selectContent}>
              <SelectContent
                arrayGame={this.state.arrayGame}
                onSelectItem={this.onSelectItem}
                isSelect={this.state.isSelect}
                disable={this.state.disable}
              />
            </View>
            <View style={styles.infoContent}>
              <ResultContent
                disable={this.state.disable}
                times={this.state.times}
                score={this.state.score}
                onPressPlayButton={this.onPressPlayButton}
              />
            </View>
          </SafeAreaView>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContent: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  playerContent: {
    flex: 2,
    flexDirection: 'row',
    paddingVertical: 30,
    justifyContent: 'space-between',
  },

  selectContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },

  infoContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
