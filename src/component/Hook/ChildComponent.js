// import React, {useEffect} from 'react';
// import {View, Text} from 'react-native';
// const ChildComponent = () => {
//   useEffect(() => {
//     console.log('didMount child ');
//     const interval = setInterval(() => {
//       console.log('Run');
//     }, 500);
//     return () => {
//       console.log('componentWillUnmount');
//     };
//   }, []);

//   return (
//     <View>
//       <Text>Child Component</Text>
//     </View>
//   );
// };

// export default ChildComponent;

import React, {useEffect, memo} from 'react';
import {View, Text} from 'react-native';
const ChildComponent = () => {
  console.log('child component render');
  return (
    <View>
      <Text>Child Component</Text>
    </View>
  );
};

export default memo(ChildComponent);
