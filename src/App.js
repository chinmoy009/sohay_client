
import {BrowserRouter, Link, Route} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/cartScreen';
import SignInScreen from './screens/signInScreen';
import SignUpScreen from './screens/signUpScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import { signOut } from './actions/userAction';
import ShippingAddressScreen from './screens/shippingAddressScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';

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
                                        <li>
                                            <Link to="/userProfile">Profile</Link>
                                        </li>
                                        <li>
                                            <Link to="/orderHistory">Order History</Link>
                                        </li>
                                        <li>
                                            <Link to='#signout' onClick={signoutHandler}>Sign Out</Link>
                                        </li>
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
                    <Route path="/shipping" component={ShippingAddressScreen}/>
                    <Route path="/payment" component={PaymentMethodScreen}/>
                    <Route path="/placeorder" component={PlaceOrderScreen}/>
                    <Route path="/order/:id" component={OrderScreen}/>
                    <Route path="/orderHistory" component={OrderHistoryScreen}/>
                    <Route path="/userProfile" component={ProfileScreen}/>
                </main>
                <footer className="row center">
                    All Rights Reserved
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
