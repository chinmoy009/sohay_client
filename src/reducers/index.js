import { combineReducers } from "redux";
import { productListReducer, productDetailsReducer } from "./productRefducer";
import {cartReducer} from './cartReducer';
import {userSignInReducer} from './userReducer'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignIn: userSignInReducer
})

export default reducer;