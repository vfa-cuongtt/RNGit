import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useClock from './useClock';
// const formatTime = date => {
//   const hour = `${date.getHours()}`.padStart(2, '0');
//   const minutes = `${date.getMinutes()}`.padStart(2, '0');
//   const seconds = `${date.getSeconds()}`.padStart(2, '0');
//   return `${hour}:${minutes}:${seconds}`;
// };

const BaiTapHook = () => {
  //   const [time, setTime] = useState('');

  //   useEffect(() => {
  //     const clockInterval = setInterval(() => {
  //       const now = new Date();
  //       const newTime = formatTime(now);
  //       setTime(newTime);
  //     }, 1000);

  //     return () => {
  //       clearInterval(clockInterval);
  //     };
  //   }, []);

  const time = useClock();

  return (
    <View style={styles.container}>
      <Text>Clock</Text>
      <Text>Timer: {time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BaiTapHook;
