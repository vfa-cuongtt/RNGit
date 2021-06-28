import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import useRandomColor from './useRandomColor';

const BaiTapColor = () => {
  //   const [backgroundColor, setBackgroundColor] = useState('bff');

  //   useEffect(() => {
  //     setInterval(() => {
  //       const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  //       setBackgroundColor(color);
  //     }, 1000);
  //   }, []);
  const backgroundColor = useRandomColor();
  return (
    <View style={styles.container}>
      <View style={[styles.box, {backgroundColor}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 200,
    width: 200,
    borderRadius: 8,
  },
});

//truyen theo func
// const stylesS = p => {
//   StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     box: {
//       height: 200,
//       width: 200,
//       borderRadius: 8,
//     },
//   });
// };

export default BaiTapColor;
