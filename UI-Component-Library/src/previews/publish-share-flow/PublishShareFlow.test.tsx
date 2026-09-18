import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PublishShareFlow } from './PublishShareFlow';
import { fixtures } from './fixtures';

function getFixture(id: string) {
  const fixture = fixtures.find((f) => f.id === id);
  if (!fixture) throw new Error(`fixture not found: ${id}`);
  return fixture.props;
}

describe('PublishShareFlow', () => {
  it('renders all 5 sharing-method cards, with Share With selected by default', () => {
    render(<PublishShareFlow {...getFixture('enabled-public')} />);
    expect(screen.getByRole('button', { name: 'Share With' })).toHaveAttribute('aria-current', 'true');
    expect(screen.getByRole('button', { name: 'Embed' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Email Campaigns' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'UTM Tracking' })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Google Tag Manager & Custom Tracking' })
    ).toBeInTheDocument();
  });

  it('enabled Public panel shows an interactive permalink, Shorten URL, and Download', () => {
    render(<PublishShareFlow {...getFixture('enabled-public')} />);
    expect(screen.getByRole('switch', { name: 'Enable public sharing' })).toHaveAttribute(
      'aria-checked',
      'true'
    );
    expect(screen.getByDisplayValue(/formperma/)).toBeEnabled();
    expect(screen.getByRole('button', { name: 'Shorten URL' })).toBeEnabled();
    expect(screen.getByRole('button', { name: 'Download' })).toBeEnabled();
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });

  it('clicking Shorten URL swaps the permalink field to the short URL and back', async () => {
    const user = userEvent.setup();
    render(<PublishShareFlow {...getFixture('enabled-public')} />);
    await user.click(screen.getByRole('button', { name: 'Shorten URL' }));
    expect(screen.getByDisplayValue('https://zfrms.co/f/AbC123')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Show Full URL' }));
    expect(screen.getByDisplayValue(/formperma/)).toBeInTheDocument();
  });

  it('clicking the Enable switch while enabled opens the confirmation dialog with the exact real copy', async () => {
    const user = userEvent.setup();
    render(<PublishShareFlow {...getFixture('enabled-public')} />);
    await user.click(screen.getByRole('switch', { name: 'Enable public sharing' }));

    expect(screen.getByRole('alertdialog', { name: 'Disable public sharing?' })).toBeInTheDocument();
    expect(
      screen.getByText(
        'On disabling the public sharing, this form will no longer be accessible through its Permalink URL and social media links. Forms embedded on websites will also be disabled. Would you like to proceed?'
      )
    ).toBeInTheDocument();
  });

  it('the confirm dialog\'s "Yes" is a solid destructive button, distinct from "No"', () => {
    render(<PublishShareFlow {...getFixture('confirm-dialog-open')} />);
    const yes = screen.getByRole('button', { name: 'Yes' });
    const no = screen.getByRole('button', { name: 'No' });
    expect(yes).toBeInTheDocument();
    expect(no).toBeInTheDocument();
    expect(yes.className).not.toBe(no.className);
  });

  it('clicking No cancels and keeps public sharing enabled with no onToggle call', async () => {
    const user = userEvent.setup();
    const onToggle = vi.fn();
    render(<PublishShareFlow {...getFixture('confirm-dialog-open')} onToggle={onToggle} />);
    await user.click(screen.getByRole('button', { name: 'No' }));

    expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument();
    expect(screen.getByRole('switch', { name: 'Enable public sharing' })).toHaveAttribute(
      'aria-checked',
      'true'
    );
    expect(onToggle).not.toHaveBeenCalled();
  });

  it('confirming Yes disables sharing, fires onToggle(false), and shows the amber warning banner', async () => {
    const user = userEvent.setup();
    const onToggle = vi.fn();
    render(<PublishShareFlow {...getFixture('confirm-dialog-open')} onToggle={onToggle} />);
    await user.click(screen.getByRole('button', { name: 'Yes' }));

    expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument();
    expect(onToggle).toHaveBeenCalledWith(false);
    expect(screen.getByRole('status')).toHaveTextContent('Public sharing is disabled');
  });

  it('disabled Public panel greys out and genuinely disables the permalink field and buttons', () => {
    render(<PublishShareFlow {...getFixture('disabled-public')} />);
    expect(screen.getByRole('switch', { name: 'Enable public sharing' })).toHaveAttribute(
      'aria-checked',
      'false'
    );
    expect(screen.getByDisplayValue(/formperma/)).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Shorten URL' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Download' })).toBeDisabled();
  });

  it('re-enabling from disabled fires onToggle(true) immediately with no confirmation dialog', async () => {
    const user = userEvent.setup();
    const onToggle = vi.fn();
    render(<PublishShareFlow {...getFixture('disabled-public')} onToggle={onToggle} />);
    await user.click(screen.getByRole('switch', { name: 'Enable public sharing' }));

    expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument();
    expect(onToggle).toHaveBeenCalledWith(true);
    expect(screen.getByRole('switch', { name: 'Enable public sharing' })).toHaveAttribute(
      'aria-checked',
      'true'
    );
  });

  it('selecting a non-Public Share With sub-item shows the out-of-scope placeholder', async () => {
    const user = userEvent.setup();
    render(<PublishShareFlow {...getFixture('enabled-public')} />);
    await user.click(screen.getByRole('button', { name: 'Specific Users' }));
    expect(screen.getByText(/“Specific Users” detail view was out of scope/)).toBeInTheDocument();
  });

  it('Embed -> iframe shows generated code built from the fake permalink', () => {
    render(<PublishShareFlow {...getFixture('embed-iframe')} />);
    const code = screen.getByRole('textbox', {
      name: 'Generated iframe embed code',
    }) as HTMLTextAreaElement;
    expect(code.value).toContain('formperma');
    expect(code.value).toContain('<iframe src=');
    expect(code).toBeEnabled();
  });

  it('switching Embed sub-items to a non-iframe type shows the out-of-scope placeholder', async () => {
    const user = userEvent.setup();
    render(<PublishShareFlow {...getFixture('embed-iframe')} />);
    await user.click(screen.getByRole('button', { name: 'JavaScript' }));
    expect(screen.getByText(/“JavaScript” detail view was out of scope/)).toBeInTheDocument();
  });

  it('when sharing is disabled, the Embed sub-nav items and iframe code become inert', () => {
    render(<PublishShareFlow {...getFixture('embed-locked')} />);
    expect(screen.getByRole('button', { name: 'iframe' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'JavaScript' })).toBeDisabled();
    expect(screen.getByRole('textbox', { name: 'Generated iframe embed code' })).toBeDisabled();
  });

  it('selecting Email Campaigns / UTM Tracking / GTM shows a placeholder with no sub-nav', async () => {
    const user = userEvent.setup();
    render(<PublishShareFlow {...getFixture('enabled-public')} />);
    await user.click(screen.getByRole('button', { name: 'Email Campaigns' }));
    expect(screen.getByText(/“Email Campaigns” detail view was out of scope/)).toBeInTheDocument();
    expect(screen.queryByRole('navigation', { name: 'Share with options' })).not.toBeInTheDocument();
    expect(screen.queryByRole('navigation', { name: 'Embed options' })).not.toBeInTheDocument();
  });

  it('Escape inside the confirm dialog behaves the same as clicking No', async () => {
    const user = userEvent.setup();
    render(<PublishShareFlow {...getFixture('confirm-dialog-open')} />);
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument();
    expect(screen.getByRole('switch', { name: 'Enable public sharing' })).toHaveAttribute(
      'aria-checked',
      'true'
    );
  });

  it('never calls fetch/XHR across navigation, toggling, and confirmation', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    render(<PublishShareFlow {...getFixture('enabled-public')} />);

    await user.click(screen.getByRole('button', { name: 'Embed' }));
    await user.click(screen.getByRole('button', { name: 'Share With' }));
    await user.click(screen.getByRole('switch', { name: 'Enable public sharing' }));
    await user.click(screen.getByRole('button', { name: 'Yes' }));
    await user.click(screen.getByRole('switch', { name: 'Enable public sharing' }));

    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
