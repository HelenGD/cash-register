import React from 'react';
import './basket-item.css';
import { CashProduct } from '../../types/product-types';

type Props = {
  product: CashProduct;
  onClick: () => void;
}

const BasketItem = (props: Props) => {
  const {product, onClick} = props;

  return (
    <div className="basket-td" onClick={onClick}>
        <div className="basket-characteristics-container">
          <span>{product.name}</span>
          <span>{product.count} x {product.price}</span>
        </div>
        <div className="basket-price-container">
          <span>{product.price * product.count}</span>
        </div>
    </div>
  );
};

export {BasketItem};