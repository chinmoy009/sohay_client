import React from 'react';

class CartScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const productId = this.props.match.params.id;
        const qty = this.props.location.search 
            ? Number(this.props.location.search.split("=")[1])
            : 1;
        return <div>
            <h1>Cart Screen</h1>
            <p>
                Add to Cart: ProductId: {productId} Qty: {qty}
            </p>
        </div>
    }
}

export default CartScreen;