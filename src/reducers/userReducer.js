import {
    USER_SIGN_IN_SUCCESS, 
    USER_SIGN_IN_FAIL, 
    USER_SIGN_IN_REQUEST, 
    USER_SIGN_OUT, 
    USER_SIGN_UP_REQUEST, 
    USER_SIGN_UP_SUCCESS, 
    USER_SIGN_UP_FAIL,
    USER_SIGN_UP_CLEAR_STATE,
    LOAD_USER_SIGN_IN_INFO, 
    GET_USER_DETAILS_FAIL,
    GET_USER_DETAILS_REQUEST,
    GET_USER_DETAILS_SUCCESS} from './../constants/userConstant';

const initialUserState = {
    loading: false,
    userInfo: null,
    error: null
}
export const userSignInReducer = (state = initialUserState, action) => {
    switch(action.type) {
        case USER_SIGN_IN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_SIGN_IN_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload,
                error: null
            }
        case USER_SIGN_IN_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case USER_SIGN_OUT:
            return {};
        case LOAD_USER_SIGN_IN_INFO:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}

export const userSignUpReducer = (state = initialUserState, action) => {
    switch(action.type) {
        case USER_SIGN_UP_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_SIGN_UP_SUCCESS:
            return {
                ...state,
                loading: false,
                userInfo: action.payload
            }
        case USER_SIGN_UP_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case USER_SIGN_UP_CLEAR_STATE:
            return {
                ...state,
                loading: false,
                error: null,
                userInfo: null,
            }
        default:
            return state;
    }
}

export const userDetaisReducer = (state = {
    userDetails: {},
    error: null
}, action) => {
    switch(action.type) {
        case GET_USER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_USER_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                userDetails: action.payload
            }
        case GET_USER_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}