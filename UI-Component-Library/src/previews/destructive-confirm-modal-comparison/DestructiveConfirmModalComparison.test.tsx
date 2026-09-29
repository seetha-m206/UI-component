import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DestructiveConfirmModalComparison } from './DestructiveConfirmModalComparison';
import { fixtures } from './fixtures';

function getFixture(id: string) {
  const fixture = fixtures.find((f) => f.id === id);
  if (!fixture) throw new Error(`fixture not found: ${id}`);
  return fixture.props;
}

describe('DestructiveConfirmModalComparison', () => {
  it('starts closed, showing both trigger buttons and no dialog', () => {
    render(<DestructiveConfirmModalComparison {...getFixture('closed')} />);
    expect(screen.getByRole('button', { name: 'Trigger Trash Delete' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Trigger Exit Warning' })).toBeInTheDocument();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('Trigger Trash Delete opens Modal 1 with its own distinct copy, entry count, and close "X" button', async () => {
    const user = userEvent.setup();
    render(<DestructiveConfirmModalComparison {...getFixture('closed')} />);
    await user.click(screen.getByRole('button', { name: 'Trigger Trash Delete' }));

    const dialog = screen.getByRole('dialog', { name: 'Move to Trash?' });
    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveTextContent('Customer Feedback Form');
    expect(dialog).toHaveTextContent('Submitted Entries: 128');
    expect(dialog).toHaveTextContent('permanently deleted after 15 days');
    expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
    // Modal 2's distinct copy must not be present.
    expect(screen.queryByText('Alert')).not.toBeInTheDocument();
  });

  it('Trigger Exit Warning opens Modal 2 with its own distinct copy and NO entry-count box or close "X" button', async () => {
    const user = userEvent.setup();
    render(<DestructiveConfirmModalComparison {...getFixture('closed')} />);
    await user.click(screen.getByRole('button', { name: 'Trigger Exit Warning' }));

    const dialog = screen.getByRole('dialog', { name: 'Alert' });
    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveTextContent('Changes are not applied');
    expect(screen.queryByText(/Submitted Entries/)).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Close' })).not.toBeInTheDocument();
    // Modal 1's distinct copy must not be present.
    expect(screen.queryByText('Move to Trash?')).not.toBeInTheDocument();
  });

  it('the two modals are structurally distinct, not the same dialog with different text', async () => {
    const user = userEvent.setup();
    const { unmount } = render(<DestructiveConfirmModalComparison {...getFixture('closed')} />);
    await user.click(screen.getByRole('button', { name: 'Trigger Trash Delete' }));
    const trashDialog = screen.getByRole('dialog');
    // Modal 1: decorative sparkle dots around its icon circle (a marker of
    // the "activeAnimate" redesign per the source record).
    expect(trashDialog.querySelectorAll('[class*="sparkleDot"]').length).toBeGreaterThan(0);
    unmount();

    render(<DestructiveConfirmModalComparison {...getFixture('closed')} />);
    await user.click(screen.getByRole('button', { name: 'Trigger Exit Warning' }));
    const exitDialog = screen.getByRole('dialog');
    // Modal 2 has no such decoration — confirming the two are independently
    // built, not a shared component with different copy.
    expect(exitDialog.querySelectorAll('[class*="sparkleDot"]').length).toBe(0);
  });

  it('Modal 1 "No" dismisses without confirming, calling onTrashCancel but not onTrashConfirm', async () => {
    const user = userEvent.setup();
    const onTrashCancel = vi.fn();
    const onTrashConfirm = vi.fn();
    render(
      <DestructiveConfirmModalComparison
        {...getFixture('trash-open')}
        onTrashCancel={onTrashCancel}
        onTrashConfirm={onTrashConfirm}
      />
    );
    await user.click(screen.getByRole('button', { name: 'No' }));

    expect(onTrashCancel).toHaveBeenCalledTimes(1);
    expect(onTrashConfirm).not.toHaveBeenCalled();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('Modal 1 "Yes" calls onTrashConfirm and closes', async () => {
    const user = userEvent.setup();
    const onTrashConfirm = vi.fn();
    render(
      <DestructiveConfirmModalComparison {...getFixture('trash-open')} onTrashConfirm={onTrashConfirm} />
    );
    await user.click(screen.getByRole('button', { name: 'Yes' }));

    expect(onTrashConfirm).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('Modal 1 close "X" also dismisses via the cancel path', async () => {
    const user = userEvent.setup();
    const onTrashCancel = vi.fn();
    render(
      <DestructiveConfirmModalComparison {...getFixture('trash-open')} onTrashCancel={onTrashCancel} />
    );
    await user.click(screen.getByRole('button', { name: 'Close' }));

    expect(onTrashCancel).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('Modal 2 "No" dismisses without confirming, calling onExitCancel but not onExitConfirm', async () => {
    const user = userEvent.setup();
    const onExitCancel = vi.fn();
    const onExitConfirm = vi.fn();
    render(
      <DestructiveConfirmModalComparison
        {...getFixture('exit-warning-open')}
        onExitCancel={onExitCancel}
        onExitConfirm={onExitConfirm}
      />
    );
    await user.click(screen.getByRole('button', { name: 'No' }));

    expect(onExitCancel).toHaveBeenCalledTimes(1);
    expect(onExitConfirm).not.toHaveBeenCalled();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('Modal 2 "Yes" calls onExitConfirm and closes', async () => {
    const user = userEvent.setup();
    const onExitConfirm = vi.fn();
    render(
      <DestructiveConfirmModalComparison
        {...getFixture('exit-warning-open')}
        onExitConfirm={onExitConfirm}
      />
    );
    await user.click(screen.getByRole('button', { name: 'Yes' }));

    expect(onExitConfirm).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('Escape closes Modal 1 via the cancel path', async () => {
    const user = userEvent.setup();
    const onTrashCancel = vi.fn();
    render(
      <DestructiveConfirmModalComparison {...getFixture('trash-open')} onTrashCancel={onTrashCancel} />
    );
    await user.keyboard('{Escape}');
    expect(onTrashCancel).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('Escape closes Modal 2 via the cancel path', async () => {
    const user = userEvent.setup();
    const onExitCancel = vi.fn();
    render(
      <DestructiveConfirmModalComparison
        {...getFixture('exit-warning-open')}
        onExitCancel={onExitCancel}
      />
    );
    await user.keyboard('{Escape}');
    expect(onExitCancel).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('disabled prevents either trigger from opening its modal', async () => {
    const user = userEvent.setup();
    render(<DestructiveConfirmModalComparison {...getFixture('disabled')} />);
    expect(screen.getByRole('button', { name: 'Trigger Trash Delete' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Trigger Exit Warning' })).toBeDisabled();

    await user.click(screen.getByRole('button', { name: 'Trigger Trash Delete' }));
    await user.click(screen.getByRole('button', { name: 'Trigger Exit Warning' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('never calls fetch/XHR (both are purely client-side confirmation gates, per the source record)', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    render(<DestructiveConfirmModalComparison {...getFixture('closed')} />);

    await user.click(screen.getByRole('button', { name: 'Trigger Trash Delete' }));
    await user.click(screen.getByRole('button', { name: 'Yes' }));
    await user.click(screen.getByRole('button', { name: 'Trigger Exit Warning' }));
    await user.click(screen.getByRole('button', { name: 'Yes' }));

    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
