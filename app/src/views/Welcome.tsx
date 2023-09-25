import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {ButtonWelcome} from '@buttons/button_welcome/button_welcome';
import {Colors} from 'react-native/Libraries/NewAppScreen';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const background = require('@images/lab-background.png');
export default function Welcome() {
  const {t} = useTranslation();
  console.log(process.env.APP_NAME);
  console.log(t('welcome.title'));
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.image}>
        <View style={styles.text_container}>
          <Text style={styles.title}>
            {t('welcome.title', {app_name: process.env.APP_NAME})}
          </Text>
          <Text style={styles.subtitle}>{t('welcome.subtitle')}</Text>
        </View>

        <ButtonWelcome
          text={t('common.continue')}
          callback={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  subtitle: {
    fontFamily: 'Roboto-light',
    color: Colors.white,
    fontSize: 15,
    letterSpacing: 0.45,
  },
  text_container: {
    marginTop: 0,
  },
  title: {
    fontFamily: 'Roboto-bold',
    fontSize: 25,
    color: Colors.white,
    letterSpacing: 0.75,
  },
  image: {
    paddingHorizontal: 10,
    paddingVertical: 40,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingY: 10,
    flex: 1,
  },
});
