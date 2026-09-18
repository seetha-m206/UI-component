import { useEffect, useId, useRef, useState } from 'react';
import styles from './ZiaAiFormGenerator.module.css';

export type ZiaFormGeneratorStep = 'closed' | 'prompt' | 'generating' | 'result';
export type ContentTone = 'professional' | 'friendly' | 'casual';
export type GeneratedFieldType = 'text' | 'email' | 'textarea' | 'choice';

export interface GeneratedField {
  id: string;
  type: GeneratedFieldType;
  label: string;
  required: boolean;
  options?: string[];
}

export interface GeneratedFormVersion {
  title: string;
  fields: GeneratedField[];
}

/**
 * The 4-line status ladder shown while "generating." Wording is the task's
 * own literal spec text, not an invented placeholder.
 */
const STATUS_LINES = [
  'Analyzing your request…',
  'Finalizing the title, required fields, and labels…',
  'Generating preview…',
  "Here's your AI-generated form…",
];

const DEFAULT_PROMPT =
  'Create a customer feedback survey with a satisfaction rating and space for comments.';

/**
 * Content Tone dropdown options. The presence of a tone control is
 * confirmed in the source finding; these three specific option labels are
 * NOT independently confirmed — a reasonable, commonly-seen set filling a
 * documented gap. Flagged in this preview's registry evidence string.
 */
const TONE_OPTIONS: { id: ContentTone; label: string }[] = [
  { id: 'professional', label: 'Professional' },
  { id: 'friendly', label: 'Friendly' },
  { id: 'casual', label: 'Casual' },
];

/**
 * Sample-prompt chips. Clicking one fills the description textarea. Exact
 * wording is this reconstruction's own reasonable assumption — the source
 * confirms chips exist and that clicking fills the textarea, not their
 * literal copy.
 */
const SAMPLE_PROMPTS: { id: string; label: string; prompt: string }[] = [
  {
    id: 'feedback',
    label: 'Customer feedback survey',
    prompt: DEFAULT_PROMPT,
  },
  {
    id: 'event',
    label: 'Event registration form',
    prompt: 'Create an event registration form that collects attendee name, email, and dietary preferences.',
  },
  {
    id: 'job',
    label: 'Job application form',
    prompt: 'Create a job application form with applicant details, resume link, and availability.',
  },
  {
    id: 'contact',
    label: 'Simple contact form',
    prompt: 'Create a simple contact form with name, email, and a message field.',
  },
];

/**
 * Three distinct canned field-list "generations," cycled through on every
 * real generate/regenerate call. The real API call is confirmed
 * stateless/single-shot with no conversation history — nothing here reads
 * the actual prompt text to synthesize fields; the generated content is
 * fixed/canned, same scoping precedent as the typeform-ai-chat-to-create
 * sibling preview. Field labels/types/options are this reconstruction's
 * own reasonable placeholders, not captured verbatim from the source.
 */
const FIELD_SET_POOL: GeneratedFormVersion[] = [
  {
    title: 'Customer Feedback Survey',
    fields: [
      { id: 'f1', type: 'text', label: 'Full Name', required: true },
      { id: 'f2', type: 'email', label: 'Email Address', required: true },
      {
        id: 'f3',
        type: 'choice',
        label: 'How satisfied are you with our service?',
        required: true,
        options: ['Very satisfied', 'Satisfied', 'Neutral', 'Unsatisfied', 'Very unsatisfied'],
      },
      { id: 'f4', type: 'textarea', label: 'Additional Comments', required: false },
    ],
  },
  {
    title: 'Customer Feedback Survey',
    fields: [
      { id: 'g1', type: 'text', label: 'Full Name', required: true },
      { id: 'g2', type: 'text', label: 'Order Number', required: false },
      { id: 'g3', type: 'textarea', label: 'What could we improve?', required: true },
      {
        id: 'g4',
        type: 'choice',
        label: 'Would you recommend us to a friend?',
        required: true,
        options: ['Yes', 'No'],
      },
    ],
  },
  {
    title: 'Customer Feedback Survey',
    fields: [
      { id: 'h1', type: 'text', label: 'Full Name', required: true },
      { id: 'h2', type: 'text', label: 'Phone Number', required: false },
      {
        id: 'h3',
        type: 'choice',
        label: 'Preferred Contact Method',
        required: true,
        options: ['Email', 'Phone', 'Text'],
      },
      { id: 'h4', type: 'textarea', label: 'Feedback', required: true },
    ],
  },
];

