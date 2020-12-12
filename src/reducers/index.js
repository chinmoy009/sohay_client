import { combineReducers } from "redux";
import { productListReducer, productDetailsReducer } from "./productRefducer";

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
})

export default reducer;