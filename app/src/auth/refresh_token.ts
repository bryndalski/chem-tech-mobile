import axios from 'axios';
export async function refreshTokenRequest(
  refreshToken: string,
): Promise<{token: string}> {
  try {
    const params = new URLSearchParams({
      grant_type: 'refresh_token',
      client_id: `${process.env.AWS_COGNITO_CLIENT_ID}`,
      redirect_uri: `${process.env.AWS_COGNITO_REDIRECT_URI}`,
      refresh_token: refreshToken,
    });
    const {data} = await axios.post(
      `${process.env.refresh_token_url}`,
      params,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );
    return {token: data.access_token};
  } catch (error) {
    console.log(error);
    throw error;
  }
}
