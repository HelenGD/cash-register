import {CashProduct} from './types/product-types'

export const products: CashProduct[] = [
  {
    id: 1,
    name: `Греча`, 
    price: 150.00,
    count: 2,
  },
  {
    id: 2,
    name: `Спички`, 
    price: 50.00,
    count: 8,
  },
  {
    id: 3,
    name: `Хлебушек`, 
    price: 80.00,
    count: 25,
  },
  {
    id: 4,
    name: `Мыло`, 
    price: 95.80,
    count: 12,
  },
  {
    id: 5,
    name: `Молоко`, 
    price: 100.00,
    count: 1,
  },
  {
      id: 6,
      name: `Макароны`, 
      price: 150.00,
      count: 2,
    },
    {
      id: 7,
      name: `Грудка`, 
      price: 50.00,
      count: 8,
    },
    {
      id: 8,
      name: `Горошек`, 
      price: 80.00,
      count: 25,
    },
    {
      id: 9,
      name: `Чипсы`, 
      price: 95.80,
      count: 12,
    },
    {
      id: 10,
      name: `Кола`, 
      price: 100.00,
      count: 1,
    },
];

export const product = {
  id: 6,
  name: `Молоко`, 
  price: 100.00,
  count: 1,
  onClick: () => {},
};
