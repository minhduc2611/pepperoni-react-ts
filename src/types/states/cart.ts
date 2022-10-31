import CheckOut from "../../domains/checkout"
import Pizza from "../../domains/pizza"
export type CartState = {
    checkout: CheckOut | null,
    renderId: string | null
}