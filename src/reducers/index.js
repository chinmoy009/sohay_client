import { combineReducers } from "redux";
import { productListReducer, productDetailsReducer } from "./productRefducer";
import {cartReducer} from './cartReducer';

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
})

export default reducer;