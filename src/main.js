import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from "react-redux";
import { configureStore } from "./store/configureStore";
import ProductLayout from './layouts/Product';

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={ProductLayout} />
    </Router>
  </Provider>
), document.getElementById('app'));
