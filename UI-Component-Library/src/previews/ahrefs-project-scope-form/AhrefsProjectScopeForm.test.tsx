import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { AhrefsProjectScopeForm } from './AhrefsProjectScopeForm';
describe('AhrefsProjectScopeForm', () => {
  it('renders the observed scope fields', () => {
    render(<AhrefsProjectScopeForm />);
    expect(screen.getByRole('heading', { name: 'Create a project' })).toBeInTheDocument();
    expect(screen.getByLabelText('Domain or path')).toBeInTheDocument();
    expect(screen.getByLabelText('Project name')).toBeInTheDocument();
  });
  it('opens the access modal and guards Continue', async () => {
    render(<AhrefsProjectScopeForm />);
    await userEvent.click(screen.getByRole('button', { name: 'Manage access' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Close access-control modal' }));
    await userEvent.click(screen.getByRole('button', { name: 'Continue' }));
    expect(screen.getByRole('status')).toHaveTextContent(/needs verification/i);
  });
});
