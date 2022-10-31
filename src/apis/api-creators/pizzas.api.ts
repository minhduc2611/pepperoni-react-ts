import Pizza from "../../domains/pizza"

export interface IPizzaAPI {
    // getPizzaList: () => Promise<Pizza[]>
}

class PizzaAPI implements IPizzaAPI{
    static async getPizzaList() {
        return Promise.resolve([
            new Pizza("Small Pizza", "10'' pizza for one person", 11.99, 'small'),
            new Pizza("Medium Pizza", "12'' Pizza for two persons", 15.99, 'small'),
            new Pizza("Large Pizza", "15'' Pizza for four persons", 21.99, 'small')
        ])
    }
}

export default PizzaAPI