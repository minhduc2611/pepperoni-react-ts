import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import * as cartActions from '../user.action-creator'

const useCartActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(cartActions, dispatch);
};
export default useCartActions