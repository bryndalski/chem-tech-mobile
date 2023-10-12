import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserPool,
  CognitoUserSession,
  IAuthenticationDetailsData,
} from 'amazon-cognito-identity-js';
import {SetStorageTokens} from './set_secure_storage';
import EncryptedStorage from 'react-native-encrypted-storage';
import {StorageKeys} from 'src/Storage/StorageKeys.enum';

interface ILoginData {
  login: string;
  password: string;

  onMfaRequired: (codeDeliveryDetails: any) => void;
  onFailure: () => void;
  onSuccess: () => void;
  newPasswordRequired: (userAttributes: any) => void;
}

export const handleCognitoLogin = async (props: ILoginData) => {
  const userPool = new CognitoUserPool({
    UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID as string,
    ClientId: process.env.AWS_COGNITO_CLIENT_ID as string,
  });
  const authenticationData: IAuthenticationDetailsData = {
    Username: props.login,
    Password: props.password,
  };

  const authenticationDetails = new AuthenticationDetails(authenticationData);
  const userData = {
    Username: props.login,
    Pool: userPool,
  };
  const cognitoUser = new CognitoUser(userData);
  //Set user login in secure storage
  await EncryptedStorage.setItem(StorageKeys.USER_LOGIN, props.login);

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: (session: CognitoUserSession) => {
      SetStorageTokens({
        accessToken: session.getAccessToken().getJwtToken(),
        refreshToken: session.getRefreshToken().getToken(),
      });
    },
    onFailure: () => {
      props.onFailure();
    },

    mfaRequired: function () {
      props.onMfaRequired(cognitoUser);
    },
    newPasswordRequired: function () {
      props.newPasswordRequired(cognitoUser);
    },
  });
};
