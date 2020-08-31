import React from 'react';
import GoodSearch from '../good-search/good-search';
import {Goods} from '../goods/goods';
import './app.css';
import { GoodBasket } from '../good-basket/good-basket';

const App = () => {
  return (
    <div className="cash-container">
      <div className="container">
        <GoodSearch />
        <Goods />
      </div>
      <GoodBasket />
    </div>
  );
}

export {App};
