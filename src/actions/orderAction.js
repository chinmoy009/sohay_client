import Axios from 'axios';
import { CART_EMPTY } from '../constants/cartConstant';
import { 
    ORDER_CREATE_FAIL, 
    ORDER_CREATE_REQUEST, 
    ORDER_CREATE_RESET, 
    ORDER_CREATE_SUCCESS, 
    ORDER_DETAILS_FAIL, 
    ORDER_DETAILS_REQUEST, 
    ORDER_DETAILS_SUCCESS,
    ORDER_LIST_MINE_REQUEST,
    ORDER_LIST_MINE_SUCCESS,
    ORDER_LIST_MINE_FAIL
 } from "../constants/orderConstant"

export const createOrder = order => async(dispatch, getState) => {
    dispatch({
        type: ORDER_CREATE_REQUEST,
        payload: order 
    });
    try {
        const {userSignIn: { userInfo}} = getState();
        const {data} = await Axios.post('/orders', order, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            }
        });
        dispatch({
            type: ORDER_CREATE_SUCCESS,
            payload: data.order
        });
        dispatch({
            type: CART_EMPTY 
        });
        localStorage.removeItem("cartItems");
    } catch(error) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const resetOrder = () => dispatch => {
    dispatch({
        type: ORDER_CREATE_RESET
    })
}

export const getOrderDetails = orderId => async (dispatch, getState) => {
    dispatch({
        type: ORDER_DETAILS_REQUEST,
        payload: orderId
    })
    try {
        const {userSignIn: {userInfo}} = getState();
        const {data} = await Axios.get(`/orders/${orderId}`, {
            headers: {
                authorization: `Bearer ${userInfo.token}`
            }
        });
        dispatch({
            type: ORDER_DETAILS_SUCCESS,
            payload: data
        })
    } catch(error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload: message
        });
    }
}


export const getOrderList = () => async(dispatch, getState) => {
    dispatch({
        type: ORDER_LIST_MINE_REQUEST,
    });
    const { userSignIn : {userInfo}} = getState();
    try {
        const {data} = await Axios.get('/orders/mine', {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            }
        });
        dispatch({
            type: ORDER_LIST_MINE_SUCCESS,
            payload: data
        });
    } catch(error) {
        const message = error.response && error.response.data.message
        ? error.response.data.message : error.message;
        dispatch({
            type: ORDER_LIST_MINE_FAIL,
            payload: message
        });
    }
}