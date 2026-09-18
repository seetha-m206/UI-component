import { useEffect, useId, useRef, useState } from 'react';
import styles from './TypeformAutomationsBuilder.module.css';

export type AutomationStep = 'trigger-picker' | 'canvas';
export type TriggerType = 'form_submission' | 'contact_activity' | 'scheduled';
export type ActionBlockType = 'time_delay' | 'send_email' | 'webhook' | 'send_to_integration';
export type BlockType = 'trigger' | ActionBlockType | 'end';

export interface AutomationBlock {
  id: string;
  type: BlockType;
  /** One-line canned settings summary shown on the block face (e.g. "Wait
   * [1 hour]"). Ignored for 'end' blocks, which only ever show their label. */
  summary: string;
}

export interface TypeformAutomationsBuilderProps {
  /** Which screen the component mounts showing. Defaults to 'trigger-picker'
   * — the trigger-selection step happens once per automation, before the
   * chain canvas, and is modeled as this component's own first internal
   * step (same self-managed-step pattern as new-form-chooser). */
  initialStep?: AutomationStep;
  /** Which trigger card starts "selected" — i.e. which trigger the default
   * skeleton chain is built for when `initialStep` is 'canvas' and
   * `initialBlocks` is not supplied. Defaults to 'form_submission', the
   * only trigger type the source record traced past this point. */
  initialTriggerType?: TriggerType;
  /** Full starting chain (trigger block .. end block), for fixtures that
   * want to show a chain state directly rather than only the freshly-built
   * two-block skeleton. When omitted, a default [trigger, end] skeleton is
   * built from `initialTriggerType`. */
  initialBlocks?: AutomationBlock[];
  /** Starting text in the editable automation-name field. Defaults to
   * "Untitled automation" — the source record doesn't give an exact default
   * string, only that the name is editable next to the Draft badge. */
  automationName?: string;
  /** Starts the automation already "Activated" (badge + disabled Activate
   * button), for fixtures that want to show that end state without a click.
   * Defaults to false (Draft). */
  initialActivated?: boolean;
  /** Disables every interactive control: trigger selection, "+" insertion,
   * block removal, name editing, and Activate. Not documented in the source
   * (no disabled state was observed) — included for harness/fixture
   * consistency with other previews in this repo. */
  disabled?: boolean;
  /** Fired when a trigger card is chosen on the trigger-picker step. */
  onTriggerSelected?: (triggerType: TriggerType) => void;
  /** Fired when "Activate" is clicked. No real activation network call is
   * implemented — see this folder's README. */
  onActivate?: () => void;
  /** Fired when a block is inserted via a connector's "+" menu, with the
   * new block and the connector index it was inserted at (the connector
   * between `blocks[connectorIndex]` and what was previously
   * `blocks[connectorIndex + 1]`). */
  onBlockInserted?: (block: AutomationBlock, connectorIndex: number) => void;
  /** Fired when an inserted action/rule block is removed. Never fired for
   * the trigger or "End automation" blocks, which cannot be removed — see
   * this folder's README for why removal exists at all (a flagged,
   * reasonable addition, not part of the confirmed record). */
  onBlockRemoved?: (blockId: string) => void;
  /** Fired on every keystroke in the automation-name field with the new
   * value. */
  onNameChange?: (name: string) => void;
}

interface TriggerOption {
  id: TriggerType;
  title: string;
  description: string;
  glyph: string;
}

/**
 * Exact three trigger cards from the source record. Descriptions are a
 * reasonable one-line paraphrase — the record confirms each card has "one
 * icon and one-line description" but doesn't capture the exact copy, so
 * these are not claimed as verbatim strings (see README).
 */
const TRIGGER_OPTIONS: TriggerOption[] = [
  {
    id: 'form_submission',
    title: 'Form submission',
    description: 'Runs whenever someone completes your form.',
    glyph: '\u{1F4DD}',
  },
  {
    id: 'contact_activity',
    title: 'Contact activity or updates',
    description: 'Runs when a contact is created or changes in a connected app.',
    glyph: '\u{1F464}',
  },
  {
    id: 'scheduled',
    title: 'Scheduled',
    description: 'Runs on a recurring schedule you set.',
    glyph: '\u{1F550}',
  },
];

