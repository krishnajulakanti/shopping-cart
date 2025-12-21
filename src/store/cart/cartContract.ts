import { Product } from "../products/productContract";

export interface CartState {
  items: CartItem[];
}

export interface CartItem extends Product {
  quantity: number;
}
