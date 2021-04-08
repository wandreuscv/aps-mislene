import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

import logoImg from '../assets/logo.png';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={logoImg}
          style={styles.logoImg}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(28, 28, 33)',
    padding: 5,
  },
  logoImg: {
    width: 130,
    height: 50
  }
});
