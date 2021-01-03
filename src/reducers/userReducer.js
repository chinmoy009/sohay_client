import {USER_SIGN_IN_SUCCESS, USER_SIGN_IN_FAIL, USER_SIGN_IN_REQUEST, USER_SIGN_OUT} from './../constants/userConstant';

const initialUserState = {
    loading: false,
    userInfo: {},
    error: null
}
export const userSignInReducer = (state = initialUserState, action) => {
    switch(action.type) {
        case USER_SIGN_IN_REQUEST:
            return {
                loading: true
            }
        case USER_SIGN_IN_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload
            }
        case USER_SIGN_IN_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case USER_SIGN_OUT:
            return {};
        default:
            return state;
    }
}