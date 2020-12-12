import React from 'react';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {detailsProduct} from './../actions/productAcition'


class ProductScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            qty: 1
        }
    }

    componentDidMount() {
        this.props.detailsProduct(this.props.match.params.id);
    }

    setQty = (e) => {
        this.setState({
            ...this.state,
            qty: e.target.value
        });
    }

    addToCart = (e) => {
        this.props.history.push(`/cart/${this.props.product._id}?qty=${this.state.qty}`);
    }

    render() {
        let product = this.props.product;
        if(!product) {
            return <div>Product not found</div>
        }
        let rating = {
            rating: product.rating,
            numberOfReviews: product.numberOfReviews
        }
        return <div>
            {this.props.loading ? <LoadingBox></LoadingBox> 
                : this.props.error ? <MessageBox variant="danger">{this.props.error}</MessageBox>
                : (<div>
                    <Link to="/">Back To Result</Link>
                    <div className="row top"> 
                        <div className="col-2">
                            <img className="large" src={'../'+product.image} alt={product.name}></img>
                        </div>
                        <div className="col-1">
                            <ul>
                                <li>
                                    <h1>{product.name}</h1>
                                </li>
                                <li>
                                    <Rating rating={rating}/>
                                </li>
                                <li>
                                    Price: {product.price}
                                </li>
                                <li>
                                    Description:
                                    <p>{product.description}</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-1">
                            <div class="card card-body">
                                <ul>
                                    <li>
                                        <div className="row">
                                            <div>Price:</div>
                                            <div className="price">{product.price}</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row">
                                            <div>Status:</div>
                                            <div >
                                                {product.countInStock > 0 ? <span className="success">In Stock</span> 
                                                    : <span className="error">Out Of Stock</span>}
                                            </div>
                                        </div>
                                    </li>
                                    {
                                        product.countInStock > 0 && (
                                            <>
                                                <li>
                                                    <div className="row">
                                                        <div>Quantity</div>
                                                        <div>
                                                            <select value={this.state.qty} onChange={e => this.setQty(e)}>
                                                                {
                                                                    [...Array(product.countInStock).keys()].map(x => (
                                                                        <option key = {x + 1} value={x + 1}>{x + 1}</option>
                                                                    ))
                                                                }
                                                            </select>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <button onClick={this.addToCart} className="primary block">Add to Cart</button>
                                                </li>
                                            </>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>   
                </div>    
            )}
        </div>
    }
}

ProductScreen.propTypes = {
    detailsProduct: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    error: PropTypes.object
}

const mapStateToProps = state => ({
    product: state.productDetails.product,
    loading: state.productDetails.loading,
    error: state.productDetails.error
});

const mapDispatchToProps = {
    detailsProduct
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductScreen);