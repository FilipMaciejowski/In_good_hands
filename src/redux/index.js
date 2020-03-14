import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { userReducer } from "./reducers/userReducer";
import { formDataReducer } from "./reducers/formDataReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  userData: userReducer,
  formData: formDataReducer
});

const middleWares = applyMiddleware(thunk, logger);

export const store = createStore(rootReducer, middleWares);
