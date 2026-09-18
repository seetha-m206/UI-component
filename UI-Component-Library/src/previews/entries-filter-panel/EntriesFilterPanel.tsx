import { useId, useMemo, useState } from 'react';
import styles from './EntriesFilterPanel.module.css';

export type FilterDatatype = 'text' | 'number' | 'date';

export interface FilterFieldDef {
  id: string;
  label: string;
  datatype: FilterDatatype;
}

export interface FilterCriteriaRow {
  id: string;
  fieldId: string;
  operator: string;
  value: string;
}

export interface EntriesFilterPanelProps {
  /** Selectable form fields (synthetic stand-ins for a real form's field list). */
  fields: FilterFieldDef[];
  /** Starting set of criteria rows. Defaults to a single empty row against `fields[0]`. */
  initialFilters?: FilterCriteriaRow[];
  disabled?: boolean;
  /** Seeds the panel already showing validation errors, as if Search had already been clicked once. */
  forceValidation?: boolean;
  label?: string;
  onApply?: (filters: FilterCriteriaRow[]) => void;
  onClear?: () => void;
  onChange?: (filters: FilterCriteriaRow[]) => void;
}

// Confirmed by directly comparing two field types in the source record
// (Section "Rules & Validation"): operator sets are datatype-aware. Text and
// number-style sets are captured in full; the date set additionally layers
// on relative-date presets, but the source capture was truncated at ~30
// options ("list continues"), so the preset list below is a representative
// subset, not the full enumerated set — flagged in this folder's README.
const TEXT_OPERATORS = [
  'Is',
  'Is Not',
  'Is Empty',
  'Is Not Empty',
  'Starts With',
  'Ends With',
  'Contains',
  'Not Contains',
];

const NUMBER_OPERATORS = [
  'Is',
  'Is Not',
  'Is Empty',
  'Is Not Empty',
  'Is Less Than',
  'Is Greater Than',
  'Is Lesser Than or Equal To',
  'Is Greater Than or Equal To',
  'Is Between',
];

// Assumed representative subset of the relative-date presets — see README.
const DATE_PRESETS = [
  'Today',
  'Yesterday',
  'Tomorrow',
  'Last 7 Days',
  'Last 30 Days',
  'Last 60 Days',
  'Last 90 Days',
  'This Week',
  'This Month',
  'This Year',
  'Next 7 Days',
  'Next 30 Days',
];

const DATE_OPERATORS = [...NUMBER_OPERATORS, ...DATE_PRESETS];

// Operators that stand on their own and never reveal a value input —
// confirmed for Is Empty / Is Not Empty by the client-side validation
// description; extended here (by inference) to the self-contained
// relative-date presets, which name their own value ("Today", "Last 7
// Days", …) and would have nothing meaningful for a value input to hold.
const VALUELESS_OPERATORS = new Set<string>(['Is Empty', 'Is Not Empty', ...DATE_PRESETS]);

function operatorsFor(datatype: FilterDatatype): string[] {
  if (datatype === 'number') return NUMBER_OPERATORS;
  if (datatype === 'date') return DATE_OPERATORS;
  return TEXT_OPERATORS;
}

function fieldById(fields: FilterFieldDef[], fieldId: string): FilterFieldDef {
  return fields.find((f) => f.id === fieldId) ?? fields[0];
}

let rowSeq = 0;
function nextRowId(): string {
  rowSeq += 1;
  return `row-${rowSeq}`;
}

function makeDefaultRow(fields: FilterFieldDef[]): FilterCriteriaRow {
  const field = fields[0];
  return {
    id: nextRowId(),
    fieldId: field.id,
    operator: operatorsFor(field.datatype)[0],
    value: '',
  };
}

/**
 * Reconstructed from Zoho Forms' Entries "All Entries" filter panel
 * (`ZFReportLive`). The real panel is a fixed checklist of every form field,
 * each revealing an inline criteria sub-form in place when checked. This
 * preview instead uses an explicit add/remove filter-row list (a more
 * conventional query-builder UI) — a deliberate structural adaptation, not a
 * literal reproduction; see this folder's README for why. The underlying
 * *behavior* being reconstructed is preserved: datatype-aware operator sets,
 * a plain-text value input for every datatype (including dates, which use a
 * `dd-MMM-yyyy hh:mm:ss`-formatted text field rather than a date-picker
 * widget, per the source capture), and fully client-side validation that
 * blocks "submission" (here, calling `onApply`) when a checked/valid-looking
 * row is missing a required value — matching the confirmed
 * `ZFReportLive.searchView()` behavior of never sending a request for
 * invalid criteria.
 */
