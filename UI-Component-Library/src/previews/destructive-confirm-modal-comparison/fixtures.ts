import type { PreviewFixture, PropSchemaField } from '../types';
import type { DestructiveConfirmModalComparisonProps } from './DestructiveConfirmModalComparison';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialActiveModal',
    type: "'closed' | 'trash' | 'exit-warning'",
    required: false,
    description:
      "Which modal (if any) is open on mount. Defaults to 'closed' (just the two trigger buttons). Both modals are uncontrolled after mount via internal useState.",
  },
  {
    name: 'formName',
    type: 'string',
    required: false,
    description: 'Name shown in Modal 1\'s ("Move to Trash?") body next to the document icon.',
  },
  {
    name: 'submittedEntries',
    type: 'number',
    required: false,
    description: 'Count shown in Modal 1\'s gray "Submitted Entries" info box.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description:
      'Prevents either trigger from opening its modal. Not documented in the source (no disabled state was observed for either trigger) — included for harness/fixture consistency with other previews in this repo.',
  },
  {
    name: 'onTrashCancel',
    type: '() => void',
    required: false,
    description:
      'Modal 1 "No" — mirrors ZFForm.manager.hideTrashFormPopUp(\'#trashPromptDiv\'). Form stays untouched.',
  },
  {
    name: 'onTrashConfirm',
    type: '() => void',
    required: false,
    description:
      'Modal 1 "Yes" (#trashbtn) — NOT exercised in the source record (destructive, never actually clicked during research); stands in for the real trash action.',
  },
  {
    name: 'onExitCancel',
    type: '() => void',
    required: false,
    description:
      "Modal 2 \"No\" — mirrors cancelCloseCustomTheme(), a plain jQuery .fadeOut() one-liner. Unsaved theme change stays visible, editor stays open.",
  },
  {
    name: 'onExitConfirm',
    type: '() => void',
    required: false,
    description:
      'Modal 2 "Yes" — mirrors confirmCancelThemeBuilder(true). Discards the unsaved change and returns to the Themes tab.',
  },
];

/**
 * Deterministic synthetic data only — no real form/entry content. Each
 * fixture is a starting point for the interactive preview harness: both
 * trigger buttons are always present, so either modal can be reached
 * regardless of which fixture is selected.
 */
export const fixtures: PreviewFixture<DestructiveConfirmModalComparisonProps>[] = [
  {
    id: 'closed',
    title: 'Closed (both triggers visible)',
    props: {
      initialActiveModal: 'closed',
      formName: 'Customer Feedback Form',
      submittedEntries: 128,
    },
  },
  {
    id: 'trash-open',
    title: 'Modal 1 — "Move to Trash?" open',
    props: {
      initialActiveModal: 'trash',
      formName: 'Customer Feedback Form',
      submittedEntries: 128,
    },
  },
  {
    id: 'trash-open-no-entries',
    title: 'Modal 1 — open, zero submitted entries',
    props: {
      initialActiveModal: 'trash',
      formName: 'Draft Survey (Unpublished)',
      submittedEntries: 0,
    },
  },
  {
    id: 'exit-warning-open',
    title: 'Modal 2 — "Alert" exit-warning open',
    props: {
      initialActiveModal: 'exit-warning',
    },
  },
  {
    id: 'disabled',
    title: 'Disabled (triggers cannot open either modal)',
    props: {
      initialActiveModal: 'closed',
      disabled: true,
    },
  },
];
