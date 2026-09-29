import { useEffect, useId, useMemo, useRef, useState } from 'react';
import styles from './DocumentCanvasEditorShell.module.css';

export type BlockKind = 'prose' | 'card' | 'placeholder' | 'pagebreak';

export interface ProseBlock {
  id: string;
  kind: 'prose';
  text: string;
}

export interface CardBlock {
  id: string;
  kind: 'card';
  questionType: string;
  title: string;
  helpText: string;
}

export interface PlaceholderBlock {
  id: string;
  kind: 'placeholder';
  label: string;
}

export interface PageBreakBlock {
  id: string;
  kind: 'pagebreak';
}

export type DocumentBlock = ProseBlock | CardBlock | PlaceholderBlock | PageBreakBlock;

type MenuGroup = 'Questions' | 'Content' | 'Quick Questions' | 'Quick Integrations' | 'Survey Questions';

interface SlashMenuItem {
  id: string;
  label: string;
  group: MenuGroup;
  /** Extra search terms beyond the label itself — used to reproduce the
   * source record's confirmed fuzzy/keyword match (`/rat` matching both
   * "Rating" and "Likert (matrix)"). "Likert (matrix)" has no literal "rat"
   * substring, so it gets an explicit "rating" synonym keyword (Likert
   * scales genuinely ARE a rating-question family) — this is how that
   * exact finding is reproduced here, not a literal copy of unknown real
   * search-index internals. */
  keywords?: string[];
}

// A representative SUBSET of the source record's much larger real
// catalogue (26 Questions + 11 Content + 5 Quick Questions + 4 Quick
// Integrations + 3 Survey Questions types) — grouped in the record's own
// section order and names. Not exhaustive by design; large enough to
// demonstrate real grouping + fuzzy search, not a claim that these are the
// only real types.
const SLASH_MENU_ITEMS: SlashMenuItem[] = [
  { id: 'q-text', label: 'Text', group: 'Questions' },
  { id: 'q-yes-no', label: 'Yes/No', group: 'Questions' },
  { id: 'q-rating', label: 'Rating', group: 'Questions', keywords: ['stars'] },
  { id: 'q-multiple-choice', label: 'Multiple Choice', group: 'Questions' },
  { id: 'q-email', label: 'Email', group: 'Questions' },
  { id: 'q-number', label: 'Number', group: 'Questions' },
  { id: 'q-date', label: 'Date', group: 'Questions' },
  { id: 'q-dropdown', label: 'Dropdown', group: 'Questions' },
  { id: 'c-image', label: 'Image', group: 'Content' },
  { id: 'c-video', label: 'Video', group: 'Content' },
  { id: 'c-page-break', label: 'Page break', group: 'Content' },
  { id: 'c-section-break', label: 'Section break', group: 'Content' },
  { id: 'c-heading-1', label: 'H1', group: 'Content' },
  { id: 'c-heading-2', label: 'H2', group: 'Content' },
  { id: 'c-embed', label: 'Embed', group: 'Content' },
  { id: 'c-html', label: 'HTML', group: 'Content' },
  { id: 'qq-name', label: 'Name', group: 'Quick Questions' },
  { id: 'qq-text-long', label: 'Text (Long)', group: 'Quick Questions' },
  { id: 'qq-terms', label: 'Terms & Conditions', group: 'Quick Questions' },
  { id: 'qq-radio', label: 'Radio Buttons', group: 'Quick Questions' },
  { id: 'qq-checkbox', label: 'Checkbox', group: 'Quick Questions' },
  { id: 'qi-papersign', label: 'Papersign', group: 'Quick Integrations' },
  { id: 'qi-sheets', label: 'Google Sheets', group: 'Quick Integrations' },
  { id: 'qi-airtable', label: 'Airtable', group: 'Quick Integrations' },
  { id: 'sq-likert-scale', label: 'Likert scale', group: 'Survey Questions' },
  { id: 'sq-nps', label: 'NPS', group: 'Survey Questions' },
  { id: 'sq-likert-matrix', label: 'Likert (matrix)', group: 'Survey Questions', keywords: ['rating'] },
];

