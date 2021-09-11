import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_RESET, ORDER_CREATE_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_LIST_MINE_FAIL, ORDER_LIST_MINE_REQUEST, ORDER_LIST_MINE_SUCCESS } from "../constants/orderConstant";

export const orderCreateReducer = (state = {
    loading: false,
    success: false,
    error: null
}, action) => {
    switch(action.type) {
        case ORDER_CREATE_REQUEST:
            return {
                loading: true
            };
        case ORDER_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                order: action.payload   
            };
        case ORDER_CREATE_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case ORDER_CREATE_RESET:
            return {};
        default:
            return state;
    }
} 


export const orderDetailsReducer = (state = {
    loading: true,
    order: {},
    error: null
}, action) => {
    switch(action.type) {
        case ORDER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true 
            }
        case ORDER_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                order: action.payload
            }
        case ORDER_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}


export const orderListReducer = (state = {
    loading : false,
    orderList: [],
    error: null
}, action) => {
    switch(action.type) {
        case ORDER_LIST_MINE_REQUEST:
            return state;
        case ORDER_LIST_MINE_SUCCESS:
            return {
                ...state,
                orderList: action.payload,
                loading: false
            }
        case ORDER_LIST_MINE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}