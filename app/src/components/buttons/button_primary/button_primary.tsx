import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from 'src/assets/colors/colors.enum';
interface ButtonPrimaryProps {
  text: string;
  callback: () => void;
  disabled?: boolean;
}

export function ButtonPrimary(props: ButtonPrimaryProps) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        props.disabled ? styles.color_disabled : styles.color_enabled,
      ]}
      onPress={props.callback}
      disabled={props.disabled}>
      <Text
        style={[
          styles.text,
          props.disabled ? styles.text_disabled : styles.text_enabled,
        ]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    minHeight: 50,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },
  color_enabled: {
    backgroundColor: Colors.primary_blue,
  },
  color_disabled: {
    backgroundColor: Colors.white,
    borderColor: Colors.primary_blue,
    borderWidth: 2,
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'bold',
    letterSpacing: 0.6,
  },
  text_disabled: {
    color: Colors.primary_blue,
  },
  text_enabled: {
    color: Colors.white,
  },
});
