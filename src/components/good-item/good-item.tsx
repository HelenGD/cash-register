import React from 'react';
import './good-item.css';
import { CashProduct } from '../../types/product-types';

type Props = {
  count: number;
  product: CashProduct;
  onClick: () => void;
}

const GoodItem = (props: Props) => {
  const {count, product, onClick}= props;

  return (
      <div className="product-container" onClick={onClick}>
        <div className="product-characteristics-container">
          <span>{product.name}</span>
          <span>{count}</span>
        </div>
        <div className="product-price-container">
          <span>{product.price}</span>
        </div>
      </div>
  );
};

export {GoodItem};