import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {ButtonWelcome} from '@buttons/button_welcome/button_welcome';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ViewNames} from '@views/index';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const background = require('@images/lab-background.png');
export function Welcome({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  const {t} = useTranslation();

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
            navigation.navigate(ViewNames.Login);
          }}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
