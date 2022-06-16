import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;