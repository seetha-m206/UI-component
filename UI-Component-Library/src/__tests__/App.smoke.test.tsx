import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('App', () => {
  it('should render the overview page with all component entries listed', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: 'UI Library' })).toBeInTheDocument();
    expect(screen.getAllByText(/Zoho Forms/).length).toBeGreaterThan(0);
  });

  it('should navigate to a component detail page and render its tabs', async () => {
    render(
      <MemoryRouter initialEntries={['/zoho-forms/toggle-radio-switch']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', { name: 'Toggle (Custom Radio-Styled Switch)' })
    ).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Usage' })).toBeInTheDocument();

    const user = userEvent.setup();
    await user.click(screen.getByRole('tab', { name: 'Technical Data' }));
    expect(screen.getByRole('tab', { name: 'Technical Data' })).toHaveAttribute(
      'aria-selected',
      'true'
    );
  });

  it('should show a not-found message for an unknown component id', () => {
    render(
      <MemoryRouter initialEntries={['/zoho-forms/does-not-exist']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Component not found')).toBeInTheDocument();
  });
});
