import { screen } from '@testing-library/react';
import Pizza from '../../domains/pizza';
import PizzaItem from '../../components/pizza-item/index';
import { renderWithProviders } from '../../setup/setupReduxTest';

test('renders Pizza Item shows pizza infomations', () => {
  const pizza = new Pizza('Pepperonis Pizza', 'Delicious Pizza', 19.99, 'large', '')
  renderWithProviders(<PizzaItem pizza={pizza} />);
  const name = screen.getByText(/Pepperonis Pizza/i);
  const description = screen.getByText(/Delicious Pizza/i);
  const price = screen.getByText(/19.99/i);
  expect(name).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(price).toBeInTheDocument();
});