/** Smaller subset offered by the "+" gutter button — confirmed in the
 * source to expose exactly these 2 one-click defaults ("Add questions"
 * inserts a default Text question with no type picker; "Add break" inserts
 * a Page break with no Section-break choice), vs. the slash menu's full
 * catalogue. Modeled here as a single persistent toolbar button rather than
 * a per-line hover gutter — a scoping simplification, see this preview's
 * evidence string. */
const GUTTER_ITEMS = [
  { id: 'gutter-add-questions', label: 'Add questions' },
  { id: 'gutter-add-break', label: 'Add break' },
] as const;

function matchesQuery(item: SlashMenuItem, query: string): boolean {
  if (!query) return true;
  const q = query.toLowerCase();
  if (item.label.toLowerCase().includes(q)) return true;
  if (item.keywords?.some((keyword) => keyword.toLowerCase().includes(q))) return true;
  return isFuzzySubsequence(q, item.label.toLowerCase());
}

/** Loose "characters appear in order, not necessarily adjacent" fallback —
 * a reasonable general-purpose fuzzy match, layered under the more specific
 * substring/keyword checks above which are what reproduce the record's own
 * captured example. */
function isFuzzySubsequence(query: string, label: string): boolean {
  let i = 0;
  for (const char of label) {
    if (char === query[i]) i += 1;
    if (i === query.length) return true;
  }
  return false;
}

let idCounter = 0;
function newId(prefix: string): string {
  idCounter += 1;
  return `${prefix}-${idCounter}`;
}

function buildBlockFromMenuItem(item: SlashMenuItem): DocumentBlock {
  if (item.id === 'c-page-break' || item.id === 'c-section-break') {
    return { id: newId('pagebreak'), kind: 'pagebreak' };
  }
  if (item.group === 'Content' || item.group === 'Quick Integrations') {
    return { id: newId('placeholder'), kind: 'placeholder', label: item.label };
  }
  return { id: newId('card'), kind: 'card', questionType: item.label, title: '', helpText: '' };
}

function defaultBlocks(): DocumentBlock[] {
  return [
    { id: newId('prose'), kind: 'prose', text: 'Welcome! A few quick questions before we start.' },
    { id: newId('prose'), kind: 'prose', text: '' },
  ];
}

export interface DocumentCanvasEditorShellProps {
  initialBlocks?: DocumentBlock[];
  disabled?: boolean;
  onBlocksChange?: (blocks: DocumentBlock[]) => void;
}

