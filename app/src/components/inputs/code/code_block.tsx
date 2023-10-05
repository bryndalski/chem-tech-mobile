import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function CodeBlock() {
  return (
    <View style={[styles.container, styles.containerError]}>
      <Text style={styles.text}>2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    width: 36,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerError: {},
  text: {
    fontFamily: 'Roboto',
    letterSpacing: 0.4,
    fontSize: 20,
  },
});
