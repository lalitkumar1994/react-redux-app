import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import bankbalanceReducer from './bankbalanceReducer';

const addReducers = combineReducers({
    bankbalance : bankbalanceReducer,
})
const store = createStore(addReducers,{bankbalance : 10000});

ReactDOM.render(
<Provider store={store}>
    <App/>
</Provider>
, document.getElementById('root'));

serviceWorker.unregister();
