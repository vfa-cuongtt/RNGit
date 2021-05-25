import axios from 'axios';
import React, {Component} from 'react';
import {Text, View, SafeAreaView, Image, ActivityIndicator} from 'react-native';

export default class BaiTapLifecycle extends Component {
  state = {
    movie: {},
    loading: true,
  };
  componentDidMount() {
    axios({
      method: 'GET',
      url:
        'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP12',
    })
      .then(resp => {
        console.log('resp', resp);
        this.setState({
          movie: resp.data[0],
          loading: false,
        });
      })
      .catch(err => {
        console.log('err', err);
        this.setState({
          loading: false,
        });
      });
  }

  render() {
    console.log(this.state.movie);
    return (
      <SafeAreaView>
        <ActivityIndicator animating={this.state.loading} />
        <Image
          source={{uri: this.state.movie.hinhAnh}}
          style={{width: 150, height: 200, backgroundColor: 'gray'}}
        />
        <Text> {this.state.movie.tenPhim} </Text>
        <Text> {this.state.movie.moTa} </Text>
        <Text> {this.state.movie.ngayKhoiChieu} </Text>
      </SafeAreaView>
    );
  }
}
