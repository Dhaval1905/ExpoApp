import SimpleToast from 'react-native-simple-toast';


export const BASE_URL = 'https://dev.rethinkfi.com/api/'
export const APP_TOKEN = 'd52970d4-702e-4e95-96aa-b6e2edaaabf0'
export const BusinessId = '9e15b936-f2bd-4fe0-9cd7-557e3a21c70b'
export const checking_account_id = '8a6c1563-94de-4de9-b879-a2f8c8c40f64'

export const LOGIN_TOKEN = 'LOGIN_TOKEN';
export const SIGN_OUT = 'SIGN_OUT';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';

export const SIGN_UP = 'SIGN_UP';
export const LOGIN = 'LOGIN';
export const GETTRANSACTION = 'GETTRANSACTION';
export const GETDASHBOARD = 'GETDASHBOARD';
export const GETLICENSE = 'GETLICENSE';
export const GETTRANSACTION1 = 'GETTRANSACTION1';
export const GETCARD = 'GETCARD';
export const SHOW_LOADER = 'SHOW_LOADER';
export const GET_ACCOUNT_INFO = 'GET_ACCOUNT_INFO';
export const GET_CARD_DETAILS = 'GET_CARD_DETAILS';
export const ACH_TRANSFER = 'ACH_TRANSFER';
export const IS_DASHBOARD = 'IS_DASHBOARD'

export const showToast = val => {
  // show.show(val, Toast.LONG);
  SimpleToast.show(val, SimpleToast.LONG)
};