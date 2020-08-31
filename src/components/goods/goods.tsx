import React from 'react';
import './goods.css';
import  {GoodItem} from '../good-item/good-item';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../types/app';
import {AddProduct} from "../../reducers/cash-reducer/cash-reducer"

const Goods = () => {
  const products = useSelector((state: AppState) => state.cash.products);
  const addedProducts = useSelector((state: AppState) => state.cash.addedProducts);
  const filter = useSelector((state: AppState) => state.cash.filter);
  const dispatch = useDispatch();

  const filteredProducts = products
    .filter(product => addedProducts[product.id]
      ? product.count - addedProducts[product.id].count
      : true
    )
    .filter(product => product.name.toLowerCase().includes(filter));

  return (
      <div className="product-table">
          {filteredProducts.map((product) => (
              <GoodItem key={product.id} 
                count={addedProducts[product.id]
                  ? product.count - addedProducts[product.id].count
                  : product.count
                }
                product={product}
                onClick={() => dispatch(AddProduct(product))}
              />
          ))}
      </div>
  );
}

export {Goods};
