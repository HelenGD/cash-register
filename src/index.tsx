import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './components/app/app';
import {products} from '../src/constants';
import {Provider} from "react-redux";
import {createStore, compose} from "redux";
import reducer from "../src/reducers/combine-reducers";

const preloadedState = {
  cash: {
    filter: '',
    products,
    addedProducts: {},
  },
};

const store = createStore(reducer,
  preloadedState,
  compose(
      (window as any).__REDUX_DEVTOOLS_EXTENSION__
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
        : (f: any) => f
  ),
);

ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
  document.getElementById('root')
);