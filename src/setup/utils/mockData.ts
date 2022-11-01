import Customer from "../../domains/customer"
import Pizza from "../../domains/pizza"

export const mockPizza = () => {
    return new Pizza('Pepperonis Pizza', 'Delicious Pizza', 19.99, 'large', 'Pepperonis')
}


export const mockCustomer = () => {
    return new Customer('MOCK USER', ['MOCK_COUPON'])
}