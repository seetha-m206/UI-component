import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DocumentCanvasEditorShell } from './DocumentCanvasEditorShell';
import { fixtures } from './fixtures';

function getFixture(id: string) {
  const fixture = fixtures.find((f) => f.id === id);
  if (!fixture) throw new Error(`fixture not found: ${id}`);
  return fixture.props;
}

describe('DocumentCanvasEditorShell', () => {
  it('typing "/" on an empty line opens the slash menu grouped into sections', async () => {
    const user = userEvent.setup();
    render(<DocumentCanvasEditorShell {...getFixture('empty-document')} />);

    const emptyLine = screen.getAllByLabelText('Document text')[1];
    await user.click(emptyLine);
    await user.type(emptyLine, '/');

    expect(screen.getByRole('listbox', { name: 'Insert a block' })).toBeInTheDocument();
    expect(screen.getByText('Questions')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Text' })).toBeInTheDocument();
  });

  it('typing "/" mid-line (not on an empty line) does NOT open the menu — it is literal text', async () => {
    const user = userEvent.setup();
    render(<DocumentCanvasEditorShell {...getFixture('empty-document')} />);

    const proseLine = screen.getAllByLabelText('Document text')[0];
    await user.click(proseLine);
    await user.type(proseLine, '/');

    expect(screen.queryByRole('listbox', { name: 'Insert a block' })).not.toBeInTheDocument();
    expect(proseLine).toHaveValue('Welcome! A few quick questions before we start./');
  });

  it('fuzzy/keyword search: "/rat" matches both "Rating" and "Likert (matrix)" despite neither containing that literal substring in the matrix case', async () => {
    const user = userEvent.setup();
    render(<DocumentCanvasEditorShell {...getFixture('empty-document')} />);

    const emptyLine = screen.getAllByLabelText('Document text')[1];
    await user.click(emptyLine);
    await user.type(emptyLine, '/rat');

    expect(screen.getByRole('option', { name: 'Rating' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Likert (matrix)' })).toBeInTheDocument();
  });

  it('pressing Enter inserts the highlighted item as a non-editable card block and opens the config drawer', async () => {
    const user = userEvent.setup();
    render(<DocumentCanvasEditorShell {...getFixture('empty-document')} />);

    const emptyLine = screen.getAllByLabelText('Document text')[1];
    await user.click(emptyLine);
    await user.type(emptyLine, '/');
    await user.keyboard('{Enter}');

    const card = document.querySelector('[data-block-type="card"]');
    expect(card).not.toBeNull();
    expect(card).toHaveAttribute('contenteditable', 'false');
    expect(screen.getByRole('complementary', { name: /Configuring/ })).toBeInTheDocument();
  });

  it('pressing Escape closes the menu with nothing inserted, leaving the typed "/query" behind as literal text', async () => {
    const user = userEvent.setup();
    render(<DocumentCanvasEditorShell {...getFixture('empty-document')} />);

    const emptyLine = screen.getAllByLabelText('Document text')[1];
    await user.click(emptyLine);
    await user.type(emptyLine, '/rat');
    await user.keyboard('{Escape}');

    expect(screen.queryByRole('listbox', { name: 'Insert a block' })).not.toBeInTheDocument();
    expect(document.querySelectorAll('[data-block-type="card"]')).toHaveLength(0);
    expect(screen.getAllByLabelText('Document text')[1]).toHaveValue('/rat');
  });

  it('the "+" gutter offers exactly "Add questions" and "Add break", inserting a Text card / a page break', async () => {
    const user = userEvent.setup();
    render(<DocumentCanvasEditorShell {...getFixture('empty-document')} />);

    await user.click(screen.getByRole('button', { name: 'Quick insert' }));
    const menu = screen.getByRole('menu', { name: 'Quick insert' });
    expect(within(menu).getAllByRole('menuitem')).toHaveLength(2);

    await user.click(within(menu).getByRole('menuitem', { name: 'Add questions' }));
    expect(document.querySelectorAll('[data-block-type="card"]')).toHaveLength(1);

    await user.click(screen.getByRole('button', { name: 'Quick insert' }));
    await user.click(screen.getByRole('menuitem', { name: 'Add break' }));
    expect(document.querySelectorAll('[data-block-type="pagebreak"]')).toHaveLength(1);
  });

  it('Move up / Move down reorders question cards', async () => {
    const user = userEvent.setup();
    render(<DocumentCanvasEditorShell {...getFixture('reorder-demo')} />);

    function cardTitles() {
      return screen
        .getAllByRole('textbox')
        .filter((el) => el.getAttribute('aria-label')?.endsWith('question title'))
        .map((el) => (el as HTMLInputElement).value);
    }

    expect(cardTitles()).toEqual(['Question one', 'Question two', 'Question three']);

    await user.click(screen.getAllByRole('button', { name: 'Move Text question down' })[0]);
    expect(cardTitles()).toEqual(['Question two', 'Question one', 'Question three']);
  });

  it('the first card\'s "Move up" is disabled and the last card\'s "Move down" is disabled', () => {
    render(<DocumentCanvasEditorShell {...getFixture('reorder-demo')} />);

    const upButtons = screen.getAllByRole('button', { name: /Move Text question up/ });
    const downButtons = screen.getAllByRole('button', { name: /Move Text question down/ });
    expect(upButtons[0]).toBeDisabled();
    expect(downButtons[downButtons.length - 1]).toBeDisabled();
  });

  it('deleting a card opens a confirm dialog with the exact source copy; Ok removes it', async () => {
    const user = userEvent.setup();
    render(<DocumentCanvasEditorShell {...getFixture('reorder-demo')} />);

    expect(document.querySelectorAll('[data-block-type="card"]')).toHaveLength(3);
    await user.click(screen.getAllByRole('button', { name: /Remove Text question/ })[0]);

    expect(
      screen.getByRole('heading', { name: 'Are you sure you want to remove these questions?' })
    ).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Ok' }));
    expect(document.querySelectorAll('[data-block-type="card"]')).toHaveLength(2);
  });

  it('Cancel on the delete confirm restores the document but leaves one extra empty block (confirmed residue bug)', async () => {
    const user = userEvent.setup();
    render(<DocumentCanvasEditorShell {...getFixture('reorder-demo')} />);

    const proseCountBefore = document.querySelectorAll('[data-block-type="prose"]').length;
    await user.click(screen.getAllByRole('button', { name: /Remove Text question/ })[0]);
    await user.click(screen.getByRole('button', { name: 'Cancel' }));

    expect(document.querySelectorAll('[data-block-type="card"]')).toHaveLength(3);
    expect(document.querySelectorAll('[data-block-type="prose"]').length).toBe(proseCountBefore + 1);
  });

  it('save-status bug: inserting a card leaves the label reading "SAVED DRAFT" even though the change is unpersisted, until a real text edit saves it', async () => {
    const user = userEvent.setup();
    render(<DocumentCanvasEditorShell {...getFixture('save-status-bug-demo')} />);

    const status = screen.getByText(/SAVE DRAFT|SAVED DRAFT/);
    expect(status).toHaveAttribute('data-save-status', 'idle');

    await user.click(screen.getByRole('button', { name: 'Quick insert' }));
    await user.click(screen.getByRole('menuitem', { name: 'Add questions' }));

    // Confirmed bug: the label is untouched by the structural insert alone.
    expect(status).toHaveTextContent('SAVE DRAFT');
    expect(status).toHaveAttribute('data-structural-change-pending', 'true');

    // A real text edit is what actually arms (and eventually resolves) the
    // save cycle, per the corrected understanding.
    const proseLine = screen.getAllByLabelText('Document text')[0];
    await user.type(proseLine, ' edited');

    expect(status).toHaveAttribute('data-save-status', 'saving');

    await waitFor(() => expect(status).toHaveAttribute('data-save-status', 'saved'));
    expect(status).toHaveAttribute('data-structural-change-pending', 'false');
  });

  it('editing a card\'s title text arms the save cycle directly', async () => {
    const user = userEvent.setup();
    render(<DocumentCanvasEditorShell {...getFixture('reorder-demo')} />);

    const status = screen.getByText(/SAVE DRAFT|SAVED DRAFT|SAVING DRAFT/);
    const titleInput = screen.getAllByRole('textbox').find((el) =>
      el.getAttribute('aria-label')?.endsWith('question title')
    ) as HTMLInputElement;

    await user.type(titleInput, '!');
    expect(status).toHaveAttribute('data-save-status', 'saving');
  });

  it('disabled prevents typing, inserting, reordering, and deleting', async () => {
    const user = userEvent.setup();
    render(<DocumentCanvasEditorShell {...getFixture('disabled')} />);

    screen.getAllByLabelText('Document text').forEach((input) => expect(input).toBeDisabled());
    expect(screen.getByRole('button', { name: 'Quick insert' })).toBeDisabled();
    const removeButton = screen.getByRole('button', { name: /Remove Yes\/No question/ });
    expect(removeButton).toBeDisabled();
    await user.click(removeButton);
    expect(screen.queryByRole('heading', { name: /remove these questions/ })).not.toBeInTheDocument();
  });
});
