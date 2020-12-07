import {data} from './data';
import Product from './components/Product';


function App() {
  let productCards = data.products.map(product => {
    return <Product key={product._id} product={product}/>
  });
  return (
    <div className="grid-container">
        <header className="row">
            <div className="brand">
                <button onclick="openMenu()">
                    &#9776;
                </button>
                <a href="/">amazona</a>
            </div>
            <div className="header-links">
                <a href="/cart">Cart</a>
                <a href="/signin">Sign In</a>
            </div>
        </header>
        <main className="main">
            <div className="row center">
                {productCards}
            </div>
        </main>
        <footer className="row center">
            All Rights Reserved
        </footer>
    </div>
  );
}

export default App;
