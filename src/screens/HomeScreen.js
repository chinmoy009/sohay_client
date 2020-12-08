import react from 'react';
import {data} from '../data';
import Product from '../components/Product';

function HomeScreen() {
    let productCards = data.products.map(product => {
        return <Product key={product._id} product={product}/>
    });
    return <div className="row center">
        {productCards}
    </div>
}

export default HomeScreen;