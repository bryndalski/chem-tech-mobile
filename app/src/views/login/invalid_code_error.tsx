import {View, ImageBackground, StyleSheet, Text} from 'react-native';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const background = require('@images/lab-background.png');
import Wave from '@images/log-in-wafe.svg';
import {useTranslation} from 'react-i18next';
import {ButtonPrimary} from '@buttons/index';
import {ViewNames} from '@views/index';

export function InvalidCodeError({navigation}: {navigation: any}) {
  const {t} = useTranslation();
  return (
    <ImageBackground source={background} style={styles.image}>
      <View style={styles.loginContainer}>
        <Wave />
        <View style={styles.waveBox}>
          <Text style={styles.textTitle}>{t('badCode.title')}</Text>
          <Text style={styles.textSubtitle}>{t('badCode.subtitle')}</Text>
          <ButtonPrimary
            text={t('common.continue')}
            callback={function (): void {
              navigation.navigate(ViewNames.Login);
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  hereText: {
    textDecorationLine: 'underline',
  },

  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 300,
    height: '50%',
  },
  waveBox: {
    flex: 1,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  image: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    flex: 1,
  },
  textTitle: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 25,
    backgroundColor: 'white',
    height: 33,
    fontStyle: 'normal',
    fontWeight: 'bold',
    letterSpacing: 0.75,
  },
  textSubtitle: {
    color: '#676767',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '300',
    letterSpacing: 0.3,
  },
});
