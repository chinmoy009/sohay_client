import React from 'react';
import {Link} from 'react-router-dom';
import {signIn} from './../actions/userAction';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

class SignInScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            redirect: this.props.location.search ? this.props.location.search.split('=')[1]: '/'
        }
    }

    submitHandler = e => {
        e.preventDefault(); 
        this.props.signIn(this.state.email, this.state.password);   
        
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

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.submitHandler}>
                    <div>
                        <h1> Sign In </h1>
                    </div>
                    {this.props.loading && <LoadingBox></LoadingBox>}
                    {this.props.error && <MessageBox variant="danger">{this.props.error}</MessageBox>}
                    <div>
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" placeholder="Enter Email" required onChange={ e => this.setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter Password" required onChange={ e => this.setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <label/>
                        <button className="primary" type="submit">
                            Sign In
                        </button>
                    </div>
                    <div>
                        <label></label>
                        <div>
                            New customer? {' '}
                            <Link to={`/signup?redirect=${this.state.redirect}`}>Create new account</Link>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

SignInScreen.propTypes = {
    userInfo: PropTypes.object,
    signIn: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    userInfo: state.userSignIn.userInfo,
    loading: state.userSignIn.loading,
    error: state.userSignIn.error
})

const mapDispatchToProps = {
    signIn
}

export default connect(mapStateToProps, mapDispatchToProps) (SignInScreen);