/**
 * Reconstructed from Paperform's Document Canvas / Editor Shell (see
 * Research-Library/04-Component-Library/paperform/document-canvas-editor-shell.md),
 * read together with [[respondent-runtime-guided-vs-standard]]'s 2026-09-23
 * correction to this record's own original Network finding.
 *
 * NOT a literal Draft.js reimplementation — per the task scope, this uses a
 * small custom block model (`DocumentBlock[]`) with plain controlled
 * `<input>`s standing in for Draft.js's nested ContentStates, since the
 * point being reconstructed is the documented BEHAVIOR, not the library.
 *
 * CORRECTED save-timing model (do not use the original, now-superseded
 * claim): the record originally described the builder's autosave as "a
 * debounce restarted by each keystroke, ~13-14s after the last edit."
 * [[respondent-runtime-guided-vs-standard]]'s retest found it is actually a
 * steady ~15-second interval that fires only when state is dirty — AND,
 * more importantly, that a purely STRUCTURAL edit (inserting/reordering/
 * deleting a card, inserting a break) does NOT arm that save cycle by
 * itself. In at least one confirmed case a page break inserted this way
 * never reached the server at all — real, concrete data loss, not just a
 * timing curiosity. This reconstruction models that corrected
 * understanding directly: `markStructuralChange()` (fired by insert/
 * reorder/delete) leaves the visible save-status label completely
 * untouched, while `markProseEdit()` (fired by typing in prose OR in a
 * card's title/help text) is what actually drives the
 * "SAVING DRAFT…" -> "SAVED DRAFT" cycle — reproducing the confirmed bug
 * that the label can read "SAVED DRAFT" while a structural change sits
 * genuinely unpersisted. This is deliberately NOT fixed, per this project's
 * practice of reproducing confirmed functional/data-integrity bugs rather
 * than silently correcting them.
 *
 * Drag-and-drop: the source confirms native HTML5 DnD (not a pointer-
 * tracked library), and that a synthetic pointer-only drag does not
 * register — the same automation constraint already documented for Zoho
 * Forms' entries-kanban-view. Following that preview's precedent, this
 * reconstruction provides accessible "Move up"/"Move down" controls on
 * every question card as the primary, tested reorder mechanism, plus a
 * best-effort native `draggable`/`dragstart`/`dragover`/`drop` wire-up
 * users can also try with a real mouse drag (not exercised by this folder's
 * automated tests, consistent with the native-DnD testing caution both
 * source records raise).
 *
 * Scope notes (see this preview's evidence string for the short version):
 * the left-rail document outline, the required-field asterisk indicator,
 * and the specific "Down-arrow-into-a-card loses keystrokes" navigation bug
 * are NOT reconstructed here — out of scope for this pass. The
 * Backspace-triggered merge-into-card confirmation is reproduced via an
 * explicit "Remove" button on the card instead of literal
 * cursor-position/Backspace detection (which a simplified input-based block
 * model can't reliably distinguish) — the confirm dialog itself, its exact
 * copy, and its "Cancel leaves one extra empty block" residue bug are all
 * reproduced faithfully.
 */
