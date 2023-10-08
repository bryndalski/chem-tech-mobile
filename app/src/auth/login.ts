import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserPool,
  CognitoUserSession,
  IAuthenticationDetailsData,
} from 'amazon-cognito-identity-js';
import {SetStorageTokens} from './set_secure_storage';

interface ILoginData {
  login: string;
  password: string;

  onMfaRequired: (codeDeliveryDetails: any) => void;
  onFailure: () => void;
  onSuccess: (session: CognitoUserSession) => void;
  newPasswordRequired: (userAttributes: any) => void;
}

export const handleCognitoLogin = (props: ILoginData) => {
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
  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: (session: CognitoUserSession) => {
      // console.log('LOGIN SUCCESS');
      // console.log(session);
      // console.log(session.getAccessToken().getJwtToken());
      // console.log(session.getRefreshToken().getToken());
      // console.log({
      //   accessToken: session.getAccessToken().getJwtToken(),
      //   refreshToken: session.getRefreshToken().getToken(),
      // });
      SetStorageTokens({
        accessToken: session.getAccessToken().getJwtToken(),
        refreshToken: session.getRefreshToken().getToken(),
      });
    },
    onFailure: (err: any) => {
      console.log(err);
      console.log('BAD LOGIN');
      props.onFailure();
    },

    mfaRequired: function () {},
    newPasswordRequired: function (userAttributes) {
      console.log('NEW PASSWORD REQUIRED');
      console.log(userAttributes);
    },
  });
};
