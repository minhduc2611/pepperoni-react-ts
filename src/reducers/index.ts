import { combineReducers, PreloadedState } from 'redux';
import cartReducer from './cart/cart.reducer'
import userReducer from './user/user.reducer'
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { RenderOptions } from '@testing-library/react';


export const reduxReducers = combineReducers({
    cart: cartReducer,
    user: userReducer,
});


/** create store */
export const store = createStore(reduxReducers, {}, applyMiddleware(thunk));

/** setup store */
export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: reduxReducers,
        preloadedState
    })
}
/** declare type */
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export type RootState = ReturnType<typeof reduxReducers>;

/** hooks: get states */
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;


/** hooks: get actions */
export { default as useCartActions } from './cart/hooks/useCartActions'
export { default as useUserActions } from './user/hooks/useUserActions'
export { default as cartReducer, initialState as cartInitialState } from './cart/cart.reducer'
export { default as userReducer, initialState as userInitialState } from './user/user.reducer'