import produce from 'immer';
import { v4 as uuidv4 } from 'uuid';
import { UserState } from '../../types';
import { CartState } from '../../types/states/cart';
import { UserActionType } from './user.action-types';
import { IUserAction } from './user.actions';

export const initialState: UserState = {
  user: null
};

const reducer = produce(
  (state: UserState = initialState, action: IUserAction) => {
    switch (action.type) {
      case UserActionType.SET_GLOBAL_USER:
        state.user = action.payload.user
        return state;
      default:
        return state;
    }
  }
);

export default reducer;
