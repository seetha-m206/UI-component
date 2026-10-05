import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { FreshserviceRemaining } from './FreshserviceRemaining';

afterEach(() => vi.unstubAllGlobals());

describe('Freshservice remaining component boundaries', () => {
  it.each(['problem', 'change', 'release'] as const)(
    'keeps the %s creation form local',
    async (kind) => {
      const fetch = vi.fn();
      vi.stubGlobal('fetch', fetch);
      const user = userEvent.setup();
      render(<FreshserviceRemaining variant={`${kind}-form`} />);
      await user.type(screen.getByLabelText('Subject'), 'Fictional service request');
      await user.click(screen.getByRole('button', { name: 'Submit' }));
      expect(screen.getByLabelText('Subject')).toHaveValue('Fictional service request');
      expect(screen.getByRole('status')).toHaveTextContent('No request was sent');
      expect(fetch).not.toHaveBeenCalled();
    }
  );

  it('switches CMDB tabs and guards import', async () => {
    const user = userEvent.setup();
    render(<FreshserviceRemaining variant="ci-association" />);
    expect(screen.getByText('No Devices found')).toBeVisible();
    await user.click(screen.getByRole('button', { name: 'Services' }));
    expect(screen.getByText('No Business services found.')).toBeVisible();
    await user.click(screen.getByRole('button', { name: 'Import' }));
    expect(screen.getByRole('status')).toHaveTextContent('No request was sent');
  });

  it('shows one planning editor at a time', async () => {
    const user = userEvent.setup();
    render(<FreshserviceRemaining variant="change-planning" />);
    await user.click(screen.getByRole('button', { name: 'Add Reason for Change' }));
    expect(screen.getByRole('textbox', { name: 'Reason for Change' })).toBeVisible();
    await user.click(screen.getByRole('button', { name: 'Add Backout Plan' }));
    expect(screen.queryByRole('textbox', { name: 'Reason for Change' })).not.toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Backout Plan' })).toBeVisible();
  });

  it('uses fictional tasks and guards task opening', async () => {
    const user = userEvent.setup();
    render(<FreshserviceRemaining variant="task-table" />);
    expect(screen.getByText('Fictional rows based on the observed table structure')).toBeVisible();
    await user.click(screen.getByRole('button', { name: 'Review service catalogue wording' }));
    expect(screen.getByRole('status')).toHaveTextContent('No request was sent');
  });

  it('keeps alert filter changes local and guards Apply', async () => {
    const fetch = vi.fn();
    vi.stubGlobal('fetch', fetch);
    const user = userEvent.setup();
    render(<FreshserviceRemaining variant="alert-filters" />);
    await user.selectOptions(screen.getByLabelText('Severity'), 'critical');
    await user.selectOptions(screen.getByLabelText('Suppression status'), 'Suppressed');
    await user.click(screen.getByRole('button', { name: 'Apply' }));
    expect(screen.getByLabelText('Severity')).toHaveValue('critical');
    expect(screen.getByRole('status')).toHaveTextContent('No request was sent');
    expect(fetch).not.toHaveBeenCalled();
  });
});