export function EntriesFilterPanel({
  fields,
  initialFilters,
  disabled = false,
  forceValidation = false,
  label = 'Filter Entries',
  onApply,
  onClear,
  onChange,
}: EntriesFilterPanelProps) {
  const headingId = useId();
  const errorId = useId();

  const [filters, setFilters] = useState<FilterCriteriaRow[]>(
    () => initialFilters ?? [makeDefaultRow(fields)]
  );
  const [showValidation, setShowValidation] = useState(forceValidation);

  const invalidRowIds = useMemo(() => {
    if (!showValidation) return new Set<string>();
    const ids = filters
      .filter((row) => !VALUELESS_OPERATORS.has(row.operator) && row.value.trim() === '')
      .map((row) => row.id);
    return new Set(ids);
  }, [filters, showValidation]);

  const hasError = showValidation && invalidRowIds.size > 0;

  function commit(next: FilterCriteriaRow[]) {
    setFilters(next);
    onChange?.(next);
  }

  function addFilter() {
    if (disabled) return;
    commit([...filters, makeDefaultRow(fields)]);
  }

  function removeFilter(id: string) {
    if (disabled) return;
    commit(filters.filter((row) => row.id !== id));
  }

  function updateFieldId(id: string, fieldId: string) {
    if (disabled) return;
    const field = fieldById(fields, fieldId);
    const defaultOperator = operatorsFor(field.datatype)[0];
    commit(
      filters.map((row) =>
        row.id === id ? { ...row, fieldId, operator: defaultOperator, value: '' } : row
      )
    );
  }

  function updateOperator(id: string, operator: string) {
    if (disabled) return;
    commit(
      filters.map((row) =>
        row.id === id
          ? { ...row, operator, value: VALUELESS_OPERATORS.has(operator) ? '' : row.value }
          : row
      )
    );
  }

  function updateValue(id: string, value: string) {
    if (disabled) return;
    commit(filters.map((row) => (row.id === id ? { ...row, value } : row)));
  }

  function handleSearch() {
    if (disabled) return;
    setShowValidation(true);
    const invalid = filters.some(
      (row) => !VALUELESS_OPERATORS.has(row.operator) && row.value.trim() === ''
    );
    if (!invalid) {
      onApply?.(filters);
    }
  }

  function handleClear() {
    if (disabled) return;
    setShowValidation(false);
    commit([]);
    onClear?.();
  }

  return (
    <div className={styles.root}>
      <p id={headingId} className={styles.label}>
        {label}
      </p>

      {filters.length === 0 ? (
        <p className={styles.empty}>No filters added.</p>
      ) : (
        <ul className={styles.rowList} aria-labelledby={headingId}>
          {filters.map((row, index) => {
            const field = fieldById(fields, row.fieldId);
            const operators = operatorsFor(field.datatype);
            const valueless = VALUELESS_OPERATORS.has(row.operator);
            const invalid = invalidRowIds.has(row.id);
            return (
              <li
                key={row.id}
                className={invalid ? `${styles.row} ${styles.rowError}` : styles.row}
              >
                <select
                  aria-label={`Field for filter ${index + 1}`}
                  className={styles.select}
                  value={row.fieldId}
                  disabled={disabled}
                  onChange={(event) => updateFieldId(row.id, event.target.value)}
                >
                  {fields.map((f) => (
                    <option key={f.id} value={f.id}>
                      {f.label}
                    </option>
                  ))}
                </select>

                <select
                  aria-label={`Operator for filter ${index + 1}`}
                  className={styles.select}
                  value={row.operator}
                  disabled={disabled}
                  onChange={(event) => updateOperator(row.id, event.target.value)}
                >
                  {operators.map((op) => (
                    <option key={op} value={op}>
                      {op}
                    </option>
                  ))}
                </select>

                {!valueless && (
                  <input
                    type="text"
                    aria-label={`Value for filter ${index + 1}`}
                    aria-invalid={invalid || undefined}
                    className={styles.input}
                    value={row.value}
                    disabled={disabled}
                    placeholder={field.datatype === 'date' ? 'dd-MMM-yyyy hh:mm:ss' : undefined}
                    onChange={(event) => updateValue(row.id, event.target.value)}
                  />
                )}

                <button
                  type="button"
                  aria-label={`Remove filter ${index + 1}`}
                  className={styles.removeButton}
                  disabled={disabled}
                  onClick={() => removeFilter(row.id)}
                >
                  ×
                </button>
              </li>
            );
          })}
        </ul>
      )}

      <button type="button" className={styles.addButton} disabled={disabled} onClick={addFilter}>
        + Add filter
      </button>

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.clearButton}
          disabled={disabled}
          onClick={handleClear}
        >
          Clear
        </button>
        <button
          type="button"
          className={styles.searchButton}
          disabled={disabled}
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {hasError && (
        <p id={errorId} className={styles.error} role="alert">
          Invalid search criteria.
        </p>
      )}
    </div>
  );
}