export interface ZiaAiFormGeneratorProps {
  /** Which step the component starts on. Defaults to 'closed' (just the
   * trigger). This component owns its own step state from then on via
   * internal useState, the same self-managed pattern as
   * typeform-ai-chat-to-create. A fixture-driven direct mount into
   * 'generating'/'result' is a frozen snapshot — no timer is scheduled
   * unless a real in-preview Generate/Regenerate click triggers one. */
  initialStep?: ZiaFormGeneratorStep;
  /** Prefills the description textarea (prompt step) and, when mounted
   * directly into 'generating'/'result', is treated as the prompt that was
   * "already submitted." Defaults to a tested-style prompt. */
  initialPrompt?: string;
  /** How long the simulated "generating" phase lasts after a real
   * in-preview Generate/Regenerate click, in milliseconds, split evenly
   * across the 4 status-ladder lines. Kept short and deterministic for
   * testability. Defaults to 500ms. */
  generationDelayMs?: number;
  /** Fired when "Create Form" is clicked. Closes/resets the modal. No real
   * form is ever created — this is the only action in the whole flow that
   * "counts." */
  onCreateForm?: () => void;
  /** Fired once a Regenerate cycle completes (i.e. once the replacement
   * field list is ready), not at the moment Regenerate is clicked. */
  onRegenerate?: () => void;
}

function parseTone(value: string): ContentTone {
  return TONE_OPTIONS.some((t) => t.id === value) ? (value as ContentTone) : 'professional';
}

interface GeneratedFieldPreviewProps {
  field: GeneratedField;
}

function GeneratedFieldPreview({ field }: GeneratedFieldPreviewProps) {
  return (
    <div className={styles.previewField}>
      <span className={styles.previewFieldLabel}>
        {field.label}
        {field.required && (
          <span className={styles.requiredMark} aria-hidden="true">
            {' '}
            *
          </span>
        )}
      </span>
      {field.type === 'textarea' ? (
        <textarea
          className={styles.previewInput}
          rows={3}
          disabled
          placeholder="Respondent's answer"
          aria-label={field.label}
        />
      ) : field.type === 'choice' ? (
        <div className={styles.previewChoices}>
          {(field.options ?? []).map((option) => (
            <label key={option} className={styles.previewChoiceOption}>
              <input type="radio" name={field.id} disabled /> {option}
            </label>
          ))}
        </div>
      ) : (
        <input
          type={field.type === 'email' ? 'email' : 'text'}
          className={styles.previewInput}
          disabled
          placeholder="Respondent's answer"
          aria-label={field.label}
        />
      )}
    </div>
  );
}

/**
 * Reconstructed from Zoho Forms' "Generate with Zia AI" modal flow: a
 * trigger that opens a 3-step modal (prompt -> generating -> result). Real
 * confirmed behavior reproduced faithfully: generation is single-shot and
 * stateless (no conversation history baked into either call), Regenerate
 * performs a full field-list REPLACE rather than an incremental edit, and
 * nothing becomes a real saved form until "Create Form" is clicked. See
 * this preview's registry evidence string for what's assumption vs. fact.
 */
