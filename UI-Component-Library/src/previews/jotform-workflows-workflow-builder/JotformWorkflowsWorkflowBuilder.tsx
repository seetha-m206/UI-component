import { useId, useState } from 'react';
import styles from './JotformWorkflowsWorkflowBuilder.module.css';

export type BuilderMode = 'build' | 'settings' | 'publish';
export type TriggerType = 'form' | 'schedule' | 'integrations' | 'email' | 'webhook';
export type WorkflowElementType =
  | 'Form'
  | 'Email'
  | 'Approval'
  | 'Approve & Sign'
  | 'Task'
  | 'PDF'
  | 'Sign Document'
  | 'Team Approval'
  | 'Webhook';

export type BuilderStage = 'start-point' | 'form-settings' | 'canvas';

interface TriggerOption {
  id: TriggerType;
  label: string;
  description: string;
  badge?: 'NEW';
}

const TRIGGER_OPTIONS: TriggerOption[] = [
  { id: 'form', label: 'Form', description: 'When a form is submitted' },
  { id: 'schedule', label: 'Schedule', description: 'On a recurring schedule' },
  { id: 'integrations', label: 'Integrations', description: 'When a connected app sends data', badge: 'NEW' },
  { id: 'email', label: 'Email', description: 'When a new email is received', badge: 'NEW' },
  { id: 'webhook', label: 'Webhook', description: 'On receiving an HTTP request', badge: 'NEW' },
];

const AVAILABLE_FORMS = ['Coffee Club Signup', 'Customer Feedback Survey', 'Event RSVP'];

const CONDITION_OPTIONS = ['For every submission', 'Once per respondent', 'On a schedule after submission'];

const WORKFLOW_ELEMENTS: WorkflowElementType[] = [
  'Form',
  'Email',
  'Approval',
  'Approve & Sign',
  'Task',
  'PDF',
  'Sign Document',
  'Team Approval',
  'Webhook',
];

const SETTINGS_ITEMS = ['Workflow Settings', 'Permissions', 'Notifications'];
const PUBLISH_ITEMS = ['Quick Share', 'Embed', 'Platforms', 'Assign Form', 'Email'];

function triggerSummaryLabel(trigger: TriggerType, formName: string | null, condition: string | null) {
  const option = TRIGGER_OPTIONS.find((t) => t.id === trigger);
  const base = option?.label ?? 'Trigger';
  if (trigger === 'form' && formName) {
    return `Form — ${formName}${condition ? ` (${condition})` : ''}`;
  }
  return base;
}

export interface JotformWorkflowsWorkflowBuilderProps {
  disabled?: boolean;
  /** Which screen the preview opens on — lets fixtures jump straight to a mid-flow state. */
  initialStage?: BuilderStage;
  /** Pre-selected trigger, used when initialStage is 'form-settings' or 'canvas'. */
  initialTrigger?: TriggerType;
  initialFormName?: string | null;
  initialCondition?: string | null;
  /** Pre-chained Workflow Elements beneath the START POINT node, used when initialStage is 'canvas'. */
  initialSteps?: WorkflowElementType[];
  onModeChange?: (mode: BuilderMode) => void;
  onTriggerConfirm?: (info: { trigger: TriggerType; formName: string | null; condition: string | null }) => void;
  onElementAdd?: (element: WorkflowElementType) => void;
}

/**
 * Reconstructed from JotForm Workflows' Workflow Builder (see
 * Research-Library/04-Component-Library/jotform/jotform-workflows-workflow-builder.md,
 * JF10, 2026-10-05).
 *
 * Confirmed and reproduced faithfully: the BUILD tab opening on a "Start
 * Point" modal that will not proceed past "Next" without a trigger type
 * explicitly selected (visually enforced via a selected-tile highlight);
 * the Form trigger's two-part configuration (pick an existing form, then a
 * "when" condition) before the trigger step can be saved; the vertical
 * flowchart/pipeline canvas with a "START POINT" node and a downward arrow
 * to an "+ Add Element Here" placeholder; and the Workflow Elements picker
 * chaining a new node beneath the trigger each time an element is added,
 * supporting multiple chained steps. The BUILD/SETTINGS/PUBLISH mode-tab
 * bar uses this product's own confirmed teal/dark-green accent, distinct
 * from Form Builder's orange and Sign Builder's green mode bars.
 *
 * Scope notes: only the Form trigger's configuration step is deeply
 * interactive, matching the source record's own "only Form was tested
 * end-to-end" flag — Schedule/Integrations/Email/Webhook proceed directly
 * from the Start Point modal to the canvas with a generic trigger label,
 * since their own configuration screens were not observed live. The
 * Workflow Elements list is a fixed demo set: picking one adds a labeled
 * node to the canvas, but no element's own configuration screen is
 * reconstructed (see README). No network calls are made by this
 * client-side preview.
 */
