import Customer from "../../domains/customer"


export interface IUserAPI {
}
class UserAPI implements IUserAPI {
    static customerList: Customer[] = [
        new Customer("Microsoft", ['GET_1_FREE_FOR_2_SMALL']),
        new Customer("Amazon", ['DISCOUNT_LARGE_19_99']),
        new Customer("Facebook", ['GET_1_FREE_FOR_4_MEDIUM']),
        new Customer("Normal User"),
        new Customer("Twitter", ['GET_1_FREE_FOR_2_SMALL', 'DISCOUNT_LARGE_19_99'])
    ]
    static async getUserList() {
        return Promise.resolve(this.customerList)
    }
    static async login(clientName: string) {
        let foundCustomer: Customer | undefined = this.customerList.find(customer => {
            return customer.name === clientName
        })
        return {
            isLoggedIn: !!foundCustomer,
            customer: foundCustomer
        }
    }

}

export default UserAPI