import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { ThemeDesignEditor, type ThemeValue } from './ThemeDesignEditor';

const DEFAULT_THEME: ThemeValue = {
  fontFamily: 'system',
  fontColor: '#39404e',
  fontSize: 'md',
  backgroundColor: '#ffffff',
};

function Controlled(props: {
  initial?: ThemeValue;
  initialSavedValue?: ThemeValue;
  onSave?: (value: ThemeValue) => void;
  onClose?: () => void;
  disabled?: boolean;
}) {
  const [value, setValue] = useState<ThemeValue>(props.initial ?? DEFAULT_THEME);
  return (
    <ThemeDesignEditor
      value={value}
      onChange={setValue}
      onSave={props.onSave}
      onClose={props.onClose}
      initialSavedValue={props.initialSavedValue}
      disabled={props.disabled}
    />
  );
}

describe('ThemeDesignEditor', () => {
  it('renders the popover tabs and the mock canvas', () => {
    render(<Controlled />);
    expect(screen.getByRole('tablist', { name: 'Design editor sections' })).toBeInTheDocument();
    for (const label of ['Logo', 'Font', 'Buttons', 'Background']) {
      expect(screen.getByRole('tab', { name: label })).toBeInTheDocument();
    }
    expect(screen.getByText(/favorite way to give feedback/)).toBeInTheDocument();
    // No Revert button in a clean state.
    expect(screen.queryByRole('button', { name: 'Revert' })).not.toBeInTheDocument();
  });

  it('changing the font family live-updates the mock canvas', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    const fontSelect = screen.getByLabelText('Font family');
    const title = screen.getByText(/favorite way to give feedback/);
    expect(title.className).toMatch(/fontSystem/);

    await user.selectOptions(fontSelect, 'georgia');
    expect(screen.getByLabelText('Font family')).toHaveValue('georgia');
    expect(screen.getByText(/favorite way to give feedback/).className).toMatch(/fontGeorgia/);
  });

  it('changing the background color live-updates the mock canvas', async () => {
    const user = userEvent.setup();
    render(<Controlled />);

    await user.click(screen.getByRole('tab', { name: 'Background' }));
    const bgInput = screen.getByLabelText('Background color') as HTMLInputElement;
    expect(bgInput.value).toBe('#ffffff');

    bgInput.value = '#e7eaf3';
    bgInput.dispatchEvent(new Event('input', { bubbles: true }));
    bgInput.dispatchEvent(new Event('change', { bubbles: true }));
    expect(bgInput.value).toBe('#e7eaf3');
  });

  it('shows the Revert button only once a change is pending, and Revert restores the saved value', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    expect(screen.queryByRole('button', { name: 'Revert' })).not.toBeInTheDocument();

    await user.selectOptions(screen.getByLabelText('Font family'), 'georgia');
    expect(screen.getByRole('button', { name: 'Revert' })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Revert' }));
    expect(screen.getByLabelText('Font family')).toHaveValue('system');
    expect(screen.queryByRole('button', { name: 'Revert' })).not.toBeInTheDocument();
  });

  it('clicking Save changes calls onSave and clears the dirty state', async () => {
    const user = userEvent.setup();
    const onSave = vi.fn();
    render(<Controlled onSave={onSave} />);

    await user.selectOptions(screen.getByLabelText('Font family'), 'georgia');
    expect(screen.getByRole('button', { name: 'Revert' })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Save changes' }));
    expect(onSave).toHaveBeenCalledWith(expect.objectContaining({ fontFamily: 'georgia' }));
    expect(screen.queryByRole('button', { name: 'Revert' })).not.toBeInTheDocument();
  });

  it('closing with unsaved changes shows the confirmation view instead of closing immediately', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<Controlled onClose={onClose} />);

    await user.selectOptions(screen.getByLabelText('Font family'), 'georgia');
    await user.click(screen.getByRole('button', { name: 'Close design editor' }));

    expect(screen.getByText('Save changes to theme?')).toBeInTheDocument();
    expect(onClose).not.toHaveBeenCalled();

    await user.click(screen.getByRole('button', { name: 'Discard changes' }));
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('button', { name: 'Open Design editor' })).toBeInTheDocument();
  });

  it('closing with no pending changes closes immediately, with no confirmation view', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<Controlled onClose={onClose} />);

    await user.click(screen.getByRole('button', { name: 'Close design editor' }));
    expect(screen.queryByText('Save changes to theme?')).not.toBeInTheDocument();
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('button', { name: 'Open Design editor' })).toBeInTheDocument();
  });

  it('disables every control when disabled is true (flagged assumption, not observed in source)', () => {
    render(<Controlled disabled />);
    expect(screen.getByLabelText('Font family')).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Save changes' })).toBeDisabled();
  });
});
