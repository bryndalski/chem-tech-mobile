import EncryptedStorage from 'react-native-encrypted-storage';

interface IStorageUserSession {
  accessToken: string;
  refreshToken: string;
}

export async function SetStorageTokens({
  accessToken,
  refreshToken,
}: IStorageUserSession) {
  try {
    await EncryptedStorage.setItem('user_access_token', accessToken);
    await EncryptedStorage.setItem('user_refresh_token', refreshToken);
  } catch (error) {
    throw new Error('Failed to set tokens');
  }
}
