import type { PreviewFixture, PropSchemaField } from '../types';
import type { ThemeDesignEditorProps, ThemeValue } from './ThemeDesignEditor';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'value',
    type: '{ fontFamily: FontId; fontColor: string; fontSize: FontSize; backgroundColor: string }',
    required: true,
    description:
      'Current DRAFT theme. Mirrors the source: every property change is applied live to the shared canvas the instant it is made, with no separate "apply" step.',
  },
  {
    name: 'onChange',
    type: '(value: ThemeValue) => void',
    required: false,
    description: 'Called with the updated draft theme whenever a control changes.',
  },
  {
    name: 'onSave',
    type: '(value: ThemeValue) => void',
    required: false,
    description:
      'Called when "Save changes" is clicked (or confirmed from the exit modal). The source fires a real network write here; this reconstruction makes no network calls — it only clears the pending dirty-state flag locally, matching the confirmed client-side-until-Save behavior.',
  },
  {
    name: 'onClose',
    type: '() => void',
    required: false,
    description:
      'Called once the popover has actually closed (plain close, discard, or save-then-close).',
  },
  {
    name: 'initialSavedValue',
    type: 'ThemeValue',
    required: false,
    description:
      'The last-SAVED baseline used to compute dirty state and as the Revert target. Defaults to `value` at mount (a clean state) if omitted — set it differently from `value` to start a fixture already dirty.',
  },
  {
    name: 'initialTab',
    type: "'logo' | 'font' | 'buttons' | 'background'",
    required: false,
    description: 'Which tab the popover opens on. Defaults to "font".',
  },
  {
    name: 'initialView',
    type: "'editor' | 'confirmClose' | 'closed'",
    required: false,
    description:
      'Lets a fixture start directly on the exit-confirmation sub-view or the fully-closed placeholder, without requiring a click first. Defaults to "editor".',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description:
      'Disables every control (including Save/Revert). Not an observed state in the source record ("Disabled/loading/error states: not observed") — included as a flagged assumption only. Defaults to false.',
  },
];

const DEFAULT_THEME: ThemeValue = {
  fontFamily: 'system',
  fontColor: '#39404e',
  fontSize: 'md',
  backgroundColor: '#ffffff',
};

const GEORGIA_THEME: ThemeValue = {
  ...DEFAULT_THEME,
  fontFamily: 'georgia',
};

const BLUE_BG_THEME: ThemeValue = {
  ...DEFAULT_THEME,
  backgroundColor: '#e7eaf3',
};

const DIRTY_THEME: ThemeValue = {
  fontFamily: 'arial',
  fontColor: '#dc2626',
  fontSize: 'lg',
  backgroundColor: '#fbe4c9',
};

/**
 * Deterministic synthetic data only — no real Typeform account content. Each
 * fixture is a starting point for the interactive preview harness: `value`
 * can still be changed live via the popover controls once a fixture is
 * selected.
 */
export const fixtures: PreviewFixture<ThemeDesignEditorProps>[] = [
  {
    id: 'default',
    title: 'Default (System font, no changes)',
    props: {
      value: DEFAULT_THEME,
      initialTab: 'font',
    },
  },
  {
    id: 'font-changed-georgia',
    title: 'Font changed to Georgia',
    props: {
      value: GEORGIA_THEME,
      initialSavedValue: DEFAULT_THEME,
      initialTab: 'font',
    },
  },
  {
    id: 'background-changed',
    title: 'Background color changed',
    props: {
      value: BLUE_BG_THEME,
      initialSavedValue: DEFAULT_THEME,
      initialTab: 'background',
    },
  },
  {
    id: 'dirty-with-revert',
    title: 'Dirty state with Revert visible',
    props: {
      value: DIRTY_THEME,
      initialSavedValue: DEFAULT_THEME,
      initialTab: 'font',
    },
  },
  {
    id: 'close-unsaved-confirm',
    title: 'Close with unsaved changes (confirmation shown)',
    props: {
      value: DIRTY_THEME,
      initialSavedValue: DEFAULT_THEME,
      initialView: 'confirmClose',
    },
  },
  {
    id: 'disabled',
    title: 'Disabled (assumption, not observed)',
    props: {
      value: DEFAULT_THEME,
      disabled: true,
    },
  },
];
