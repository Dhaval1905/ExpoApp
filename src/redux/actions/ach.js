import axios from 'axios';
import { apiInstance } from '../../httpClient';
import { removeToken, setToken } from '../../httpClient/ClientHelper';
import * as constants from '../../utils/constant';
// import { multiItemValue, readData, saveData } from '../../utils/storage';

export async function achTransfer(userObj) {
    try {
        const res = await apiInstance.post('ach', userObj);
        return res.data;
    } catch (err) {
        console.log('signUp_error--->', JSON.stringify(err?.response?.data));
        return err;
    }
}
export async function getTransfer() {
    try {
        const res = await apiInstance.get('ach');
        return res.data?.card_products;
    } catch (err) {
        console.log('signUp_error--->', JSON.stringify(err?.response?.data));
        return err;
    }
}
export async function externalAccountAdd(userObj) {
    try {
        const res = await apiInstance.post('external-accounts/add', userObj);
        console.log('-------', res)
        return res;
    } catch (err) {
        console.log('signUp_error--->', JSON.stringify(err?.response?.data));
        return err;
    }
}
export async function externalAccountUpdate(userObj) {
    try {
        const res = await apiInstance.post('external-accounts/edit', userObj);
        console.log('-------', res)
        return res;
    } catch (err) {
        console.log('signUp_error--->', JSON.stringify(err?.response?.data));
        return err;
    }
}
export async function transferAch(userObj) {
    try {
        const res = await apiInstance.post('ach/send', userObj);
        console.log('-------', res)
        return res;
    } catch (err) {
        console.log('signUp_error--->', JSON.stringify(err?.response?.data));
        return err;
    }
}
export async function transferWire(userObj) {
    try {
        const res = await apiInstance.post('wire/send', userObj);
        console.log('-------', res)
        return res;
    } catch (err) {
        console.log('signUp_error--->', JSON.stringify(err?.response?.data));
        return err;
    }
}
export async function externalAccountGet(userObj) {
    try {
        console.log(apiInstance.defaults.headers)
        const res = await apiInstance.post('external-accounts/list', userObj);
        // console.log('-------', res)
        return res;
    } catch (err) {
        console.log('signUp_error--->', JSON.stringify(err?.response?.data));
        return err;
    }
}
export async function forgotPassWord(userObj) {
    try {
        const res = await apiInstance.post('forgot-password', userObj);
        // console.log('-------', res)
        return res;
    } catch (err) {
        console.log('signUp_error--->', JSON.stringify(err?.response?.data));
        return err?.response;
    }
}
export async function changePassWord(userObj) {
    try {
        const res = await apiInstance.post('change-password', userObj);
        // console.log('-------', res)
        return res;
    } catch (err) {
        console.log('signUp_error--->', JSON.stringify(err?.response?.data));
        return err?.response;
    }
}
export async function resetPassword(userObj) {
    try {
        const res = await apiInstance.post('reset-password', userObj);
        // console.log('-------', res)
        return res;
    } catch (err) {
        console.log('signUp_error--->', JSON.stringify(err?.response?.data));
        return err?.response;
    }
}
export async function getStatement(userObj) {
    try {
        const res = await apiInstance.post('statements/list', userObj);
        // console.log('-------', res)
        return res;
    } catch (err) {
        console.log('signUp_error--->', JSON.stringify(err?.response?.data));
        return err?.response;
    }
}
export async function getStatementById(userObj) {
    try {
        const res = await apiInstance.post('statements/get-by-id', userObj);
        // console.log('-------', res)
        return res;
    } catch (err) {
        return err?.response;
    }
}
export async function get_Platform_Fees() {
    try {
        const res = await apiInstance.get('get-platform-fees');
        // console.log('-------', res)
        return res;
    } catch (err) {
        return err?.response;
    }
}
export async function setCheque(data) {
    try {
        const res = await apiInstance.post('remote-check/create',data);
        // console.log('-------', res)
        return res;
    } catch (err) {
        return err?.response;
    }
}

export async function createDocument(formData) {
    try {
        const res = await apiInstance.post('document/create', formData,{
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }).then(response => {
            return response
          })
          .catch(error => {
            return error
          });
          return res
    } catch (err) {
        return err?.response;
    }
}
export async function createToken(formData) {
    try {
        const res = await apiInstance.post('external-accounts/create-link-token', formData).then(response => {
            return response
          })
          .catch(error => {
            return error
          });
          return res
    } catch (err) {
        return err?.response;
    }
}
export async function putToken(formData) {
    try {
        const res = await apiInstance.post('external-accounts/create-with-plaid', formData).then(response => {
            return response
          })
          .catch(error => {
            return error
          });
          return res
    } catch (err) {
        return err?.response;
    }
}

export async function supportTicketCreate(createObj) {
    try {
        const res = await apiInstance.post('support-ticket/create',createObj);
        return res.data;
    } catch (err) {
        console.log('signUp_error--->', JSON.stringify(err?.response?.data));
        return err;
    }
}
export async function updateLicense(createObj) {
    try {
        const res = await apiInstance.post('business/license/update',createObj);
        return res.data;
    } catch (err) {
        console.log('signUp_error--->', JSON.stringify(err?.response?.data));
        return err;
    }
}

export default {
    achTransfer,
    getTransfer,
    forgotPassWord,
    resetPassword,
    changePassWord,
    getStatement,
    getStatementById,
    createDocument,
    setCheque,
    createToken,
    putToken,
    supportTicketCreate
};
