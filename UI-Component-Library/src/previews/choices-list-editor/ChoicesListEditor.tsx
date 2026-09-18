import { useEffect, useId, useRef } from 'react';
import styles from './ChoicesListEditor.module.css';

export interface ChoiceItem {
  id: string;
  value: string;
}

export interface ChoicesListEditorProps {
  /** Ordered list of choice rows. Order can only change by replacing this array
   * (e.g. from an external "Sort Choices" control) — there is no drag-reorder. */
  choices: ChoiceItem[];
  onChange?: (choices: ChoiceItem[]) => void;
  disabled?: boolean;
  /**
   * Not a per-field "required question" concept (this is a builder-time panel,
   * not a live form field). Reused here to mean: "enforce the minimum-choice
   * guard with an explicit, persistent validation message" rather than a
   * silently-disabled remove button. See this folder's README for why the
   * prop name was kept consistent with the other reconstructed previews.
   */
  required?: boolean;
  /** Minimum number of choices the list may be reduced to. Defaults to 1,
   * matching the guard implied (not independently confirmed) in the source
   * record's `removeChoiceValueInChoiceFieldPopUp`. */
  minChoices?: number;
  /** Overrides the computed "Choices (N)" heading text. */
  label?: string;
}

let choiceIdCounter = 0;
function nextChoiceId(): string {
  choiceIdCounter += 1;
  return `choice-${choiceIdCounter}-${Date.now().toString(36)}`;
}

/**
 * Reconstructed from Zoho Forms' Dropdown field "Choice Field Properties"
 * overlay — a builder-time, panel-local editing surface (not a live-form
 * input, and no network activity for any operation, per the source record's
 * request-count hook). Reproduces: one full-width text row per choice with
 * hover/focus-revealed +/- icons, insertion of a new row directly *after*
 * the clicked row (not appended at the end), Enter-to-add from the text
 * input, and the explicit *absence* of drag-reorder (there is no sortable
 * handler in the source — dragging a row is plain text selection, which this
 * reconstruction reproduces simply by not attaching any drag handling at
 * all, rather than simulating the source's incidental text-selection
 * fallback).
 */
export function ChoicesListEditor({
  choices,
  onChange,
  disabled = false,
  required = false,
  minChoices = 1,
  label,
}: ChoicesListEditorProps) {
  const labelId = useId();
  const errorId = useId();
  const pendingFocusId = useRef<string | null>(null);
  const inputRefs = useRef(new Map<string, HTMLInputElement>());

  useEffect(() => {
    if (pendingFocusId.current) {
      inputRefs.current.get(pendingFocusId.current)?.focus();
      pendingFocusId.current = null;
    }
  }, [choices]);

  const atMinimum = choices.length <= minChoices;
  const showMinError = required && atMinimum;

  function commitValue(id: string, value: string) {
    onChange?.(choices.map((choice) => (choice.id === id ? { ...choice, value } : choice)));
  }

  function addAfter(index: number) {
    if (disabled) return;
    const newItem: ChoiceItem = { id: nextChoiceId(), value: '' };
    const next = [...choices.slice(0, index + 1), newItem, ...choices.slice(index + 1)];
    pendingFocusId.current = newItem.id;
    onChange?.(next);
  }

  function removeAt(index: number) {
    // Observed: a minimum-choice guard is implied in the source
    // (`removeChoiceValueInChoiceFieldPopUp` checks if only 1 choice
    // remains) but its exact UI treatment was not independently confirmed —
    // this reconstruction disables the remove control outright at the
    // minimum, which is the more conservative/accessible reading.
    if (disabled || atMinimum) return;
    onChange?.(choices.filter((_, i) => i !== index));
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>, index: number, id: string) {
    if (disabled) return;
    // Observed: Enter adds a new choice row (handleChoiceInputKeyDown).
    // The exact commit-then-insert ordering inside that handler wasn't
    // captured, so committing the in-progress edit first is this
    // reconstruction's own (reasonable) choice, not a verified detail.
    if (event.key === 'Enter') {
      event.preventDefault();
      commitValue(id, event.currentTarget.value);
      addAfter(index);
    }
  }

  const heading = label ?? `Choices (${choices.length})`;

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <span id={labelId} className={styles.heading}>
          {heading}
        </span>
        <p className={styles.hint}>Press enter to add a new choice.</p>
      </div>
      <ul className={styles.list} aria-labelledby={labelId}>
        {choices.map((choice, index) => (
          <li key={choice.id} className={styles.row}>
            <input
              ref={(el) => {
                if (el) inputRefs.current.set(choice.id, el);
                else inputRefs.current.delete(choice.id);
              }}
              type="text"
              className={styles.input}
              defaultValue={choice.value}
              placeholder="Choice1"
              maxLength={150}
              disabled={disabled}
              aria-label={`Choice ${index + 1} text`}
              onBlur={(event) => commitValue(choice.id, event.currentTarget.value)}
              onKeyDown={(event) => handleKeyDown(event, index, choice.id)}
            />
            <div className={styles.actions}>
              <button
                type="button"
                className={styles.iconButton}
                onClick={() => addAfter(index)}
                disabled={disabled}
                aria-label={`Add choice after ${index + 1}`}
              >
                <svg viewBox="0 0 16 16" className={styles.icon} aria-hidden="true">
                  <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.6" fill="none" />
                </svg>
              </button>
              <button
                type="button"
                className={styles.iconButton}
                onClick={() => removeAt(index)}
                disabled={disabled || atMinimum}
                aria-label={`Remove choice ${index + 1}`}
              >
                <svg viewBox="0 0 16 16" className={styles.icon} aria-hidden="true">
                  <path d="M2 8h12" stroke="currentColor" strokeWidth="1.6" fill="none" />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
      {showMinError && (
        <p id={errorId} className={styles.error} role="alert">
          At least {minChoices} choice{minChoices === 1 ? '' : 's'} required — remove is disabled on
          the last remaining choice.
        </p>
      )}
    </div>
  );
}
