import {CashProduct} from "./product-types";

export type CashState = {
  filter: string;
  products: CashProduct[];
  addedProducts: Record<number, CashProduct>;
}

export type AppState = {
  cash: CashState;
}
