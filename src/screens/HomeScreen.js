import React from 'react';
import PropTypes from 'prop-types';
import Product from '../components/Product';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import {listProducts} from './../actions/productAcition';
import {connect} from 'react-redux'

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.listProducts();
    }

    render() {
        let productCards = this.props.products.map(product => {
            return <Product key={product._id} product={product}/>
        });
        return <div>
            {this.props.loading ? <LoadingBox></LoadingBox> 
                : this.props.error ? <MessageBox variant="danger">{this.props.error}</MessageBox>
                : (<div className="row center">
                    {productCards}
                </div>
            )}
        </div>
    }
}


HomeScreen.propTypes = {
    listProducts: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    loading: PropTypes.bool,
    error: PropTypes.object
}

const mapStateToProps = (state) => ({
    products: state.productList.products,
    loading: state.productList.loading,
    error: state.productList.error
});

const mapDispatchToProps = {
    listProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);