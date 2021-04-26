import React from 'react';
import {View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={style.container}>
      <View style={[style.box1, style.colorGreen]}>
        <View style={[style.box2, style.colorYellow]} />
        <View style={[style.box2, style.colorYellow]} />
      </View>
      <View style={[style.box1, style.colorPurple]}>
        <View style={style.box3}>
          <View style={[style.box4, style.colorBlue]} />
          <View style={[style.box4, style.colorBlue]} />
        </View>
        <View style={style.box3}>
          <View style={[style.box4, style.colorBlue]} />
          <View style={[style.box4, style.colorBlue]} />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    flex: 1,
    borderRadius: 10,
  },
  box2: {
    flex: 1,
    backgroundColor: 'red',
    width: '90%',
    height: '100%',
    marginVertical: 40,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  box3: {
    flex: 1,
    marginHorizontal: 5,
  },
  box4: {
    flex: 1,
    width: 150,
    height: 150,
    marginVertical: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  colorGreen: {
    backgroundColor: '#96CC96',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorPurple: {
    backgroundColor: '#C9C9FF',
    flexDirection: 'row',
  },
  colorBlue: {
    backgroundColor: '#3D85C6',
  },
  colorYellow: {
    backgroundColor: '#F4B940',
  },
});

export default App;
