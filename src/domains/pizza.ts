import { v4 as uuidv4 } from 'uuid';
import { Assign } from 'utility-types';


// export type GroupedPizza = Assign<Pizza, { quantity: number, amount: number }>;

export type PizzaType = 'small' | 'large' | 'medium'

export default class Pizza {
    id: string;
    name: string;
    description: string
    price: number
    type: PizzaType

    constructor(name: string, description: string, price: number, type: PizzaType) {
        this.id = uuidv4()
        this.name = name
        this.description = description
        this.price = price
        this.type = type
    }
}

export class GroupedPizza extends Pizza {
    quantity: number = 0;
    amount: number = 0;
    freeQuantity: number = 0;
    discountedAmount: number = 0;
    // private formatter = new Intl.NumberFormat('en-US', {
    //     minimumFractionDigits: 2,
    //     maximumFractionDigits: 2,
    // });
    constructor(pizza: Pizza) {
        super(pizza.name, pizza.description, pizza.price, pizza.type)
    }
    addQuantity(q: number) {
        this.quantity = this.quantity + q
        //  parseInt(this.formatter.format())
    }
    addAmount(q: number) {
        this.amount = this.amount + q
        //parseInt(this.formatter.format(this.amount + q))
    }
    addFreeQuantity(q: number) {
        this.freeQuantity = this.freeQuantity + q
        console.log('groupedItems addFreeQuantity', this.freeQuantity);
    }
    setDiscountedAmount(q: number) {
        this.discountedAmount = q
    }
}