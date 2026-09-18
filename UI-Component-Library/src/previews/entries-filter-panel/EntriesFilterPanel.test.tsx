import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EntriesFilterPanel, type FilterFieldDef } from './EntriesFilterPanel';

const FIELDS: FilterFieldDef[] = [
  { id: 'name', label: 'Name', datatype: 'text' },
  { id: 'email', label: 'Email', datatype: 'text' },
  { id: 'rating', label: 'Rating', datatype: 'number' },
  { id: 'createdDate', label: 'Created Date', datatype: 'date' },
];

describe('EntriesFilterPanel', () => {
  it('renders a single default row against fields[0] with a field, operator, value, and remove control', () => {
    render(<EntriesFilterPanel fields={FIELDS} />);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByRole('listitem')).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: 'Field for filter 1' })).toHaveValue('name');
    expect(screen.getByRole('combobox', { name: 'Operator for filter 1' })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Value for filter 1' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Remove filter 1' })).toBeInTheDocument();
  });

  it('adds a new row when "+ Add filter" is clicked', async () => {
    const user = userEvent.setup();
    render(<EntriesFilterPanel fields={FIELDS} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(1);

    await user.click(screen.getByRole('button', { name: '+ Add filter' }));
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    expect(screen.getByRole('combobox', { name: 'Field for filter 2' })).toBeInTheDocument();
  });

  it('removes a row when its × button is clicked, and shows the empty state once none remain', async () => {
    const user = userEvent.setup();
    render(
      <EntriesFilterPanel
        fields={FIELDS}
        initialFilters={[{ id: 'r1', fieldId: 'name', operator: 'Is', value: 'Acme' }]}
      />
    );
    await user.click(screen.getByRole('button', { name: 'Remove filter 1' }));
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
    expect(screen.getByText('No filters added.')).toBeInTheDocument();
  });

  it("changing the field resets the operator to the new datatype's first operator and clears the value", async () => {
    const user = userEvent.setup();
    render(
      <EntriesFilterPanel
        fields={FIELDS}
        initialFilters={[{ id: 'r1', fieldId: 'name', operator: 'Contains', value: 'Acme' }]}
      />
    );
    const fieldSelect = screen.getByRole('combobox', { name: 'Field for filter 1' });
    await user.selectOptions(fieldSelect, 'rating');

    expect(screen.getByRole('combobox', { name: 'Operator for filter 1' })).toHaveValue('Is');
    expect(screen.getByRole('textbox', { name: 'Value for filter 1' })).toHaveValue('');
  });

  it('offers datatype-specific operators: text vs. number vs. date', async () => {
    const user = userEvent.setup();
    render(<EntriesFilterPanel fields={FIELDS} />);
    const operatorSelect = () => screen.getByRole('combobox', { name: 'Operator for filter 1' });

    // Default field is Name (text) — text operator present, number-only operator absent.
    expect(
      within(operatorSelect()).getByRole('option', { name: 'Starts With' })
    ).toBeInTheDocument();
    expect(
      within(operatorSelect()).queryByRole('option', { name: 'Is Between' })
    ).not.toBeInTheDocument();

    await user.selectOptions(
      screen.getByRole('combobox', { name: 'Field for filter 1' }),
      'rating'
    );
    expect(
      within(operatorSelect()).getByRole('option', { name: 'Is Between' })
    ).toBeInTheDocument();
    expect(
      within(operatorSelect()).queryByRole('option', { name: 'Starts With' })
    ).not.toBeInTheDocument();

    await user.selectOptions(
      screen.getByRole('combobox', { name: 'Field for filter 1' }),
      'createdDate'
    );
    expect(
      within(operatorSelect()).getByRole('option', { name: 'Is Between' })
    ).toBeInTheDocument();
    expect(within(operatorSelect()).getByRole('option', { name: 'Today' })).toBeInTheDocument();
  });

  it('hides the value input for a valueless operator (e.g. Is Empty)', async () => {
    const user = userEvent.setup();
    render(
      <EntriesFilterPanel
        fields={FIELDS}
        initialFilters={[{ id: 'r1', fieldId: 'email', operator: 'Is', value: '' }]}
      />
    );
    expect(screen.getByRole('textbox', { name: 'Value for filter 1' })).toBeInTheDocument();

    await user.selectOptions(
      screen.getByRole('combobox', { name: 'Operator for filter 1' }),
      'Is Empty'
    );
    expect(screen.queryByRole('textbox', { name: 'Value for filter 1' })).not.toBeInTheDocument();
  });

  it('typing into the value input updates it', async () => {
    const user = userEvent.setup();
    render(
      <EntriesFilterPanel
        fields={FIELDS}
        initialFilters={[{ id: 'r1', fieldId: 'name', operator: 'Contains', value: '' }]}
      />
    );
    const value = screen.getByRole('textbox', { name: 'Value for filter 1' });
    await user.type(value, 'Acme');
    expect(value).toHaveValue('Acme');
  });

  it('clicking Search with an empty required value shows a validation error and does not call onApply', async () => {
    const user = userEvent.setup();
    const onApply = vi.fn();
    render(
      <EntriesFilterPanel
        fields={FIELDS}
        initialFilters={[{ id: 'r1', fieldId: 'name', operator: 'Contains', value: '' }]}
        onApply={onApply}
      />
    );
    await user.click(screen.getByRole('button', { name: 'Search' }));
    expect(screen.getByRole('alert')).toHaveTextContent('Invalid search criteria.');
    expect(screen.getByRole('textbox', { name: 'Value for filter 1' })).toHaveAttribute(
      'aria-invalid',
      'true'
    );
    expect(onApply).not.toHaveBeenCalled();
  });

  it('the validation error clears live once the offending value is filled in, and Search then calls onApply', async () => {
    const user = userEvent.setup();
    const onApply = vi.fn();
    render(
      <EntriesFilterPanel
        fields={FIELDS}
        initialFilters={[{ id: 'r1', fieldId: 'name', operator: 'Contains', value: '' }]}
        onApply={onApply}
        forceValidation
      />
    );
    expect(screen.getByRole('alert')).toBeInTheDocument();

    await user.type(screen.getByRole('textbox', { name: 'Value for filter 1' }), 'Acme');
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Search' }));
    expect(onApply).toHaveBeenCalledWith([
      { id: 'r1', fieldId: 'name', operator: 'Contains', value: 'Acme' },
    ]);
  });

  it('a valueless operator never counts as invalid, even with forceValidation', () => {
    render(
      <EntriesFilterPanel
        fields={FIELDS}
        initialFilters={[{ id: 'r1', fieldId: 'email', operator: 'Is Empty', value: '' }]}
        forceValidation
      />
    );
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('Clear removes all rows and calls onClear', async () => {
    const user = userEvent.setup();
    const onClear = vi.fn();
    render(
      <EntriesFilterPanel
        fields={FIELDS}
        initialFilters={[
          { id: 'r1', fieldId: 'name', operator: 'Contains', value: 'Acme' },
          { id: 'r2', fieldId: 'rating', operator: 'Is', value: '3' },
        ]}
        onClear={onClear}
      />
    );
    await user.click(screen.getByRole('button', { name: 'Clear' }));
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
    expect(onClear).toHaveBeenCalled();
  });

  it('cannot be changed when disabled', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <EntriesFilterPanel
        fields={FIELDS}
        initialFilters={[{ id: 'r1', fieldId: 'name', operator: 'Contains', value: 'Acme' }]}
        disabled
        onChange={onChange}
      />
    );
    expect(screen.getByRole('combobox', { name: 'Field for filter 1' })).toBeDisabled();
    expect(screen.getByRole('textbox', { name: 'Value for filter 1' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Remove filter 1' })).toBeDisabled();
    expect(screen.getByRole('button', { name: '+ Add filter' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Search' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Clear' })).toBeDisabled();

    await user.click(screen.getByRole('button', { name: '+ Add filter' }));
    expect(screen.getAllByRole('listitem')).toHaveLength(1);
    expect(onChange).not.toHaveBeenCalled();
  });

  it('shows a date-datatype value input with the dd-MMM-yyyy hh:mm:ss placeholder', () => {
    render(
      <EntriesFilterPanel
        fields={FIELDS}
        initialFilters={[{ id: 'r1', fieldId: 'createdDate', operator: 'Is', value: '' }]}
      />
    );
    expect(screen.getByRole('textbox', { name: 'Value for filter 1' })).toHaveAttribute(
      'placeholder',
      'dd-MMM-yyyy hh:mm:ss'
    );
  });
});