interface BlockMeta {
  label: string;
  glyph: string;
}

const BLOCK_META: Record<BlockType, BlockMeta> = {
  trigger: { label: 'Trigger', glyph: '⚡' },
  time_delay: { label: 'Time delay', glyph: '⏱️' },
  send_email: { label: 'Send email', glyph: '✉️' },
  webhook: { label: 'Webhook', glyph: '\u{1F517}' },
  send_to_integration: { label: 'Send to integration', glyph: '\u{1F9E9}' },
  end: { label: 'End automation', glyph: '⏹️' },
};

/** Canned per-type summary text, per the source record's own examples
 * (point 5 of Structure) — exact wording doesn't need to match a config the
 * user entered, since no real configuration form is part of this
 * reconstruction (see README's scoping section). */
const ACTION_SUMMARIES: Record<ActionBlockType, string> = {
  time_delay: 'Wait [1 hour]',
  send_email: 'To: [Respondent] / Subject: [Welcome]',
  webhook: 'POST to configured URL',
  send_to_integration: 'Send to [connected app]',
};

/** Only "Form submission" was traced end-to-end in the source, so it gets
 * the record's own exact summary string. The other two trigger types lead
 * to the same generic chain canvas with generically-worded summaries,
 * per the source's own "What NOT to build" note. */
const TRIGGER_SUMMARIES: Record<TriggerType, string> = {
  form_submission: 'Start automation when [New form] is [Completed]',
  contact_activity: 'Start automation when [Contact] is [Updated]',
  scheduled: 'Start automation on a [Scheduled] time',
};

interface MenuOption {
  id: ActionBlockType;
  label: string;
  group: 'Rule' | 'Actions';
}

/** Exactly 4 real selectable options, grouped exactly as documented — do
 * not add more. */
const MENU_OPTIONS: MenuOption[] = [
  { id: 'time_delay', label: 'Time delay', group: 'Rule' },
  { id: 'send_email', label: 'Send email', group: 'Actions' },
  { id: 'webhook', label: 'Webhook', group: 'Actions' },
  { id: 'send_to_integration', label: 'Send to integration', group: 'Actions' },
];

function buildDefaultBlocks(triggerType: TriggerType): AutomationBlock[] {
  return [
    { id: 'trigger', type: 'trigger', summary: TRIGGER_SUMMARIES[triggerType] },
    { id: 'end', type: 'end', summary: '' },
  ];
}

/**
 * Reconstructed from Typeform's Automations "Trigger → Action Chain"
 * builder (see Research-Library/04-Component-Library/typeform/
 * automations-builder.md). Two self-managed internal steps, same pattern as
 * new-form-chooser: a static trigger-picker, then a chain canvas that opens
 * with a default Trigger → End automation skeleton and grows only
 * through "+"-insertion at a connector, which splices a new block into a
 * single vertical sequence and pushes everything below it down.
 *
 * The canvas is rendered as a plain vertical stack of blocks joined by
 * straight SVG connector lines with an arrowhead — NOT a generic
 * pannable/zoomable node-graph canvas. This is a deliberate scoping
 * decision, not a simplification of a more general model this
 * reconstruction "couldn't get to" — see this folder's README before
 * changing this component's shape.
 */
