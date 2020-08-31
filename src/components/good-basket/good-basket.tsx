import React from 'react';
import './good-basket.css';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../types/app';
import {BasketItem} from '../basket-item/basket-item';

import {RemoveProduct} from '../../reducers/cash-reducer/cash-reducer';
import {ClearBasket} from '../../reducers/cash-reducer/cash-reducer';


const GoodBasket = () => {
  const addedProducts = useSelector((state: AppState) => state.cash.addedProducts);
  const dispatch = useDispatch();

  const sumProducts = Object.values(addedProducts).reduce((total, addedProduct) => total + addedProduct.price * addedProduct.count, 0)
  return (
    <div className="main-basket-container">
      <div className="basket-table">
          <div className="basket-tr">
            <div className="basket-title">Чек</div>
          </div>
          {Object.values(addedProducts).map((product, index) => (
            <div key={product.id + index}>
              <BasketItem
                product={product} 
                onClick={() => dispatch(RemoveProduct(product))}
              />
            </div>
          ))}
      </div>
      <button className="basket-button" type="submit" onClick={() => dispatch(ClearBasket())}>Итого: {sumProducts} </button>
      </div>
  );
};

export {GoodBasket};
