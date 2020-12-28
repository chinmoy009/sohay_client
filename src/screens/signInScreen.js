import React from 'react';
import {Link} from 'react-router-dom';

class SignInScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    submitHandler = e => {
        e.preventDefault();    
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
                            <Link to="/register">Create new account</Link>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignInScreen;