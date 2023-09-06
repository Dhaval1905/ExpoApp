import Axios from 'axios';
import { BASE_URL } from '../utils/constant';
import { parseJwt } from '../utils/parseToken';
import { save } from '../utils/Storage';
import { apiInstance } from './index';
import NavigationService from '../constants/NavigationService';
import { navigationStrings } from '../constants';
import { removeTokens } from '../redux/actions/user';

export function setToken(token) {
  Object.assign(apiInstance.defaults.headers, {
    Authorization: `Bearer ${token}`,
  });
}
export function removeToken() {
  delete apiInstance.defaults.headers.Authorization;
}

export function getToken() {
  if (
    apiInstance.defaults.headers.Authorization &&
    apiInstance.defaults.headers.Authorization
      .toLowerCase()
      .indexOf("bearer") != -1
  ) {
    return apiInstance.defaults.headers.Authorization.split(" ")[1];
  }
  return "";
}
export async function handleRequest(request) {
  if (__DEV__) {
    // console.log('REQUEST', request);
  }

  let login_token = await getToken();
  if (login_token) {
    let decodedJwt = parseJwt(login_token);
    if ((Math.floor((new Date).getTime() / 1000)) >= decodedJwt?.exp - (6 * 60)) {
      await fetch(`${BASE_URL}refresh-token`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${login_token}`,
        },
      })
        .then(r => r.json())
        .then(async response => {
          if (response?.status === 1) {
            await setToken(response?.jwt_token);
            request.headers.Authorization = `Bearer ${response?.jwt_token}`;
          } else {
            await removeTokens();
            NavigationService.resetNavigation(navigationStrings.AUTHSTACK);
          }
        })
        .catch(e => {
          console.log(
            'renew_token_error 47---->',
            JSON.stringify(e),
          );
        });
      return request;
    }
  }
  return request;
}
export function handleResponse(value) {
  return value;
}
export async function handleApiError(error) {
  console.log('-------------errr',error?.response)
  if (Axios.isCancel(error)) {
    console.log('Canceled');
    throw error;
  }
  if (__DEV__) {
    // console.log('handleApiError------>', error);
  }
  if (!error.response) {
    throw error;
  }
  if (error.response.status === 401) {
    return;
  } else if (error.response.status === 500) {
    console.log('Server error has occurred. Please try again later');
    throw error;
  } else {
    // showToast(error.toString());
  }
  throw error;
}
