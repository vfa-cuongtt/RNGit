import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ChildComponent from './ChildComponent';

const LearnHook = () => {
  const [number, setNumber] = useState(0);
  const [userName, setUserName] = useState();

  const onPress = () => {
    setNumber(number + 1);
  };

  useEffect(() => {
    console.log('componentDidMount');
  }, []);

  useEffect(() => {
    console.log('componentDidUpdate with number');
  }, [number]);
  console.log('render');

  return (
    <View style={styles.container}>
      <Text> Learn Hook </Text>
      <Text>Number: {number}</Text>
      <Text>UserName: {userName}</Text>
      {number > 2 ? null : <ChildComponent />}
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Count Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setUserName('Hello');
        }}>
        <Text>Set Name</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'green',
    borderRadius: 8,
  },
});

export default LearnHook;
