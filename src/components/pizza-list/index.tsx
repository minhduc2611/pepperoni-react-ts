import {
    Stack
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import PizzaAPI from '../../apis/api-creators/pizzas.api';
import Pizza from '../../domains/pizza';
import PizzaItem from '../pizza-item';

const PizzaList = () => {
    const [pizzasState, setPizzasState] = useState<Pizza[]>([])
    useEffect(() => {
        (async () => {
            const pizzas = await PizzaAPI.getPizzaList()
            setPizzasState(pizzas)
        })();
    }, [])

    return (
        <Stack p={10} direction={[
            'column', // sm
            'column', // md
            'column', // lg
            'row' // xl
        ]} spacing='24px'>
            {pizzasState && pizzasState.map((pizza, index) => (<PizzaItem key={index} pizza={pizza} />))}
        </Stack>
    );
};

export default PizzaList;