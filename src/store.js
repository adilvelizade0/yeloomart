import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import cartReducer from "./reducers/cart.reducer.js";

const loggerMiddleware = createLogger();

const store = createStore(
  combineReducers({
    cart: cartReducer,
  }),
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

export default store;
