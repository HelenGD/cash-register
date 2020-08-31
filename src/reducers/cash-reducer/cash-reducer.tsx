import { CashState } from "../../types/app";
import { CashProduct } from "../../types/product-types";

const initialState: CashState = {
  filter: '',
  addedProducts: {},
  products: [],
};

enum ActionType {
  FIND_PRODUCT = `FIND_PRODUCT`,
  ADD_PRODUCT = `ADD_PRODUCT`,
  REMOVE_PRODUCT = `REMOVE_PRODUCT`,
  CLEAR_BASKET = `CLEAR_BASKET`
};

type FindProduct = {
  type: ActionType.FIND_PRODUCT;
  payload: {
    name: string,
  };
}

type AddProduct = {
  type: ActionType.ADD_PRODUCT;
  payload: CashProduct,
}


type RemoveProduct = {
  type: ActionType.REMOVE_PRODUCT;
  payload: CashProduct
}

type ClearBasket = {
  type: ActionType.CLEAR_BASKET;
  payload: {}
}

export const FindProduct = (name: string): FindProduct => ({
  type: ActionType.FIND_PRODUCT,
  payload: {
    name,
  }
})

export const ClearBasket = (): ClearBasket => ({
  type: ActionType.CLEAR_BASKET,
  payload: {}
})


export const AddProduct = (product: CashProduct): AddProduct => ({
  type: ActionType.ADD_PRODUCT,
  payload: {
    ...product,
    count: 1
  },
})

export const RemoveProduct = (product: CashProduct): RemoveProduct => ({
  type: ActionType.REMOVE_PRODUCT,
  payload: {
    ...product,
    count: 0
  }
});

type Action = FindProduct | AddProduct | RemoveProduct | ClearBasket;

export const cashReducer = (state: CashState = initialState, action: Action): CashState => {
  switch (action.type) {
    case ActionType.FIND_PRODUCT:
      return {
        ...state,
        filter: action.payload.name.toLowerCase(),
      };
    case ActionType.ADD_PRODUCT:
      const currentProduct: CashProduct | undefined = state.addedProducts[action.payload.id];

      return {
        ...state,
        addedProducts: {
          ...state.addedProducts,
          [action.payload.id]: currentProduct
            ? {
              ...currentProduct,
              count: currentProduct.count + 1
            }
            : action.payload
        },
      };
    case ActionType.REMOVE_PRODUCT:
      const actualProduct: CashProduct | undefined = state.addedProducts[action.payload.id];

      const addedProducts = {
        ...state.addedProducts,
        [actualProduct.id]: actualProduct && actualProduct.count > 0
          ? {
            ...actualProduct,
            count: actualProduct.count - 1
          }
          : actualProduct
      };

      if (addedProducts[actualProduct.id].count === 0) {
        delete addedProducts[actualProduct.id];
      }

      return {
        ...state,
        addedProducts,
      };
    case ActionType.CLEAR_BASKET:
      const filteredProducts = state.products
        .filter(product => state.addedProducts[product.id]
          ? product.count - state.addedProducts[product.id].count
          : true
        )
        .map(product => ({
          ...product,
          count: state.addedProducts[product.id]
            ? product.count - state.addedProducts[product.id].count
            : product.count
        }));

      return {
        ...state,
        addedProducts: {},
        products: filteredProducts,
      };
    default:
      return state;
  }
};
