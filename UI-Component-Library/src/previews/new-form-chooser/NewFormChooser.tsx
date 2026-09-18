import { useEffect, useId, useRef, useState } from 'react';
import styles from './NewFormChooser.module.css';

export type NewFormChooserStep = 'closed' | 'chooser' | 'create-from-scratch';
export type FormType = 'standard' | 'spotlight' | 'card';
export type TopLevelOptionId =
  | 'blank-form'
  | 'ai-forms'
  | 'templates'
  | 'crm-forms'
  | 'pdf-to-form'
  | 'images-to-form'
  | 'import-form';

export interface NewFormChooserProps {
  /** Which screen the component starts on. Defaults to 'closed' (just the
   * trigger button). This component manages step/selection transitions
   * itself via internal useState from this point on — it is not a
   * controlled component, matching the task's instruction to expose stages
   * through fixtures rather than external state. */
  initialStep?: NewFormChooserStep;
  /** Which form-type card starts selected when the sub-dialog is shown.
   * Defaults to 'standard', matching the source's own default selection. */
  initialFormType?: FormType;
  /** Label for the dashboard trigger button. Defaults to "+ New Form". */
  triggerLabel?: string;
  /** Prevents opening the chooser at all when true. Not from the source
   * record (no disabled state was documented for this control) — included
   * for harness/fixture consistency with other previews in this repo. */
  disabled?: boolean;
  /** Fired for all 7 top-level cards, including 'blank-form' (which also
   * advances to the sub-dialog). The other 6 ids never got a next screen
   * traced in the source record, so this callback is the only observable
   * effect for them here. */
  onSelectOption?: (id: TopLevelOptionId) => void;
  /** Fired when "Create Form" is clicked, with the currently selected
   * form type — matches the task's literal `onCreateForm(selectedType)`
   * contract. No real form creation/navigation is implemented. */
  onCreateForm?: (formType: FormType) => void;
  /** Fired when the top-level chooser's X button (or Escape at that level)
   * closes the whole chooser. Not fired by Cancel in the sub-dialog, which
   * only steps back to the chooser (see Actions in the source record). */
  onClose?: () => void;
}

interface TopLevelOption {
  id: TopLevelOptionId;
  title: string;
  description: string;
  badge?: string;
  /** Decorative glyph only — Zoho's real icons are two CSS sprite sheets
   * not available in this repository (same finding documented in
   * card-list-selector's README for this exact screen). */
  glyph: string;
}

const TOP_LEVEL_OPTIONS: TopLevelOption[] = [
  {
    id: 'blank-form',
    title: 'Blank Form',
    description: 'Create from scratch with an empty form.',
    glyph: '\u{1F4C4}',
  },
  {
    id: 'ai-forms',
    title: 'AI Forms',
    description: 'Generate forms instantly with Zia AI.',
    glyph: '✨',
  },
  {
    id: 'templates',
    title: 'Form Templates',
    description: 'Choose from over 100+ pre-built forms.',
    glyph: '\u{1F4CB}',
  },
  {
    id: 'crm-forms',
    title: 'CRM Forms',
    description: 'Create forms that capture data and update your Zoho CRM.',
    glyph: '\u{1F5C4}',
  },
  {
    id: 'pdf-to-form',
    title: 'PDF to Form',
    description: 'Convert PDF documents to online forms.',
    glyph: '\u{1F4D1}',
  },
  {
    id: 'images-to-form',
    title: 'Images to Form',
    description: 'Convert images to online forms with Zia AI.',
    glyph: '\u{1F5BC}',
  },
  {
    id: 'import-form',
    title: 'Import Form and Entries',
    description: 'Create a form and import its entries by uploading a CSV file.',
    badge: 'New',
    glyph: '\u{1F4E5}',
  },
];

interface FormTypeOption {
  id: FormType;
  title: string;
  description: string;
  badge?: string;
}

const FORM_TYPES: FormTypeOption[] = [
  { id: 'standard', title: 'Standard', description: 'Displays multiple fields on a page.' },
  {
    id: 'spotlight',
    title: 'Spotlight',
    description: 'Focuses on one field at a time.',
    badge: 'New',
  },
  { id: 'card', title: 'Card', description: 'Displays one field per page.' },
];

