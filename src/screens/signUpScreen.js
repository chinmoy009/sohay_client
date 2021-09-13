import React from 'react';
import {Link} from 'react-router-dom';
import {signUp, clearSignUpScreenErr} from './../actions/userAction';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import UserProfileComponent from '../components/UserProfileComponet';
import MessageBox from '../components/MessageBox';
import { applyMiddleware } from 'redux';
import { SIGN_UP_PAGE_NAME } from '../constants/pageConstant';


class SignUpScreen extends React.Component {
    constructor(props) {
        super(props);
        this.errorClearedInitially = false;
        this.redirect = this.props.location.search ? this.props.location.search.split('=')[1]: '/';
    }

    getUserDetailsObj() {
        return {
            email: "",
            password: "",
            username: "",
            firstname: "",
            lastname: "",
            phoneNumber: "",
            address: "",
            confirmPassword: ""
        }
    }


    getPageDetailsObj() {
        return {
            pageName: SIGN_UP_PAGE_NAME,
            pageHeader: "Create Account",
            redirect: this.redirect,
            submitButtonText: "Sign Up" 
        }
    }

    submitHandler = (e, userState) => {
        e.preventDefault();
        if(userState.password !== userState.confirmPassword) {
            alert("Password and confirm password do not match");
        } else {
            let {email, password, username, firstname, lastname, phoneNumber, address} = userState;
            this.props.signUp({email, password, username, firstname, lastname, phoneNumber, address});   
        }
        
    }


    componentDidMount() {
        if(!this.errorClearedInitially) {
            this.props.clearSignUpScreenErr();
            this.errorClearedInitially = true;
        }
    }

    componentDidUpdate() {
        if(this.props.userInfo) {
            this.props.history.push(this.redirect);
        }
    }

    render() {
        let userDetails = this.getUserDetailsObj();
        let pageDetails = this.getPageDetailsObj();
        return (
            <div>
                <UserProfileComponent userDetails={userDetails} pageDetails={pageDetails} submitHandler={this.submitHandler}></UserProfileComponent>
            </div>
        )
    }
}

SignUpScreen.propTypes = {
    userInfo: PropTypes.object,
    loading: PropTypes.bool,
    error: PropTypes.string,
    signUp: PropTypes.func.isRequired,
    clearSignUpScreenErr: PropTypes.func
}

const mapStateToProps = state => ({
    userInfo: state.userSignUp.userInfo,
    loading: state.userSignUp.loading,
    error: state.userSignUp.error
})

const mapDispatchToProps = {
    signUp,
    clearSignUpScreenErr
}

export default connect(mapStateToProps, mapDispatchToProps) (SignUpScreen);

