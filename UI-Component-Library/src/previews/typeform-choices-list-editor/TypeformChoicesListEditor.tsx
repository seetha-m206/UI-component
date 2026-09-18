import { useEffect, useId, useRef } from 'react';
import styles from './TypeformChoicesListEditor.module.css';

export interface TypeformChoiceItem {
  id: string;
  value: string;
}

export interface TypeformChoicesListEditorProps {
  /** Ordered list of choice rows. Letter badges (A, B, C…) are always derived live from this order. */
  choices: TypeformChoiceItem[];
  onChange?: (choices: TypeformChoiceItem[]) => void;
  disabled?: boolean;
}

let choiceIdCounter = 0;
function nextChoiceId(): string {
  choiceIdCounter += 1;
  return `tf-choice-${choiceIdCounter}-${Date.now().toString(36)}`;
}

function letterFor(index: number): string {
  return String.fromCharCode(65 + index);
}

/** Pure reorder helper, exported so the exact reorder logic can be unit-tested directly, independent of any drag or keyboard event simulation. */
export function moveItem<T>(list: T[], fromIndex: number, toIndex: number): T[] {
  if (
    fromIndex === toIndex ||
    fromIndex < 0 ||
    toIndex < 0 ||
    fromIndex >= list.length ||
    toIndex >= list.length
  ) {
    return list;
  }
  const next = list.slice();
  const [moved] = next.splice(fromIndex, 1);
  next.splice(toIndex, 0, moved);
  return next;
}

/**
 * Reconstructed from Typeform's "Multiple Choice" question canvas — the
 * choices editor lives inline in the same canvas as the respondent-facing
 * question, not a separate modal (a genuine structural difference from
 * Zoho's builder-side `choices-list-editor/`, which lives in an overlay
 * panel). The record's DOM fingerprint (`aria-label="Drag handle"`,
 * `role="button"`, `aria-roledescription="sortable"`) identifies dnd-kit as
 * the source's real drag library; this reconstruction doesn't add a drag
 * dependency (none exists in this repo's package.json) and instead
 * implements genuine, working reorder with native HTML5 drag-and-drop, plus
 * a keyboard alternative (ArrowUp/ArrowDown on the drag handle) — see
 * README for the full rationale.
 */
