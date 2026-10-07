import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SalesforceSalesPreview } from './SalesforceSalesPreview';

describe('SalesforceSalesPreview', () => {
  it('guards the fictional list import action', async () => {
    const user = userEvent.setup();
    render(<SalesforceSalesPreview variant="object-list-workspace" />);
    await user.click(screen.getByRole('button', { name: 'Import' }));
    expect(screen.getByRole('status')).toHaveTextContent('dedicated import fixture');
  });

  it('keeps the import next action disabled until a local method is selected', async () => {
    const user = userEvent.setup();
    render(<SalesforceSalesPreview variant="leads-import-flow" />);
    const next = screen.getByRole('button', { name: 'Next' });
    expect(next).toBeDisabled();
    await user.click(screen.getByRole('radio', { name: /Import from File/ }));
    expect(next).toBeEnabled();
  });

  it('blocks Agentforce enablement with an explicit local notice', async () => {
    const user = userEvent.setup();
    render(<SalesforceSalesPreview variant="agentforce-enable-panel" />);
    await user.click(screen.getByRole('button', { name: 'Agree and Enable' }));
    expect(screen.getByRole('status')).toHaveTextContent('intentionally blocked');
  });

  it('renders the observed opportunity stage and forecast values', () => {
    render(<SalesforceSalesPreview variant="new-opportunity-form" />);
    expect(screen.getByRole('option', { name: 'Closed Won' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Best Case' })).toBeInTheDocument();
  });

  it('guards the second Product wizard stage', async () => {
    const user = userEvent.setup();
    render(<SalesforceSalesPreview variant="new-product-wizard" />);
    await user.click(screen.getByRole('button', { name: 'Next' }));
    expect(screen.getByRole('status')).toHaveTextContent('stops before the Price Book Entry step');
  });

  it('renders Task status and priority values and blocks save', async () => {
    const user = userEvent.setup();
    render(<SalesforceSalesPreview variant="new-task-form" />);
    expect(screen.getByRole('option', { name: 'Waiting on someone else' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'High' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Save' }));
    expect(screen.getByRole('status')).toHaveTextContent('was not saved');
  });
});
