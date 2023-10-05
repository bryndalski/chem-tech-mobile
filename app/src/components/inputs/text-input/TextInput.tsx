import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TextInputWithIconInterface} from './TextInput.interface';
import EyeCrossed from '@images/eye-crossed.svg';
import EyeOpened from '@images/eye.svg';
export function TextInputWithIcon(props: TextInputWithIconInterface) {
  const [showPassword, setShowPassword] = useState<boolean>(
    props.secureTextEntry || props.secureTextEntryView || false,
  );
  useEffect(() => {
    if (props.secureTextEntryView) setShowPassword(true);
    else if (props.secureTextEntry) setShowPassword(true);
    else setShowPassword(false);
  }, [props.secureTextEntryView, props.secureTextEntry]);
  return (
    <SafeAreaView>
      <View style={[styles.container, props.error && styles.containerError]}>
        {props.icon}
        <TextInput
          {...props}
          secureTextEntry={showPassword}
          style={styles.text}
        />
        {typeof props.secureTextEntryView === 'boolean' &&
          props.secureTextEntry &&
          (showPassword ? (
            <EyeCrossed
              style={styles.icon}
              onPress={() => setShowPassword(p => !p)}
            />
          ) : (
            <EyeOpened
              style={styles.icon}
              onPress={() => setShowPassword(p => !p)}
            />
          ))}
      </View>
      {props.error && (
        <Text style={styles.errorText}>{props.error && props.errorText}</Text>
      )}
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
  },

  icon: {
    alignSelf: 'center',
  },
});
