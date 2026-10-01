import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { WritesonicPreview } from './Writesonic';
import { WritesonicPlanSelectionBoundary } from '../writesonic-plan-selection-boundary/WritesonicPlanSelectionBoundary';
import { writesonicPreviews } from './registry';

describe('Writesonic observed report reconstruction', () => {
  it('keeps tab focus movement separate from selection until Enter', async () => {
    const user = userEvent.setup();
    render(<WritesonicPreview kind="tabs" />);
    screen.getByRole('tab', { name: 'Competitive analysis' }).focus();
    await user.keyboard('{ArrowRight}');
    expect(screen.getByRole('tab', { name: 'Citations' })).toHaveFocus();
    expect(screen.getByRole('tab', { name: 'Competitive analysis' })).toHaveAttribute(
      'aria-selected',
      'true'
    );
    await user.keyboard('{Enter}');
    expect(screen.getByRole('tab', { name: 'Citations' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Citations selected');
  });
  it('advances and reverses the report, then guards the plan action', async () => {
    const user = userEvent.setup();
    render(<WritesonicPreview kind="shell" initialPanel="Action items" />);
    await user.click(screen.getByRole('button', { name: 'Continue' }));
    expect(screen.getByRole('tab', { name: 'Answers' })).toHaveAttribute('aria-selected', 'true');
    await user.click(screen.getByRole('button', { name: 'View Plans' }));
    expect(screen.getByRole('status')).toHaveTextContent('No subscription or payment flow opened');
    await user.click(screen.getByRole('button', { name: 'Back' }));
    expect(screen.getByRole('tab', { name: 'Action items' })).toHaveAttribute(
      'aria-selected',
      'true'
    );
  });
  it('toggles answer disclosure with accessible, unique controlled regions', async () => {
    const user = userEvent.setup();
    render(
      <>
        <WritesonicPreview kind="disclosure" />
        <WritesonicPreview kind="disclosure" />
      </>
    );
    const buttons = screen.getAllByRole('button', { name: 'View more…' });
    expect(buttons[0].getAttribute('aria-controls')).not.toBe(
      buttons[1].getAttribute('aria-controls')
    );
    await user.click(buttons[0]);
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'true');
    expect(buttons[0]).toHaveTextContent('View less');
    expect(buttons[1]).toHaveAttribute('aria-expanded', 'false');
    await user.click(buttons[0]);
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'false');
  });
  it('never follows fictional citation URLs', async () => {
    const user = userEvent.setup(),
      open = vi.spyOn(window, 'open');
    render(<WritesonicPreview kind="source" />);
    await user.click(screen.getByRole('link'));
    expect(open).not.toHaveBeenCalled();
    expect(screen.getByRole('status')).toHaveTextContent('No external page was opened');
    open.mockRestore();
  });
  it('keeps disabled plan actions inert', async () => {
    const user = userEvent.setup();
    render(<WritesonicPreview kind="gate" disabled />);
    const button = screen.getByRole('button', { name: /Unlock all answers/ });
    expect(button).toBeDisabled();
    await user.click(button);
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });
  it('marks simulated failure and recovery as fictional with no network', async () => {
    const user = userEvent.setup(),
      fetch = vi.spyOn(globalThis, 'fetch');
    render(<WritesonicPreview kind="competitive" state="error" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Simulated error');
    await user.click(screen.getByRole('button', { name: 'Retry locally' }));
    expect(screen.getByRole('status')).toHaveTextContent('No provider success is implied');
    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(fetch).not.toHaveBeenCalled();
    fetch.mockRestore();
  });
  it('labels unverified help as a local improvement and supports Escape', async () => {
    const user = userEvent.setup();
    render(<WritesonicPreview kind="help" />);
    const trigger = screen.getByRole('button', { name: 'About AI Visibility' });
    await user.click(trigger);
    expect(screen.getByRole('tooltip')).toHaveTextContent('not verified');
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });
  it('renders the competing brands and semantic table columns from fiction', () => {
    render(<WritesonicPreview kind="competitors" />);
    const table = screen.getByRole('table');
    expect(within(table).getAllByRole('columnheader')).toHaveLength(5);
    expect(table).toHaveTextContent('Northstar Workspace');
    expect(table).toHaveTextContent('Cedar Desk');
    expect(table).toHaveTextContent('Beacon Suite');
  });
  it('registers 18 independent components without provider runtime claims', () => {
    expect(Object.keys(writesonicPreviews)).toHaveLength(18);
    for (const preview of Object.values(writesonicPreviews)) {
      expect(preview.type).toBe('reconstructed');
      if (preview.type !== 'reconstructed') continue;
      expect(preview.runtimeVerified).toBe(false);
      expect(preview.evidence).toMatch(/need verification/);
      expect(preview.fixtures.length).toBeGreaterThan(0);
      for (const fixture of preview.fixtures)
        expect(fixture.title).toMatch(/fictional|observed|local|guarded|simulation|unverified/i);
    }
  });
  it('disables answer disclosure consistently with the preview override', async () => {
    const user = userEvent.setup();
    render(<WritesonicPreview kind="disclosure" disabled />);
    const action = screen.getByRole('button', { name: 'View more…' });
    expect(action).toBeDisabled();
    await user.click(action);
    expect(action).toHaveAttribute('aria-expanded', 'false');
  });
  it('keeps trial selection and billing controls local and explicitly unverified', async () => {
    const user = userEvent.setup(),
      fetch = vi.spyOn(globalThis, 'fetch');
    render(<WritesonicPlanSelectionBoundary />);
    await user.click(screen.getByRole('button', { name: 'Monthly' }));
    expect(screen.getByRole('button', { name: 'Monthly' })).toHaveAttribute(
      'aria-pressed',
      'true'
    );
    await user.click(screen.getAllByRole('button', { name: 'Start free trial' })[0]);
    expect(screen.getByRole('status')).toHaveTextContent('No trial, subscription, payment');
    expect(fetch).not.toHaveBeenCalled();
    fetch.mockRestore();
  });
});
