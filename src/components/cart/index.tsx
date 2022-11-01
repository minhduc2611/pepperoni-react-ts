import {
    Badge, Button, Icon, Modal, ModalBody,
    ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, useDisclosure, useToast
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsCart4 } from 'react-icons/bs';
import { useTypedSelector } from '../../reducers';

export interface CartProps {
}
const Cart: React.FC<CartProps> = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { groupedItems, items, total } = useTypedSelector((state) => ({
        groupedItems: state.cart?.checkout?.getGroupedItems(),
        items: state.cart?.checkout?.items,
        total: state.cart?.checkout?.total(),
    }))
    const user = useTypedSelector((state) => state.user?.user)
    const toast = useToast()
    const RenderButton = () => {
        const [isPaid, setIsPaid] = useState(false)
        return <Button colorScheme={isPaid ? 'green' : 'gray'} disabled={!total?.totalAmount} onClick={() => setIsPaid(true)} variant='outline'>
            {isPaid ? 'Payment successfully' : 'Go to Payment'}
        </Button>
    }
    return (
        <>
            <Button onClick={() => {
                if (user) {
                    onOpen()
                } else {
                    toast({
                        title: 'Please Login',
                        status: 'warning',
                        duration: 2000,
                        isClosable: true,
                    })
                }

            }} variant='ghost'>
                <Icon as={BsCart4} />
                <Badge borderRadius={10} top={'21px'} left={'28px'} position={"absolute"}> {items?.length}</Badge>
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Check Out</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <TableContainer>
                            <Table size='sm'>
                                <Thead>
                                    <Tr>
                                        <Th>Pizza Type</Th>
                                        <Th>Quantity</Th>
                                        <Th isNumeric>Price</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {groupedItems && groupedItems?.map((groupedItem, index) => <Tr key={index}>
                                        <Td>{groupedItem.name}</Td>
                                        <Td>{groupedItem.quantity} {groupedItem.freeQuantity === 0 ? '' : `+ ${groupedItem.freeQuantity} FREE`} </Td>
                                        <Td isNumeric>
                                            {groupedItem.discountedAmount > 0 ? (
                                                <>
                                                    <Text textDecoration={'line-through'}>${groupedItem.amount} </Text>
                                                    <Text >${groupedItem.discountedAmount} </Text>
                                                </>
                                            ) :
                                                (<Text>${groupedItem.amount} </Text>)}

                                        </Td>
                                    </Tr>)}

                                </Tbody>
                                <Tfoot>
                                    <Tr>
                                        <Th>Total</Th>
                                        <Th float={'left'} isNumeric>{total?.totalQuantity || 0}</Th>
                                        <Th isNumeric>${total?.totalAmount || 0}</Th>
                                    </Tr>
                                </Tfoot>
                            </Table>
                        </TableContainer>
                    </ModalBody>

                    <ModalFooter>
                        <RenderButton />
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Cart;