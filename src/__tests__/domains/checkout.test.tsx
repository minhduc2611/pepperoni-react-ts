import CheckOut from '../../domains/checkout';
import { mockCustomer, mockPizza } from '../../setup/utils/mockData';

describe('test Checkout Logic', () => {
  it('test Checkout with Normal User', async () => {
    let customer = mockCustomer('Normal User')
    let checkout = new CheckOut(customer)
    let pizza1 = mockPizza('small')
    let pizza2 = mockPizza('medium')
    let pizza3 = mockPizza('large')
    checkout.add(pizza1)
    checkout.add(pizza2)
    checkout.add(pizza3)

    expect(checkout.getGroupedItems().length).toBe(3)
    expect(checkout.total().totalQuantity).toBe(3)
    expect(checkout.total().totalAmount).toBe(pizza1.price + pizza2.price + pizza3.price)
    expect(checkout.total().totalAmount).toBe(49.97)
  });
  it('test Checkout with Microsoft', async () => {
    let customer = mockCustomer('Microsoft')
    let checkout = new CheckOut(customer)
    let pizza1 = mockPizza('small')
    let pizza2 = mockPizza('small')
    let pizza3 = mockPizza('large')
    checkout.add(pizza1)
    checkout.add(pizza2)
    checkout.add(pizza3)

    expect(checkout.items.length).toBe(3)
    expect(checkout.total().totalQuantity).toBe(4)
    expect(checkout.total().totalAmount).toBe(parseFloat((pizza1.price + pizza2.price + pizza3.price).toFixed(2)))
    expect(checkout.total().totalAmount).toBe(45.97)
  });
  it('test Checkout with Microsoft', async () => {
    let customer = mockCustomer('Amazon')
    let checkout = new CheckOut(customer)
    let pizza1 = mockPizza('medium')
    let pizza2 = mockPizza('medium')
    let pizza3 = mockPizza('medium')
    let pizza4 = mockPizza('large')
    checkout.add(pizza1)
    checkout.add(pizza2)
    checkout.add(pizza3)
    checkout.add(pizza4)

    expect(checkout.items.length).toBe(4)
    expect(checkout.total().totalQuantity).toBe(4)
    expect(checkout.total().totalAmount).toBe(parseFloat((pizza1.price + pizza2.price + pizza3.price + 19.99).toFixed(2)))
    expect(checkout.total().totalAmount).toBe(67.96)
  });
})

