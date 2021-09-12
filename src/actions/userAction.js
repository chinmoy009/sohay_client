import Axios from 'axios';
import { 
    USER_SIGN_IN_FAIL, 
    USER_SIGN_IN_REQUEST, 
    USER_SIGN_IN_SUCCESS, 
    USER_SIGN_OUT, 
    USER_SIGN_UP_FAIL, 
    USER_SIGN_UP_REQUEST,
    USER_SIGN_UP_SUCCESS, 
    USER_SIGN_UP_CLEAR_STATE,
    LOAD_USER_SIGN_IN_INFO, 
    GET_USER_DETAILS_REQUEST,
    GET_USER_DETAILS_FAIL,
    GET_USER_DETAILS_SUCCESS} from "../constants/userConstant"

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
    localStorage.removeItem('savedShippingAddress');
    dispatch({
        type:USER_SIGN_OUT
    });
}

export const signUp = (userInfo) => async (dispatch) => {
    dispatch({
        type: USER_SIGN_UP_REQUEST,
        payload: userInfo
    })
    try {
        const {data} = await Axios.post('/users/signup', userInfo);
        dispatch({
            type: USER_SIGN_UP_SUCCESS,
            payload: data
        });
        dispatch({
            type: USER_SIGN_IN_SUCCESS,
            payload: data
        })
        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch(error) {
        console.log('error: ' + error);
        dispatch({
            type: USER_SIGN_UP_FAIL,
            payload: error.response && error.response.data.message 
                ? error.response.data.message : error.message
        })
    }
}

export const clearSignUpScreenErr = () => dispatch => {
    dispatch({
        type: USER_SIGN_UP_CLEAR_STATE,
        payload: null
    })
}

export const getSignedInUserInfo = () => dispatch => {
    dispatch({
        type: LOAD_USER_SIGN_IN_INFO,
        payload: null
    })
}

export const getUserDetails = () => async(dispatch, getState) => {
    dispatch({
        type: GET_USER_DETAILS_REQUEST
    });
    const {userSignIn : {userInfo}} = getState();
    try {
        const {data} = await Axios.get(`/users/${userInfo._id}`);
        dispatch({
            type: GET_USER_DETAILS_SUCCESS,
            payload: data
        });
    } catch(error) {
        const message = error.response && error.response.message 
            ? error.response.message : error.message;
        dispatch({
            type: GET_USER_DETAILS_FAIL,
            payload: message
        });
    }

};

