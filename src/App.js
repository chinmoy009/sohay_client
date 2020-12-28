
import {BrowserRouter, Link, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/cartScreen';
import SignInScreen from './screens/signInScreen';

function App() {

    const {cartItems} = useSelector(state => state.cart);
    
    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="row">
                    <div className="brand">
                        <button >
                            &#9776;
                        </button>
                        <Link to="/">amazona</Link>
                    </div>
                    <div className="header-links">
                        <Link to="/cart">Cart
                        {
                            cartItems.length > 0 && (
                                <span className="badge">{cartItems.length}</span>
                            )
                        }
                        </Link>
                        <Link to="/signin">Sign In</Link>
                    </div>
                </header>
                <main className="main">
                    <Route path="/cart/:id?" component={CartScreen}/>
                    <Route path="/" exact component={HomeScreen}/>
                    <Route path="/product/:id" component={ProductScreen}/>
                    <Route path="/signin" component={SignInScreen}/>
                </main>
                <footer className="row center">
                    All Rights Reserved
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
