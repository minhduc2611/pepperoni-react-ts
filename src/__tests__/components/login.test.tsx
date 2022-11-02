import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../../components/login';
import { renderWithProviders } from '../../setup/setupReduxTest';

test('renders Login Button', async () => {
  const { findAllByRole, getByTestId } = await renderWithProviders(<Login />);
  await waitFor(async () => {
    const loginButton = await findAllByRole('button', { name: "Login" })
    expect(loginButton).toHaveLength(1)
    expect(loginButton[0]).toBeDisabled()
    
    /** select a user */
    const selectUser = await getByTestId('select-user')
    await userEvent.selectOptions(selectUser, ['False User'])

    expect(loginButton).toHaveLength(1)
    expect(loginButton[0]).not.toBeDisabled()

    /** select Facebook */
    const selectFacebookUser = await getByTestId('select-user')
    await userEvent.selectOptions(selectFacebookUser, ['Facebook'])

    expect(loginButton).toHaveLength(1)
    expect(loginButton[0]).not.toBeDisabled()
  });
});
