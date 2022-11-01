'use strict';

import Customer from "../../domains/customer";
import { userInitialState, userReducer } from "../../reducers";
import { UserActionType } from "../../reducers/user/user.action-types";
import { IUserAction } from "../../reducers/user/user.actions";
import { mockCustomer } from "../../setup/utils/mockData";


describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, {} as IUserAction)).toEqual(userInitialState);
  });

  it('should handle SET_GLOBAL_USER', () => {
    let customer: Customer = mockCustomer()
    const storeState = userReducer(userInitialState, {
      type: UserActionType.SET_GLOBAL_USER,
      payload: {
        user: customer
      }
    })
    expect(storeState?.user).toBeDefined()
    expect(storeState?.user?.name).toBe(customer.name)
  });
});