import type { PreviewFixture, PropSchemaField } from '../types';
import type { NewFormChooserProps } from './NewFormChooser';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialStep',
    type: "'closed' | 'chooser' | 'create-from-scratch'",
    required: false,
    description:
      "Which screen the component mounts showing. Defaults to 'closed' (just the trigger button). This component owns its own step/selection state from then on via internal useState — it is not externally controlled, per the task's instruction to expose stages through fixtures.",
  },
  {
    name: 'initialFormType',
    type: "'standard' | 'spotlight' | 'card'",
    required: false,
    description:
      "Which form-type card starts selected when the sub-dialog is shown. Defaults to 'standard', matching the source's own default selection.",
  },
  {
    name: 'triggerLabel',
    type: 'string',
    required: false,
    description: 'Label for the dashboard trigger button. Defaults to "+ New Form".',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description:
      "Prevents opening the chooser and disables every card/button inside it when true. Not documented in the source (no disabled state was observed for this control) — included for consistency with other previews' fixture/harness controls.",
  },
  {
    name: 'onSelectOption',
    type: '(id: TopLevelOptionId) => void',
    required: false,
    description:
      "Fired for all 7 top-level cards, including 'blank-form' (which also advances to the sub-dialog). The other 6 ids (ai-forms/templates/crm-forms/pdf-to-form/images-to-form/import-form) only fire this callback — their own follow-up screens were never traced in the source record.",
  },
  {
    name: 'onCreateForm',
    type: '(formType: FormType) => void',
    required: false,
    description:
      'Fired when "Create Form" is clicked, with the currently selected form type. No real form creation or navigation is implemented.',
  },
  {
    name: 'onClose',
    type: '() => void',
    required: false,
    description:
      "Fired when the top-level chooser's X button (or Escape at that level) closes the whole chooser. NOT fired by the sub-dialog's Cancel, which only steps back to the top-level chooser per the source's Actions table.",
  },
];

/**
 * Fixtures expose the documented "stages" of this component rather than a
 * single scalar prop sweep, per the task's instruction: closed (just the
 * trigger), the 7-card chooser open, the Create-From-Scratch sub-dialog
 * with the default Standard selection, and the same sub-dialog with
 * Spotlight selected to demonstrate the confirmed, real, animating
 * selection-state transition on the form-type cards.
 */
export const fixtures: PreviewFixture<NewFormChooserProps>[] = [
  {
    id: 'closed',
    title: 'Closed (trigger button only)',
    props: {
      initialStep: 'closed',
    },
  },
  {
    id: 'chooser-open',
    title: 'Top-level chooser open (7 cards)',
    props: {
      initialStep: 'chooser',
    },
  },
  {
    id: 'create-from-scratch-standard',
    title: 'Create From Scratch — Standard selected (default)',
    props: {
      initialStep: 'create-from-scratch',
      initialFormType: 'standard',
    },
  },
  {
    id: 'create-from-scratch-spotlight',
    title: 'Create From Scratch — Spotlight selected (shows the selection-state transition)',
    props: {
      initialStep: 'create-from-scratch',
      initialFormType: 'spotlight',
    },
  },
  {
    id: 'create-from-scratch-card',
    title: 'Create From Scratch — Card type selected',
    props: {
      initialStep: 'create-from-scratch',
      initialFormType: 'card',
    },
  },
  {
    id: 'disabled-closed',
    title: 'Disabled (trigger cannot open the chooser)',
    props: {
      initialStep: 'closed',
      disabled: true,
    },
  },
];