/**
 * The source plays a looping preview VIDEO per form type in the real
 * product's right-hand panel. No video asset is available in this
 * repository, so a clearly-labeled placeholder note is rendered in its
 * place instead of a fake/invented video — see this folder's README.
 */
const VIDEO_PLACEHOLDER_NOTE: Record<FormType, string> = {
  standard: 'Video preview: standard form layout — not reconstructed, video asset unavailable',
  spotlight: 'Video preview: spotlight form layout — not reconstructed, video asset unavailable',
  card: 'Video preview: card form layout — not reconstructed, video asset unavailable',
};

/**
 * Reconstructed from Zoho Forms' Dashboard "+ New Form" chooser: a
 * full-viewport overlay of 7 creation-method cards, and — for the one path
 * actually traced in the source record ("Blank Form") — a "Create From
 * Scratch" sub-dialog with a form-name field and a 3-way form-type
 * selector. Manages its own open/closed and chooser/sub-dialog step
 * internally (see `initialStep`/`initialFormType`); all interactions are
 * confirmed entirely client-side in the source (zero network calls for
 * opening, selecting, canceling, or closing). See this folder's README for
 * the full evidence trail, and in particular the precise distinction
 * between the two cards' hover/selection treatments — they are NOT the same
 * claim.
 */
export function NewFormChooser({
  initialStep = 'closed',
  initialFormType = 'standard',
  triggerLabel = '+ New Form',
  disabled = false,
  onSelectOption,
  onCreateForm,
  onClose,
}: NewFormChooserProps) {
  const [step, setStep] = useState<NewFormChooserStep>(initialStep);
  const [formType, setFormType] = useState<FormType>(initialFormType);
  const [formName, setFormName] = useState('');

  const headingId = useId();
  const subHeadingId = useId();
  const nameInputId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Auto-focus something inside whichever dialog just opened, both as
  // standard modal-focus-management practice and so Escape (which relies
  // on the keydown bubbling up through the dialog's own onKeyDown) has
  // something focused to bubble from — the same pattern already
  // established by analytics-feature-gate's confirmation modal.
  useEffect(() => {
    if (step === 'chooser') {
      closeButtonRef.current?.focus();
    } else if (step === 'create-from-scratch') {
      nameInputRef.current?.focus();
    }
  }, [step]);

  function openChooser() {
    if (disabled) return;
    setStep('chooser');
  }

  function closeAll() {
    setStep('closed');
    // Resetting the sub-dialog's draft state (name text, selected type) on
    // full close is a reasonable hygiene assumption, not something the
    // source record specifically confirms either way — see README.
    setFormType(initialFormType);
    setFormName('');
    onClose?.();
  }

  function selectTopLevelOption(option: TopLevelOption) {
    if (disabled) return;
    onSelectOption?.(option.id);
    if (option.id === 'blank-form') {
      setStep('create-from-scratch');
    }
    // The other 6 options only fire the callback above — their own
    // follow-up screens were never traced in the source record, so no
    // further UI exists for them here (see README's "What NOT to build").
  }

  function backToChooser() {
    // Cancel returns to the top-level chooser without closing everything
    // and, per the source's own Actions table, without any confirmation
    // step — the draft name/type are intentionally left as-is so
    // re-selecting "Blank Form" resumes where the user left off.
    setStep('chooser');
  }

  function selectFormType(id: FormType) {
    if (disabled) return;
    setFormType(id);
  }

  function handleFormTypeKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    const isNext = event.key === 'ArrowDown' || event.key === 'ArrowRight';
    const isPrev = event.key === 'ArrowUp' || event.key === 'ArrowLeft';
    if (!isNext && !isPrev) return;
    event.preventDefault();
    // Clamped, not wrapping — not observed in the source (no keydown
    // handler was located for this control); a deliberate accessibility
    // addition, same precedent already established by card-list-selector's
    // own (also-unobserved) roving arrow-key pattern.
    const nextIndex = Math.min(FORM_TYPES.length - 1, Math.max(0, index + (isNext ? 1 : -1)));
    const next = FORM_TYPES[nextIndex];
    if (!next) return;
    selectFormType(next.id);
    const group = event.currentTarget.closest('[role="radiogroup"]');
    (group?.querySelector(`[data-type-id="${next.id}"]`) as HTMLElement | null)?.focus();
  }

  function handleCreateForm() {
    if (disabled) return;
    onCreateForm?.(formType);
  }

  function handleChooserKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeAll();
    }
  }

  function handleSubDialogKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Escape') {
      event.preventDefault();
      backToChooser();
    }
  }

  const focusedFormTypeId = formType;

  return (
    <div className={styles.root}>
      <button type="button" className={styles.trigger} onClick={openChooser} disabled={disabled}>
        {triggerLabel}
      </button>

      {step === 'chooser' && (
        <div className={styles.overlay}>
          <div
            className={styles.panel}
            role="dialog"
            aria-modal="true"
            aria-labelledby={headingId}
            onKeyDown={handleChooserKeyDown}
          >
            <button
              ref={closeButtonRef}
              type="button"
              className={styles.closeButton}
              onClick={closeAll}
              aria-label="Close"
            >
              <CloseIcon />
            </button>
            <h2 id={headingId} className={styles.heading}>
              Choose how to create your form
            </h2>
            <div className={styles.cardGrid}>
              {TOP_LEVEL_OPTIONS.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  className={styles.optionCard}
                  onClick={() => selectTopLevelOption(option)}
                  disabled={disabled}
                >
                  {option.badge && <span className={styles.badge}>{option.badge}</span>}
                  <span className={styles.optionIcon} aria-hidden="true">
                    {option.glyph}
                  </span>
                  <span className={styles.optionTitle}>{option.title}</span>
                  <span className={styles.optionDescription}>{option.description}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {step === 'create-from-scratch' && (
        <div className={styles.overlay}>
          <div
            className={styles.subDialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby={subHeadingId}
            onKeyDown={handleSubDialogKeyDown}
          >
            <div className={styles.subDialogLeft}>
              <h2 id={subHeadingId} className={styles.heading}>
                Create From Scratch
              </h2>

              <label className={styles.fieldLabel} htmlFor={nameInputId}>
                Form name
              </label>
              <input
                ref={nameInputRef}
                id={nameInputId}
                type="text"
                className={styles.nameInput}
                value={formName}
                disabled={disabled}
                onChange={(event) => setFormName(event.currentTarget.value)}
              />

              <span className={styles.fieldLabel} id={`${subHeadingId}-type-label`}>
                Choose a form type
              </span>
              <div
                className={styles.formTypeGroup}
                role="radiogroup"
                aria-labelledby={`${subHeadingId}-type-label`}
              >
                {FORM_TYPES.map((type, index) => {
                  const selected = formType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      role="radio"
                      data-type-id={type.id}
                      aria-checked={selected}
                      tabIndex={disabled ? -1 : focusedFormTypeId === type.id ? 0 : -1}
                      disabled={disabled}
                      className={
                        selected
                          ? `${styles.formTypeCard} ${styles.formTypeCardSelected}`
                          : styles.formTypeCard
                      }
                      onClick={() => selectFormType(type.id)}
                      onKeyDown={(event) => handleFormTypeKeyDown(event, index)}
                    >
                      {type.badge && <span className={styles.badge}>{type.badge}</span>}
                      <span className={styles.formTypeTitle}>{type.title}</span>
                      <span className={styles.formTypeDescription}>{type.description}</span>
                    </button>
                  );
                })}
              </div>

              <div className={styles.dialogActions}>
                <button type="button" className={styles.cancelButton} onClick={backToChooser}>
                  Cancel
                </button>
                <button
                  type="button"
                  className={styles.createButton}
                  onClick={handleCreateForm}
                  disabled={disabled}
                >
                  Create Form
                </button>
              </div>
            </div>

            <div className={styles.subDialogRight}>
              <div
                className={styles.videoPlaceholder}
                role="img"
                aria-label={VIDEO_PLACEHOLDER_NOTE[formType]}
              >
                {VIDEO_PLACEHOLDER_NOTE[formType]}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 16 16" className={styles.closeIcon} aria-hidden="true">
      <path
        d="M3 3l10 10M13 3L3 13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
