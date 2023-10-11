import {
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const background = require('@images/lab-background.png');
import Wave from '@images/log-in-wafe.svg';
import {useTranslation} from 'react-i18next';
import {ButtonPrimary} from '@buttons/index';
import {TextInputWithIcon} from 'src/components/inputs/text-input/TextInput';
import PasswordIcon from '@images/lock.svg';
import {ResetPasswordSchema} from '@forms/index';
import {useFormik} from 'formik';
import {SetStorageTokens} from '@auth/index';
import {CognitoUserSession} from 'amazon-cognito-identity-js';
import {ViewNames} from '@views/index';

export function SetNewPasswords({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const {t} = useTranslation();
  const {cognitoUser, isPasswordReset} = route.params;
  const resetPasswordForm = useFormik({
    validationSchema: ResetPasswordSchema,
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    onSubmit: values => {
      if (!cognitoUser) return;
      if (isPasswordReset) {
        cognitoUser.completeNewPasswordChallenge(
          values.password,
          {},
          {
            onSuccess: function (session: CognitoUserSession): void {
              SetStorageTokens({
                accessToken: session.getAccessToken().getJwtToken(),
                refreshToken: session.getRefreshToken().getToken(),
              });
            },
            onFailure: function (error: any): void {
              // eslint-disable-next-line no-console
              console.error({
                message: 'Error completing new password challenge',
                error: error,
              });
            },
          },
        );
      } else {
        cognitoUser.confirmPassword(route.params.code, values.password, {
          onSuccess() {
            navigation.navigate(ViewNames.PasswordChangedConfirm);
          },
          onFailure() {
            navigation.navigate(ViewNames.InvalidCodeError);
          },
        });
      }
    },
  });

  return (
    <ImageBackground source={background} style={styles.image}>
      <KeyboardAvoidingView behavior="position" style={styles.full}>
        <View style={styles.loginContainer}>
          <Wave />
          <View style={styles.waveBox}>
            <View>
              <Text style={styles.textTitle}>{t('resetPassword.title')}</Text>
              <Text style={styles.textSubtitle}>
                {t('resetPassword.subtitle')}
              </Text>
            </View>
            <SafeAreaView style={styles.inputContainer}>
              <TextInputWithIcon
                autoCapitalize="none"
                error={
                  resetPasswordForm.touched.password &&
                  typeof resetPasswordForm.errors.password !== 'undefined'
                }
                icon={<PasswordIcon />}
                value={resetPasswordForm.values.password}
                onChange={event => {
                  resetPasswordForm.setFieldTouched('password');
                  resetPasswordForm.setFieldValue(
                    'password',
                    event.nativeEvent.text,
                  );
                }}
                errorText={resetPasswordForm.errors.password}
                placeholder={t('common.password')}
                secureTextEntry={true}
                secureTextEntryView={true}
              />
              <TextInputWithIcon
                autoCapitalize="none"
                error={
                  resetPasswordForm.touched.confirmPassword &&
                  typeof resetPasswordForm.errors.confirmPassword !==
                    'undefined'
                }
                icon={<PasswordIcon />}
                value={resetPasswordForm.values.confirmPassword}
                onChange={event => {
                  resetPasswordForm.setFieldTouched('confirmPassword');
                  resetPasswordForm.setFieldValue(
                    'confirmPassword',
                    event.nativeEvent.text,
                  );
                }}
                errorText={resetPasswordForm.errors.confirmPassword}
                placeholder={t('resetPassword.confirmPasswordPlaceholder')}
                secureTextEntry={true}
                secureTextEntryView={true}
              />
            </SafeAreaView>

            <ButtonPrimary
              disabled={
                !(
                  resetPasswordForm.isValid &&
                  resetPasswordForm.touched.password &&
                  resetPasswordForm.touched.confirmPassword
                )
              }
              text={t('resetPassword.setupPassword')}
              callback={function (): void {
                resetPasswordForm.handleSubmit();
              }}
            />
            <SafeAreaView style={styles.inputContainer} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 450,
  },
  waveBox: {
    flex: 1,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 30,
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
