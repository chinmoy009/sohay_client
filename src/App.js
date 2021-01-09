
import {BrowserRouter, Link, Route} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/cartScreen';
import SignInScreen from './screens/signInScreen';
import SignUpScreen from './screens/signUpScreen';
import { signOut } from './actions/userAction';

function App() {

    const {cartItems} = useSelector(state => state.cart);
    const {userInfo} = useSelector(state => state.userSignIn);
    const dispatch = useDispatch();

    const signoutHandler = () => {
        dispatch(signOut());
    }
    
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
                        {
                            userInfo ? (
                                <div class="dropdown">
                                    <Link to="#">{userInfo.name} <i className="fa fa-caret-down"></i></Link>
                                    <ul className="dropdown-content">
                                        <Link to='#signout' onClick={signoutHandler}>Sign Out</Link>
                                    </ul>
                                </div>
                            ) : (
                                <Link to="/signin">Sign In</Link>
                            )
                        }
                    </div>
                </header>
                <main className="main">
                    <Route path="/cart/:id?" component={CartScreen}/>
                    <Route path="/" exact component={HomeScreen}/>
                    <Route path="/product/:id" component={ProductScreen}/>
                    <Route path="/signin" component={SignInScreen}/>
                    <Route path="/signup" component={SignUpScreen}/>

                </main>
                <footer className="row center">
                    All Rights Reserved
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
