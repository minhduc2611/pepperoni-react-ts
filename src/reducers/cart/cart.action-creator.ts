import Customer from '../../domains/customer';
import Pizza from '../../domains/pizza';
import { CartActionType } from './cart.action-types';
import {
  IAddItemToCartAction, IClearCartAction, IRemoveItemFromCartAction
} from './cart.actions';


export const addItemToCart = (pizza: Pizza, customer: Customer): IAddItemToCartAction => {
  return {
    type: CartActionType.ADD_TO_CART,
    payload: {
      pizza,
      customer
    }
  };
};

export const removeItemToCart = (id: string): IRemoveItemFromCartAction => {
  return {
    type: CartActionType.REMOVE_FROM_CART,
    payload: {
      id
    }
  };
};


export const clearCart = (): IClearCartAction => {
  return {
    type: CartActionType.CLEAR_CART,
  };
};
