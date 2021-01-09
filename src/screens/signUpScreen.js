import React from 'react';
import {Link} from 'react-router-dom';
import {signUp, clearSignUpScreenErr} from './../actions/userAction';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { applyMiddleware } from 'redux';

class SignUpScreen extends React.Component {
    constructor(props) {
        super(props);
        this.initiateStateForRegForm();
        this.errorClearedInitially = false;
    }

    initiateStateForRegForm() {
        this.state = {
            email: "",
            password: "",
            username: "",
            firstname: "",
            lastname: "",
            phoneNumber: "",
            address: "",
            confirmPassword: "",
            redirect: this.props.location.search ? this.props.location.search.split('=')[1]: '/'
        }
    }

    submitHandler = e => {
        e.preventDefault();
        if(this.state.password !== this.state.confirmPassword) {
            alert("Password and confirm password do not match");
        } else {
            let {email, password, username, firstname, lastname, phoneNumber, address} = this.state;
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
            this.props.history.push(this.state.redirect);
        }
    }

    setEmail(value) {
        this.setState({
            ...this.state,
            email: value
        })
    }

    setPassword(value) {
        this.setState({
            ...this.state,
            password: value
        })
    }

    setFirstname(value) {
        this.setState({
            ...this.state,
            firstname: value
        })
    }

    setLastname(value) {
        this.setState({
            ...this.state,
            lastname: value
        })
    }

    setUsername(value) {
        this.setState({
            ...this.state,
            username: value
        })
    }

    setPhoneNumber(value) {
        this.setState({
            ...this.state,
            phoneNumber: value
        })
    }

    setAddress(value) {
        this.setState({
            ...this.state,
            address: value
        })
    }

    setConfirmPassword(value) {
        this.setState({
            ...this.state,
            confirmPassword: value
        })
    }

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.submitHandler}>
                    <div>
                        <h1> Create Account </h1>
                    </div>
                    {this.props.loading && <LoadingBox></LoadingBox>}
                    {this.props.error && <MessageBox variant="danger">{this.props.error}</MessageBox>}
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" placeholder="Enter UserName" required onChange={ e => this.setUsername(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" placeholder="Enter Email" required onChange={ e => this.setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" id="firstname" placeholder="Enter First Name"  onChange={ e => this.setFirstname(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" id="lastname" placeholder="Enter Last Name"  onChange={ e => this.setLastname(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="text" id="phoneNumber" placeholder="Enter Phone Number" required onChange={ e => this.setPhoneNumber(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" placeholder="Enter Address" required onChange={ e => this.setAddress(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter Password" required onChange={ e => this.setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" placeholder="Enter Password Again" required onChange={ e => this.setConfirmPassword(e.target.value)}/>
                    </div>
                    <div>
                        <label/>
                        <button className="primary" type="submit">
                            Sign Up
                        </button>
                    </div>
                    <div>
                        <label></label>
                        <div>
                            Already have an account? {' '}
                            <Link to={`/signin?redirect=${this.state.redirect}`}>Sign In</Link>
                        </div>
                    </div>
                </form>
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

