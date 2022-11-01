import { v4 as uuidv4 } from 'uuid';
import CouponManager from './coupon-manager';
import Customer from './customer';
import Pizza, { GroupedPizza } from './pizza';

export default class CheckOut {
    items: Pizza[] = [];
    freeItems: Pizza[] = [];
    id: string;

    private customer: Customer;
    constructor(customer: Customer) {
        this.id = uuidv4()
        this.customer = customer
    }
    add(pizza: Pizza) {
        this.items.push(pizza)
    }
    remove(id: string) {
        let index = this.items.findIndex((i) => i.id == id)
        this.items.splice(index, 1)
    }
    private grouping(): Record<string, GroupedPizza> {
        let groupedItems: Record<string, GroupedPizza> = {};

        // calculate grouped items
        this.items.forEach((pizza) => {
            let key = pizza.name
            if (!groupedItems[key]) {
                groupedItems[key] = new GroupedPizza(pizza)
            }
            groupedItems[key].addQuantity(1)
            groupedItems[key].addAmount(pizza.price)

            return pizza
        })

        // calculate grouped items based on coupons 
        this.customer.coupons.forEach((coupon) => {
            console.log('coupon', coupon);
            CouponManager.apply(coupon, groupedItems)
        })

        return groupedItems
    }
    getGroupedItems(): GroupedPizza[] {
        return Object.values(this.grouping())
    }
    total() {
        const calculatedItem = this.grouping()
        let totalAmount = Object.values(calculatedItem).reduce(
            (partialSum, item) => partialSum + (item.discountedAmount ? item.discountedAmount : item.amount)
            , 0);
        let totalQuantity = Object.values(calculatedItem).reduce(
            (partialSum, item) => partialSum + item.freeQuantity + item.quantity
            , 0);
        return {
            totalAmount : totalAmount.toFixed(2) ,
            totalQuantity 
        }
    }
}