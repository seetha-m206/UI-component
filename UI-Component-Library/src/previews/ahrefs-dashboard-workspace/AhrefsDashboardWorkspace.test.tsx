import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { AhrefsDashboardWorkspace } from './AhrefsDashboardWorkspace';

describe('AhrefsDashboardWorkspace', () => {
  it('renders the observed navigation, target bar, and first-project state', () => {
    render(<AhrefsDashboardWorkspace />);
    expect(screen.getByRole('navigation', { name: 'Ahrefs products' })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Domain or URL' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Add your first project' })).toBeInTheDocument();
    expect(screen.getByRole('dialog', { name: 'Product update' })).toBeInTheDocument();
  });

  it('guards target analysis locally', async () => {
    render(<AhrefsDashboardWorkspace />);
    await userEvent.type(
      screen.getByRole('textbox', { name: 'Domain or URL' }),
      'northstar.example'
    );
    await userEvent.click(screen.getByRole('button', { name: 'Analyze target' }));
    expect(screen.getByRole('status')).toHaveTextContent(/No analysis was submitted/i);
  });

  it('filters the synthetic empty workspace and restores it', async () => {
    render(<AhrefsDashboardWorkspace />);
    await userEvent.type(
      screen.getByRole('textbox', { name: 'Search workspace collections' }),
      'northstar'
    );
    expect(screen.getByRole('heading', { name: 'No projects found' })).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Clear project search' }));
    expect(screen.getByRole('heading', { name: 'Add your first project' })).toBeInTheDocument();
  });

  it('dismisses local onboarding and update surfaces without external actions', async () => {
    render(<AhrefsDashboardWorkspace />);
    await userEvent.click(screen.getByRole('button', { name: 'Dismiss welcome resources' }));
    expect(
      screen.queryByRole('region', { name: 'Welcome and learning resources' })
    ).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Dismiss product update' }));
    expect(screen.queryByRole('dialog', { name: 'Product update' })).not.toBeInTheDocument();
  });

  it('marks unverified navigation rather than inventing a live result', async () => {
    render(<AhrefsDashboardWorkspace />);
    await userEvent.click(screen.getByRole('button', { name: /All tools/ }));
    expect(screen.getByRole('status')).toHaveTextContent(/needs verification/i);
  });
});
