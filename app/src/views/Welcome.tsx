import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const background = require('@images/lab-background.png');
export default function Welcome() {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.image}>
        <Text>{t('welcome')}</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  image: {
    flex: 1,
  },
});
