/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Text,
} from 'react-native';
import React, {useState} from 'react';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const background = require('@images/lab-background.png');
import Wave from '@images/log-in-wafe.svg';
import {useTranslation} from 'react-i18next';
import {ButtonPrimary} from '@buttons/index';
import {TextInputWithIcon} from 'src/components/inputs/text-input/TextInput';
import Email from '@images/email.svg';

export function SendEmail() {
  const {t} = useTranslation();
  const [email, setEmail] = useState<string>('');
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [isError, setIsError] = useState<boolean>(false);

  return (
    // <View style={styles.container}>
    <ImageBackground source={background} style={styles.image}>
      <View style={styles.loginContainer}>
        <Wave />
        <View style={styles.waveBox}>
          <View>
            <Text style={styles.textTitle}>{t('forgotPassword.title')}</Text>
            <Text style={styles.textSubtitle}>
              {t('forgotPassword.subtitle')}
            </Text>
          </View>
          <TextInputWithIcon
            icon={<Email />}
            error={isError}
            value={email}
            errorText={t('common.emailRequired')}
            onChange={value => setEmail(value as unknown as string)}
            placeholder={t('common.email')}
            autoComplete="email"
            secureTextEntryView={false}
          />

          <ButtonPrimary
            disabled={false}
            text={t('forgotPassword.sendEmail')}
            callback={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
          <SafeAreaView style={styles.inputContainer} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 400,
    height: '60%',
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
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '300',
    letterSpacing: 0.3,
  },

  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    gap: 20,
  },
});
