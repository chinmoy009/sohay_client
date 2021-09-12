import { combineReducers } from "redux";
import { productListReducer, productDetailsReducer } from "./productRefducer";
import {cartReducer} from './cartReducer';
import {userSignInReducer, userSignUpReducer, userDetaisReducer} from './userReducer'
import { orderCreateReducer, orderDetailsReducer, orderListReducer } from "./orderReducer";

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignIn: userSignInReducer,
    userSignUp: userSignUpReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderList: orderListReducer,
    userDetails: userDetaisReducer,
})

export default reducer;