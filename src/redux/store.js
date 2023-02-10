import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";
import logger from "redux-logger";
const middlewares = [thunk];
console.log(middlewares.push(logger));
const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares))
);
export default store;
