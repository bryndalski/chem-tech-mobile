import {View, StyleSheet, TextInput} from 'react-native';
import React, {forwardRef} from 'react';

interface CodeBlockProps {
  value: string | number;
  onChange: (value: string) => void;
}

export const CodeBlock = forwardRef(function CodeBlock(
  props: CodeBlockProps,
  ref: React.Ref<any>,
) {
  return (
    <View style={[styles.container, styles.containerError]}>
      <TextInput
        ref={ref}
        onChange={e => props.onChange(e.nativeEvent.text)}
        value={`${props.value}`}
        style={styles.text}
        keyboardType="numeric"
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: '#F6F6F6',
    width: 46,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerError: {},
  text: {
    fontFamily: 'Roboto',
    letterSpacing: 0.4,
    fontSize: 20,
    flex: 1,
    width: '100%',
    textAlign: 'center',
  },
});
