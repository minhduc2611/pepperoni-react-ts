import Customer from '../../domains/customer';
import { UserActionType } from './user.action-types';
import {
  ISetUserGlobalAction
} from './user.actions';


export const setUserGlobal = (user: Customer | null): ISetUserGlobalAction => {
  return {
    type: UserActionType.SET_GLOBAL_USER,
    payload: {
      user
    }
  };
};
