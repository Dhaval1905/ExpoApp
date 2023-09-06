import { apiInstance } from '../../httpClient';
import { removeToken, setToken } from '../../httpClient/ClientHelper';
import * as constants from '../../utils/constant';
// import { multiItemValue, readData, saveData } from '../../utils/storage';

export function getTransaction(data) {
    return async dispatch => {
        return await apiInstance
            .post(`transactions/list-posted-pending`, data)
            .then(res => {
                if (res?.status === 200) {
                    return dispatch({
                        type: constants.GETTRANSACTION,
                        payload: res?.data?.filteredData,
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
export function getTransaction1(data) {
    return async dispatch => {
        return await apiInstance
            .post(`transactions/list-posted-pending`, data)
            .then(res => {
                if (res?.status === 200) {
                    return dispatch({
                        type: constants.GETTRANSACTION1,
                        payload: res?.data?.filteredData,
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
export function getDashBoard() {
    return async dispatch => {
        return await apiInstance
            .post(`dashboard`, {})
            .then(res => {
                if (res?.status === 200) {
                    return dispatch({
                        type: constants.GETDASHBOARD,
                        payload: res?.data?.data,
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
export function getLicenseDetails() {
    return async dispatch => {
        return await apiInstance
            .get(`business/license/get?dummy=1`)
            .then(res => {
                if (res?.status === 200) {
                    return dispatch({
                        type: constants.GETLICENSE,
                        payload: res?.data?.data,
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


export async function getPdf(data) {
    try {
        const res = await apiInstance.post('transactions/detail/pdf',data);
        return res;
    } catch (err) {
        console.log('signUp_error--->', JSON.stringify(err?.response?.data));
        return err;
    }
}


export default {
    getTransaction,
    getTransaction1,
    getDashBoard,
    getPdf,
    getLicenseDetails
};
