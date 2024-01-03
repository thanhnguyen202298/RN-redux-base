import fetch from 'isomorphic-fetch';
import {API_URL, API_PATH} from 'src/constant';
import {handleResponse, getOptions2} from '../../utilities';

export const fetchDataTest = (token) => {
  fetch('https://2bce67867e0345579894402725dd75e1.api.mockbin.io/', {
    ...getOptions2(token),
    method: 'get',
  }).then(handleResponse);
};
