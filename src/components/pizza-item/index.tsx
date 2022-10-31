import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';
import Pizza from '../../domains/pizza';
import { useCartActions, useTypedSelector } from '../../reducers';

interface IPizzaItemProps {
    pizza: Pizza
}
const PizzaItem: FC<IPizzaItemProps> = ({ pizza }) => {
    const { addItemToCart } = useCartActions()
    const user = useTypedSelector((state) => state.user?.user)

    return (
        <Box p={5} shadow='md' borderWidth='1px' >
            <Heading fontSize='xl'>{pizza.name}</Heading>
            <Text mt={4}>{pizza.description}</Text>
            <Text mt={4}>${pizza.price}</Text>
            <Button onClick={() => {
                if (user) {
                    addItemToCart(pizza, user)
                }
            }}>Add to cart</Button>
        </Box>
    );
};

export default PizzaItem;