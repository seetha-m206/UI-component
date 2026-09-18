import type { PreviewFixture, PropSchemaField } from '../types';
import type { ChoicesListEditorProps } from './ChoicesListEditor';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'choices',
    type: 'ChoiceItem[]',
    required: true,
    description:
      'Ordered list of { id, value } choice rows. Order only changes by replacing this array — there is no drag-reorder (confirmed absent in the source: no sortable handler, no drag-handle element).',
  },
  {
    name: 'onChange',
    type: '(choices: ChoiceItem[]) => void',
    required: false,
    description:
      "Called with the full next array on add, remove, or a row losing focus after an edit (matches the source's onfocusout commit, not live keystroke commit).",
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Prevents all interaction (typing, add, remove) when true. Defaults to false.',
  },
  {
    name: 'required',
    type: 'boolean',
    required: false,
    description:
      'Not a "required question" concept (this is a builder panel, not a live field). When true, reaching the minimum-choice count shows a persistent, explicit validation message instead of just silently disabling the remove control. Defaults to false.',
  },
  {
    name: 'minChoices',
    type: 'number',
    required: false,
    description:
      "Minimum number of choices the list may be reduced to; the last remaining choice(s) down to this count cannot be removed. Defaults to 1, matching the guard implied (not independently confirmed) in the source's removeChoiceValueInChoiceFieldPopUp.",
  },
  {
    name: 'label',
    type: 'string',
    required: false,
    description:
      'Overrides the computed "Choices (N)" heading text. By default the count is derived live from choices.length, matching the source\'s setChoiceCountInChoiceFieldsPopup (re-counts DOM rows, not a stored counter).',
  },
];

function choices(...values: string[]) {
  return values.map((value, i) => ({ id: `seed-${i}`, value }));
}

/**
 * Deterministic synthetic data only — no real form/entry content. Each
 * fixture is a starting point for the interactive preview harness, not a
 * frozen snapshot: choices/disabled/required can still be changed live via
 * the preview controls once a fixture is selected.
 */
export const fixtures: PreviewFixture<ChoicesListEditorProps>[] = [
  {
    id: 'typical-list',
    title: 'Typical list (4 choices)',
    props: {
      choices: choices('Small', 'Medium', 'Large', 'Extra Large'),
      disabled: false,
      required: false,
    },
  },
  {
    id: 'two-choices',
    title: 'Minimal list (2 choices)',
    props: {
      choices: choices('Yes', 'No'),
      disabled: false,
      required: false,
    },
  },
  {
    id: 'at-minimum-silent',
    title: 'At minimum, guard silent',
    props: {
      choices: choices('Only option'),
      disabled: false,
      required: false,
      minChoices: 1,
    },
  },
  {
    id: 'at-minimum-enforced',
    title: 'At minimum, guard enforced',
    props: {
      choices: choices('Only option'),
      disabled: false,
      required: true,
      minChoices: 1,
    },
  },
  {
    id: 'disabled',
    title: 'Disabled by default',
    props: {
      choices: choices('North America', 'Europe', 'Asia Pacific'),
      disabled: true,
      required: false,
    },
  },
  {
    id: 'long-list',
    title: 'Long list (8 choices)',
    props: {
      choices: choices(
        'Customer Support',
        'Sales Inquiry',
        'Billing Question',
        'Technical Issue',
        'Partnership Request',
        'Feedback',
        'Bug Report',
        'Other'
      ),
      disabled: false,
      required: false,
    },
  },
];
