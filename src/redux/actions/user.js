import { apiInstance } from '../../httpClient';
import { removeToken, setToken } from '../../httpClient/ClientHelper';
import * as constants from '../../utils/constant';
import { multiItemValue, save, saveString } from '../../utils/Storage'

export async function signUp(userObj) {
  try {
    const res = await apiInstance.post('user/create', userObj);
    return res.data;
  } catch (err) {
    console.log('signUp_error--->', JSON.stringify(err?.response?.data));
    return err;
  }
}

export function logIn(data) {
  return async dispatch => {
    return await apiInstance
      .post(`login`, data)
      .then(async (res) => {
        if (res?.data?.status === 1) {
          await setToken(res?.data?.jwt_token);
          await save(constants.LOGIN_TOKEN, res?.data);
          dispatch({
            type: constants.LOGIN,
            payload: res?.data,
          });
          return res
        } else if (res?.data?.status === 2) {
          return res
        } else {
          return res
        }
      })
      .catch(e => {
        console.log('----------error', e)
        return e?.response
      });
  };
}

export function getAccountInfo() {
  return async dispatch => {
    return await apiInstance
      .get(`accounts/${constants.checking_account_id}`)
      .then(res => {
        if (res?.status === 200) {
          // setToken(res.data.result.token);
          // saveData(constants.LOGIN_TOKEN, res.data.result.token);
          // saveData(constants.REFRESH_TOKEN, res.data.result.refreshToken);
          return dispatch({
            type: constants.GET_ACCOUNT_INFO,
            payload: res.data,
          });
        } else {
          return res
        }
      })
      .catch(e => {
        return e
      });
  };
}


export function showLoader(data) {
  return async dispatch => {
    return dispatch({
      type: constants.SHOW_LOADER,
      payload: data,
    });
  };
}

export const removeTokens = async () => {
  removeToken();
  await multiItemValue([
    constants.LOGIN_TOKEN,
    constants.REFRESH_TOKEN,
  ]);
};

export async function verifyOtp(createObj) {
  try {
      const res = await apiInstance.post('verify-otp',createObj);
      return res.data;
  } catch (err) {
      console.log('signUp_error--->', JSON.stringify(err?.response?.data));
      return err;
  }
}
export async function resendOTP() {
  try {
      const res = await apiInstance.get('resend-otp-mail');
      return res.data;
  } catch (err) {
      console.log('signUp_error--->', JSON.stringify(err?.response?.data));
      return err;
  }
}
export async function getDisclosureLink(data) {
  try {
      const res = await apiInstance.post('disclosures-pages',data);
      return res.data;
  } catch (err) {
      console.log('signUp_error--->', JSON.stringify(err?.response?.data));
      return err;
  }
}

export default {
  signUp,
  logIn,
};
