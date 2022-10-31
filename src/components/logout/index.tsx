import { MenuItem } from '@chakra-ui/react';
import React from 'react';
import { useCartActions, useUserActions } from '../../reducers';

export interface LogoutProps {
}
const Logout: React.FC<LogoutProps> = () => {
    const { setUserGlobal
    } = useUserActions()
    const { clearCart } = useCartActions()
    return (
        <MenuItem onClick={() => {
            clearCart()
            setUserGlobal(null)
        }}>
            Log out
        </MenuItem>
    );
};

export default Logout;