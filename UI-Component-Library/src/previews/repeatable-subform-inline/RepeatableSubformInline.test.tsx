import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import {
  RepeatableSubformInline,
  type SubformFieldDef,
  type SubformRow,
} from './RepeatableSubformInline';

const fields: SubformFieldDef[] = [
  { key: 'firstName', label: 'First Name' },
  { key: 'lastName', label: 'Last Name' },
];

function Controlled(props: {
  initialRows?: SubformRow[];
  disabled?: boolean;
  required?: boolean;
  error?: string;
  maxEntries?: number;
}) {
  const [rows, setRows] = useState<SubformRow[]>(
    props.initialRows ?? [{ id: 'row-1', values: { firstName: '', lastName: '' } }]
  );
  return (
    <RepeatableSubformInline
      label="Attendees"
      fields={fields}
      rows={rows}
      onChange={setRows}
      disabled={props.disabled}
      required={props.required}
      maxEntries={props.maxEntries}
      error={props.error}
    />
  );
}

describe('RepeatableSubformInline', () => {
  it('renders as a labeled group with one row and Add row control', () => {
    render(<Controlled />);
    expect(screen.getByRole('group', { name: 'Attendees' })).toBeInTheDocument();
    expect(screen.getByRole('group', { name: 'Row 1' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add Entry' })).toBeInTheDocument();
    // Single row: no remove button yet.
    expect(screen.queryByRole('button', { name: /Remove row/ })).not.toBeInTheDocument();
  });

  it('adds a new blank row when Add row is clicked', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    await user.click(screen.getByRole('button', { name: 'Add Entry' }));
    expect(screen.getByRole('group', { name: 'Row 1' })).toBeInTheDocument();
    expect(screen.getByRole('group', { name: 'Row 2' })).toBeInTheDocument();
    const row2FirstName = screen.getAllByLabelText('First Name')[1];
    expect(row2FirstName).toHaveValue('');
  });

  it('removes a row when its remove button is clicked, once more than one row exists', async () => {
    const user = userEvent.setup();
    render(
      <Controlled
        initialRows={[
          { id: 'row-1', values: { firstName: 'Jordan', lastName: 'Alvarez' } },
          { id: 'row-2', values: { firstName: 'Priya', lastName: 'Natarajan' } },
        ]}
      />
    );
    expect(screen.getByRole('group', { name: 'Row 2' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Remove row 2' }));
    expect(screen.queryByRole('group', { name: 'Row 2' })).not.toBeInTheDocument();
    // Back down to a single row: remove control disappears again.
    expect(screen.queryByRole('button', { name: /Remove row/ })).not.toBeInTheDocument();
  });

  it('edits a field value within a specific row without affecting other rows', async () => {
    const user = userEvent.setup();
    render(
      <Controlled
        initialRows={[
          { id: 'row-1', values: { firstName: '', lastName: '' } },
          { id: 'row-2', values: { firstName: 'Priya', lastName: 'Natarajan' } },
        ]}
      />
    );
    const row1FirstName = screen.getAllByLabelText('First Name')[0];
    await user.type(row1FirstName, 'Jordan');
    expect(row1FirstName).toHaveValue('Jordan');
    const row2FirstName = screen.getAllByLabelText('First Name')[1];
    expect(row2FirstName).toHaveValue('Priya');
  });

  it('disables field inputs, Add row, and remove controls when disabled', () => {
    render(
      <Controlled
        disabled
        initialRows={[
          { id: 'row-1', values: { firstName: 'Jordan', lastName: 'Alvarez' } },
          { id: 'row-2', values: { firstName: 'Priya', lastName: 'Natarajan' } },
        ]}
      />
    );
    expect(screen.getByRole('button', { name: 'Add Entry' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Remove row 2' })).toBeDisabled();
    for (const input of screen.getAllByLabelText('First Name')) {
      expect(input).toBeDisabled();
    }
  });

  it('disables Add row once maxEntries is reached, and re-enables it below the cap', async () => {
    const user = userEvent.setup();
    render(
      <Controlled
        maxEntries={2}
        initialRows={[{ id: 'row-1', values: { firstName: 'Jordan', lastName: 'Alvarez' } }]}
      />
    );
    const addButton = screen.getByRole('button', { name: 'Add Entry' });
    expect(addButton).not.toBeDisabled();
    await user.click(addButton);
    expect(screen.getByRole('group', { name: 'Row 2' })).toBeInTheDocument();
    expect(addButton).toBeDisabled();
  });

  it('announces a required validation error accessibly', () => {
    render(<Controlled required error="At least one complete row is required." />);
    expect(screen.getByRole('alert')).toHaveTextContent('At least one complete row is required.');
    expect(screen.getByRole('group', { name: 'Attendees' })).toHaveAttribute(
      'aria-invalid',
      'true'
    );
  });
});
