import { createStore, applyMiddleware, combineReducers } from "redux";
import * as reducers from "./reducers/index";

import reduxThunk from "redux-thunk";
const middlewares = [
  reduxThunk,
];

let enhancer = applyMiddleware(...middlewares);

/**
 * @returns {Store} the redux store.
 */
export const configureStore = () => {
  const rootReducer = combineReducers(reducers);
  const store = createStore(rootReducer, enhancer);

  return store;
};
