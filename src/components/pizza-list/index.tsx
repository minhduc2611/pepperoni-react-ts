import {
    List
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
        <List spacing={3}>
            {pizzasState && pizzasState.map((pizza, index) => (<PizzaItem key={index} pizza={pizza} />))}
        </List>
    );
};

export default PizzaList;