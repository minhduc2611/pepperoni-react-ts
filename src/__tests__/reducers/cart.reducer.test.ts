'use strict';

import Customer from "../../domains/customer";
import Pizza from "../../domains/pizza";
import { cartInitialState, cartReducer } from "../../reducers";
import { CartActionType } from "../../reducers/cart/cart.action-types";
import { ICartAction } from "../../reducers/cart/cart.actions";
import { mockCustomer, mockPizza } from "../../setup/utils/mockData";


describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(cartReducer(undefined, {} as ICartAction)).toEqual(cartInitialState);
  });

  it('should handle ADD_TO_CART and REMOVE_FROM_CART', () => {
    let pizza: Pizza = mockPizza()
    let customer: Customer = mockCustomer()
    const storeState = cartReducer(cartInitialState, {
      type: CartActionType.ADD_TO_CART,
      payload: {
        pizza, customer
      }
    })
    expect(storeState?.checkout).toBeDefined()
    expect(storeState?.checkout?.items.length).toBe(1)


    const storeState2 = cartReducer(storeState, {
      type: CartActionType.ADD_TO_CART,
      payload: {
        pizza, customer
      }
    })

    expect(storeState2?.checkout).toBeDefined()
    expect(storeState2?.checkout?.items.length).toBe(2)

    if (storeState2?.checkout?.items[0].id) {
      const storeState3 = cartReducer(storeState2, {
        type: CartActionType.REMOVE_FROM_CART,
        payload: {
          id: storeState2?.checkout?.items[0].id
        }
      })

      expect(storeState3?.checkout).toBeDefined()
      expect(storeState3?.checkout?.items.length).toBe(1)
    }
  });

  it('should handle CLEAR_CART', () => {
    const storeState = cartReducer(cartInitialState, {
      type: CartActionType.CLEAR_CART,
    })

    expect(storeState?.checkout).toBeNull()
  });
});