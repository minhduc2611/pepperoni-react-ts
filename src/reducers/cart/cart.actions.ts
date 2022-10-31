import Customer from "../../domains/customer";
import Pizza from "../../domains/pizza";
import { CartActionType } from "./cart.action-types";

export interface IAddItemToCartAction {
  type: CartActionType.ADD_TO_CART;
  payload: {
    pizza: Pizza;
    customer: Customer
  };
}


export interface IClearCartAction {
  type: CartActionType.CLEAR_CART;
}


export type ICartAction =
  | IAddItemToCartAction
  | IClearCartAction
 