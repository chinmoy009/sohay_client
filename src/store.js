import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const initialState = {
    cart: {
        cartItems: localStorage.getItem("cartItems") 
            ? JSON.parse(localStorage.getItem("cartItems")) : []
    }
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = createStore(reducer, initialState, 
    composeEnhancer(
        applyMiddleware(thunk)
));

export default store;