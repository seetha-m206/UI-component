import { useId, useState } from 'react';
import styles from './JotformAiFormGeneration.module.css';

export type FormFieldType = 'short-text' | 'radio' | 'star-rating' | 'email';

export interface GeneratedField {
  id: string;
  type: FormFieldType;
  label: string;
  required?: boolean;
  options?: string[];
}

export interface GeneratedFormState {
  title: string;
  fields: GeneratedField[];
  submitLabel: string;
}

type TurnKind = 'generation' | 'free-edit' | 'suggestion-prompt' | 'suggestion-checklist' | 'suggestion-apply';

interface ChecklistOption {
  id: string;
  label: string;
  checked: boolean;
}

interface ChatTurn {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  kind?: TurnKind;
  addedFieldIds?: string[];
  undone?: boolean;
  checklist?: ChecklistOption[];
  checklistResolved?: boolean;
  thinking?: boolean;
}

export interface JotformAiFormGenerationProps {
  /** Starting phase. Defaults to 'intro' (the "Describe your form" box, nothing generated yet). */
  initialPhase?: 'intro' | 'builder';
  /** Optional pre-seeded chat history + form, for fixtures that start mid-conversation. */
  initialForm?: GeneratedFormState | null;
  initialTurns?: ChatTurn[];
  /** Starts the Form Copilot panel already expanded (builder phase only). Defaults to true. */
  initialCopilotOpen?: boolean;
  disabled?: boolean;
}

let idCounter = 0;
function nextId(prefix: string): string {
  idCounter += 1;
  return `${prefix}-${idCounter}`;
}

/**
 * Canned "generation" content. This is a reconstruction, not a live AI call —
 * see this folder's README. The content below matches the exact fields
 * confirmed live in the source record (JF5) for the test prompt "Create a
 * customer feedback form for a coffee shop, asking about visit frequency,
 * favorite drink, and a 5-star rating."
 */
function generateDemoForm(): GeneratedFormState {
  return {
    title: 'Coffee Shop Feedback Form',
    fields: [
      {
        id: nextId('field'),
        type: 'radio',
        label: 'How often do you visit?',
        options: ['Daily', 'Weekly', 'Monthly', 'Rarely'],
      },
      {
        id: nextId('field'),
        type: 'short-text',
        label: "What's your favorite drink?",
      },
      {
        id: nextId('field'),
        type: 'star-rating',
        label: 'Rate your overall experience',
      },
    ],
    submitLabel: 'Submit Feedback',
  };
}

/**
 * Canned Form Copilot edit response. Keyword-matched against the free-text
 * prompt rather than a real model call — see README for scope reduction.
 * The "email" branch reproduces the record's exact tested copy verbatim;
 * the others are reasonable extrapolations for demo purposes only.
 */
function resolveCopilotEdit(prompt: string): { field: GeneratedField; reply: string } {
  const lower = prompt.toLowerCase();
  if (lower.includes('email')) {
    return {
      field: { id: nextId('field'), type: 'email', label: 'Email Address', required: true },
      reply:
        "I've added an email address field to the form so you can collect replies for follow-up.",
    };
  }
  if (lower.includes('phone')) {
    return {
      field: { id: nextId('field'), type: 'short-text', label: 'Phone Number' },
      reply: "I've added a phone number field to the form.",
    };
  }
  if (lower.includes('name')) {
    return {
      field: { id: nextId('field'), type: 'short-text', label: 'Full Name' },
      reply: "I've added a full name field to the form.",
    };
  }
  if (lower.includes('rating') || lower.includes('star')) {
    return {
      field: { id: nextId('field'), type: 'star-rating', label: 'Additional Rating' },
      reply: "I've added another star rating field to the form.",
    };
  }
  return {
    field: { id: nextId('field'), type: 'short-text', label: 'Additional Question' },
    reply: "I've added a new question field to your form.",
  };
}

const SUGGESTED_QUESTIONS = [
  'What did you like most about your visit?',
  'What could we improve?',
  'Which location did you visit?',
  'How did you hear about us?',
  'Would you recommend us to a friend?',
];

