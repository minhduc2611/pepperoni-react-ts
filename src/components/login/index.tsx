import { Button, Select, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import UserAPI from '../../apis/api-creators/users.api';
import Customer from '../../domains/customer';
import { useUserActions } from '../../reducers';

export interface LoginProps {
    onClose?: () => void
}
const Login: React.FC<LoginProps> = ({ onClose = () => { } }) => {
    const { setUserGlobal } = useUserActions()
    const [users, setUsers] = useState<Customer[]>([])
    const [userName, setUserName] = useState<string>('')
    const toast = useToast()

    useEffect(() => {
        (async () => {
            const users = await UserAPI.getUserList()
            setUsers(users)
        })();
    }, [])

    const onLogin = async () => {
        const result = await UserAPI.login(userName)
        if (result.isLoggedIn) {
            toast({
                title: 'Authentication Successfully',
                status: 'success',
                duration: 4000,
                isClosable: true,
            })
            if (result.customer) {
                setUserGlobal(result.customer)
            }
            onClose()
        } else {
            toast({
                title: 'Authentication Failed',
                description: `Unknown user: ${userName}`,
                status: 'error',
                duration: 4000,
                isClosable: true,
            })
        }
    }

    return (
        <>
            <Select onChange={(uN) => setUserName(uN.target.value)} placeholder='-- User --'>
                {users && users.map((user, index) => <option key={index} value={user.name}>{user.name}</option>)}
                <option key={'false user'} value={'False User'}>False User</option>
            </Select>
            <Button disabled={!userName} onClick={onLogin} colorScheme='teal' mt={3}>
                Login
            </Button>
        </>
    );
};

export default Login;