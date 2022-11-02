import { v4 as uuidv4 } from 'uuid';
import Customer from './customer';
import Pizza, { GroupedPizza } from './pizza';

export default class CouponManager {
    constructor() {
    }
    /**
     * coupon manager take in groupedItems and return new caulated groupedItems
     * coupon can apply to a single item, or a group of items 
     */
    static apply(coupon: string, groupedItems: Record<string, GroupedPizza>) {
        if (Object.keys(groupedItems).length === 0) return;
        switch (coupon) {
            case 'GET_1_FREE_FOR_2_SMALL':
                /**
                 * logic: quantity >= 2, + 1 free item to quantity
                 */
                if (groupedItems['Small Pizza'] && groupedItems['Small Pizza'].quantity >= 2) {
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
}

