import React, { Component } from 'react'
import CheckOutSteps from '../components/checkoutSteps';
import {savePaymentMethod} from './../actions/cartAction';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class PaymentMethodScreen extends Component {
    constructor(props) {
        super(props);
        if(!this.props.shippingAddress.address) {
            this.props.history.push("/shipping");
        }

        if(!this.props.paymentMethod) {
            this.setPaymentMethod("bkash");
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            paymentMethod: props.paymentMethod
        };
    }

    submitHandler(e) {
        e.preventDefault();
        this.props.savePaymentMethod(this.state.paymentMethod);
        this.props.history.push("/placeorder");
    }

    setPaymentMethod(paymentMethod) {
        this.setState({
            ...this.state,
            paymentMethod: paymentMethod
        });
    }

    render() {
        return (
            <div>
                <CheckOutSteps step1 step2 step3></CheckOutSteps>
                <form className="form" onSubmit={(e) => this.submitHandler(e)}>
                    <div>
                        <h1>Payment Method</h1>
                    </div>
                    <div onChange={(e) => this.setPaymentMethod(e.target.value)}>
                        <div>
                            <input type="radio" id="bkash" value="bkash" name="paymentMethod" required checked></input>
                            <label htmlFor="bkash">Bkash</label>
                        </div>
                        <div>
                            <input type="radio" id="nagad" value="nagad" name="paymentMethod" required ></input>
                            <label htmlFor="nagad">Nagad</label>
                        </div>
                    </div>
                    <div>
                        <button className="primary" type="submit">Continue</button>
                    </div>
                </form>
            </div>
        )
    }
}

PaymentMethodScreen.propTypes = {
    savePaymentMethod: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    paymentMethod: state.cart.paymentMethod,
    shippingAddress: state.cart.shippingAddress,
})

const mapDispatchToProps = {
    savePaymentMethod
}


export default connect(mapStateToProps, mapDispatchToProps) (PaymentMethodScreen);

