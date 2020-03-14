import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { userReducer } from "./reducers/userReducer";
<<<<<<< HEAD
import { formDataReducer } from "./reducers/formDataReducer";
import thunk from "redux-thunk";
=======
import { formDataReducer } from "./reducers/formDataReducer"
import thunk from 'redux-thunk';
>>>>>>> we_help

const rootReducer = combineReducers({
  userData: userReducer,
  formData: formDataReducer
});

const middleWares = applyMiddleware(thunk, logger);

export const store = createStore(
  rootReducer, middleWares
);