export function JotformWorkflowsWorkflowBuilder({
  disabled = false,
  initialStage = 'start-point',
  initialTrigger,
  initialFormName = null,
  initialCondition = null,
  initialSteps = [],
  onModeChange,
  onTriggerConfirm,
  onElementAdd,
}: JotformWorkflowsWorkflowBuilderProps) {
  const [mode, setMode] = useState<BuilderMode>('build');
  const [stage, setStage] = useState<BuilderStage>(initialStage);
  const [selectedTrigger, setSelectedTrigger] = useState<TriggerType | null>(initialTrigger ?? null);
  const [selectedForm, setSelectedForm] = useState<string | null>(initialFormName);
  const [selectedCondition, setSelectedCondition] = useState<string | null>(
    initialCondition ?? CONDITION_OPTIONS[0]
  );
  const [steps, setSteps] = useState<WorkflowElementType[]>(initialSteps);
  const [pickerOpen, setPickerOpen] = useState(false);
  const pickerId = useId();

  function selectMode(next: BuilderMode) {
    if (disabled) return;
    setMode(next);
    onModeChange?.(next);
  }

  function pickTrigger(trigger: TriggerType) {
    if (disabled) return;
    setSelectedTrigger(trigger);
  }

  function goNextFromStartPoint() {
    if (disabled || !selectedTrigger) return;
    if (selectedTrigger === 'form') {
      setStage('form-settings');
    } else {
      onTriggerConfirm?.({ trigger: selectedTrigger, formName: null, condition: null });
      setStage('canvas');
    }
  }

  function confirmFormSettings() {
    if (disabled || !selectedForm) return;
    onTriggerConfirm?.({ trigger: 'form', formName: selectedForm, condition: selectedCondition });
    setStage('canvas');
  }

  function openPicker() {
    if (disabled) return;
    setPickerOpen(true);
  }

  function addElement(element: WorkflowElementType) {
    if (disabled) return;
    setSteps((prev) => [...prev, element]);
    onElementAdd?.(element);
    setPickerOpen(false);
  }

  const startPointLabel = selectedTrigger
    ? triggerSummaryLabel(selectedTrigger, selectedForm, selectedCondition)
    : null;

  return (
    <div className={styles.root} data-disabled={disabled}>
      <div className={styles.modeTabBar} role="tablist" aria-label="Workflow Builder mode">
        {(['build', 'settings', 'publish'] as BuilderMode[]).map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={mode === tab}
            className={mode === tab ? `${styles.modeTab} ${styles.modeTabActive}` : styles.modeTab}
            disabled={disabled}
            onClick={() => selectMode(tab)}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {mode === 'build' && (
        <div className={styles.buildBody}>
          {stage === 'start-point' && (
            <div className={styles.modalOverlay} role="dialog" aria-label="Start Point">
              <div className={styles.modalCard}>
                <p className={styles.modalTitle}>Start Point</p>
                <p className={styles.modalSubtitle}>Choose how this workflow should start.</p>
                <ul className={styles.triggerList} role="list">
                  {TRIGGER_OPTIONS.map((option) => (
                    <li key={option.id}>
                      <button
                        type="button"
                        className={
                          selectedTrigger === option.id
                            ? `${styles.triggerTile} ${styles.triggerTileActive}`
                            : styles.triggerTile
                        }
                        aria-pressed={selectedTrigger === option.id}
                        disabled={disabled}
                        onClick={() => pickTrigger(option.id)}
                      >
                        <span className={styles.triggerLabelRow}>
                          <span>{option.label}</span>
                          {option.badge && <span className={styles.badge}>{option.badge}</span>}
                          {selectedTrigger === option.id && (
                            <span className={styles.checkmark} aria-hidden="true">
                              ✓
                            </span>
                          )}
                        </span>
                        <span className={styles.triggerDescription}>{option.description}</span>
                      </button>
                    </li>
                  ))}
                </ul>
                <div className={styles.modalActions}>
                  <button
                    type="button"
                    className={styles.primaryButton}
                    disabled={disabled || !selectedTrigger}
                    onClick={goNextFromStartPoint}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}

          {stage === 'form-settings' && (
            <div className={styles.modalOverlay} role="dialog" aria-label="Form start settings">
              <div className={styles.modalCard}>
                <p className={styles.modalTitle}>Form start settings</p>
                <label className={styles.fieldLabel} htmlFor={`${pickerId}-form`}>
                  Form
                </label>
                <select
                  id={`${pickerId}-form`}
                  className={styles.select}
                  disabled={disabled}
                  value={selectedForm ?? ''}
                  onChange={(event) => setSelectedForm(event.target.value || null)}
                >
                  <option value="">Select a form…</option>
                  {AVAILABLE_FORMS.map((form) => (
                    <option key={form} value={form}>
                      {form}
                    </option>
                  ))}
                </select>

                <label className={styles.fieldLabel} htmlFor={`${pickerId}-condition`}>
                  When
                </label>
                <select
                  id={`${pickerId}-condition`}
                  className={styles.select}
                  disabled={disabled}
                  value={selectedCondition ?? CONDITION_OPTIONS[0]}
                  onChange={(event) => setSelectedCondition(event.target.value)}
                >
                  {CONDITION_OPTIONS.map((condition) => (
                    <option key={condition} value={condition}>
                      {condition}
                    </option>
                  ))}
                </select>

                <div className={styles.modalActions}>
                  <button
                    type="button"
                    className={styles.secondaryButton}
                    disabled={disabled}
                    onClick={() => setStage('start-point')}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className={styles.primaryButton}
                    disabled={disabled || !selectedForm}
                    onClick={confirmFormSettings}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          )}

          {stage === 'canvas' && (
            <div className={styles.canvas} data-testid="workflow-canvas">
              <div className={styles.pipeline}>
                <div className={styles.node} data-testid="start-point-node">
                  <span className={styles.nodeKicker}>START POINT</span>
                  <span className={styles.nodeLabel}>{startPointLabel}</span>
                </div>
                <span className={styles.arrow} aria-hidden="true">
                  ↓
                </span>

                {steps.map((step, index) => (
                  <div key={`${step}-${index}`} className={styles.stepGroup}>
                    <div className={styles.node} data-testid={`step-node-${index}`}>
                      <span className={styles.nodeLabel}>{step}</span>
                    </div>
                    <span className={styles.arrow} aria-hidden="true">
                      ↓
                    </span>
                  </div>
                ))}

                <div className={styles.addElementWrapper}>
                  <button
                    type="button"
                    className={styles.addElementPlaceholder}
                    disabled={disabled}
                    onClick={openPicker}
                    aria-haspopup="listbox"
                    aria-expanded={pickerOpen}
                  >
                    + Add Element Here
                  </button>

                  {pickerOpen && (
                    <div className={styles.elementPicker} role="listbox" aria-label="Workflow Elements">
                      <p className={styles.elementPickerTitle}>Workflow Elements</p>
                      <ul className={styles.elementList}>
                        {WORKFLOW_ELEMENTS.map((element) => (
                          <li key={element}>
                            <button
                              type="button"
                              role="option"
                              aria-selected={false}
                              className={styles.elementOption}
                              disabled={disabled}
                              onClick={() => addElement(element)}
                            >
                              {element}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {mode === 'settings' && (
        <div className={styles.subNavBody}>
          <aside className={styles.subNavRail} aria-label="Settings navigation">
            {SETTINGS_ITEMS.map((item) => (
              <div key={item} className={styles.subNavItem}>
                {item}
              </div>
            ))}
          </aside>
          <div className={styles.subNavContent}>Settings content for the selected item.</div>
        </div>
      )}

      {mode === 'publish' && (
        <div className={styles.subNavBody}>
          <aside className={styles.subNavRail} aria-label="Publish navigation">
            {PUBLISH_ITEMS.map((item) => (
              <div key={item} className={styles.subNavItem}>
                {item}
              </div>
            ))}
          </aside>
          <div className={styles.subNavContent}>Publish content for the selected item.</div>
        </div>
      )}
    </div>
  );
}
