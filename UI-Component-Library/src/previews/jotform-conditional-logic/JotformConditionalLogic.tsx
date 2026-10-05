import { useId, useState } from 'react';
import styles from './JotformConditionalLogic.module.css';

export type Operator = 'Is Equal To' | 'Is Not Equal To' | 'Is Empty' | 'Is Filled';
export type Action = 'Hide' | 'Show' | 'Hide Multiple' | 'Show Multiple';

export interface ConditionRule {
  id: string;
  ifFieldId: string;
  operator: Operator;
  value: string;
  action: Action;
  targetFieldId: string;
}

export interface JotformConditionalLogicProps {
  /** Saved rules the Conditions list starts with. Defaults to none ("No rules configured"). */
  initialRules?: ConditionRule[];
  /**
   * Demo-only starting state for the silent-dependency-breakage finding: when
   * true, the source field ("Do you visit our coffee shop?") is already
   * deleted, so any rule that references it renders the confirmed real
   * "MISSING FIELD" error immediately.
   */
  initialSourceFieldDeleted?: boolean;
  disabled?: boolean;
}

// Fixed two-field setup matching the source record's live test (Coffee Shop
// Feedback Form). Field identity is deliberately hardcoded rather than
// made generic — the record documents one specific condition built against
// one specific Single Choice source field and one specific text target
// field, not a generic form builder.
const SOURCE_FIELD = {
  id: 'source',
  label: 'Do you visit our coffee shop?',
  type: 'choice' as const,
  options: ['Yes', 'No'],
};
const TARGET_FIELD = {
  id: 'target',
  label: 'What is your favorite drink?',
  type: 'text' as const,
};
const ALL_FIELDS = [SOURCE_FIELD, TARGET_FIELD];

function getField(id: string) {
  return ALL_FIELDS.find((f) => f.id === id);
}

const OPERATORS: Operator[] = ['Is Equal To', 'Is Not Equal To', 'Is Empty', 'Is Filled'];
const SHOW_HIDE_ACTIONS: Action[] = ['Hide', 'Show', 'Hide Multiple', 'Show Multiple'];

// Full 9-action picker, enumerated verbatim from the source record's Actions
// table — only "Show/Hide Field" is wired to an interactive editor in this
// reconstruction (see this folder's README for the scope reduction). The
// other 8 render as structurally faithful, genuinely disabled menu items.
const ACTION_TYPES: Array<{ id: string; name: string; description: string; interactive: boolean }> = [
  {
    id: 'show-hide-field',
    name: 'Show/Hide Field',
    description: 'Change visibility of specific form fields',
    interactive: true,
  },
  {
    id: 'update-calculate-field',
    name: 'Update/Calculate Field',
    description: "Copy a field's value or perform complex calculations",
    interactive: false,
  },
  {
    id: 'enable-require-mask-field',
    name: 'Enable/Require/Mask Field',
    description: 'Require or disable a field, or set a mask',
    interactive: false,
  },
  {
    id: 'update-options',
    name: 'Update Options (NEW)',
    description: 'Change dropdown, single-choice, and multiple-choice options',
    interactive: false,
  },
  {
    id: 'update-product-list',
    name: 'Update Product List (NEW)',
    description: 'Show or hide products in a payment field',
    interactive: false,
  },
  {
    id: 'skip-hide-page',
    name: 'Skip to/Hide a Page',
    description: 'Skip to or hide a specific page',
    interactive: false,
  },
  {
    id: 'change-thank-you-page',
    name: 'Change Thank You Page',
    description: 'Customize your Thank You page action',
    interactive: false,
  },
  {
    id: 'change-email-recipient',
    name: 'Change Email Recipient',
    description: 'Send emails to specific people',
    interactive: false,
  },
  {
    id: 'run-workflow',
    name: 'Run Workflow (NEW)',
    description: 'Trigger your form workflow when a specific condition is met',
    interactive: false,
  },
];

let ruleIdCounter = 0;

function evaluateOperator(operator: Operator, answer: string | null, value: string): boolean {
  switch (operator) {
    case 'Is Equal To':
      return answer === value;
    case 'Is Not Equal To':
      return answer !== value;
    case 'Is Empty':
      return answer == null;
    case 'Is Filled':
      return answer != null;
    default:
      return false;
  }
}

