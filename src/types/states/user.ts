import CheckOut from "../../domains/checkout"
import Customer from "../../domains/customer"
import Pizza from "../../domains/pizza"
export type UserState  = {
    user: Customer | null
}