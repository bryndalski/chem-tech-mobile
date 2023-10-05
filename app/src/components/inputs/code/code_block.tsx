import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function CodeBlock() {
  return (
    <View style={[styles.container, styles.containerError]}>
      <Text>1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    width: 36,
    height: 45,
  },
  containerError: {},
});
