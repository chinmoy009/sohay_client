import {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import CheckOutSteps from '../components/checkoutSteps';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {Link} from 'react-router-dom';
import {getOrderDetails} from './../actions/orderAction'

class OrderScreen extends Component {
    constructor(props) {
        super(props);
    }

    static getDerivedStateFromProps(props, state) {
        const {order} = props.orderDetails;
        return {
            shippingAddress: props.shippingAddress,
            paymentMethod: props.paymentMethod,
            orderDetails: props.orderDetails,
            order: order
        }
    }

    componentDidMount() {
        this.props.getOrderDetails(this.props.match.params.id);
    }

    render() {
        return this.state.orderDetails.loading? (<LoadingBox></LoadingBox>): 
        this.state.orderDetails.error? (<MessageBox variant="danger">{this.state.orderDetails.error}</MessageBox>): 
        (
            <div>
                <h1>Order {this.state.orderDetails.order._id}</h1>
                <div className="row top">
                    <div className="col-2">
                        <ul>
                            <li>
                                <div className="card card-body">
                                    <h2>Shipping</h2>
                                    <p>
                                        <strong>Name:</strong> {this.state.order.shippingAddress.firstname} <br/>
                                        <strong>Address:</strong> {this.state.order.shippingAddress.address}.
                                        {this.state.shippingAddress.postalCode}, {this.state.order.shippingAddress.city}
                                    </p>
                                    {this.state.isDelivered ? (<MessageBox variant="success">Delivered at {this.state.order.deliveredAt}</MessageBox>)
                                    : (<MessageBox variant="danger">Not Delivered</MessageBox>)}
                                </div>
                            </li>
                            <li>
                                <div className="card card-body">
                                    <h2>Payment</h2>
                                    <p>
                                        <strong>Method:</strong> {this.state.order.paymentMethod} 
                                    </p>
                                    {this.state.isPaid ? (<MessageBox variant="success">Paid at {this.state.order.paidAt}</MessageBox>)
                                    : (<MessageBox variant="danger">Not Paid</MessageBox>)}
                                </div>
                            </li> 
                            <li>
                                <div className="card card-body">
                                    <h2>Order Items</h2>
                                    <ul>
                                        {this.state.order.orderItems.map(item => {
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
                                        <div>{this.state.order.itemsPrice}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>Shipping:</div>
                                        <div>{this.state.order.shippingPrice}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>Tax:</div>
                                        <div>{this.state.order.taxPrice}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>
                                            <strong>Order Total:</strong>
                                        </div>
                                        <div>
                                            <strong>{this.state.order.totalPrice}</strong>
                                        </div>
                                    </div>
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
    orderDetails: state.orderDetails
});

const mapDispatchToProps = {
    getOrderDetails
};

export default connect(mapStateToProps, mapDispatchToProps) (OrderScreen);