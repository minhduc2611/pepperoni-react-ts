import { v4 as uuidv4 } from 'uuid';
import Customer from './customer';
import Pizza, { GroupedPizza } from './pizza';

export default class CheckOut {
    items: Pizza[] = [];
    freeItems: Pizza[] = [];
    // groupedItems: Record<GroupedPizza['name'], GroupedPizza> = {};
    id: string;
    private customer: Customer;
    constructor(customer: Customer) {
        this.id = uuidv4()
        this.customer = customer
    }
    add(pizza: Pizza) {
        this.items.push(pizza)

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

            couponManager(coupon, groupedItems)
        })

        return groupedItems
    }
    getGroupedItems(): GroupedPizza[] {
        return Object.values(this.grouping())
    }
    total() {
        let total = Object.values(this.grouping()).reduce(
            (partialSum, item) => partialSum + (item.discountedAmount ? item.discountedAmount : item.amount)
            , 0);
        // console.log('customer', this.customer)
        // console.log('total', total)
        return total
    }
}


/**
 * coupon manager take in groupedItems and return new caulated groupedItems
 * coupon can apply to a single item, or a group of items 
 */
const couponManager = (coupon: string, groupedItems: Record<string, GroupedPizza>) => {
    if (Object.keys(groupedItems).length === 0) return;
    console.log('groupedItems', groupedItems)
    switch (coupon) {
        case 'GET_1_FREE_FOR_2_SMALL':
            /**
             * logic: quantity >= 2, + 1 free item to quantity
             */
            console.log('groupedItems GET_1_FREE_FOR_2_SMALL', groupedItems)

            if (groupedItems['Small Pizza'] && groupedItems['Small Pizza'].quantity >= 2) {
                console.log('groupedItems GET_1_FREE_FOR_2_SMALL', groupedItems)

                // add quantity without adding amount
                groupedItems['Small Pizza'].addFreeQuantity(1)
            }
            break;
        case 'GET_1_FREE_FOR_4_MEDIUM':
            /**
             * logic: quantity >= 4, + 1 free item to quantity
             */
            if (groupedItems['Medium Pizza'] && groupedItems['Medium Pizza'].quantity >= 4) {
                // add quantity without adding amount
                groupedItems['Medium Pizza'].addFreeQuantity(1)
            }
            break;
        case 'DISCOUNT_LARGE_19_99':
            if (groupedItems['Large Pizza']) {
                let quantity = groupedItems['Large Pizza'].quantity
                groupedItems['Large Pizza'].setDiscountedAmount(quantity * 19.99)
            }
            break;
        default:
            break;
    }
}