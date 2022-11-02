import Customer from "../../domains/customer"
import Pizza, { PizzaType } from "../../domains/pizza"

export const mockPizza = (type?: PizzaType) => {
    switch (type) {
        case "small":
            return new Pizza("Small Pizza", "10'' pizza for one person", 11.99, 'small', 'Pepperoni, NEW cup \'n crisp pepperoni, chilli flakes & roquito peppers')
        case "medium":
            return new Pizza("Medium Pizza", "12'' Pizza for two persons", 15.99, 'medium', 'Double Pepperoni, Extra Mozzarella Cheese')
        case "large":
            return new Pizza("Large Pizza", "15'' Pizza for four persons", 21.99, 'large', 'Now With Even More Pepperoni, Mozzarella And Triple Cheese Blend')
        default:
            return new Pizza('Pepperonis Pizza', 'Delicious Pizza', 19.99, 'large', 'Pepperonis')
    }
}


export const mockCustomer = (type: string) => {
    switch (type) {
        case "Microsoft":
            return new Customer("Microsoft", ['GET_1_FREE_FOR_2_SMALL'])
        case "Amazon":
            return new Customer("Amazon", ['DISCOUNT_LARGE_19_99'])
        case "Facebook":
            return new Customer("Facebook", ['GET_1_FREE_FOR_4_MEDIUM'])
        case "Normal User":
            return new Customer("Normal User")
        case "Twitter":
            return new Customer("Twitter", ['GET_1_FREE_FOR_2_SMALL', 'DISCOUNT_LARGE_19_99'])
        default:
            return new Customer('MOCK USER', ['MOCK_COUPON'])

    }
}