export function TypeformChoicesListEditor({
  choices,
  onChange,
  disabled = false,
}: TypeformChoicesListEditorProps) {
  const labelId = useId();
  const dragHintId = useId();
  const pendingFocusId = useRef<string | null>(null);
  const pendingFocusHandleId = useRef<string | null>(null);
  const inputRefs = useRef(new Map<string, HTMLInputElement>());
  const handleRefs = useRef(new Map<string, HTMLButtonElement>());
  const draggedId = useRef<string | null>(null);

  useEffect(() => {
    if (pendingFocusId.current) {
      inputRefs.current.get(pendingFocusId.current)?.focus();
      pendingFocusId.current = null;
    }
  }, [choices]);

  // After a keyboard reorder, focus follows the moved row's drag handle
  // (not its text input) so ArrowUp/ArrowDown can keep being pressed to
  // continue moving the same choice — matches how a real sortable
  // keyboard interaction should behave.
  useEffect(() => {
    if (pendingFocusHandleId.current) {
      handleRefs.current.get(pendingFocusHandleId.current)?.focus();
      pendingFocusHandleId.current = null;
    }
  }, [choices]);

  function commitValue(id: string, value: string) {
    onChange?.(choices.map((choice) => (choice.id === id ? { ...choice, value } : choice)));
  }

  function addChoice() {
    if (disabled) return;
    const newItem: TypeformChoiceItem = { id: nextChoiceId(), value: '' };
    pendingFocusId.current = newItem.id;
    onChange?.([...choices, newItem]);
  }

  function removeAt(index: number) {
    // Confirmed in the record: no confirmation prompt, no minimum-choice
    // guard was tested/observed — a genuine UX difference from Zoho's
    // choices-list-editor, reproduced faithfully rather than borrowing
    // that component's guard.
    if (disabled) return;
    onChange?.(choices.filter((_, i) => i !== index));
  }

  function reorder(fromIndex: number, toIndex: number) {
    if (disabled) return;
    const next = moveItem(choices, fromIndex, toIndex);
    if (next !== choices) onChange?.(next);
  }

  function handleDragStart(event: React.DragEvent<HTMLLIElement>, id: string) {
    if (disabled) return;
    draggedId.current = id;
    event.dataTransfer.effectAllowed = 'move';
    // Firefox requires setData to be called for a drag to initiate at all.
    event.dataTransfer.setData('text/plain', id);
  }

  function handleDragOver(event: React.DragEvent<HTMLLIElement>) {
    if (disabled || draggedId.current === null) return;
    event.preventDefault();
  }

  function handleDrop(event: React.DragEvent<HTMLLIElement>, targetIndex: number) {
    if (disabled) return;
    event.preventDefault();
    const sourceId = draggedId.current;
    draggedId.current = null;
    if (sourceId === null) return;
    const fromIndex = choices.findIndex((c) => c.id === sourceId);
    if (fromIndex === -1) return;
    reorder(fromIndex, targetIndex);
  }

  function handleDragEnd() {
    draggedId.current = null;
  }

  function handleHandleKeyDown(
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
    id: string
  ) {
    if (disabled) return;
    if (event.key === 'ArrowUp' && index > 0) {
      event.preventDefault();
      reorder(index, index - 1);
      pendingFocusHandleId.current = id;
    } else if (event.key === 'ArrowDown' && index < choices.length - 1) {
      event.preventDefault();
      reorder(index, index + 1);
      pendingFocusHandleId.current = id;
    }
  }

  function handleTextKeyDown(event: React.KeyboardEvent<HTMLInputElement>, id: string) {
    if (disabled) return;
    if (event.key === 'Enter') {
      event.preventDefault();
      commitValue(id, event.currentTarget.value);
      addChoice();
    }
  }

  return (
    <div className={styles.root}>
      <span id={labelId} className={styles.srOnly}>
        Multiple Choice answers
      </span>
      <p id={dragHintId} className={styles.srOnly}>
        Press Arrow Up or Arrow Down while focused on a drag handle to move that choice.
      </p>
      <ul className={styles.list} aria-labelledby={labelId}>
        {choices.map((choice, index) => (
          <li
            key={choice.id}
            className={styles.row}
            draggable={!disabled}
            onDragStart={(e) => handleDragStart(e, choice.id)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            onDragEnd={handleDragEnd}
          >
            <button
              ref={(el) => {
                if (el) handleRefs.current.set(choice.id, el);
                else handleRefs.current.delete(choice.id);
              }}
              type="button"
              className={styles.dragHandle}
              disabled={disabled}
              aria-label={`Drag handle for choice ${index + 1} of ${choices.length}`}
              aria-roledescription="sortable"
              aria-describedby={dragHintId}
              onKeyDown={(e) => handleHandleKeyDown(e, index, choice.id)}
            >
              <svg viewBox="0 0 12 16" className={styles.dragIcon} aria-hidden="true">
                <circle cx="3" cy="2" r="1.3" fill="currentColor" />
                <circle cx="9" cy="2" r="1.3" fill="currentColor" />
                <circle cx="3" cy="8" r="1.3" fill="currentColor" />
                <circle cx="9" cy="8" r="1.3" fill="currentColor" />
                <circle cx="3" cy="14" r="1.3" fill="currentColor" />
                <circle cx="9" cy="14" r="1.3" fill="currentColor" />
              </svg>
            </button>

            <span className={styles.inputWrap}>
              <span className={styles.badge} aria-hidden="true">
                {letterFor(index)}
              </span>
              <input
                ref={(el) => {
                  if (el) inputRefs.current.set(choice.id, el);
                  else inputRefs.current.delete(choice.id);
                }}
                type="text"
                className={styles.input}
                defaultValue={choice.value}
                placeholder="Type a choice"
                disabled={disabled}
                aria-label={`Choice ${letterFor(index)} text`}
                onBlur={(e) => commitValue(choice.id, e.currentTarget.value)}
                onKeyDown={(e) => handleTextKeyDown(e, choice.id)}
              />
            </span>

            <button
              type="button"
              className={styles.deleteButton}
              disabled={disabled}
              onClick={() => removeAt(index)}
              aria-label={`Delete choice ${letterFor(index)}`}
            >
              <svg viewBox="0 0 16 16" className={styles.deleteIcon} aria-hidden="true">
                <path
                  d="M4 4l8 8M12 4l-8 8"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
      <button type="button" className={styles.addLink} disabled={disabled} onClick={addChoice}>
        Add choice
      </button>
    </div>
  );
}
