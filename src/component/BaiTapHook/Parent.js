import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import BaiTapHook from './index';
import useClock from './useClock';

const Parent = () => {
  const [showClock, setSetShowClock] = useState(true);

  const time = useClock();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
        <Text>Hide Clock</Text>
      </TouchableOpacity>
      {showClock && <BaiTapHook />}
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
export default Parent;
