import React from 'react';
import Rating from './Rating';

class Product extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let product = this.props.product;
        let rating = {
            rating: product.rating,
            numberOfReviews: product.numberOfReviews
        };
        return <div className="card">
        <img className="medium" src={product.image} alt="product"/>
        <div className="card-body">
            <a href={`/product/${product._id}`}>
                <h2>{product.name}</h2>
            </a>
            <Rating rating={rating}/>
            <div>
                <h2>{product.brand}</h2>
            </div>
            <div className="price">
                {product.price}
            </div>
        </div> 
    </div>
        
    }
}

export default Product;