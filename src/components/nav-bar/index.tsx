import {
    Avatar,
    AvatarBadge, Box, Button, ButtonGroup, Flex, Heading, Menu,
    MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Modal, ModalBody,
    ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Text,
    useDisclosure
} from '@chakra-ui/react';
import { useTypedSelector } from '../../reducers';
import Cart from '../cart';
import Login from '../login';
import Logout from '../logout';
const NavBar = () => {
    const user = useTypedSelector((state) => state.user?.user)
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Flex height={50} minWidth='max-content' alignItems='center' gap='2'>
            <Box p='2'>
                <Heading size='md'>Pepperonis Pizza</Heading>
            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
                <Cart />
                {user ?
                    <Menu>
                        <MenuButton as={Button} mx={2} >
                            <Flex>
                                <Avatar size='xs' mr={2} name={user.name} src=''>
                                    <AvatarBadge boxSize='1.25em' bg='green.500' />
                                </Avatar>
                                <Text alignSelf="center">{`Hi, ${user.name}`}</Text>
                            </Flex>
                        </MenuButton>
                        <MenuList>
                            <MenuGroup title='Profile'>
                                <MenuItem>My Account</MenuItem>
                                <MenuItem>My Coupons </MenuItem>
                            </MenuGroup>
                            <MenuDivider />
                            <MenuGroup title='Help'>
                                <MenuItem as={Logout}></MenuItem>
                            </MenuGroup>
                        </MenuList>
                    </Menu>
                    : <Button onClick={onOpen} colorScheme='teal'>Log in</Button>}
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Login</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Login onClose={onClose} />
                        </ModalBody>

                        <ModalFooter>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </ButtonGroup>
        </Flex>
    );
};

export default NavBar;