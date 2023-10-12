import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const background = require('@images/lab-background.png');
import Wave from '@images/log-in-wafe.svg';
import {useTranslation} from 'react-i18next';
import {ButtonInlineText, ButtonPrimary} from '@buttons/index';
import {CodeInput} from 'src/components/inputs/code/code_input';
import {ViewNames} from '@views/index';

export function EnterCode({navigation, route}: {route: any; navigation: any}) {
  const {t} = useTranslation();
  const [buttonEnabled, setButtonEnabled] = useState<boolean>(false);
  const [code, setCode] = useState<string>('');
  const {showResendCode, codeProvider, cognitoUser} = route.params;
  return (
    <ImageBackground source={background} style={styles.image}>
      <KeyboardAvoidingView behavior="position" style={styles.full}>
        <View style={styles.loginContainer}>
          <Wave />
          <View style={styles.waveBox}>
            <View>
              <Text style={styles.textTitle}>{t('enterCode.enterCode')}</Text>
              <Text style={styles.textSubtitle}>
                {t('enterCode.enterCodeSubtitle', {codeProvider})}
              </Text>
            </View>

            <CodeInput
              setButtonEnabled={setButtonEnabled}
              submitFunction={function (importedCode: string): void {
                navigation.navigate(ViewNames.ResetPassword, {
                  cognitoUser,
                  code: importedCode,
                });
              }}
              error={false}
              setCode={setCode}
              runSubmitWhenValid={false}
            />
            {showResendCode && (
              <ButtonInlineText
                text={t('enterCode.resendCode')}
                callback={function (): void {}}
              />
            )}
            <ButtonPrimary
              disabled={!buttonEnabled}
              text={t('enterCode.confirmCode')}
              callback={function (): void {
                navigation.navigate(ViewNames.ResetPassword, {
                  cognitoUser,
                  code,
                });
              }}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

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
    paddingHorizontal: 20,
    paddingBottom: 30,
    gap: 30,
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
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '300',
    letterSpacing: 0.3,
  },
});
