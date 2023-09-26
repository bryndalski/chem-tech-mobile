import {View, ImageBackground, StyleSheet, Text} from 'react-native';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const background = require('@images/lab-background.png');

import Wave from '@images/log-in-wafe.svg';
export function Login() {
  return (
    // <View style={styles.container}>
    <ImageBackground source={background} style={styles.image}>
      <View style={styles.loginContainer}>
        <Wave />
        <View style={styles.waveBox}>
          <Text style={styles.textTitle}>Welcome</Text>
          <Text style={styles.textSubtitle}>Please log in</Text>
        </View>
      </View>
    </ImageBackground>
    // </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '65%',
  },
  waveBox: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  image: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingY: 10,
    flex: 1,
  },
  textTitle: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 25,
    height: 43,
    fontStyle: 'normal',
    fontWeight: 'bold',
    letterSpacing: 0.75,
  },
  textSubtitle: {
    color: '#676767',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '300',
    letterSpacing: 0.3,
  },
});