export function TypeformAutomationsBuilder({
  initialStep = 'trigger-picker',
  initialTriggerType = 'form_submission',
  initialBlocks,
  automationName = 'Untitled automation',
  initialActivated = false,
  disabled = false,
  onTriggerSelected,
  onActivate,
  onBlockInserted,
  onBlockRemoved,
  onNameChange,
}: TypeformAutomationsBuilderProps) {
  const [step, setStep] = useState<AutomationStep>(initialStep);
  const [blocks, setBlocks] = useState<AutomationBlock[]>(
    () => initialBlocks ?? buildDefaultBlocks(initialTriggerType)
  );
  const [name, setName] = useState(automationName);
  const [activated, setActivated] = useState(initialActivated);
  const [openConnectorIndex, setOpenConnectorIndex] = useState<number | null>(null);

  const headingId = useId();
  const menuHeadingId = useId();
  const insertedCounterRef = useRef(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const lastTriggerButtonRef = useRef<HTMLButtonElement | null>(null);

  // Auto-focus the first real menu item when a connector's insert menu
  // opens, same standard-modal/menu-focus-management pattern already used
  // by new-form-chooser and analytics-feature-gate for their own dialogs.
  useEffect(() => {
    if (openConnectorIndex === null) return;
    const firstItem = menuRef.current?.querySelector<HTMLElement>('[role="menuitem"]');
    firstItem?.focus();
  }, [openConnectorIndex]);

  function selectTrigger(type: TriggerType) {
    if (disabled) return;
    onTriggerSelected?.(type);
    setBlocks(buildDefaultBlocks(type));
    setStep('canvas');
  }

  function toggleMenu(connectorIndex: number, button: HTMLButtonElement) {
    if (disabled) return;
    lastTriggerButtonRef.current = button;
    setOpenConnectorIndex((current) => (current === connectorIndex ? null : connectorIndex));
  }

  function closeMenu() {
    setOpenConnectorIndex(null);
  }

  function insertBlock(connectorIndex: number, type: ActionBlockType) {
    if (disabled) return;
    insertedCounterRef.current += 1;
    const newBlock: AutomationBlock = {
      id: `inserted-${type}-${insertedCounterRef.current}`,
      type,
      summary: ACTION_SUMMARIES[type],
    };
    setBlocks((prev) => {
      const next = [...prev];
      next.splice(connectorIndex + 1, 0, newBlock);
      return next;
    });
    onBlockInserted?.(newBlock, connectorIndex);
    setOpenConnectorIndex(null);
    lastTriggerButtonRef.current?.focus();
  }

  function removeBlock(blockId: string) {
    if (disabled) return;
    setBlocks((prev) => prev.filter((block) => block.id !== blockId));
    onBlockRemoved?.(blockId);
  }

  function handleNameChange(value: string) {
    if (disabled) return;
    setName(value);
    onNameChange?.(value);
  }

  function handleActivate() {
    if (disabled || activated) return;
    setActivated(true);
    onActivate?.();
  }

  function handleMenuKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeMenu();
      lastTriggerButtonRef.current?.focus();
      return;
    }
    const isNext = event.key === 'ArrowDown';
    const isPrev = event.key === 'ArrowUp';
    if (!isNext && !isPrev) return;
    event.preventDefault();
    const items = Array.from(
      menuRef.current?.querySelectorAll<HTMLElement>('[role="menuitem"]') ?? []
    );
    if (items.length === 0) return;
    const currentIndex = items.indexOf(document.activeElement as HTMLElement);
    // Clamped, not wrapping — not observed in the source (this whole
    // menu's keyboard behavior is unconfirmed); a deliberate accessibility
    // addition, same precedent as new-form-chooser's form-type roving focus.
    const nextIndex = Math.min(
      items.length - 1,
      Math.max(0, currentIndex + (isNext ? 1 : -1))
    );
    items[nextIndex]?.focus();
  }

  return (
    <div className={styles.root}>
      {step === 'trigger-picker' && (
        <div className={styles.triggerPicker} aria-labelledby={headingId}>
          <h2 id={headingId} className={styles.triggerHeading}>
            What will trigger this automation?
          </h2>
          <div className={styles.triggerGrid}>
            {TRIGGER_OPTIONS.map((option) => (
              <button
                key={option.id}
                type="button"
                className={styles.triggerCard}
                disabled={disabled}
                onClick={() => selectTrigger(option.id)}
              >
                <span className={styles.triggerIcon} aria-hidden="true">
                  {option.glyph}
                </span>
                <span className={styles.triggerTitle}>{option.title}</span>
                <span className={styles.triggerDescription}>{option.description}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 'canvas' && (
        <div className={styles.canvas}>
          <div className={styles.topBar}>
            <div className={styles.nameGroup}>
              <label className={styles.visuallyHidden} htmlFor={`${headingId}-name`}>
                Automation name
              </label>
              <input
                id={`${headingId}-name`}
                type="text"
                className={styles.nameInput}
                value={name}
                disabled={disabled}
                onChange={(event) => handleNameChange(event.currentTarget.value)}
              />
              <span
                className={
                  activated
                    ? `${styles.statusBadge} ${styles.statusBadgeActivated}`
                    : `${styles.statusBadge} ${styles.statusBadgeDraft}`
                }
              >
                {activated ? 'Activated' : 'Draft'}
              </span>
            </div>
            <button
              type="button"
              className={styles.activateButton}
              onClick={handleActivate}
              disabled={disabled || activated}
            >
              {activated ? 'Activated' : 'Activate'}
            </button>
          </div>

          <div className={styles.chain}>
            {blocks.map((block, index) => {
              const meta = BLOCK_META[block.type];
              const isRemovable = block.type !== 'trigger' && block.type !== 'end';
              const isLast = index === blocks.length - 1;
              return (
                <div key={block.id} className={styles.chainItem}>
                  <div className={styles.block} data-block-type={block.type}>
                    <span className={styles.blockIcon} aria-hidden="true">
                      {meta.glyph}
                    </span>
                    <div className={styles.blockBody}>
                      <span className={styles.blockLabel}>{meta.label}</span>
                      {block.type !== 'end' && (
                        <span className={styles.blockSummary}>{block.summary}</span>
                      )}
                    </div>
                    {isRemovable && (
                      <button
                        type="button"
                        className={styles.removeButton}
                        aria-label={`Remove ${meta.label} step`}
                        disabled={disabled}
                        onClick={() => removeBlock(block.id)}
                      >
                        <RemoveIcon />
                      </button>
                    )}
                  </div>

                  {!isLast && (
                    <div className={styles.connector}>
                      <svg
                        className={styles.connectorLine}
                        viewBox="0 0 24 56"
                        aria-hidden="true"
                      >
                        {/* Solid, straight, 1px-equivalent vertical connector
                            line with a downward arrowhead — the real
                            editor's confirmed treatment. The landing page's
                            marketing art shows dotted lines instead; that is
                            NOT what the actual editor renders, and is
                            deliberately not reproduced here (see README). */}
                        <line x1="12" y1="0" x2="12" y2="42" className={styles.connectorStroke} />
                        <path
                          d="M5 36 L12 46 L19 36"
                          className={styles.connectorStroke}
                          fill="none"
                        />
                      </svg>
                      <button
                        type="button"
                        className={styles.insertButton}
                        aria-haspopup="menu"
                        aria-expanded={openConnectorIndex === index}
                        aria-label={`Insert a step after ${meta.label}`}
                        disabled={disabled}
                        onClick={(event) => toggleMenu(index, event.currentTarget)}
                      >
                        <PlusIcon />
                      </button>

                      {openConnectorIndex === index && (
                        <div
                          ref={menuRef}
                          className={styles.menu}
                          role="menu"
                          aria-labelledby={menuHeadingId}
                          onKeyDown={handleMenuKeyDown}
                        >
                          <span id={menuHeadingId} className={styles.visuallyHidden}>
                            Insert a step
                          </span>
                          <div className={styles.menuGroup} role="group" aria-label="Rule">
                            <span className={styles.menuGroupLabel} aria-hidden="true">
                              Rule
                            </span>
                            {MENU_OPTIONS.filter((option) => option.group === 'Rule').map(
                              (option) => (
                                <button
                                  key={option.id}
                                  type="button"
                                  role="menuitem"
                                  className={styles.menuItem}
                                  onClick={() => insertBlock(index, option.id)}
                                >
                                  {option.label}
                                </button>
                              )
                            )}
                          </div>
                          <div className={styles.menuGroup} role="group" aria-label="Actions">
                            <span className={styles.menuGroupLabel} aria-hidden="true">
                              Actions
                            </span>
                            {MENU_OPTIONS.filter((option) => option.group === 'Actions').map(
                              (option) => (
                                <button
                                  key={option.id}
                                  type="button"
                                  role="menuitem"
                                  className={styles.menuItem}
                                  onClick={() => insertBlock(index, option.id)}
                                >
                                  {option.label}
                                </button>
                              )
                            )}
                          </div>
                          <div className={styles.menuFooter}>
                            {/* Non-interactive by design — the source
                                record documents this as a link-styled label
                                at the bottom of the menu, not a traced
                                destination. See README. */}
                            <span className={styles.requestFeaturesLink}>Request features</span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 16 16" className={styles.smallIcon} aria-hidden="true">
      <path
        d="M8 2v12M2 8h12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function RemoveIcon() {
  return (
    <svg viewBox="0 0 16 16" className={styles.smallIcon} aria-hidden="true">
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
