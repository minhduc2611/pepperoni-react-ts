import { v4 as uuidv4 } from 'uuid';

export type PizzaType = 'small' | 'large' | 'medium'

export default class Pizza {
    id: string;
    name: string;
    description: string
    price: number
    type: PizzaType
    ingredients: string

    constructor(name: string, description: string, price: number, type: PizzaType, ingredients: string) {
        this.id = uuidv4()
        this.name = name
        this.description = description
        this.price = price
        this.type = type
        this.ingredients = ingredients
    }
}

export class GroupedPizza extends Pizza {
    quantity: number = 0;
    amount: number = 0;
    freeQuantity: number = 0;
    discountedAmount: number = 0;
    constructor(pizza: Pizza) {
        super(pizza.name, pizza.description, pizza.price, pizza.type, pizza.ingredients)
    }
    addQuantity(q: number) {
        this.quantity = this.quantity + q
    }
    addAmount(q: number) {
        this.amount = this.amount + q
    }
    addFreeQuantity(q: number) {
        this.freeQuantity = this.freeQuantity + q
    }
    setDiscountedAmount(q: number) {
        this.discountedAmount = q
    }
}