function FieldPreview({ field }: { field: GeneratedField }) {
  const fieldLabelId = useId();
  if (field.type === 'radio') {
    return (
      <div className={styles.canvasField}>
        <span id={fieldLabelId} className={styles.canvasFieldLabel}>
          {field.label}
        </span>
        <div className={styles.radioOptions}>
          {(field.options ?? []).map((opt) => (
            <label key={opt} className={styles.radioOption}>
              <input type="radio" name={field.id} value={opt} />
              {opt}
            </label>
          ))}
        </div>
      </div>
    );
  }
  if (field.type === 'star-rating') {
    return (
      <div className={styles.canvasField}>
        <span id={fieldLabelId} className={styles.canvasFieldLabel}>
          {field.label}
        </span>
        <StarRating label={field.label} />
      </div>
    );
  }
  return (
    <div className={styles.canvasField}>
      <label className={styles.canvasFieldLabel} htmlFor={fieldLabelId}>
        {field.label}
        {field.required ? ' *' : ''}
      </label>
      <input
        id={fieldLabelId}
        type={field.type === 'email' ? 'email' : 'text'}
        className={styles.textFieldInput}
        required={field.required}
      />
    </div>
  );
}

function StarRating({ label }: { label: string }) {
  const [value, setValue] = useState(0);
  return (
    <div className={styles.stars} role="radiogroup" aria-label={label}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          className={styles.star}
          role="radio"
          aria-checked={value === n}
          aria-label={`${n} star${n > 1 ? 's' : ''}`}
          onClick={() => setValue(n)}
        >
          {n <= value ? '★' : '☆'}
        </button>
      ))}
    </div>
  );
}

/**
 * Reconstructed from JotForm's AI Form Generation surfaces — "Describe your
 * form" (pre-creation) and the Form Copilot in-builder chat panel — see
 * Research-Library/04-Component-Library/jotform/jotform-ai-form-generation.md
 * (JF5, 2026-10-05). Self-contained/uncontrolled: owns the whole chat
 * thread, generated-form state, and per-turn undo history internally.
 */
