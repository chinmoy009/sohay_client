
import {BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/cartScreen';

function App() {
  return (
    <BrowserRouter>
        <div className="grid-container">
            <header className="row">
                <div className="brand">
                    <button >
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
                <Route path="/cart/:id?" component={CartScreen}/>
                <Route path="/" exact component={HomeScreen}/>
                <Route path="/product/:id" component={ProductScreen}/>
            </main>
            <footer className="row center">
                All Rights Reserved
            </footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
