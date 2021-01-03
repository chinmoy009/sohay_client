import Axios from 'axios';
import { USER_SIGN_IN_FAIL, USER_SIGN_IN_REQUEST, USER_SIGN_IN_SUCCESS, USER_SIGN_OUT } from "../constants/userConstant"

export const signIn = (email, password) => async (dispatch) => {
    dispatch({
        type: USER_SIGN_IN_REQUEST,
        payload: {email, password}
    });
    try {
        const {data} = await Axios.post('/users/signin', {email, password});
        dispatch({
            type: USER_SIGN_IN_SUCCESS,
            payload: data
        });
        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch(error) {
        dispatch({
            type: USER_SIGN_IN_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message : error.message
        })
    }

}

export const signOut = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('cartItems');
    dispatch({
        type:USER_SIGN_OUT
    });
}