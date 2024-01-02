import { combineReducers } from "redux";
import { productReducer } from "./productReducers";
import { cartReducers } from "./cartReducers";

const rootReducer = combineReducers({
  products: productReducer,
  carts: cartReducers,
});

export default rootReducer;
