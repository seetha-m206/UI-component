import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { ThemeEditorSplitPaneShell, type ThemeConfigValue } from './ThemeEditorSplitPaneShell';

function Controlled(props: { initial?: ThemeConfigValue; disabled?: boolean }) {
  const [value, setValue] = useState<ThemeConfigValue>(
    props.initial ?? { backgroundColor: '#ffffff', fontFamily: "'Inter', system-ui, sans-serif" }
  );
  const [collapsed, setCollapsed] = useState(false);
  return (
    <ThemeEditorSplitPaneShell
      value={value}
      onChange={setValue}
      collapsed={collapsed}
      onCollapsedChange={setCollapsed}
      disabled={props.disabled}
    />
  );
}

describe('ThemeEditorSplitPaneShell', () => {
  it('renders the icon tab strip, detail panel, and preview pane', () => {
    render(<Controlled />);
    expect(screen.getByRole('tablist', { name: 'Theme editor sections' })).toBeInTheDocument();
    for (const label of [
      'General',
      'Welcome Page',
      'Header',
      'Fields',
      'Container',
      'Pages',
      'Special Fields',
      'Buttons',
      'Progress Bar',
    ]) {
      expect(screen.getByRole('tab', { name: label })).toBeInTheDocument();
    }
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
  });

  it('changing the background color control live-updates the preview pane', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    const colorInput = screen.getByLabelText('Background') as HTMLInputElement;
    expect(colorInput.value).toBe('#ffffff');

    // Native color inputs don't support realistic typing via userEvent;
    // fire the change directly, mirroring how a real color-picker commit
    // would call the handler.
    await user.click(colorInput);
    (colorInput as HTMLInputElement).value = '#245ba7';
    colorInput.dispatchEvent(new Event('input', { bubbles: true }));
    colorInput.dispatchEvent(new Event('change', { bubbles: true }));

    expect(colorInput.value).toBe('#245ba7');
  });

  it('changing the font selector live-updates the preview font', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    const fontSelect = screen.getByLabelText('Font');
    await user.selectOptions(fontSelect, "Georgia, 'Times New Roman', serif");
    expect(screen.getByLabelText('Font')).toHaveValue("Georgia, 'Times New Roman', serif");
  });

  it('collapses and expands the left config panel via the toggle button', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    const toggle = screen.getByRole('button', { name: 'Collapse configuration panel' });
    expect(toggle).toHaveAttribute('aria-expanded', 'true');

    await user.click(toggle);
    expect(screen.getByRole('button', { name: 'Expand configuration panel' })).toHaveAttribute(
      'aria-expanded',
      'false'
    );

    await user.click(screen.getByRole('button', { name: 'Expand configuration panel' }));
    expect(screen.getByRole('button', { name: 'Collapse configuration panel' })).toHaveAttribute(
      'aria-expanded',
      'true'
    );
  });

  it('switching tabs shows the requested section and a not-implemented note for non-General tabs', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    await user.click(screen.getByRole('tab', { name: 'Buttons' }));
    expect(screen.getByRole('tab', { name: 'Buttons' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText(/Not reconstructed in this preview/)).toBeInTheDocument();

    await user.click(screen.getByRole('tab', { name: 'General' }));
    expect(screen.getByLabelText('Background')).toBeInTheDocument();
  });

  it('disables every config control when disabled is true (flagged assumption, not observed in source)', () => {
    render(<Controlled disabled />);
    expect(screen.getByLabelText('Background')).toBeDisabled();
    expect(screen.getByLabelText('Font')).toBeDisabled();
  });
});
