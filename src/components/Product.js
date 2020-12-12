import React from 'react';
import Rating from './Rating';
import {Link} from 'react-router-dom';

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
        <Link to={`/product/${product._id}`}>
            <img className="medium" src={product.image} alt="product"/>
        </Link>
        <div className="card-body">
            <Link to={`/product/${product._id}`}>
                <h2>{product.name}</h2>
            </Link>
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