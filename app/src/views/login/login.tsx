import {View, ImageBackground, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const background = require('@images/lab-background.png');
import Email from '@images/email.svg';
import Wave from '@images/log-in-wafe.svg';
import {TextInputWithIcon} from 'src/components/inputs/text-input/TextInput';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTranslation} from 'react-i18next';
import PasswordIcon from '@images/lock.svg';
import {ButtonInlineText, ButtonPrimary} from '@buttons/index';
export function Login() {
  const [login, setLogin] = useState<string>('');
  const {t} = useTranslation();
  // eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
  const [isError, setIsError] = useState<boolean>(true);
  return (
    <ImageBackground source={background} style={styles.image}>
      <View style={styles.loginContainer}>
        <Wave />
        <View style={styles.waveBox}>
          <View>
            <Text style={styles.textTitle}>{t('common.welcome')}</Text>
            <Text style={styles.textSubtitle}>
              {t('login.welcomeSusbtitle')}
            </Text>
          </View>

          <SafeAreaView style={styles.inputContainer}>
            <TextInputWithIcon
              icon={<Email />}
              error={isError}
              value={login}
              errorText={t('common.emailRequired')}
              onChange={value => setLogin(value as unknown as string)}
              placeholder="123"
              autoComplete="email"
              secureTextEntryView={true}
            />
            <TextInputWithIcon
              icon={<PasswordIcon />}
              autoComplete="current-password"
              value={login}
              error={isError}
              errorText={t('login.invalidCredentials')}
              onChange={value => setLogin(value as unknown as string)}
              placeholder="123"
              secureTextEntry={true}
            />
            <ButtonInlineText
              text={'forgot password?'}
              callback={function (): void {
                throw new Error('Function not implemented.');
              }}
            />
          </SafeAreaView>

          <ButtonPrimary
            disabled={false}
            text={t('common.login')}
            callback={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '70%',
    minHeight: 500,
  },
  waveBox: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  inputContainer: {
    display: 'flex',
    gap: 10,
  },

  image: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingY: 10,
    flex: 1,
  },
  textTitle: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 25,
    height: 43,
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
});
