import { combineReducers } from "redux";
import { productListReducer, productDetailsReducer } from "./productRefducer";
import {cartReducer} from './cartReducer';
import {userSignInReducer, userSignUpReducer} from './userReducer'
import { orderCreateReducer, orderDetailsReducer } from "./orderReducer";

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignIn: userSignInReducer,
    userSignUp: userSignUpReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer
})

export default reducer;