import {StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import CodeBlock from './code_block';

export default class CodeInput extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CodeBlock />
        <CodeBlock />
        <CodeBlock />
        <CodeBlock />
        <CodeBlock />
        <CodeBlock />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