export function ZiaAiFormGenerator({
  initialStep = 'closed',
  initialPrompt = DEFAULT_PROMPT,
  generationDelayMs = 500,
  onCreateForm,
  onRegenerate,
}: ZiaAiFormGeneratorProps) {
  const [step, setStep] = useState<ZiaFormGeneratorStep>(initialStep);
  const [promptDraft, setPromptDraft] = useState(initialPrompt);
  const [toneDraft, setToneDraft] = useState<ContentTone>('professional');
  // Tracks the description/tone that were actually submitted for the most
  // recent generation — doubles as the Regenerate panel's editable starting
  // point (see beginGeneration below).
  const [regenDescription, setRegenDescription] = useState(initialPrompt);
  const [regenTone, setRegenTone] = useState<ContentTone>('professional');
  const [lineIndex, setLineIndex] = useState(0);
  // Only a real in-preview Generate/Regenerate click increments this; a
  // fixture-driven direct mount into 'generating' leaves it at 0, so the
  // scheduling effect below never fires and the step renders as a frozen
  // snapshot (same precedent as typeform-ai-chat-to-create).
  const [liveRunId, setLiveRunId] = useState(0);
  // How many generations have completed so far — used to pick the next
  // canned field-list version out of FIELD_SET_POOL. A direct 'result'
  // mount behaves as if one generation already completed.
  const [generationCount, setGenerationCount] = useState(initialStep === 'result' ? 1 : 0);
  const [form, setForm] = useState<GeneratedFormVersion | null>(
    initialStep === 'result' ? FIELD_SET_POOL[0] : null
  );
  const pendingIsRegenerateRef = useRef(false);

  const dialogHeadingId = useId();
  const descId = useId();
  const toneId = useId();
  const regenDescId = useId();
  const regenToneId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (step === 'prompt' || step === 'generating' || step === 'result') {
      closeButtonRef.current?.focus();
    }
  }, [step]);

  useEffect(() => {
    if (step !== 'generating' || liveRunId === 0) return;
    setLineIndex(0);
    let current = 0;
    const segmentMs = Math.max(generationDelayMs / STATUS_LINES.length, 1);
    const lineTimer = setInterval(() => {
      current = Math.min(current + 1, STATUS_LINES.length - 1);
      setLineIndex(current);
    }, segmentMs);
    const finishTimer = setTimeout(() => {
      clearInterval(lineTimer);
      setForm(FIELD_SET_POOL[generationCount % FIELD_SET_POOL.length]);
      setGenerationCount((c) => c + 1);
      setStep('result');
      if (pendingIsRegenerateRef.current) {
        pendingIsRegenerateRef.current = false;
        onRegenerate?.();
      }
    }, generationDelayMs);
    return () => {
      clearInterval(lineTimer);
      clearTimeout(finishTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, liveRunId, generationDelayMs]);

  function openModal() {
    setStep('prompt');
  }

  function beginGeneration(promptText: string, tone: ContentTone, isRegenerate: boolean) {
    const trimmed = promptText.trim();
    if (!trimmed) return;
    setRegenDescription(trimmed);
    setRegenTone(tone);
    pendingIsRegenerateRef.current = isRegenerate;
    setStep('generating');
    setLiveRunId((id) => id + 1);
  }

  function handleGenerateFormClick() {
    beginGeneration(promptDraft, toneDraft, false);
  }

  function handleRegenerateClick() {
    beginGeneration(regenDescription, regenTone, true);
  }

  function handleCreateForm() {
    onCreateForm?.();
    resetAll();
  }

  function resetAll() {
    setStep('closed');
    setPromptDraft(initialPrompt);
    setToneDraft('professional');
    setRegenDescription(initialPrompt);
    setRegenTone('professional');
    setForm(null);
    setGenerationCount(0);
    setLineIndex(0);
    pendingIsRegenerateRef.current = false;
  }

  function handleClose() {
    resetAll();
  }

  function handleDialogKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Escape') {
      event.preventDefault();
      handleClose();
    }
  }

  return (
    <div className={styles.root}>
      <button type="button" className={styles.triggerButton} onClick={openModal}>
        <span aria-hidden="true" className={styles.triggerIcon}>
          &#10024;
        </span>
        Generate with Zia AI
      </button>

      {step !== 'closed' && (
        <div className={styles.overlay}>
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogHeadingId}
            onKeyDown={handleDialogKeyDown}
          >
            <div className={styles.modalHeader}>
              <h2 id={dialogHeadingId} className={styles.modalHeading}>
                <span aria-hidden="true">&#10024;</span> Generate with Zia AI
              </h2>
              <button
                ref={closeButtonRef}
                type="button"
                className={styles.closeButton}
                aria-label="Close AI form generator"
                onClick={handleClose}
              >
                &#10005;
              </button>
            </div>

            {step === 'prompt' && (
              <div className={styles.promptBody}>
                <label htmlFor={descId} className={styles.fieldLabel}>
                  Describe the form you want to create
                </label>
                <textarea
                  id={descId}
                  className={styles.textarea}
                  rows={4}
                  value={promptDraft}
                  onChange={(e) => setPromptDraft(e.target.value)}
                  placeholder="e.g. Create a customer feedback survey with a satisfaction rating…"
                />

                <div className={styles.chipsRow}>
                  {SAMPLE_PROMPTS.map((chip) => (
                    <button
                      key={chip.id}
                      type="button"
                      className={styles.chip}
                      onClick={() => setPromptDraft(chip.prompt)}
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>

                <label htmlFor={toneId} className={styles.fieldLabel}>
                  Content Tone
                </label>
                <select
                  id={toneId}
                  className={styles.select}
                  value={toneDraft}
                  onChange={(e) => setToneDraft(parseTone(e.target.value))}
                >
                  {TONE_OPTIONS.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.label}
                    </option>
                  ))}
                </select>

                <div className={styles.promptFooter}>
                  <button
                    type="button"
                    className={styles.primaryButton}
                    disabled={!promptDraft.trim()}
                    onClick={handleGenerateFormClick}
                  >
                    Generate Form
                  </button>
                </div>
              </div>
            )}

            {step === 'generating' && (
              <div className={styles.generatingBody}>
                <span className={styles.generatingSpinner} aria-hidden="true" />
                <ul className={styles.statusLadder} role="status" aria-live="polite">
                  {STATUS_LINES.map((line, i) => {
                    const state = i < lineIndex ? 'done' : i === lineIndex ? 'active' : 'pending';
                    return (
                      <li
                        key={line}
                        data-status={state}
                        className={`${styles.statusLine} ${
                          state === 'done'
                            ? styles.statusLineDone
                            : state === 'active'
                              ? styles.statusLineActive
                              : styles.statusLinePending
                        }`}
                      >
                        <span className={styles.statusIcon} aria-hidden="true">
                          {state === 'done' ? '✓' : state === 'active' ? '●' : ''}
                        </span>
                        {line}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {step === 'result' && form && (
              <>
                <div className={styles.resultBody}>
                  <div className={styles.formPreviewPane}>
                    <h3 className={styles.formPreviewTitle}>{form.title}</h3>
                    <div className={styles.formPreviewFields}>
                      {form.fields.map((field) => (
                        <GeneratedFieldPreview key={field.id} field={field} />
                      ))}
                    </div>
                  </div>

                  <div className={styles.regeneratePanel}>
                    <h3 className={styles.regenerateHeading}>Regenerate Form</h3>
                    <label htmlFor={regenDescId} className={styles.fieldLabel}>
                      Description
                    </label>
                    <textarea
                      id={regenDescId}
                      className={styles.textarea}
                      rows={4}
                      value={regenDescription}
                      onChange={(e) => setRegenDescription(e.target.value)}
                    />
                    <label htmlFor={regenToneId} className={styles.fieldLabel}>
                      Content Tone
                    </label>
                    <select
                      id={regenToneId}
                      className={styles.select}
                      value={regenTone}
                      onChange={(e) => setRegenTone(parseTone(e.target.value))}
                    >
                      {TONE_OPTIONS.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.label}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      className={styles.secondaryButton}
                      disabled={!regenDescription.trim()}
                      onClick={handleRegenerateClick}
                    >
                      Regenerate
                    </button>
                    <p className={styles.regenerateNote}>
                      Regenerating replaces every field above — it does not merge or append to the
                      current list.
                    </p>
                  </div>
                </div>

                <div className={styles.modalFooter}>
                  <button type="button" className={styles.primaryButton} onClick={handleCreateForm}>
                    Create Form
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
