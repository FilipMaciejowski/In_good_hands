import {
  ADD_FORM_DATA_DEPLOYED,
  ADD_FORM_DATA_PENDING,
  ADD_FORM_DATA_REJECTED,
  FETCH_ORGANIZATIONS_FETCHED,
  FETCH_ORGANIZATIONS_PENDING,
  FETCH_ORGANIZATIONS_REJECTED,
  
} from "../types";

const initialState = {
  status: "FETCHED",
  error: {},
  organizations: []
};

export const formDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FORM_DATA_PENDING:
      return {
        ...state,
        status: "PENDING"
      };
    case ADD_FORM_DATA_DEPLOYED:
      return {
        ...state,
        status: "FETCHED"
      };
    case ADD_FORM_DATA_REJECTED:
      return {
        ...state,
        status: "REJECTED",
        error: payload
      };
    case FETCH_ORGANIZATIONS_PENDING:
      return {
        ...state,
        status: "PENDING"
      };
    case FETCH_ORGANIZATIONS_FETCHED:
      return {
        ...state,
        status: "FETCHED",
        organizations: [...state.organizations, ...payload]
      };
    case FETCH_ORGANIZATIONS_REJECTED:
      return {
        ...state,
        status: "REJECTED",
        error: payload
      };
    default:
      return state;
  }
};
