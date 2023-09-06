import * as constants from '../../utils/constant';

export default function initial(state = {}, action) {
  switch (action.type) {
    case constants.GET_DATA:
      return {
        ...state,
        newState: action.payload,
      };
    case constants.IS_DASHBOARD:
      return {
        ...state,
        isDashboard: action.payload,
      }
  }
  return state;
}
