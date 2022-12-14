import produce from 'immer';
import { v4 as uuidv4 } from 'uuid';
import CheckOut from '../../domains/checkout';
import { CartState } from '../../types/states/cart';
import { CartActionType } from './cart.action-types';
import { ICartAction } from './cart.actions';

export const initialState: CartState = {
  checkout: null,
  renderId: null
};

const reducer = produce(
  (state: CartState = initialState, action: ICartAction) => {
    switch (action.type) {
      case CartActionType.ADD_TO_CART:
        if (!state.checkout) {
          state.checkout = new CheckOut(action.payload.customer)
        }
        state.checkout.add(action.payload.pizza)
        /** 
         * workaround for component rerendering
         * redux could not see any change of the Checkout object alone
         */
        state.renderId = uuidv4()
        return state;
      case CartActionType.REMOVE_FROM_CART:
        if (!state.checkout) {
          throw new Error("Checkout is null");
        }
        state.checkout.remove(action.payload.id)
        /** 
         * workaround for component rerendering
         * redux could not see any change of the Checkout object alone
         */
        state.renderId = uuidv4()
        return state;

      case CartActionType.CLEAR_CART:
        state.checkout = null
        return state;
      default:
        return state;
    }
  }
);

export default reducer;
