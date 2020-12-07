import {data} from './data';


function App() {
  let productCards = data.products.map(product => {
    return <div key={product._id} className="card">
      <img className="medium" src={product.image} alt="product"/>
      <div className="card-body">
          <a href={`/product/${product._id}`}>
              <h2>{product.name}</h2>
          </a>
          <div className="rating">
              <span>
                  <i className="fa fa-star"></i>
              </span>
              <span>
                  <i className="fa fa-star"></i>
              </span>
              <span>
                  <i className="fa fa-star"></i>
              </span>
              <span>
                  <i className="fa fa-star"></i>
              </span>
              <span>
                  <i className="fa fa-star"></i>
              </span>
              <span>
                  <i className="fa fa-star"></i>
              </span>
          </div>
          <div>
              <h2>{product.brand}</h2>
          </div>
          <div className="price">
              {product.price}
          </div>
      </div> 
    </div>
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
