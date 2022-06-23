import client from '../api/client';
import { createAccountEndpoint } from '../api/endpoints';

const createAccountAsync = async (name, email, password, id) => {

  try {
    const data = await client.post(createAccountEndpoint,
      {
        name: name,
        email: email,
        password: password,
        appID: id,
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    );

    return data;

  } catch (err) {
    return{error:err}
  }

};

export default createAccountAsync;
