import {
  SET_USER_FETCHED,
  SET_USER_PENDING,
  SET_USER_REJECTED,
  REMOVE_USER_DATA,
} from "../types";

const initialState = {
  user: {},
  logged: false,
  status: "PENDING"
};

export const userReducer = (
  state = initialState, {type, payload}
) => {
  switch (type) {
    case SET_USER_PENDING:
      return {
        ...state,
        status: "PENDING"
      };
    case SET_USER_FETCHED:
      return {
        ...state,
        user: payload,
        logged: true,
        status: 'FETCHED'
      };
    case SET_USER_REJECTED:
      return {
        ...state,
        status: 'REJECTED'
      };
    case REMOVE_USER_DATA:
      return {
        ...state,
        logged: false,
        user: {}
      };
    default:
      return state;
  }
};
