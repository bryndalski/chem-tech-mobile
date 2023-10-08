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
import {useFormik} from 'formik';
import {loginValidationSchema} from '@forms/index';
import {handleCognitoLogin} from '@auth/index';
import {ViewNames} from '@views/VIewNames.enum';

export function Login({navigation}: {navigation: any}) {
  const {t} = useTranslation();
  const [invalidCredentialError, setInvalidCredentialError] =
    useState<boolean>(false);

  const loginForm = useFormik({
    validationSchema: loginValidationSchema,
    initialValues: {
      email: '',
      password: '',
    },

    onSubmit: values => {
      handleCognitoLogin({
        login: values.email,
        password: values.password,
        onFailure: () => {
          setInvalidCredentialError(true);
        },
        onMfaRequired: function (): void {
          navigation.navigate(ViewNames.EnterCode, {});
        },
        onSuccess: function (): void {
          navigation.navigate(ViewNames.Home);
        },
        newPasswordRequired: function (cognitoUser): void {
          navigation.navigate('ResetPassword', {
            CognitoUser: cognitoUser,
            isPasswordReset: true,
          });
        },
      });
    },
  });

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
              error={
                (loginForm.touched.email &&
                  typeof loginForm.errors.email !== 'undefined') ||
                invalidCredentialError
              }
              value={loginForm.values.email}
              errorText={
                invalidCredentialError
                  ? t('login.invalidCredentials')
                  : loginForm.errors.email
              }
              onChange={event => {
                setInvalidCredentialError(false);
                loginForm.setFieldTouched('email', true);
                loginForm.setFieldValue('email', event.nativeEvent.text);
              }}
              placeholder={t('common.email')}
              autoComplete="email"
              secureTextEntryView={false}
              autoCapitalize="none"
            />
            <TextInputWithIcon
              autoCapitalize="none"
              error={invalidCredentialError}
              icon={<PasswordIcon />}
              autoComplete="current-password"
              value={loginForm.values.password}
              onChange={event => {
                setInvalidCredentialError(false);
                loginForm.setFieldValue('password', event.nativeEvent.text);
              }}
              errorText={t('login.invalidCredentials')}
              placeholder={t('common.password')}
              secureTextEntry={true}
              secureTextEntryView={true}
            />
            <ButtonInlineText
              text={'forgot password?'}
              callback={function (): void {
                navigation.navigate(ViewNames.ForgotPassword, {});
              }}
            />
          </SafeAreaView>
          <ButtonPrimary
            disabled={!(loginForm.isValid && loginForm.touched.email)}
            text={t('common.login')}
            callback={function (): void {
              loginForm.handleSubmit();
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
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '300',
    letterSpacing: 0.3,
  },
});
