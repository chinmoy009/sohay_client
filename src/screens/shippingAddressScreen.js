import React, { Component } from 'react'
import CheckoutSteps from './../components/checkoutSteps';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {saveShippingAddress} from '../actions/cartAction';

class ShippingAddressScreen extends Component {
    constructor(props) {
        super(props);
        if(!this.props.userInfo) {
            props.history.push("/signin");
        }
        this.formStateObjectFromProps();
    }

    formStateObjectFromProps() {
        this.state = {
            ...this.props
        }
    }
 
    submitHandler(e) {
        e.preventDefault();
        this.props.saveShippingAddress({
            fullName: this.state.shippingAddress.fullName,
            postalCode: this.state.shippingAddress.postalCode,
            address: this.state.shippingAddress.address,
            city: this.state.shippingAddress.city
        });
        this.props.history.push("/payment");
    }

    setFullName(fullName) {
        this.setState({ 
            ...this.state,
            shippingAddress: {
                ...this.state.shippingAddress,
                fullName: fullName
            }
        });
    }

    setPostalCode(postalCode) {
        this.setState({
            ...this.state,
            shippingAddress: {
                ...this.state.shippingAddress,
                postalCode: postalCode
            }
        });
    }

    setAddress(address) {
        this.setState({
            ...this.state,
            shippingAddress: {
                ...this.state.shippingAddress,
                address: address
            }
        });
    }

    setCity(city) {
        this.setState({
            ...this.state,
            shippingAddress: {
                ...this.state.shippingAddress,
                city: city
            }
        });
    }

    render() {
        return (
            <div>
                <CheckoutSteps step1 step2></CheckoutSteps>       
                 <form className="form" onSubmit={(e) => this.submitHandler(e)}>
                     <div>
                         <h1>Shipping Address</h1>
                     </div>
                    <div>
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" id="fullName" placeholder="Enter full name" value={this.state.shippingAddress.fullName} onChange={(e) => this.setFullName(e.target.value)} required/>
                    </div>
                    <div>
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" placeholder="Enter address" value={this.state.shippingAddress.address} onChange={(e) => this.setAddress(e.target.value)} required/>
                    </div>
                    <div>
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" placeholder="Enter city" value={this.state.shippingAddress.city} onChange={(e) => this.setCity(e.target.value)} required/>
                    </div>
                    <div>
                        <label htmlFor="postalCode">Postal Code</label>
                        <input type="text" id="postalCode" placeholder="Enter Postal Code" value={this.state.shippingAddress.postalCode} onChange={(e) => this.setPostalCode(e.target.value)} required/>
                    </div>
                    <div>
                        <label/>
                        <button type="submit" className="primary">Continue</button>
                    </div>
                </form>    
            </div>
        )
    }
}

ShippingAddressScreen.propTypes = {
    saveShippingAddress: PropTypes.func.isRequired,
    userInfo: PropTypes.object,
    shippingAddress: PropTypes.object
}

const mapStateToProps = state => ({
    shippingAddress: state.cart.shippingAddress,
    userInfo: state.userSignIn.userInfo,
    shipppingAddress: state.cart.shippingAddress
});

const mapDispatchToProps = {
    saveShippingAddress
}

export default connect(mapStateToProps, mapDispatchToProps) (ShippingAddressScreen);
