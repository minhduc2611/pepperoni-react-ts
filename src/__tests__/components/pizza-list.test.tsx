import { screen } from '@testing-library/react';
import PizzaList from '../../components/pizza-list';
import { renderWithProviders } from '../../setup/setupReduxTest';

test('renders Pizza List', async () => {
  await renderWithProviders(<PizzaList />);
  const addToCartButtons = await screen.findAllByRole('button', {name: "Add to cart"})
  /** we are using mock data */
  expect(addToCartButtons).toHaveLength(3);
});
