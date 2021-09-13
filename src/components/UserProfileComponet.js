import React from 'react';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import {Link} from 'react-router-dom';
import { SIGN_UP_PAGE_NAME } from '../constants/pageConstant';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    initiateStateForRegForm() {
        this.state = {
            email: this.props.userDetails.email,
            password: this.props.userDetails.email,
            username: this.props.userDetails.email,
            firstname: this.props.userDetails.email,
            lastname: this.props.userDetails.email,
            phoneNumber: this.props.userDetails.email,
            address: this.props.userDetails.email,
            confirmPassword: this.props.userDetails.email
        }
    }

    submitHandler = e => {
        this.props.submitHandler(e, this.state);
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
                        <h1> {this.props.pageDetails.pageHeader} </h1>
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
                    {this.props.pageDetails.pageName == SIGN_UP_PAGE_NAME && (
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Enter Password" required onChange={ e => this.setPassword(e.target.value)}/>
                        </div>
                    )}
                    {this.props.pageDetails.pageName == SIGN_UP_PAGE_NAME && (
                        <div>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" id="confirmPassword" placeholder="Enter Password Again" required onChange={ e => this.setConfirmPassword(e.target.value)}/>
                        </div>
                    )}
                    <div>
                        <label/>
                        <button className="primary" type="submit">
                            {this.props.pageDetails.submitButtonText}
                        </button>
                    </div>
                    {this.props.pageDetails.pageName == SIGN_UP_PAGE_NAME && (
                        <div>
                            <label></label>
                            <div>
                                Already have an account? {' '}
                                <Link to={`/signin?redirect=${this.props.pageDetails.redirect}`}>Sign In</Link>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        )
    }
}

export default UserProfile;