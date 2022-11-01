import Pizza from "../../domains/pizza"

export interface IPizzaAPI {
    // getPizzaList: () => Promise<Pizza[]>
}

class PizzaAPI implements IPizzaAPI{
    static async getPizzaList() {
        return Promise.resolve([
            new Pizza("Small Pizza", "10'' pizza for one person", 11.99, 'small', 'Pepperoni, NEW cup \'n crisp pepperoni, chilli flakes & roquito peppers'),
            new Pizza("Medium Pizza", "12'' Pizza for two persons", 15.99, 'medium', 'Double Pepperoni, Extra Mozzarella Cheese'),
            new Pizza("Large Pizza", "15'' Pizza for four persons", 21.99, 'large', 'Now With Even More Pepperoni, Mozzarella And Triple Cheese Blend')
        ])
    }
}

export default PizzaAPI