import { Badge, Box, Button, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';
import Pizza from '../../domains/pizza';
import { useCartActions, useTypedSelector } from '../../reducers';
import { specialPizzaShape } from '../pizza-animation';

interface IPizzaItemProps {
    pizza: Pizza
}
const PizzaItem: FC<IPizzaItemProps> = ({ pizza }) => {
    const { addItemToCart } = useCartActions()
    const user = useTypedSelector((state) => state.user?.user)

    return (
        <Box p={4} display={{ md: 'flex' }} textAlign={{ md: 'left' }}>
            <Box flexShrink={0}>
                <Image
                    borderRadius='lg'
                    width={{ md: 40 }}
                    src={`${pizza.type}.jpg`}
                    alt={pizza.description}
                />
            </Box>
            <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                <Text
                    fontWeight='bold'
                    textTransform='uppercase'
                    fontSize='sm'
                    letterSpacing='wide'
                    color='teal.600'
                >
                    {pizza.name}
                    <Badge ml='1' fontSize='0.8em' colorScheme='green'>
                        ${pizza.price}
                    </Badge>
                </Text>
                <Text
                    mt={1}
                    display='block'
                    fontSize='lg'
                    lineHeight='normal'
                    fontWeight='semibold'
                >
                    {pizza.description}
                </Text>
                <Text display={{ lg: 'none' }} mt={2} color='gray.500'>
                    {pizza.ingredients}
                </Text>
                <Button disabled={!user} mt={2} role="button" onClick={(e) => {
                    if (user) {
                        addItemToCart(pizza, user)
                        specialPizzaShape(e)
                    }
                }}>Add to cart</Button>
            </Box>
        </Box>
    );
};

export default PizzaItem;