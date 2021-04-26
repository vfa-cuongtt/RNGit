import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const App = () => {
  const shoe = [
    {
      id: 1,
      title: 'adidas',
      icon: require('./assets/shoe1.jpg'),
      subTitle: 'Doi giay moi mua',
      preView: require('./assets/shoe1.jpg'),
      backgroundColor: '#824671CC',
    },
    {
      id: 2,
      title: 'adidas',
      icon: require('./assets/shoe2.jpg'),
      subTitle: 'Doi nay dep ne',
      preView: require('./assets/shoe2.jpg'),
      backgroundColor: '#824671CC',
    },
    {
      id: 3,
      title: 'adidas',
      icon: require('./assets/shoe3.jpg'),
      subTitle: 'Lay doi nay ban ey',
      preView: require('./assets/shoe3.jpg'),
      backgroundColor: '#824671CC',
    },
  ];

  renderItem = () => {
    let item = shoe.map((item, index) => {
      //   <View key={index} style={styles.border}>
      //     <Image style={styles.icon} source={item.preView} />
      //     <View style={styles.textContent}>
      //       <Text style={styles.title}>{item.title}</Text>
      //       <Text style={styles.subTitle}>{item.subTitle}</Text>
      //     </View>
      //   </View>;
      <View key={item.id}>
        <Text>{item.subTitle}</Text>
      </View>;
    });
    console.log('Ahihi', item);
    return item;
  };

  return (
    <View style={styles.content}>
      <Image
        source={this.shoe.preView}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.border}>
        <Image style={styles.icon} source={this.shoe.preView} />
        <View style={styles.textContent}>
          <Text style={styles.title}>{this.shoe.title}</Text>
          <Text style={styles.subTitle}>{this.shoe.subTitle}</Text>
        </View>
      </View>
      {/* {this.renderItem()} */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#343434',
  },
  image: {
    // height: '100%',
    // width: '100%',
  },
  border: {
    backgroundColor: '#824671CC',
    width: '90%',
    height: 100,
    marginTop: 8,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  textContent: {
    flexBasis: '80%',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  subTitle: {
    color: '#fff',
    fontSize: 14,
  },
});
