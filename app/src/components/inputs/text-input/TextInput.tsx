import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {TextInputWithIconInterface} from './TextInput.interface';
export function TextInputWithIcon(props: TextInputWithIconInterface) {
  return (
    <SafeAreaView>
      <View style={[styles.container, props.error && styles.containerError]}>
        {props.icon}
        <TextInput {...props} style={styles.text} />
      </View>
      <Text style={styles.errorText}>{props.error && props.errorText}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
  },
  containerError: {
    borderColor: 'red',
  },
  text: {
    flex: 1,
  },
  errorText: {
    color: 'red',
    fontFamily: 'Roboto',
    letterSpacing: 0.4,
    marginTop: 5,
    minHeight: 20,
  },

  icon: {
    backgroundColor: 'white',
  },
});
