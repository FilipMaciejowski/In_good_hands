import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { userReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({
  userData: userReducer
});

const middleWares = applyMiddleware(logger);

export const store = createStore(rootReducer, middleWares);
