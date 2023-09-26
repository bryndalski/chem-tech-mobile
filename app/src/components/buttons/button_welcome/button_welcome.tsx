import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

interface ButtonWelcomeProps {
  text: string;
  callback: () => void;
}

export function ButtonWelcome(props: ButtonWelcomeProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.callback}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 20,
    minHeight: 50,
    margin: 10,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },

  text: {
    fontFamily: 'Roboto-bold',
    letterSpacing: 0.03,
    color: '#000000',
    textAlign: 'center',
    fontSize: 20,
  },
});
