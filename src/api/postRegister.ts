import axios from 'axios';
import { buildUrl } from './apiHelper';

export type registrationPayload = {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  quizId: string | null;
};

export type registrationResponse = {
  access_token: string;
  message: string;
  user: {
    email: string;
    first_name: string;
    last_name: string;
    user_uuid: string;
  };
};

export const postRegister = async ({
  firstName,
  lastName,
  quizId,
  password,
  email,
}: registrationPayload): Promise<registrationResponse> => {
  const url = buildUrl('/register');

  try {
    // Make request for token
    const request = await axios({
      method: 'post',
      url,
      data: {
        firstName,
        lastName,
        quizId,
        password,
        email,
      },
    });
    return request.data;
  } catch (err) {
    throw err;
  }
};
