import {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import CheckOutSteps from '../components/checkoutSteps';
import {Link} from 'react-router-dom';

class PlaceOrderScreen extends Component {
    constructor(props) {
        super(props);
        if(!this.props.paymentMethod) {
            this.props.history.push("/payment")
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            shippingAddress: props.shippingAddress,
            paymentMethod: props.paymentMethod,
            cartItems: props.cartItems
        }
    }

    componentDidMount() {
        this.derivePricingValuesFromCartItems();
    }

    toPrice(num) {
        return Number(num.toFixed(2));
    }

    derivePricingValuesFromCartItems() {
        let itemsPrice = this.toPrice(this.state.cartItems.reduce((a, c) => a + c.qty * c.price , 0));
        let shippingPrice = itemsPrice > 500 ? 50 : 0;
        let taxPrice = this.toPrice(0.15 * itemsPrice);
        let totalPrice = itemsPrice + shippingPrice + taxPrice;
        this.setState({
            ...this.state,
            itemsPrice,
            shippingPrice,
            taxPrice,
            totalPrice
        });
    }

    placeOrder(e) {
        //TODO: 
    }

    render() {
        return (
            <div>
                <CheckOutSteps step1 step2 step3 step4></CheckOutSteps>
                <div className="row top">
                    <div className="col-2">
                        <ul>
                            <li>
                                <div className="card card-body">
                                    <h2>Shipping</h2>
                                    <p>
                                        <strong>Name:</strong> {this.state.shippingAddress.firstname} <br/>
                                        <strong>Address:</strong> {this.state.shippingAddress.address}.
                                        {this.state.shippingAddress.postalCode}, {this.state.shippingAddress.city}
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="card card-body">
                                    <h2>Payment</h2>
                                    <p>
                                        <strong>Method:</strong> {this.state.paymentMethod} 
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="card card-body">
                                    <h2>Order Items</h2>
                                    <ul>
                                        {this.state.cartItems.map(item => {
                                            return <li key={item.product}>
                                                <div className="row">
                                                    <div>
                                                        <img src={'../'+item.image} alt={item.name} className="small"/>
                                                    </div>
                                                    <div className="min-30">
                                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                                    </div>
                                                    <div>
                                                        {item.qty} x {item.price} = {item.qty * item.price} Taka
                                                    </div>
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-1">
                        <div className="card card-body">
                            <ul>
                                <li>
                                    <h2>Order Summary</h2>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>Items:</div>
                                        <div>{this.state.itemsPrice}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>Shipping:</div>
                                        <div>{this.state.shippingPrice}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>Tax:</div>
                                        <div>{this.state.taxPrice}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>
                                            <strong>Order Total:</strong>
                                        </div>
                                        <div>
                                            <strong>{this.state.totalPrice}</strong>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <button type="button" onClick={(e) => this.placeOrder(e)} className="primary block" disabled={this.state.cartItems.length == 0}>
                                        Place Order
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    shippingAddress: state.cart.shippingAddress,
    paymentMethod: state.cart.paymentMethod,
    cartItems: state.cart.cartItems
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps) (PlaceOrderScreen);