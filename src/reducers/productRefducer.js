import  { PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS, 
    PRODUCT_LIST_FAIL, 
    PRODUCT_DETAILS_REQUEST, 
    PRODUCT_DETAILS_FAIL, 
    PRODUCT_DETAILS_SUCCESS } from "../constants/productConstants";

const initialState = {
    loading: false,
    products: []
}

export const productListReducer = (state = initialState, action) => {
    switch(action.type) {
        case PRODUCT_LIST_REQUEST: 
            return {
                ...state,
                loading: true
            };
        case PRODUCT_LIST_SUCCESS: 
            return {
                loading: false,
                products: action.payload && action.payload.length > 0 ? action.payload : []
            }
        case PRODUCT_LIST_FAIL:
            return {
                ...state, 
                loading: false,
                error: action.payload
            }
        default:
            return state;

    }
}

const initialProductDetailsState =  {
    product: {},
    loading: false
}

export const productDetailsReducer = (state = initialProductDetailsState, action) => {
    switch(action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case PRODUCT_DETAILS_SUCCESS:
            return {
                product: action.payload,
                loading: false
            }
        case PRODUCT_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}