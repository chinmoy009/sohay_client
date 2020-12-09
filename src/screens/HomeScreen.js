import React from 'react';
import {data} from '../data';
import Product from '../components/Product';
import axios from 'axios';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products : [],
            loading : false,
            error: false
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        try {
            this.setLoading(true);
            const {data} = await axios.get('/products');
            this.setLoading(false);
            this.setProducts(data);
        } catch(error) {
            this.setError(error.message);
            this.setLoading(false);
        }
    }

    setProducts = (data) => {
        this.setState({
            products: data.products
        });
    }

    setLoading = (loading) => {
        this.setState({
            ...this.state,
            loading: loading
        })
    }

    setError = (error) => {
        this.setState({
            ...this.state,
            error : error
        })
    }

    render() {
        let productCards = this.state.products.map(product => {
            return <Product key={product._id} product={product}/>
        });
        return <div>
            {this.state.loading ? <LoadingBox></LoadingBox> 
                : this.state.error ? <MessageBox variant="danger">{this.state.error}</MessageBox>
                : (<div className="row center">
                    {productCards}
                </div>
            )}
        </div>
    }
}

export default HomeScreen;