import { combineReducers } from 'redux';
import cartReducer from './cart/cart.reducer'
import userReducer from './user/user.reducer'
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';


export const reduxReducers = combineReducers({
    cart: cartReducer,
    user: userReducer,
});


/** create store */
export const store = createStore(reduxReducers, {}, applyMiddleware(thunk));


export type RootState = ReturnType<typeof reduxReducers>;

/** hooks: get states */
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;


/** hooks: get actions */
export { default as useCartActions } from './cart/hooks/useCartActions'
export { default as useUserActions } from './user/hooks/useUserActions'