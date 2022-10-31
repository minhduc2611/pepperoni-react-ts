import Customer from "../../domains/customer";
import { UserActionType } from "./user.action-types";

export interface ISetUserGlobalAction {
  type: UserActionType.SET_GLOBAL_USER;
  payload: {
    user: Customer | null;
  };
}


export type IUserAction =
  | ISetUserGlobalAction
 