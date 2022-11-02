import {
    Avatar,
    AvatarBadge, Box, Button, ButtonGroup, Drawer,
    DrawerBody, DrawerContent, DrawerHeader,
    DrawerOverlay, Flex, Heading, Image, Menu,
    MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Modal, ModalBody,
    ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Text,
    useDisclosure
} from '@chakra-ui/react';
import { useCartActions, useTypedSelector, useUserActions } from '../../reducers';
import Cart from '../cart';
import Login from '../login';

const NavBar = () => {
    const user = useTypedSelector((state) => state.user?.user)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { setUserGlobal } = useUserActions()
    const { clearCart } = useCartActions()
    const { isOpen: isDrawerOpen, onOpen: onOpenDrawer, onClose: onCloseDrawer } = useDisclosure()
    return (
        <Flex height={50} minWidth='max-content' alignItems='center' gap='2'>
            <Box display={'flex'} p='2'>
                <Image boxSize='50px' objectFit='cover' src='pizza-logo.jpg' alt='icon' />
                <Heading alignSelf={'center'} size='md'>Pepperonis Pizza</Heading>
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
                                <MenuItem onClick={(event) => {
                                    event.preventDefault()
                                    onOpenDrawer()
                                }}>My Coupons </MenuItem>
                                <Drawer placement={'bottom'} onClose={onCloseDrawer} isOpen={isDrawerOpen}>
                                    <DrawerOverlay />
                                    <DrawerContent>
                                        <DrawerHeader borderBottomWidth='1px'>My Special Coupons</DrawerHeader>
                                        <DrawerBody h={300}>
                                            {user.coupons.map((coupon, index) => <Text border={'dashed'} w={350} background={'#ccc'} p={3} m={1} key={index}>{coupon}</Text>)}
                                        </DrawerBody>
                                    </DrawerContent>
                                </Drawer>
                            </MenuGroup>
                            <MenuDivider />
                            <MenuGroup title='Help'>
                                <MenuItem onClick={() => {
                                    clearCart()
                                    setUserGlobal(null)
                                }}>
                                    Log out
                                </MenuItem>
                            </MenuGroup>
                        </MenuList>
                    </Menu>
                    : <Button mx={2} onClick={onOpen} colorScheme='teal'>Log in</Button>}
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Choose An User</ModalHeader>
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