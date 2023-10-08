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
import {useFormik} from 'formik';
import {isEmail} from '@forms/index';
import {CognitoUserPool, CognitoUser} from 'amazon-cognito-identity-js';
import {useNavigation} from '@react-navigation/native';
import {ViewNames} from '@views/index';
export function ForgotPassword() {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const [verificationError, setVerificationError] = useState<boolean>(false);
  const resetEmail = useFormik({
    validationSchema: isEmail,
    initialValues: {
      email: '',
    },

    onSubmit: values => {
      const userPool = new CognitoUserPool({
        UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID as string,
        ClientId: process.env.AWS_COGNITO_CLIENT_ID as string,
      });

      const cognitoUser = new CognitoUser({
        Username: values.email,
        Pool: userPool,
      });

      cognitoUser.forgotPassword({
        onSuccess: function () {
          // successfully initiated reset password request
          navigation.navigate(ViewNames.EmailSent as unknown as never);
        },
        onFailure: function () {
          setVerificationError(true);
        },
        //Optional automatic callback
        inputVerificationCode: function () {
          navigation.navigate(
            ViewNames.EmailSent as unknown as never,
            {
              cognitoUser,
            } as any,
          );

          // cognitoUser.confirmPassword(verificationCode, newPassword, {
          //   onSuccess() {
          //     console.log('Password confirmed!');
          //   },
          //   onFailure(err) {
          //     console.log('Password not confirmed!');
          //   },
          // });
        },
      });
    },
  });

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
            autoCapitalize="none"
            icon={<Email />}
            error={
              typeof resetEmail.errors.email !== 'undefined' ||
              verificationError
            }
            value={resetEmail.values.email}
            errorText={
              verificationError
                ? t('common:emailNotExist')
                : t('common.emailRequired')
            }
            onChange={value => {
              setVerificationError(false);
              resetEmail.setFieldValue('email', value.nativeEvent.text);
            }}
            placeholder={t('common.email')}
            autoComplete="email"
            secureTextEntryView={false}
          />

          <ButtonPrimary
            disabled={
              typeof resetEmail.errors.email !== 'undefined' ||
              resetEmail.values.email === ''
            }
            text={t('forgotPassword.sendEmail')}
            callback={function (): void {
              resetEmail.handleSubmit();
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
    fontSize: 12,
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
