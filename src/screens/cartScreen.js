import React from 'react';
import {addToCart} from '../actions/cartAction';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class CartScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productId: this.props.match.params.id,
            qty: this.props.location.search 
            ? Number(this.props.location.search.split("=")[1])
            : 1
        }
    }

    componentDidMount() {
        this.props.addToCart(this.state.productId, this.state.qty);
    }

    render() {
        return <div>
            <h1>Cart Screen</h1>
            <p>
                Add to Cart: ProductId: {this.state.productId} Qty: {this.state.qty}
            </p>
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