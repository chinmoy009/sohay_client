import React from 'react';
import {addToCart} from '../actions/cartAction';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MessageBox from './../components/MessageBox';
import {Link} from 'react-router-dom';

class CartScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productId: this.props.match.params.id ? this.props.match.params.id : null,
            qty: this.props.location.search 
            ? Number(this.props.location.search.split("=")[1])
            : 1
        }
    }

    componentDidMount() {
        if(this.state.productId) {
            this.props.addToCart(this.state.productId, this.state.qty);
        }
    }


    removeFromCart = (productId) => {
        //Delete method
    }

    checkOutHandler = () => {
        this.props.history.push('/signin?redirect=shipping')
    }

    render() {
        return <div className="row top">
            <div className="col-2">
                <h1>Shopping cart</h1>
                {this.props.cartItems.length === 0 ? <MessageBox>
                    Cart is empty. <Link to = "/"> Go Shopping </Link>
                </MessageBox> : (
                    <ul>
                        {this.props.cartItems.map(item => {
                            return <li key={item.product}>
                                <div className="row">
                                    <div>
                                        <img src={'../'+item.image} alt={item.name} className="small"/>
                                    </div>
                                    <div className="min-30">
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </div>
                                    <div>
                                        <select value={item.qty} onChange={e => this.props.addToCart(item.product, Number(e.target.value))}>
                                            {
                                                [...Array(item.countInStock).keys()].map(x => (
                                                    <option key = {x + 1} value={x + 1}>{x + 1}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div>
                                        {item.price} Taka
                                    </div>
                                    <div>
                                        <button onClick = {this.removeFromCart(item.product)}>Delete</button>
                                    </div>
                                </div>
                            </li>
                        })}
                    </ul>
                )}
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <h2>
                                Subtotal ({this.props.cartItems.reduce((a, c) => a + c.qty, 0)} items): {this.props.cartItems.reduce((a, c) => a + c.price * c.qty, 0)} Taka
                            </h2>
                        </li>
                        <li>
                            <button type="button" onClick={this.checkOutHandler} className="primary block" disabled={this.props.cartItems.length == 0}>
                                Proceed to checkout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    }
}

CartScreen.propTypes = {
    addToCart: PropTypes.func.isRequired,
    cartItems: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
})

const mapDispatchToProps = {
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps) (CartScreen);