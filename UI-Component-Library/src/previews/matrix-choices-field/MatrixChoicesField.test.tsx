import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { MatrixChoicesField, type MatrixChoicesFieldProps } from './MatrixChoicesField';
import { fixtures } from './fixtures';

function getFixture(id: string) {
  const fixture = fixtures.find((f) => f.id === id);
  if (!fixture) throw new Error(`fixture not found: ${id}`);
  return fixture.props;
}

function Controlled(
  props: Partial<MatrixChoicesFieldProps> & { initialRows: string[]; initialColumns: string[] }
) {
  const { initialRows, initialColumns, ...rest } = props;
  const [rowLabels, setRowLabels] = useState(initialRows);
  const [columnLabels, setColumnLabels] = useState(initialColumns);
  const [value, setValue] = useState<Record<string, string>>(rest.value ?? {});
  return (
    <MatrixChoicesField
      {...rest}
      rowLabels={rowLabels}
      columnLabels={columnLabels}
      onRowLabelsChange={setRowLabels}
      onColumnLabelsChange={setColumnLabels}
      value={value}
      onChange={setValue}
    />
  );
}

describe('MatrixChoicesField', () => {
  it('renders the default 3x3 grid with row and column headers, no cell checked', () => {
    render(<MatrixChoicesField {...getFixture('default-3x3')} />);
    expect(screen.getByText('First Question')).toBeInTheDocument();
    expect(screen.getByText('Second Question')).toBeInTheDocument();
    expect(screen.getByText('Third Question')).toBeInTheDocument();
    expect(screen.getByText('Answer A')).toBeInTheDocument();
    expect(screen.getByText('Answer B')).toBeInTheDocument();
    expect(screen.getByText('Answer C')).toBeInTheDocument();
    const radios = screen.getAllByRole('radio');
    expect(radios).toHaveLength(9);
    expect(radios.every((r) => !(r as HTMLInputElement).checked)).toBe(true);
  });

  it('renders two independently-selected rows simultaneously (row independence, directly confirmed in the source)', () => {
    render(<MatrixChoicesField {...getFixture('row-independence')} />);
    expect(screen.getByRole('radio', { name: 'First Question: Answer B' })).toBeChecked();
    expect(screen.getByRole('radio', { name: 'Second Question: Answer A' })).toBeChecked();
    // Neither row's OTHER options are checked.
    expect(screen.getByRole('radio', { name: 'First Question: Answer A' })).not.toBeChecked();
    expect(screen.getByRole('radio', { name: 'First Question: Answer C' })).not.toBeChecked();
    expect(screen.getByRole('radio', { name: 'Second Question: Answer B' })).not.toBeChecked();
  });

  it("selecting a new cell in a row clears only that row's prior selection, leaving other rows untouched", async () => {
    const user = userEvent.setup();
    render(
      <Controlled
        initialRows={['First Question', 'Second Question', 'Third Question']}
        initialColumns={['Answer A', 'Answer B', 'Answer C']}
        value={{ '0': '1', '1': '0' }}
      />
    );
    expect(screen.getByRole('radio', { name: 'First Question: Answer B' })).toBeChecked();

    await user.click(screen.getByRole('radio', { name: 'First Question: Answer C' }));

    expect(screen.getByRole('radio', { name: 'First Question: Answer C' })).toBeChecked();
    expect(screen.getByRole('radio', { name: 'First Question: Answer B' })).not.toBeChecked();
    // Second Question's selection is untouched by the First Question change.
    expect(screen.getByRole('radio', { name: 'Second Question: Answer A' })).toBeChecked();
  });

  it('renders scaled up correctly for a larger grid (5 rows x 4 columns)', () => {
    render(<MatrixChoicesField {...getFixture('larger-grid')} />);
    expect(screen.getAllByRole('radio')).toHaveLength(20);
    expect(screen.getByText('Very Satisfied')).toBeInTheDocument();
    expect(
      screen.getByRole('radio', { name: 'How satisfied are you with support?: Satisfied' })
    ).toBeChecked();
  });

  it('disables every radio and blocks selection when disabled', async () => {
    const user = userEvent.setup();
    render(<MatrixChoicesField {...getFixture('disabled')} />);
    const radios = screen.getAllByRole('radio');
    expect(radios.every((r) => (r as HTMLInputElement).disabled)).toBe(true);

    const unchecked = screen.getByRole('radio', { name: 'Second Question: Answer B' });
    await user.click(unchecked);
    expect(unchecked).not.toBeChecked();
  });

  it('disables the Properties panel inputs and add/remove buttons when disabled', () => {
    render(<MatrixChoicesField {...getFixture('disabled')} />);
    expect(screen.getByRole('textbox', { name: 'Question 1 label' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Add question after 1' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Remove question 1' })).toBeDisabled();
  });

  it("inserts a new empty row directly after the clicked row's add button, auto-focused", async () => {
    const user = userEvent.setup();
    render(<Controlled initialRows={['Row A', 'Row B']} initialColumns={['Col 1', 'Col 2']} />);

    await user.click(screen.getByRole('button', { name: 'Add question after 1' }));

    const inputs = screen.getAllByRole('textbox', { name: /label$/ });
    const rowInputs = inputs.filter((el) =>
      (el as HTMLInputElement).getAttribute('aria-label')?.startsWith('Question')
    );
    expect(rowInputs.map((el) => (el as HTMLInputElement).value)).toEqual(['Row A', '', 'Row B']);
    // The newly inserted row's input should be auto-focused.
    expect(document.activeElement).toBe(rowInputs[1]);
  });

  it('removes a row entirely on clicking its remove button', async () => {
    const user = userEvent.setup();
    render(<Controlled initialRows={['Row A', 'Row B', 'Row C']} initialColumns={['Col 1']} />);

    await user.click(screen.getByRole('button', { name: 'Remove question 2' }));

    expect(screen.queryByText('Row B')).not.toBeInTheDocument();
    expect(screen.getByText('Row A')).toBeInTheDocument();
    expect(screen.getByText('Row C')).toBeInTheDocument();
  });

  it('disables the remove control at minRows so the grid can never reach zero rows', () => {
    render(<Controlled initialRows={['Only Row']} initialColumns={['Col 1']} />);
    expect(screen.getByRole('button', { name: 'Remove question 1' })).toBeDisabled();
  });

  it('disables the add control once maxRows/maxColumns is reached', () => {
    render(<MatrixChoicesField {...getFixture('at-row-column-limit')} />);
    expect(screen.getByRole('button', { name: 'Add question after 1' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Add question after 2' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Add answer option after 1' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Add answer option after 2' })).toBeDisabled();
  });

  it('adds and removes columns via the Properties panel, mirroring row behavior', async () => {
    const user = userEvent.setup();
    render(<Controlled initialRows={['Row A']} initialColumns={['Col 1', 'Col 2']} />);

    await user.click(screen.getByRole('button', { name: 'Add answer option after 2' }));
    const colInputs = screen
      .getAllByRole('textbox', { name: /label$/ })
      .filter((el) =>
        (el as HTMLInputElement).getAttribute('aria-label')?.startsWith('Answer option')
      );
    expect(colInputs.map((el) => (el as HTMLInputElement).value)).toEqual(['Col 1', 'Col 2', '']);

    await user.click(screen.getByRole('button', { name: 'Remove answer option 1' }));
    expect(screen.queryByText('Col 1')).not.toBeInTheDocument();
  });

  it('commits an edited row label on blur, updating the grid header text', async () => {
    const user = userEvent.setup();
    render(<Controlled initialRows={['Row A']} initialColumns={['Col 1']} />);
    const input = screen.getByRole('textbox', { name: 'Question 1 label' });
    await user.clear(input);
    await user.type(input, 'Renamed Row');
    await user.tab();
    expect(screen.getByText('Renamed Row')).toBeInTheDocument();
  });

  it('never calls fetch/XHR while rendering or interacting (fully client-side, per the source record)', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    render(<Controlled initialRows={['Row A', 'Row B']} initialColumns={['Col 1', 'Col 2']} />);
    await user.click(screen.getByRole('radio', { name: 'Row A: Col 2' }));
    await user.click(screen.getByRole('button', { name: 'Add question after 1' }));
    await user.click(screen.getByRole('button', { name: 'Remove question 1' }));
    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
