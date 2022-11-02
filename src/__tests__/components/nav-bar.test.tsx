import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NavBar from '../../components/nav-bar';
import { renderWithProviders } from '../../setup/setupReduxTest';

test('renders Navigation Bar', async () => {
  const { findAllByRole, findAllByText } = await renderWithProviders(<NavBar />);

  /** have image */
  const images = await findAllByRole("img", { name: /icon$/i });
  expect(images).toHaveLength(1);
  /** have page name */
  const pageName = await findAllByText(/Pepperonis Pizza$/i);
  expect(pageName).toHaveLength(1);
  /** have login */
  const loginButton = await findAllByRole('button', { name: "Log in" })
  expect(loginButton).toHaveLength(1)
  expect(loginButton[0]).toBeEnabled()
  /** click login */
  await userEvent.click(loginButton[0])
  expect(loginButton[0]).toBeEnabled()

  /** modal should open to login */
  await waitFor(async () => {
    const header = await findAllByText(/Choose An User$/i);
    expect(header).toHaveLength(1);
  })
});
