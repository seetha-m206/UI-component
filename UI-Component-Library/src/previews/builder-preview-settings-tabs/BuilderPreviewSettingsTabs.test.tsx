import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { BuilderPreviewSettingsTabs, type BuilderNavItem } from './BuilderPreviewSettingsTabs';
import { fixtures } from './fixtures';

function getFixture(id: string) {
  const fixture = fixtures.find((f) => f.id === id);
  if (!fixture) throw new Error(`fixture not found: ${id}`);
  return fixture.props;
}

const ITEMS: BuilderNavItem[] = [
  { id: 'builder', label: 'Builder' },
  { id: 'rules', label: 'Rules' },
  { id: 'settings', label: 'Settings' },
  { id: 'audit', label: 'Audit' },
];

function Controlled(props: { initial?: string; fieldLabels?: string[]; onChange?: (id: string) => void }) {
  const [value, setValue] = useState(props.initial ?? ITEMS[0].id);
  return (
    <BuilderPreviewSettingsTabs
      items={ITEMS}
      value={value}
      fieldLabels={props.fieldLabels ?? ['Full Name']}
      onChange={(id) => {
        setValue(id);
        props.onChange?.(id);
      }}
    />
  );
}

describe('BuilderPreviewSettingsTabs', () => {
  it('renders all 9 left-rail items from the fixture', () => {
    render(<BuilderPreviewSettingsTabs {...getFixture('builder-active-populated')} />);
    for (const label of [
      'Builder',
      'Rules',
      'Settings',
      'Themes',
      'Share',
      'Integrations',
      'Approvals',
      'Analytics',
      'Audit',
    ]) {
      expect(screen.getByRole('button', { name: label })).toBeInTheDocument();
    }
  });

  it('carries zero ARIA state attributes on the left-rail items (a faithful, deliberate reproduction, not an oversight)', () => {
    render(<BuilderPreviewSettingsTabs {...getFixture('settings-active')} />);
    const active = screen.getByRole('button', { name: 'Settings' });
    expect(active).not.toHaveAttribute('aria-current');
    expect(active).not.toHaveAttribute('aria-selected');
    expect(active).not.toHaveAttribute('role', 'tab');
    expect(screen.queryByRole('tablist')).not.toBeInTheDocument();
    // The only exposed hook is a plain data attribute, not ARIA.
    expect(active).toHaveAttribute('data-active', 'true');
    const inactive = screen.getByRole('button', { name: 'Builder' });
    expect(inactive).not.toHaveAttribute('data-active');
  });

  it('the Preview button carries no aria-haspopup/aria-expanded either', () => {
    render(<BuilderPreviewSettingsTabs {...getFixture('builder-active-populated')} />);
    const previewButton = screen.getByRole('button', { name: 'Preview' });
    expect(previewButton).not.toHaveAttribute('aria-haspopup');
    expect(previewButton).not.toHaveAttribute('aria-expanded');
  });

  it('clicking a left-rail item swaps the active visual state and calls onChange', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Controlled onChange={onChange} />);
    await user.click(screen.getByRole('button', { name: 'Audit' }));
    expect(onChange).toHaveBeenCalledWith('audit');
    expect(screen.getByRole('button', { name: 'Audit' })).toHaveAttribute('data-active', 'true');
    expect(screen.getByRole('button', { name: 'Builder' })).not.toHaveAttribute('data-active');
  });

  it('clicking the already-active item still fires onChange (no deselect/no-op guard, unlike sidebar-settings-subnav)', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Controlled initial="builder" onChange={onChange} />);
    await user.click(screen.getByRole('button', { name: 'Builder' }));
    expect(onChange).toHaveBeenCalledWith('builder');
  });

  it('the Preview button stays enabled on a zero-field form (directly refutes a "disabled until >=1 field" hypothesis)', () => {
    render(<BuilderPreviewSettingsTabs {...getFixture('zero-field-form')} />);
    const previewButton = screen.getByRole('button', { name: 'Preview' });
    expect(previewButton).toBeEnabled();
  });

  it('opening Preview on a zero-field form renders "This form is empty!" with a disabled placeholder Submit', async () => {
    const user = userEvent.setup();
    render(<BuilderPreviewSettingsTabs {...getFixture('zero-field-form')} />);
    await user.click(screen.getByRole('button', { name: 'Preview' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('This form is empty!')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeDisabled();
  });

  it('opening Preview on a populated form renders the field list instead of the empty state', async () => {
    const user = userEvent.setup();
    render(<BuilderPreviewSettingsTabs {...getFixture('builder-active-populated')} />);
    await user.click(screen.getByRole('button', { name: 'Preview' }));
    expect(screen.queryByText('This form is empty!')).not.toBeInTheDocument();
    expect(screen.getByText('Full Name')).toBeInTheDocument();
    expect(screen.getByText('Satisfaction Rating')).toBeInTheDocument();
  });

  it('the preview-open fixtures mount with the overlay already open', () => {
    render(<BuilderPreviewSettingsTabs {...getFixture('preview-open-populated')} />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('closing the Preview overlay hides the dialog', async () => {
    const user = userEvent.setup();
    render(<BuilderPreviewSettingsTabs {...getFixture('preview-open-populated')} />);
    await user.click(screen.getByRole('button', { name: 'Close preview' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('never calls fetch/XHR across selecting a tab and opening/closing Preview', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    render(<Controlled />);
    await user.click(screen.getByRole('button', { name: 'Rules' }));
    await user.click(screen.getByRole('button', { name: 'Preview' }));
    await user.click(screen.getByRole('button', { name: 'Close preview' }));
    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
