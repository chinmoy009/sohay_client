import { combineReducers } from "redux";
import { productListReducer } from "./productRefducer";

const reducer = combineReducers({
    productList: productListReducer
})

export default reducer;