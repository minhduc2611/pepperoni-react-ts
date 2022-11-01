import { screen } from '@testing-library/react';
import Pizza from '../../domains/pizza';
import PizzaItem from '../../components/pizza-item/index';
import { renderWithProviders } from '../../setup/setupReduxTest';
import Cart from '../../components/cart';

test('renders cart', async () => {
  renderWithProviders(<Cart />);
});
