import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NewFormChooser } from './NewFormChooser';
import { fixtures } from './fixtures';

function getFixture(id: string) {
  const fixture = fixtures.find((f) => f.id === id);
  if (!fixture) throw new Error(`fixture not found: ${id}`);
  return fixture.props;
}

describe('NewFormChooser', () => {
  it('starts closed, showing only the trigger button', () => {
    render(<NewFormChooser {...getFixture('closed')} />);
    expect(screen.getByRole('button', { name: '+ New Form' })).toBeInTheDocument();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('opens the 7-card chooser when the trigger is clicked', async () => {
    const user = userEvent.setup();
    render(<NewFormChooser {...getFixture('closed')} />);
    await user.click(screen.getByRole('button', { name: '+ New Form' }));

    expect(
      screen.getByRole('dialog', { name: 'Choose how to create your form' })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Blank Form/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /AI Forms/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Form Templates/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /CRM Forms/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /PDF to Form/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Images to Form/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Import Form and Entries/ })).toBeInTheDocument();
  });

  it('renders the chooser fixture directly with the "New" badge on Import Form and Entries', () => {
    render(<NewFormChooser {...getFixture('chooser-open')} />);
    const importCard = screen.getByRole('button', { name: /Import Form and Entries/ });
    expect(importCard).toHaveTextContent('New');
    // The other 6 cards do not carry the badge.
    expect(screen.getByRole('button', { name: /^Blank Form/ })).not.toHaveTextContent('New');
  });

  it('clicking "Blank Form" opens the Create-From-Scratch sub-dialog and fires onSelectOption', async () => {
    const user = userEvent.setup();
    const onSelectOption = vi.fn();
    render(<NewFormChooser {...getFixture('chooser-open')} onSelectOption={onSelectOption} />);

    await user.click(screen.getByRole('button', { name: /Blank Form/ }));

    expect(onSelectOption).toHaveBeenCalledWith('blank-form');
    expect(screen.getByRole('dialog', { name: 'Create From Scratch' })).toBeInTheDocument();
    expect(screen.queryByText('Choose how to create your form')).not.toBeInTheDocument();
  });

  it('clicking one of the other 6 top-level cards only fires onSelectOption, with no follow-up dialog', async () => {
    const user = userEvent.setup();
    const onSelectOption = vi.fn();
    render(<NewFormChooser {...getFixture('chooser-open')} onSelectOption={onSelectOption} />);

    await user.click(screen.getByRole('button', { name: /CRM Forms/ }));

    expect(onSelectOption).toHaveBeenCalledWith('crm-forms');
    // Still on the top-level chooser — no new dialog appeared.
    expect(
      screen.getByRole('dialog', { name: 'Choose how to create your form' })
    ).toBeInTheDocument();
    expect(screen.queryByRole('dialog', { name: 'Create From Scratch' })).not.toBeInTheDocument();
  });

  it('pre-selects Standard by default in the Create-From-Scratch sub-dialog', () => {
    render(<NewFormChooser {...getFixture('create-from-scratch-standard')} />);
    expect(screen.getByRole('radio', { name: /Standard/ })).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByRole('radio', { name: /Spotlight/ })).toHaveAttribute(
      'aria-checked',
      'false'
    );
    expect(screen.getByRole('radio', { name: /Card/ })).toHaveAttribute('aria-checked', 'false');
  });

  it('form-type selection is mutually exclusive', async () => {
    const user = userEvent.setup();
    render(<NewFormChooser {...getFixture('create-from-scratch-standard')} />);

    await user.click(screen.getByRole('radio', { name: /Spotlight/ }));

    expect(screen.getByRole('radio', { name: /Spotlight/ })).toHaveAttribute(
      'aria-checked',
      'true'
    );
    expect(screen.getByRole('radio', { name: /Standard/ })).toHaveAttribute(
      'aria-checked',
      'false'
    );
  });

  it('shows the "New" badge on the Spotlight form-type card', () => {
    render(<NewFormChooser {...getFixture('create-from-scratch-standard')} />);
    expect(screen.getByRole('radio', { name: /Spotlight/ })).toHaveTextContent('New');
    expect(screen.getByRole('radio', { name: /Standard/ })).not.toHaveTextContent('New');
  });

  it('updates the labeled video-preview placeholder to match the selected form type, and never a real video', () => {
    render(<NewFormChooser {...getFixture('create-from-scratch-spotlight')} />);
    expect(
      screen.getByRole('img', {
        name: 'Video preview: spotlight form layout — not reconstructed, video asset unavailable',
      })
    ).toBeInTheDocument();
    expect(document.querySelector('video')).not.toBeInTheDocument();
  });

  it('Cancel returns to the top-level chooser without closing everything, and does not call onClose', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<NewFormChooser {...getFixture('create-from-scratch-standard')} onClose={onClose} />);

    await user.click(screen.getByRole('button', { name: 'Cancel' }));

    expect(
      screen.getByRole('dialog', { name: 'Choose how to create your form' })
    ).toBeInTheDocument();
    expect(onClose).not.toHaveBeenCalled();
  });

  it('the X close button on the top-level chooser closes everything and calls onClose', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<NewFormChooser {...getFixture('chooser-open')} onClose={onClose} />);

    await user.click(screen.getByRole('button', { name: 'Close' }));

    expect(onClose).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: '+ New Form' })).toBeInTheDocument();
  });

  it('Escape at the top-level chooser also closes everything and calls onClose', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<NewFormChooser {...getFixture('chooser-open')} onClose={onClose} />);

    await user.keyboard('{Escape}');

    expect(onClose).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('Escape inside the sub-dialog steps back to the chooser, not a full close', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<NewFormChooser {...getFixture('create-from-scratch-standard')} onClose={onClose} />);

    await user.keyboard('{Escape}');

    expect(
      screen.getByRole('dialog', { name: 'Choose how to create your form' })
    ).toBeInTheDocument();
    expect(onClose).not.toHaveBeenCalled();
  });

  it('Create Form calls onCreateForm with the currently selected form type and implements no real navigation', async () => {
    const user = userEvent.setup();
    const onCreateForm = vi.fn();
    render(
      <NewFormChooser
        {...getFixture('create-from-scratch-spotlight')}
        onCreateForm={onCreateForm}
      />
    );

    await user.click(screen.getByRole('button', { name: 'Create Form' }));

    expect(onCreateForm).toHaveBeenCalledWith('spotlight');
    // Still showing the same sub-dialog — no navigation was implemented.
    expect(screen.getByRole('dialog', { name: 'Create From Scratch' })).toBeInTheDocument();
  });

  it('moves and applies form-type selection via arrow keys (roving focus)', async () => {
    const user = userEvent.setup();
    render(<NewFormChooser {...getFixture('create-from-scratch-standard')} />);
    const standard = screen.getByRole('radio', { name: /Standard/ });
    standard.focus();

    await user.keyboard('{ArrowDown}');

    expect(screen.getByRole('radio', { name: /Spotlight/ })).toHaveAttribute(
      'aria-checked',
      'true'
    );
    expect(document.activeElement).toBe(screen.getByRole('radio', { name: /Spotlight/ }));
  });

  it('disabled prevents the trigger from opening the chooser at all', async () => {
    const user = userEvent.setup();
    render(<NewFormChooser {...getFixture('disabled-closed')} />);
    expect(screen.getByRole('button', { name: '+ New Form' })).toBeDisabled();

    await user.click(screen.getByRole('button', { name: '+ New Form' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('never calls fetch/XHR across opening, selecting, canceling, or closing (fully client-side, per the source record)', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    render(<NewFormChooser {...getFixture('closed')} />);

    await user.click(screen.getByRole('button', { name: '+ New Form' }));
    await user.click(screen.getByRole('button', { name: /Blank Form/ }));
    await user.click(screen.getByRole('radio', { name: /Spotlight/ }));
    await user.click(screen.getByRole('button', { name: 'Create Form' }));
    await user.click(screen.getByRole('button', { name: 'Cancel' }));
    await user.keyboard('{Escape}');

    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
