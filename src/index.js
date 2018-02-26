import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './components/App';

import {createStore} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import FavoriteMarketList from './components/FavoriteMarketList';

const store = createStore(rootReducer);
store.subscribe(() => console.log('store', store.getState()));

ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>
            <Switch>
                    <Route exact path='/' component={App} />
                    <Route path='/favorites' component={FavoriteMarketList} />
            </Switch>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));