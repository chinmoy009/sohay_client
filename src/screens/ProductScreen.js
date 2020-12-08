import react from 'react';
import {data} from '../data';
import Rating from '../components/Rating';
import {Link} from 'react-router-dom';


function ProductScreen(props) {
    let product = data.products.find(product => product._id === props.match.params.id);
    if(!product) {
        return <div>Product not found</div>
    }
    let rating = {
        rating: product.rating,
        numberOfReviews: product.numberOfReviews
    }
    return <div>
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
                        <li>
                            <button className="primary block">Add to Cart</button>
                        </li>
                    </ul>
                </div>
            </div>
         </div>   
    </div>    
}
export default ProductScreen;