/* eslint-disable no-console */
import {CognitoUser, CognitoUserPool} from 'amazon-cognito-identity-js';
import EncryptedStorage from 'react-native-encrypted-storage';
import {StorageKeys} from 'src/Storage/StorageKeys.enum';

export const resetNewPassword = async (newPass: string) => {
  try {
    const cognitouserLogin = await EncryptedStorage.getItem(
      StorageKeys.USER_LOGIN,
    );
    const userPool = new CognitoUserPool({
      UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID as string,
      ClientId: process.env.AWS_COGNITO_CLIENT_ID as string,
    });

    const cognitoUser = new CognitoUser({
      Username: cognitouserLogin as string,
      Pool: userPool,
    });
    cognitoUser.completeNewPasswordChallenge(
      newPass,
      {},
      {
        onSuccess: function (s) {
          console.log(s);
          // TODO Do something with the tokens
        },
        onFailure: function (err) {
          console.log(err);
          throw err;
        },
        mfaRequired: function (d: any) {
          console.log(d);
        },
      },
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
};
