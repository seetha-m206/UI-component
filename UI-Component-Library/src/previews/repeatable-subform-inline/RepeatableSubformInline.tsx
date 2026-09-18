import { useId, useRef } from 'react';
import styles from './RepeatableSubformInline.module.css';

export interface SubformFieldDef {
  /** Stable key used to look up/update this field's value within a row. */
  key: string;
  /** Field label, shown above the input (mirrors a child field's own label in the source). */
  label: string;
  placeholder?: string;
}

export interface SubformRow {
  id: string;
  values: Record<string, string>;
}

export interface RepeatableSubformInlineProps {
  /** The subform's own label (the "Subform" panel title in the source). */
  label: string;
  description?: string;
  /** Child field definitions repeated in every row — the subform's "columns". */
  fields: SubformFieldDef[];
  rows: SubformRow[];
  onChange?: (rows: SubformRow[]) => void;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  /**
   * Optional cap on row count. Not confirmed in the source record — the
   * record's own "Open question (untested)" flags a max-entries setting as
   * the leading hypothesis for why Add Entry couldn't be triggered in
   * testing. Left undefined by default (unlimited), and only enforced when a
   * caller explicitly sets it, so the assumption never silently activates.
   */
  maxEntries?: number;
}

let rowIdCounter = 0;

function emptyValues(fields: SubformFieldDef[]): Record<string, string> {
  return Object.fromEntries(fields.map((field) => [field.key, '']));
}

/**
 * Reconstructed from Zoho Forms' Repeatable Subform, "Inline" layout.
 *
 * IMPORTANT — evidence gap: the source research record
 * (`repeatable-subform-inline.md`) explicitly could NOT verify the real
 * product's "Add Entry" mechanics — repeated, precisely-targeted clicks on
 * the real "⊕ Add Entry" control produced no new row and no DOM change, and
 * no click handler could be located on the element at all. It is genuinely
 * unresolved whether this is a targeting/automation failure or a real app
 * requirement (e.g. a "max entries" value must be configured first). This
 * component implements a STANDARD, reasonable add-row behavior (append a
 * blank row, clone the child-field set) purely so the preview is usable —
 * it is an assumption filling a real research gap, not a verified
 * reproduction of Zoho's own Add Entry behavior. See this folder's README.
 *
 * Remove-row support is likewise NOT observed anywhere in the source record
 * (no delete/remove control appears in the captured DOM); it's added here
 * as a standard counterpart to Add Entry so the preview is usable, and is
 * flagged the same way in the README.
 */
export function RepeatableSubformInline({
  label,
  description,
  fields,
  rows,
  onChange,
  disabled = false,
  required = false,
  error,
  maxEntries,
}: RepeatableSubformInlineProps) {
  const labelId = useId();
  const descId = useId();
  const errorId = useId();
  const maxId = useId();
  const nextRowNum = useRef(rowIdCounter);

  const atMax = maxEntries != null && rows.length >= maxEntries;

  function addRow() {
    if (disabled || atMax) return;
    nextRowNum.current += 1;
    rowIdCounter += 1;
    const newRow: SubformRow = {
      id: `new-row-${nextRowNum.current}`,
      values: emptyValues(fields),
    };
    onChange?.([...rows, newRow]);
  }

  function removeRow(rowId: string) {
    if (disabled) return;
    onChange?.(rows.filter((row) => row.id !== rowId));
  }

  function updateField(rowId: string, fieldKey: string, value: string) {
    if (disabled) return;
    onChange?.(
      rows.map((row) =>
        row.id === rowId ? { ...row, values: { ...row.values, [fieldKey]: value } } : row
      )
    );
  }

  const describedBy =
    [description ? descId : null, error ? errorId : null, maxEntries != null ? maxId : null]
      .filter(Boolean)
      .join(' ') || undefined;

  return (
    <div className={styles.root}>
      <span id={labelId} className={styles.label}>
        {label}
        {required && (
          <span className={styles.required} aria-hidden="true">
            {' '}
            *
          </span>
        )}
      </span>
      {description && (
        <p id={descId} className={styles.description}>
          {description}
        </p>
      )}
      <div
        className={styles.subform}
        role="group"
        aria-labelledby={labelId}
        aria-describedby={describedBy}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
      >
        {rows.length === 0 && (
          <p className={styles.emptyState}>
            No rows yet. Use &ldquo;Add row&rdquo; to add the first entry.
          </p>
        )}
        {rows.map((row, rowIndex) => (
          <div className={styles.row} role="group" aria-label={`Row ${rowIndex + 1}`} key={row.id}>
            <span className={styles.infoIcon} aria-hidden="true">
              ⓘ
            </span>
            <div className={styles.rowFields}>
              {fields.map((field) => {
                const inputId = `${labelId}-${row.id}-${field.key}`;
                return (
                  <label key={field.key} className={styles.fieldWrap} htmlFor={inputId}>
                    <span className={styles.fieldLabel}>{field.label}</span>
                    <input
                      id={inputId}
                      type="text"
                      className={styles.input}
                      value={row.values[field.key] ?? ''}
                      placeholder={field.placeholder}
                      disabled={disabled}
                      onChange={(event) => updateField(row.id, field.key, event.target.value)}
                    />
                  </label>
                );
              })}
            </div>
            {rows.length > 1 && (
              <button
                type="button"
                className={styles.removeBtn}
                aria-label={`Remove row ${rowIndex + 1}`}
                disabled={disabled}
                onClick={() => removeRow(row.id)}
              >
                <span aria-hidden="true">×</span>
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          className={styles.addBtn}
          aria-label="Add Entry"
          disabled={disabled || atMax}
          onClick={addRow}
        >
          <span className={styles.addIcon} aria-hidden="true">
            ⊕
          </span>
          Add row
        </button>
        {maxEntries != null && (
          <p id={maxId} className={styles.maxNote}>
            {atMax
              ? `Maximum of ${maxEntries} entries reached.`
              : `Up to ${maxEntries} entries allowed.`}
          </p>
        )}
      </div>
      {error && (
        <p id={errorId} className={styles.error} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
