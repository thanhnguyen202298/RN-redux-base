import fetch from 'isomorphic-fetch';

import {API_PATH, API_URL} from 'src/constants';
import {handleResponse, getOptions} from '../../utilities';

export const loginApi = (username, password) => {
  const formData = new URLSearchParams();
  formData.append('username', username);
  formData.append('password', password);
  return fetch('https://21e91f2f7cec47a0b1f2a3ef98cc18a0.api.mockbin.io/', {
    ...getOptions(),
    method: 'post',
    // body: JSON.stringify({ username, password }),
    body: formData,
  }).then(handleResponse);
};
