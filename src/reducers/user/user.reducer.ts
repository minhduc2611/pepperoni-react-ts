import produce from 'immer';
import { UserState } from '../../types';
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
