import { v4 as uuidv4 } from 'uuid';

export default class Customer {
    id: string;
    name: string;
    coupons: string[] = []
    constructor(name: string, coupons: string[] = []) {
        this.id = uuidv4()
        this.name = name
        this.coupons = coupons
    }
}