function summarize(rule: ConditionRule): string {
  const ifField = getField(rule.ifFieldId);
  const targetField = getField(rule.targetFieldId);
  return `IF "${ifField?.label ?? 'Unknown field'}" ${rule.operator} "${rule.value}" THEN ${rule.action} "${targetField?.label ?? 'Unknown field'}"`;
}

/**
 * Reconstructed from JotForm's Conditions builder (see
 * Research-Library/04-Component-Library/jotform/jotform-conditional-logic.md,
 * JF8, 2026-10-05).
 *
 * Scoped to the record's own live test: a Settings → Conditions list, the
 * "+ Add Condition" → 9-type picker (only Show/Hide Field is interactive —
 * see README), an IF/STATE/VALUE + DO/FIELD rule editor, a connected
 * respondent-preview pane that snaps visibility instantly (no animation —
 * confirmed CSS `display: none → flex` toggle, reproduced here by keeping
 * the target field's container always mounted and only toggling its
 * `display` style, which also gives stale-value persistence across
 * hide/re-show for free), and the confirmed silent-dependency-breakage
 * finding: deleting the source field leaves the rule showing a red
 * "MISSING FIELD" error and makes the respondent-facing target field fail
 * open (permanently visible).
 */
export function JotformConditionalLogic({
  initialRules = [],
  initialSourceFieldDeleted = false,
  disabled = false,
}: JotformConditionalLogicProps) {
  const [rules, setRules] = useState<ConditionRule[]>(initialRules);
  const [sourceFieldDeleted, setSourceFieldDeleted] = useState(initialSourceFieldDeleted);

  const [pickerOpen, setPickerOpen] = useState(false);
  const [editorOpen, setEditorOpen] = useState(false);

  const [draftIfField, setDraftIfField] = useState(SOURCE_FIELD.id);
  const [draftOperator, setDraftOperator] = useState<Operator>('Is Equal To');
  const [draftValue, setDraftValue] = useState(SOURCE_FIELD.options[0]);
  const [draftAction, setDraftAction] = useState<Action>('Show');
  const [draftTargetField, setDraftTargetField] = useState(TARGET_FIELD.id);

  // Respondent-preview state.
  const [sourceAnswer, setSourceAnswer] = useState<string | null>(null);
  const [targetValue, setTargetValue] = useState('');

  const headingId = useId();
  const targetInputId = useId();

  function openPicker() {
    if (disabled) return;
    setPickerOpen(true);
  }

  function pickActionType(actionTypeId: string) {
    if (actionTypeId !== 'show-hide-field') return; // inert menu items, by design
    setPickerOpen(false);
    setDraftIfField(SOURCE_FIELD.id);
    setDraftOperator('Is Equal To');
    setDraftValue(SOURCE_FIELD.options[0]);
    setDraftAction('Show');
    setDraftTargetField(TARGET_FIELD.id);
    setEditorOpen(true);
  }

  function handleIfFieldChange(fieldId: string) {
    setDraftIfField(fieldId);
    const field = getField(fieldId);
    setDraftValue(field?.type === 'choice' ? field.options[0] : '');
  }

  function saveRule() {
    ruleIdCounter += 1;
    const newRule: ConditionRule = {
      id: `rule-${ruleIdCounter}`,
      ifFieldId: draftIfField,
      operator: draftOperator,
      value: draftValue,
      action: draftAction,
      targetFieldId: draftTargetField,
    };
    setRules((prev) => [...prev, newRule]);
    setEditorOpen(false);
  }

  function cancelEditor() {
    setEditorOpen(false);
  }

  function deleteRule(ruleId: string) {
    setRules((prev) => prev.filter((r) => r.id !== ruleId));
  }

  function deleteSourceField() {
    setSourceFieldDeleted(true);
  }

  function restoreSourceField() {
    setSourceFieldDeleted(false);
  }

  function isRuleBroken(rule: ConditionRule): boolean {
    return (
      (sourceFieldDeleted && rule.ifFieldId === SOURCE_FIELD.id) ||
      (sourceFieldDeleted && rule.targetFieldId === SOURCE_FIELD.id)
    );
  }

  // Respondent-preview visibility computation. "Fails open": once the
  // source field is deleted, every rule that depended on it stops applying
  // and the target field reverts to its default always-visible state —
  // confirmed real behavior, not a defensive hide.
  const relevantRule = rules.find(
    (r) => r.targetFieldId === TARGET_FIELD.id && r.ifFieldId === SOURCE_FIELD.id
  );
  let targetVisible = true;
  if (relevantRule && !sourceFieldDeleted) {
    const matches = evaluateOperator(relevantRule.operator, sourceAnswer, relevantRule.value);
    if (relevantRule.action === 'Show' || relevantRule.action === 'Show Multiple') {
      targetVisible = matches;
    } else if (relevantRule.action === 'Hide' || relevantRule.action === 'Hide Multiple') {
      targetVisible = !matches;
    }
  }

  const draftField = getField(draftIfField);

  return (
    <div className={styles.root} data-disabled={disabled}>
      <div className={styles.layout}>
        {/* ---------- Rule builder (Settings -> Conditions) ---------- */}
        <section className={styles.builderPane} aria-labelledby={headingId}>
          <div className={styles.builderHeader}>
            <h3 id={headingId} className={styles.heading}>
              Settings &gt; Conditions
            </h3>
            <button
              type="button"
              className={styles.addConditionButton}
              onClick={openPicker}
              disabled={disabled}
            >
              + Add Condition
            </button>
          </div>

          {rules.length === 0 && (
            <p className={styles.emptyState}>No conditions yet.</p>
          )}

          <ul className={styles.ruleList}>
            {rules.map((rule) => {
              const broken = isRuleBroken(rule);
              return (
                <li
                  key={rule.id}
                  className={styles.ruleCard}
                  data-broken={broken}
                  data-testid={`rule-${rule.id}`}
                >
                  {broken ? (
                    <>
                      <span className={styles.missingFieldBadge}>MISSING FIELD</span>
                      <p className={styles.errorText} role="alert">
                        ERROR: One or more fields have been deleted which are required by this
                        condition.
                      </p>
                    </>
                  ) : (
                    <p className={styles.ruleSummary}>{summarize(rule)}</p>
                  )}
                  <div className={styles.ruleCardActions}>
                    {rule.ifFieldId === SOURCE_FIELD.id && !sourceFieldDeleted && (
                      <button
                        type="button"
                        className={styles.deleteFieldButton}
                        onClick={deleteSourceField}
                        disabled={disabled}
                      >
                        Delete field: "{SOURCE_FIELD.label}" (demo)
                      </button>
                    )}
                    <button
                      type="button"
                      className={styles.deleteRuleButton}
                      onClick={() => deleteRule(rule.id)}
                      disabled={disabled}
                    >
                      Delete rule
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>

          {sourceFieldDeleted && (
            <div className={styles.restoreNotice}>
              <span>
                Demo control: the "{SOURCE_FIELD.label}" field has been deleted.
              </span>
              <button
                type="button"
                className={styles.restoreButton}
                onClick={restoreSourceField}
                disabled={disabled}
              >
                Restore field (demo)
              </button>
            </div>
          )}

          {pickerOpen && (
            <div className={styles.pickerOverlay} role="dialog" aria-label="Add Condition">
              <div className={styles.picker}>
                <div className={styles.pickerHeader}>
                  <h4 className={styles.pickerTitle}>Add Condition</h4>
                  <button
                    type="button"
                    className={styles.closeButton}
                    onClick={() => setPickerOpen(false)}
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>

                <div className={styles.aiBox}>
                  <label className={styles.aiLabel} htmlFor={`${headingId}-ai`}>
                    Describe your conditions
                  </label>
                  <input
                    id={`${headingId}-ai`}
                    className={styles.aiInput}
                    placeholder='e.g. If the email is empty do not show submit button'
                    disabled
                  />
                  <button type="button" className={styles.aiGenerateButton} disabled>
                    Generate
                  </button>
                </div>

                <ul className={styles.actionTypeList}>
                  {ACTION_TYPES.map((actionType) => (
                    <li key={actionType.id}>
                      <button
                        type="button"
                        className={styles.actionTypeButton}
                        onClick={() => pickActionType(actionType.id)}
                        disabled={!actionType.interactive || disabled}
                        title={
                          actionType.interactive
                            ? undefined
                            : 'Not implemented in this reconstruction — see README.'
                        }
                      >
                        <span className={styles.actionTypeName}>{actionType.name}</span>
                        <span className={styles.actionTypeDescription}>
                          {actionType.description}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {editorOpen && (
            <div className={styles.pickerOverlay} role="dialog" aria-label="Show/Hide Field condition editor">
              <div className={styles.editor}>
                <h4 className={styles.pickerTitle}>Show/Hide Field</h4>

                <div className={styles.block}>
                  <span className={styles.blockLabel}>IF</span>
                  <label className={styles.fieldLabel}>
                    Field
                    <select
                      className={styles.select}
                      value={draftIfField}
                      onChange={(e) => handleIfFieldChange(e.target.value)}
                    >
                      {ALL_FIELDS.map((f) => (
                        <option key={f.id} value={f.id}>
                          {f.label}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className={styles.fieldLabel}>
                    State
                    <select
                      className={styles.select}
                      value={draftOperator}
                      onChange={(e) => setDraftOperator(e.target.value as Operator)}
                    >
                      {OPERATORS.map((op) => (
                        <option key={op} value={op}>
                          {op}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className={styles.fieldLabel}>
                    Value
                    {draftField?.type === 'choice' ? (
                      <select
                        className={styles.select}
                        value={draftValue}
                        onChange={(e) => setDraftValue(e.target.value)}
                        disabled={draftOperator === 'Is Empty' || draftOperator === 'Is Filled'}
                      >
                        {draftField.options.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        className={styles.select}
                        type="text"
                        value={draftValue}
                        onChange={(e) => setDraftValue(e.target.value)}
                        disabled={draftOperator === 'Is Empty' || draftOperator === 'Is Filled'}
                      />
                    )}
                  </label>
                </div>

                <div className={styles.block}>
                  <span className={styles.blockLabel}>DO</span>
                  <label className={styles.fieldLabel}>
                    Action
                    <select
                      className={styles.select}
                      value={draftAction}
                      onChange={(e) => setDraftAction(e.target.value as Action)}
                    >
                      {SHOW_HIDE_ACTIONS.map((action) => (
                        <option key={action} value={action}>
                          {action}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className={styles.fieldLabel}>
                    Field
                    <select
                      className={styles.select}
                      value={draftTargetField}
                      onChange={(e) => setDraftTargetField(e.target.value)}
                    >
                      {ALL_FIELDS.map((f) => (
                        <option key={f.id} value={f.id}>
                          {f.label}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className={styles.editorActions}>
                  <button type="button" className={styles.cancelButton} onClick={cancelEditor}>
                    Cancel
                  </button>
                  <button type="button" className={styles.saveButton} onClick={saveRule}>
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* ---------- Connected respondent-facing preview ---------- */}
        <section className={styles.previewPane} aria-label="Respondent form preview">
          <h3 className={styles.previewHeading}>Respondent form preview</h3>

          <div className={styles.previewField}>
            {sourceFieldDeleted ? (
              <p className={styles.deletedNotice}>(this field has been deleted)</p>
            ) : (
              <fieldset className={styles.fieldset}>
                <legend className={styles.previewFieldLabel}>{SOURCE_FIELD.label}</legend>
                <div className={styles.radioRow}>
                  {SOURCE_FIELD.options.map((opt) => (
                    <label key={opt} className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="source-answer"
                        value={opt}
                        checked={sourceAnswer === opt}
                        disabled={disabled}
                        onChange={() => setSourceAnswer(opt)}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </fieldset>
            )}
          </div>

          {/* Always mounted; only `display` is toggled, matching the
              confirmed real instant CSS snap (no animation) and giving
              stale-value persistence across hide/re-show for free. */}
          <div
            className={styles.previewField}
            data-testid="target-field-container"
            style={{ display: targetVisible ? 'flex' : 'none' }}
          >
            <label className={styles.previewFieldLabel} htmlFor={targetInputId}>
              {TARGET_FIELD.label}
            </label>
            <input
              id={targetInputId}
              className={styles.textInput}
              type="text"
              value={targetValue}
              disabled={disabled}
              onChange={(e) => setTargetValue(e.target.value)}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