export function JotformAiFormGeneration({
  initialPhase = 'intro',
  initialForm = null,
  initialTurns = [],
  initialCopilotOpen = true,
  disabled = false,
}: JotformAiFormGenerationProps) {
  const [phase, setPhase] = useState<'intro' | 'builder'>(initialPhase);
  const [promptInput, setPromptInput] = useState('');
  const [generating, setGenerating] = useState(false);
  const [form, setForm] = useState<GeneratedFormState | null>(initialForm);
  const [turns, setTurns] = useState<ChatTurn[]>(initialTurns);
  const [copilotOpen, setCopilotOpen] = useState(initialCopilotOpen);
  const [copilotInput, setCopilotInput] = useState('');
  const [suggestionsMenuOpen, setSuggestionsMenuOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [applying, setApplying] = useState(false);

  function flashToast(text: string) {
    setToast(text);
    window.setTimeout(() => setToast((current) => (current === text ? null : current)), 1600);
  }

  function handleSubmitPrompt() {
    if (disabled || generating || !promptInput.trim()) return;
    const promptText = promptInput.trim();
    setGenerating(true);
    window.setTimeout(() => {
      const generated = generateDemoForm();
      setForm(generated);
      setTurns((prev) => [
        ...prev,
        { id: nextId('turn'), role: 'user', text: promptText },
        {
          id: nextId('turn'),
          role: 'assistant',
          text: `I've created "${generated.title}" with the fields you asked for, including a 5-star rating.`,
          kind: 'generation',
          addedFieldIds: generated.fields.map((f) => f.id),
        },
      ]);
      setGenerating(false);
      setPhase('builder');
      setPromptInput('');
    }, 500);
  }

  function handleCopilotSubmit() {
    if (disabled || !copilotInput.trim() || !form) return;
    const promptText = copilotInput.trim();
    const { field, reply } = resolveCopilotEdit(promptText);
    flashToast(`✦ Adding '${field.label}'…`);
    setForm((prev) => (prev ? { ...prev, fields: [...prev.fields, field] } : prev));
    setTurns((prev) => [
      ...prev,
      { id: nextId('turn'), role: 'user', text: promptText },
      {
        id: nextId('turn'),
        role: 'assistant',
        text: reply,
        kind: 'free-edit',
        addedFieldIds: [field.id],
      },
    ]);
    setCopilotInput('');
  }

  function handleSuggestNewQuestions() {
    if (disabled || !form) return;
    setSuggestionsMenuOpen(false);
    setTurns((prev) => [
      ...prev,
      { id: nextId('turn'), role: 'user', text: 'Suggest new questions', kind: 'suggestion-prompt' },
      {
        id: nextId('turn'),
        role: 'assistant',
        text: 'You can select from the questions below to add to your form.',
        kind: 'suggestion-checklist',
        checklist: SUGGESTED_QUESTIONS.slice(0, 3).map((label) => ({
          id: nextId('opt'),
          label,
          checked: false,
        })),
      },
    ]);
  }

  function showMoreSuggestions(turnId: string) {
    setTurns((prev) =>
      prev.map((t) => {
        if (t.id !== turnId || !t.checklist) return t;
        const have = new Set(t.checklist.map((o) => o.label));
        const extra = SUGGESTED_QUESTIONS.filter((q) => !have.has(q)).map((label) => ({
          id: nextId('opt'),
          label,
          checked: false,
        }));
        return { ...t, checklist: [...t.checklist, ...extra] };
      })
    );
  }

  function toggleChecklistOption(turnId: string, optionId: string) {
    if (disabled) return;
    setTurns((prev) =>
      prev.map((t) => {
        if (t.id !== turnId || !t.checklist) return t;
        return {
          ...t,
          checklist: t.checklist.map((o) => (o.id === optionId ? { ...o, checked: !o.checked } : o)),
        };
      })
    );
  }

  function confirmAddQuestions(turnId: string) {
    if (disabled || applying) return;
    const turn = turns.find((t) => t.id === turnId);
    if (!turn || !turn.checklist) return;
    const selected = turn.checklist.filter((o) => o.checked);
    if (selected.length === 0) return;

    setTurns((prev) => prev.map((t) => (t.id === turnId ? { ...t, checklistResolved: true, thinking: true } : t)));
    setApplying(true);

    window.setTimeout(() => {
      const newFields: GeneratedField[] = selected.map((o) => ({
        id: nextId('field'),
        type: 'short-text',
        label: o.label,
      }));
      setForm((prev) => (prev ? { ...prev, fields: [...prev.fields, ...newFields] } : prev));
      flashToast(
        selected.length === 1
          ? `✦ Adding '${selected[0].label}'…`
          : `✦ Adding ${selected.length} questions…`
      );
      setTurns((prev) => [
        ...prev.map((t) => (t.id === turnId ? { ...t, thinking: false } : t)),
        {
          id: nextId('turn'),
          role: 'assistant',
          text:
            selected.length === 1
              ? "I've added the short text question to your form and placed it before the submit button."
              : "I've added the selected questions to your form and placed them before the submit button.",
          kind: 'suggestion-apply',
          addedFieldIds: newFields.map((f) => f.id),
        },
      ]);
      setApplying(false);
    }, 400);
  }

  function undoTurn(turnId: string) {
    if (disabled) return;
    const turn = turns.find((t) => t.id === turnId);
    if (!turn || turn.undone) return;

    if (turn.addedFieldIds && turn.addedFieldIds.length > 0) {
      setForm((prev) =>
        prev ? { ...prev, fields: prev.fields.filter((f) => !turn.addedFieldIds!.includes(f.id)) } : prev
      );
    }
    if (turn.kind === 'generation') {
      setForm(null);
      setPhase('intro');
    }
    setTurns((prev) => prev.map((t) => (t.id === turnId ? { ...t, undone: true } : t)));
  }

  return (
    <div className={styles.root} data-disabled={disabled}>
      {phase === 'intro' && (
        <div className={styles.introBox}>
          <h2 className={styles.introTitle}>Describe your form</h2>
          <p className={styles.introHint}>
            Tell us what your form is for, and Jotform AI will build it for you.
          </p>
          <textarea
            className={styles.introTextarea}
            placeholder='e.g. "Create a customer feedback form for a coffee shop, asking about visit frequency, favorite drink, and a 5-star rating."'
            value={promptInput}
            disabled={disabled || generating}
            onChange={(e) => setPromptInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                handleSubmitPrompt();
              }
            }}
            aria-label="Describe your form"
          />
          <button
            type="button"
            className={styles.generateButton}
            disabled={disabled || generating || !promptInput.trim()}
            onClick={handleSubmitPrompt}
          >
            {generating ? 'Creating…' : 'Generate form'}
          </button>
          {generating && (
            <p className={styles.generatingStatus} role="status">
              Creating your form…
            </p>
          )}
        </div>
      )}

      {phase === 'builder' && form && (
        <div className={styles.builderLayout}>
          <div className={styles.canvas}>
            {toast && (
              <div className={styles.toast} role="status" aria-live="polite">
                {toast}
              </div>
            )}
            <h2 className={styles.formTitle}>{form.title}</h2>
            {form.fields.map((field) => (
              <FieldPreview key={field.id} field={field} />
            ))}
            <button type="button" className={styles.submitPreviewButton} disabled>
              {form.submitLabel}
            </button>
          </div>

          <div className={styles.copilotPanel} data-collapsed={!copilotOpen}>
            <div className={styles.copilotHeader}>
              <span className={styles.copilotHeaderTitle}>
                <span aria-hidden="true">🦊</span> Form Copilot <span className={styles.aiTag}>AI</span> — Jotform
                Form Specialist
              </span>
              <div className={styles.copilotHeaderActions}>
                <button
                  type="button"
                  className={styles.iconButton}
                  aria-label={copilotOpen ? 'Collapse Form Copilot' : 'Expand Form Copilot'}
                  aria-expanded={copilotOpen}
                  onClick={() => setCopilotOpen((v) => !v)}
                >
                  {copilotOpen ? '⌄' : '⌃'}
                </button>
              </div>
            </div>

            {copilotOpen && (
              <>
                <div className={styles.chatThread} aria-label="Form Copilot conversation">
                  {turns.map((turn) => (
                    <div
                      key={turn.id}
                      data-testid={`turn-${turn.id}`}
                      className={styles.chatTurn}
                      data-role={turn.role}
                      data-undone={turn.undone}
                    >
                      <p className={styles.chatTurnText}>{turn.text}</p>

                      {turn.checklist && (
                        <div className={styles.checklist}>
                          {turn.checklist.map((opt) => (
                            <label key={opt.id} className={styles.checklistOption}>
                              <input
                                type="checkbox"
                                checked={opt.checked}
                                disabled={disabled || turn.checklistResolved}
                                onChange={() => toggleChecklistOption(turn.id, opt.id)}
                              />
                              {opt.label}
                            </label>
                          ))}
                          {turn.checklist.length < SUGGESTED_QUESTIONS.length && !turn.checklistResolved && (
                            <button
                              type="button"
                              className={styles.showMoreButton}
                              onClick={() => showMoreSuggestions(turn.id)}
                            >
                              Show more ⌄
                            </button>
                          )}
                          {turn.thinking ? (
                            <p className={styles.thinkingIndicator} role="status">
                              • • • Thinking
                            </p>
                          ) : (
                            !turn.checklistResolved && (
                              <button
                                type="button"
                                className={styles.addQuestionButton}
                                disabled={disabled || !turn.checklist.some((o) => o.checked)}
                                onClick={() => confirmAddQuestions(turn.id)}
                              >
                                Add question →
                              </button>
                            )
                          )}
                        </div>
                      )}

                      {turn.role === 'assistant' && turn.addedFieldIds && turn.addedFieldIds.length > 0 && (
                        <button
                          type="button"
                          className={styles.undoLink}
                          disabled={disabled || turn.undone}
                          onClick={() => undoTurn(turn.id)}
                        >
                          {turn.undone ? 'Undone' : '↺ Undo'}
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                <div className={styles.copilotComposer}>
                  <div className={styles.composerRow}>
                    <div className={styles.suggestionsWrapper}>
                      <button
                        type="button"
                        className={styles.plusButton}
                        aria-label="Suggestions"
                        aria-haspopup="true"
                        aria-expanded={suggestionsMenuOpen}
                        disabled={disabled}
                        onClick={() => setSuggestionsMenuOpen((v) => !v)}
                      >
                        +
                      </button>
                      {suggestionsMenuOpen && (
                        <div className={styles.suggestionsMenu} role="menu">
                          <button
                            type="button"
                            role="menuitem"
                            className={styles.suggestionChip}
                            onClick={handleSuggestNewQuestions}
                          >
                            Suggest new questions
                          </button>
                          <span className={styles.suggestionChipDisabled} aria-disabled="true">
                            Create conditions
                          </span>
                          <span className={styles.suggestionChipDisabled} aria-disabled="true">
                            Customize form design
                          </span>
                        </div>
                      )}
                    </div>
                    <input
                      type="text"
                      className={styles.copilotInput}
                      placeholder="Ask Copilot…"
                      aria-label="Ask Copilot"
                      value={copilotInput}
                      disabled={disabled}
                      onChange={(e) => setCopilotInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleCopilotSubmit();
                        }
                      }}
                    />
                    <button
                      type="button"
                      className={styles.sendButton}
                      disabled={disabled || !copilotInput.trim()}
                      onClick={handleCopilotSubmit}
                    >
                      Send
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
