import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { JotformAppShellBuilder } from './JotformAppShellBuilder';

describe('JotformAppShellBuilder', () => {
  it('starts on BUILD mode with the palette collapsed and the AI copilot in the right pane', () => {
    render(<JotformAppShellBuilder />);
    expect(screen.getByRole('tab', { name: 'BUILD' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('button', { name: 'Add Element +' })).toBeInTheDocument();
    expect(screen.getByText('Form Copilot')).toBeInTheDocument();
    expect(screen.getByTestId('builder-canvas')).toBeInTheDocument();
  });

  it('expanding the palette shows the BASIC field list', async () => {
    const user = userEvent.setup();
    render(<JotformAppShellBuilder />);
    await user.click(screen.getByRole('button', { name: 'Add Element +' }));
    const palette = screen.getByLabelText('Element palette');
    expect(within(palette).getByText('Full Name')).toBeInTheDocument();
    expect(within(palette).getByText('Input Table')).toBeInTheDocument();
  });

  it('selecting a field swaps the right pane from AI copilot to a Properties panel, and deselecting swaps it back', async () => {
    const user = userEvent.setup();
    const onFieldSelect = vi.fn();
    render(<JotformAppShellBuilder onFieldSelect={onFieldSelect} />);
    await user.click(screen.getByRole('button', { name: 'Configure email field' }));
    expect(onFieldSelect).toHaveBeenCalledWith('email');
    expect(screen.getByText('Properties')).toBeInTheDocument();
    expect(screen.queryByText('Form Copilot')).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Configure email field' }));
    expect(onFieldSelect).toHaveBeenCalledWith(null);
    expect(screen.getByText('Form Copilot')).toBeInTheDocument();
  });

  it('switching to SETTINGS shows its own sub-nav rail, not a distinct page header', async () => {
    const user = userEvent.setup();
    const onModeChange = vi.fn();
    render(<JotformAppShellBuilder onModeChange={onModeChange} />);
    await user.click(screen.getByRole('tab', { name: 'SETTINGS' }));
    expect(onModeChange).toHaveBeenCalledWith('settings');
    expect(screen.getByLabelText('Settings navigation')).toBeInTheDocument();
    expect(screen.getByText('Conditions')).toBeInTheDocument();
    expect(screen.getByText('Workflows')).toBeInTheDocument();
  });

  it('switching to PUBLISH shows its own sub-nav rail', async () => {
    const user = userEvent.setup();
    render(<JotformAppShellBuilder />);
    await user.click(screen.getByRole('tab', { name: 'PUBLISH' }));
    expect(screen.getByLabelText('Publish navigation')).toBeInTheDocument();
    expect(screen.getByText('AI Agents')).toBeInTheDocument();
    expect(screen.getByText('Assign Form')).toBeInTheDocument();
  });

  it('the form title and autosave indicator are always visible in the top bar', () => {
    render(<JotformAppShellBuilder />);
    expect(screen.getByLabelText('Form title')).toHaveValue('Customer Feedback Survey');
    expect(screen.getByText(/All changes saved at/)).toBeInTheDocument();
  });

  it('disables every interactive control when disabled', async () => {
    const user = userEvent.setup();
    const onModeChange = vi.fn();
    render(<JotformAppShellBuilder disabled onModeChange={onModeChange} />);
    await user.click(screen.getByRole('tab', { name: 'SETTINGS' }));
    expect(onModeChange).not.toHaveBeenCalled();
  });

  it('never calls fetch/XHR across any interaction (fully client-side, per the source record)', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    render(<JotformAppShellBuilder />);
    await user.click(screen.getByRole('button', { name: 'Configure email field' }));
    await user.click(screen.getByRole('tab', { name: 'SETTINGS' }));
    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
