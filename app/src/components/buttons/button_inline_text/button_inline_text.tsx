import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
interface ButtonPrimaryProps {
  text: string;
  callback: () => void;
}

export function ButtonInlineText(props: ButtonPrimaryProps) {
  return (
    <TouchableOpacity style={[styles.container]} onPress={props.callback}>
      <Text style={[styles.text]}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  text: {
    color: '#000',
    textAlign: 'right',
    fontFamily: 'Roboto',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '300',
    letterSpacing: 0.3,
    textDecorationLine: 'underline',
  },
});