export function DocumentCanvasEditorShell({
  initialBlocks,
  disabled = false,
  onBlocksChange,
}: DocumentCanvasEditorShellProps) {
  const [blocks, setBlocksState] = useState<DocumentBlock[]>(() => initialBlocks ?? defaultBlocks());
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');
  // CONFIRMED (corrected understanding): true whenever a structural change
  // has happened that the visible label does NOT yet reflect. Exposed only
  // as a data attribute (not a visible tell) so this preview's tests can
  // verify the real internal state without contradicting the record's
  // finding that the real product gives the user no such hint.
  const [structuralChangePending, setStructuralChangePending] = useState(false);
  const [slashMenu, setSlashMenu] = useState<{ blockId: string; query: string } | null>(null);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [gutterMenuOpen, setGutterMenuOpen] = useState(false);
  const [activeDrawerBlockId, setActiveDrawerBlockId] = useState<string | null>(null);
  const [pendingDeleteBlockId, setPendingDeleteBlockId] = useState<string | null>(null);

  const slashMenuListId = useId();
  const confirmTitleId = useId();
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    };
  }, []);

  function setBlocks(updater: (prev: DocumentBlock[]) => DocumentBlock[]) {
    setBlocksState((prev) => {
      const next = updater(prev);
      onBlocksChange?.(next);
      return next;
    });
  }

  // Shortened demo timing, NOT the confirmed real ~15s interval — see the
  // doc comment above and this preview's evidence string for the real
  // number. A short, real (non-fake) timer keeps this preview's own tests
  // simple via `waitFor`, avoiding the fake-timers/hung-test pitfall this
  // project has hit before.
  const SAVE_DELAY_MS = 400;

  function markProseEdit() {
    if (disabled) return;
    setSaveStatus('saving');
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    saveTimeoutRef.current = setTimeout(() => {
      setSaveStatus('saved');
      // A real text edit's debounced save is what actually captures a
      // pending structural change too — confirmed by the corrected record.
      setStructuralChangePending(false);
    }, SAVE_DELAY_MS);
  }

  function markStructuralChange() {
    if (disabled) return;
    // Deliberately does NOT touch saveStatus — reproducing the confirmed
    // bug that a structural edit alone leaves the label exactly as it was.
    setStructuralChangePending(true);
  }

  const filteredItems = useMemo(() => {
    if (!slashMenu) return [];
    return SLASH_MENU_ITEMS.filter((item) => matchesQuery(item, slashMenu.query));
  }, [slashMenu]);

  function openSlashMenu(blockId: string) {
    setSlashMenu({ blockId, query: '' });
    setHighlightedIndex(0);
  }

  function closeSlashMenuLeavingLiteralText(blockId: string, query: string) {
    // CONFIRMED bug, reproduced deliberately: Escape closes the menu with
    // nothing inserted, but the typed "/query" is left behind as literal
    // prose rather than being cleared.
    setBlocks((prev) =>
      prev.map((block) =>
        block.id === blockId && block.kind === 'prose' ? { ...block, text: `/${query}` } : block
      )
    );
    setSlashMenu(null);
  }

  function insertFromSlashMenu(blockId: string, item: SlashMenuItem) {
    const newBlock = buildBlockFromMenuItem(item);
    setBlocks((prev) => {
      const index = prev.findIndex((block) => block.id === blockId);
      if (index === -1) return prev;
      const next = [...prev];
      next.splice(index, 1, newBlock);
      return next;
    });
    setSlashMenu(null);
    markStructuralChange();
    if (newBlock.kind === 'card') {
      // Confirmed: the config drawer opens automatically on the right for
      // a slash-menu insertion specifically.
      setActiveDrawerBlockId(newBlock.id);
    }
  }

  function handleProseChange(block: ProseBlock, nextValue: string) {
    if (disabled) return;
    if (block.text === '' && nextValue === '/') {
      // Confirmed rule: the slash menu triggers ONLY on a genuinely empty
      // line. The literal "/" is intercepted here (not written into the
      // block) rather than shown, then replaced with the block, so no
      // leftover "/" needs to be stripped on selection.
      openSlashMenu(block.id);
      return;
    }
    setBlocks((prev) =>
      prev.map((b) => (b.id === block.id && b.kind === 'prose' ? { ...b, text: nextValue } : b))
    );
    markProseEdit();
  }

  function handleSlashSearchKeyDown(event: React.KeyboardEvent<HTMLInputElement>, blockId: string) {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeSlashMenuLeavingLiteralText(blockId, slashMenu?.query ?? '');
      return;
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setHighlightedIndex((i) => Math.min(i + 1, Math.max(filteredItems.length - 1, 0)));
      return;
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setHighlightedIndex((i) => Math.max(i - 1, 0));
      return;
    }
    if (event.key === 'Enter') {
      event.preventDefault();
      const chosen = filteredItems[highlightedIndex];
      if (chosen) insertFromSlashMenu(blockId, chosen);
    }
  }

  function updateCardField(blockId: string, field: 'title' | 'helpText', value: string) {
    if (disabled) return;
    setBlocks((prev) =>
      prev.map((b) => (b.id === blockId && b.kind === 'card' ? { ...b, [field]: value } : b))
    );
    // Editing a card's title/help text is a real text edit (the source's
    // own "Draft inside Draft" nested editors) — it correctly arms the
    // save cycle, unlike inserting/reordering/deleting the card itself.
    markProseEdit();
  }

  function moveBlock(blockId: string, direction: -1 | 1) {
    if (disabled) return;
    setBlocks((prev) => {
      const index = prev.findIndex((b) => b.id === blockId);
      const targetIndex = index + direction;
      if (index === -1 || targetIndex < 0 || targetIndex >= prev.length) return prev;
      const next = [...prev];
      const [moved] = next.splice(index, 1);
      next.splice(targetIndex, 0, moved);
      return next;
    });
    markStructuralChange();
  }

  function handleNativeDragStart(event: React.DragEvent, blockId: string) {
    if (disabled) return;
    event.dataTransfer.setData('text/plain', blockId);
    event.dataTransfer.effectAllowed = 'move';
  }

  function handleNativeDragOver(event: React.DragEvent) {
    event.preventDefault();
  }

  function handleNativeDrop(event: React.DragEvent, targetBlockId: string) {
    event.preventDefault();
    if (disabled) return;
    const draggedId = event.dataTransfer.getData('text/plain');
    if (!draggedId || draggedId === targetBlockId) return;
    setBlocks((prev) => {
      const from = prev.findIndex((b) => b.id === draggedId);
      const to = prev.findIndex((b) => b.id === targetBlockId);
      if (from === -1 || to === -1) return prev;
      const next = [...prev];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      return next;
    });
    markStructuralChange();
  }

  function requestDeleteCard(blockId: string) {
    if (disabled) return;
    setPendingDeleteBlockId(blockId);
  }

  function confirmDelete() {
    if (!pendingDeleteBlockId) return;
    setBlocks((prev) => prev.filter((b) => b.id !== pendingDeleteBlockId));
    if (activeDrawerBlockId === pendingDeleteBlockId) setActiveDrawerBlockId(null);
    setPendingDeleteBlockId(null);
    markStructuralChange();
  }

  function cancelDelete() {
    // CONFIRMED minor residue bug, reproduced deliberately: Cancel restores
    // the document fully, plus one extra empty block.
    setBlocks((prev) => {
      const index = prev.findIndex((b) => b.id === pendingDeleteBlockId);
      if (index === -1) return prev;
      const next = [...prev];
      next.splice(index + 1, 0, { id: newId('prose'), kind: 'prose', text: '' });
      return next;
    });
    setPendingDeleteBlockId(null);
  }

  function handleGutterAddQuestions() {
    if (disabled) return;
    setBlocks((prev) => [
      ...prev,
      { id: newId('card'), kind: 'card', questionType: 'Text', title: '', helpText: '' },
    ]);
    markStructuralChange();
    setGutterMenuOpen(false);
  }

  function handleGutterAddBreak() {
    if (disabled) return;
    setBlocks((prev) => [...prev, { id: newId('pagebreak'), kind: 'pagebreak' }]);
    markStructuralChange();
    setGutterMenuOpen(false);
  }

  const saveLabel =
    saveStatus === 'idle' ? 'SAVE DRAFT' : saveStatus === 'saving' ? 'SAVING DRAFT…' : 'SAVED DRAFT';

  const activeDrawerBlock = blocks.find(
    (b): b is CardBlock => b.id === activeDrawerBlockId && b.kind === 'card'
  );

  return (
    <div className={styles.root}>
      <div className={styles.toolbar}>
        <div className={styles.gutterWrap}>
          <button
            type="button"
            className={styles.gutterButton}
            aria-haspopup="menu"
            aria-expanded={gutterMenuOpen}
            aria-label="Quick insert"
            disabled={disabled}
            onClick={() => setGutterMenuOpen((open) => !open)}
          >
            +
          </button>
          {gutterMenuOpen && (
            <div className={styles.gutterMenu} role="menu" aria-label="Quick insert">
              {GUTTER_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  role="menuitem"
                  className={styles.gutterMenuItem}
                  onClick={item.id === 'gutter-add-questions' ? handleGutterAddQuestions : handleGutterAddBreak}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
        <span
          className={styles.saveStatus}
          data-save-status={saveStatus}
          data-structural-change-pending={structuralChangePending}
        >
          {saveLabel}
        </span>
      </div>

      <div className={styles.stage}>
        <div className={styles.canvas} data-testid="document-canvas">
          {blocks.map((block, index) => {
            if (block.kind === 'prose') {
              if (slashMenu?.blockId === block.id) {
                return (
                  <div key={block.id} className={styles.slashSearchRow}>
                    <span className={styles.slashPrefix} aria-hidden="true">
                      /
                    </span>
                    <input
                      // eslint-disable-next-line jsx-a11y/no-autofocus
                      autoFocus
                      type="text"
                      className={styles.slashSearchInput}
                      placeholder={slashMenu.query === '' ? 'Type to search…' : undefined}
                      value={slashMenu.query}
                      disabled={disabled}
                      role="combobox"
                      aria-expanded="true"
                      aria-controls={slashMenuListId}
                      aria-label="Search for a block type"
                      onChange={(event) => {
                        setSlashMenu({ blockId: block.id, query: event.currentTarget.value });
                        setHighlightedIndex(0);
                      }}
                      onKeyDown={(event) => handleSlashSearchKeyDown(event, block.id)}
                    />
                    <ul id={slashMenuListId} className={styles.slashMenu} role="listbox" aria-label="Insert a block">
                      {filteredItems.length === 0 && (
                        <li className={styles.slashMenuEmpty}>No results</li>
                      )}
                      {filteredItems.map((item, itemIndex) => {
                        const showGroupHeader =
                          itemIndex === 0 || filteredItems[itemIndex - 1].group !== item.group;
                        return (
                          <li key={item.id}>
                            {showGroupHeader && (
                              <div className={styles.slashMenuGroupLabel}>{item.group}</div>
                            )}
                            <button
                              type="button"
                              role="option"
                              aria-selected={itemIndex === highlightedIndex}
                              className={
                                itemIndex === highlightedIndex
                                  ? `${styles.slashMenuItem} ${styles.slashMenuItemHighlighted}`
                                  : styles.slashMenuItem
                              }
                              onMouseEnter={() => setHighlightedIndex(itemIndex)}
                              onClick={() => insertFromSlashMenu(block.id, item)}
                            >
                              {item.label}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              }
              return (
                <input
                  key={block.id}
                  type="text"
                  className={styles.proseInput}
                  placeholder="Type '/' for commands…"
                  value={block.text}
                  disabled={disabled}
                  aria-label="Document text"
                  data-block-type="prose"
                  onChange={(event) => handleProseChange(block, event.currentTarget.value)}
                />
              );
            }

            if (block.kind === 'card') {
              return (
                <QuestionCard
                  key={block.id}
                  block={block}
                  index={index}
                  total={blocks.length}
                  disabled={disabled}
                  onTitleChange={(value) => updateCardField(block.id, 'title', value)}
                  onHelpChange={(value) => updateCardField(block.id, 'helpText', value)}
                  onMoveUp={() => moveBlock(block.id, -1)}
                  onMoveDown={() => moveBlock(block.id, 1)}
                  onRequestDelete={() => requestDeleteCard(block.id)}
                  onDragStart={(event) => handleNativeDragStart(event, block.id)}
                  onDragOver={handleNativeDragOver}
                  onDrop={(event) => handleNativeDrop(event, block.id)}
                />
              );
            }

            if (block.kind === 'placeholder') {
              return (
                <div key={block.id} className={styles.placeholderBlock} data-block-type="placeholder">
                  [{block.label} — not reconstructed in this preview]
                </div>
              );
            }

            // pagebreak — page number derived from how many page breaks
            // have occurred up to and including this one, computed without
            // a mutable render-scoped counter (each page break "starts" the
            // next page, so the first one reads "PAGE 2").
            const pageNumber =
              blocks.slice(0, index + 1).filter((b) => b.kind === 'pagebreak').length + 1;
            return (
              <div
                key={block.id}
                className={styles.pageBreak}
                data-block-type="pagebreak"
                role="separator"
                aria-label={`Page break — Page ${pageNumber}`}
              >
                <span className={styles.pageBreakLabel}>PAGE {pageNumber}</span>
              </div>
            );
          })}
        </div>

        {activeDrawerBlock && (
          <aside
            className={styles.configDrawer}
            aria-label={`Configuring ${activeDrawerBlock.title || activeDrawerBlock.questionType}`}
          >
            <div className={styles.configDrawerHeader}>
              <span className={styles.configDrawerTitle}>
                Configuring &ldquo;{activeDrawerBlock.title || 'Untitled question'}&rdquo;
              </span>
              <button
                type="button"
                className={styles.configDrawerClose}
                aria-label="Close configuration panel"
                onClick={() => setActiveDrawerBlockId(null)}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <p className={styles.configDrawerNote}>Question type: {activeDrawerBlock.questionType}</p>
          </aside>
        )}
      </div>

      {pendingDeleteBlockId && (
        <div className={styles.overlay}>
          <div
            className={styles.confirmModal}
            role="alertdialog"
            aria-modal="true"
            aria-labelledby={confirmTitleId}
          >
            <h2 id={confirmTitleId} className={styles.confirmTitle}>
              Are you sure you want to remove these questions?
            </h2>
            <div className={styles.confirmActions}>
              <button type="button" className={styles.secondaryBtn} onClick={cancelDelete}>
                Cancel
              </button>
              <button type="button" className={styles.dangerBtn} onClick={confirmDelete}>
                Ok
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function QuestionCard({
  block,
  index,
  total,
  disabled,
  onTitleChange,
  onHelpChange,
  onMoveUp,
  onMoveDown,
  onRequestDelete,
  onDragStart,
  onDragOver,
  onDrop,
}: {
  block: CardBlock;
  index: number;
  total: number;
  disabled: boolean;
  onTitleChange: (value: string) => void;
  onHelpChange: (value: string) => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onRequestDelete: () => void;
  onDragStart: (event: React.DragEvent) => void;
  onDragOver: (event: React.DragEvent) => void;
  onDrop: (event: React.DragEvent) => void;
}) {
  return (
    <figure
      className={styles.card}
      data-block-type="card"
      // Genuinely non-editable at the document/block level — matches the
      // source's confirmed contenteditable="false" atomic block, even
      // though its own title/help fields below ARE editable (the source's
      // "Draft inside Draft" nested-editor model).
      contentEditable={false}
      draggable={!disabled}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <div className={styles.cardToolbar}>
        <span className={styles.dragHandle} aria-hidden="true" title="Drag to reorder">
          ⠿
        </span>
        <span className={styles.cardTypeLabel}>{block.questionType}</span>
        <span className={styles.cardReorderButtons}>
          <button
            type="button"
            className={styles.cardIconButton}
            aria-label={`Move ${block.questionType} question up`}
            disabled={disabled || index === 0}
            onClick={onMoveUp}
          >
            ↑
          </button>
          <button
            type="button"
            className={styles.cardIconButton}
            aria-label={`Move ${block.questionType} question down`}
            disabled={disabled || index === total - 1}
            onClick={onMoveDown}
          >
            ↓
          </button>
        </span>
        <button
          type="button"
          className={styles.cardDeleteButton}
          aria-label={`Remove ${block.questionType} question`}
          disabled={disabled}
          onClick={onRequestDelete}
        >
          ×
        </button>
      </div>
      <input
        type="text"
        className={styles.cardTitleInput}
        placeholder="What is your question?"
        value={block.title}
        disabled={disabled}
        aria-label={`${block.questionType} question title`}
        onChange={(event) => onTitleChange(event.currentTarget.value)}
      />
      <input
        type="text"
        className={styles.cardHelpInput}
        placeholder="Add some help text"
        value={block.helpText}
        disabled={disabled}
        aria-label={`${block.questionType} question help text`}
        onChange={(event) => onHelpChange(event.currentTarget.value)}
      />
    </figure>
  );
}
