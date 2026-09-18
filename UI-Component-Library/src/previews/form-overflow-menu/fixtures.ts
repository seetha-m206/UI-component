import type { PreviewFixture, PropSchemaField } from '../types';
import { DEFAULT_FORM_OVERFLOW_ITEMS, type FormOverflowMenuProps } from './FormOverflowMenu';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'formName',
    type: 'string',
    required: true,
    description:
      'Name of the form the menu acts on; used to build the trigger\'s accessible name ("More actions for {formName}").',
  },
  {
    name: 'items',
    type: 'FormOverflowMenuItem[]',
    required: false,
    description:
      'Menu items to render. Defaults to the 7 desktop items documented in the research record (Info, Duplicate, Enable/Disable, Move to Folder, Change Ownership, Change Form Type, Trash), grouped by the same three dividers observed in the source.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description:
      'Disables the "⋮" trigger entirely, preventing the menu from opening. Defaults to false.',
  },
  {
    name: 'initialOpen',
    type: 'boolean',
    required: false,
    description:
      "Seeds the menu's initial open/closed state. This is an uncontrolled widget — open/close state lives inside the component after mount, matching the source's observed 0-network-request open/close.",
  },
  {
    name: 'onSelect',
    type: '(itemId: string) => void',
    required: false,
    description:
      'Called when a non-status, non-destructive item is selected (Info, Duplicate, Move to Folder, Change Ownership, Change Form Type).',
  },
  {
    name: 'onEnableDisable',
    type: '() => void',
    required: false,
    description:
      'Called instead of onSelect when "Enable / Disable" is chosen. In the real product this opens a fetch-then-render confirmation modal (GET status, then a cusRadioButton Enable/Disable pair) — modeled here as a callback, not a rebuilt modal.',
  },
  {
    name: 'onDelete',
    type: '() => void',
    required: false,
    description:
      'Called instead of onSelect when the destructive "Trash" item is chosen, standing in for the confirmation dialog that would appear in the real product.',
  },
];

const FEWER_ITEMS = DEFAULT_FORM_OVERFLOW_ITEMS.filter((item) =>
  ['info', 'duplicate', 'trash'].includes(item.id)
).map((item) =>
  item.id === 'trash' ? { ...item, dividerBefore: true } : { ...item, dividerBefore: false }
);

const SINGLE_CLUSTER_ITEMS = DEFAULT_FORM_OVERFLOW_ITEMS.filter((item) =>
  ['info', 'duplicate'].includes(item.id)
);

/**
 * Deterministic synthetic data only — no real form/entry content. Each
 * fixture is a starting point for the interactive preview harness, not a
 * frozen snapshot: items/disabled/initialOpen can still be changed live via
 * the preview controls once a fixture is selected.
 */
export const fixtures: PreviewFixture<FormOverflowMenuProps>[] = [
  {
    id: 'closed-default',
    title: 'Closed (default)',
    props: {
      formName: 'Customer Feedback Form',
      initialOpen: false,
    },
  },
  {
    id: 'open',
    title: 'Menu open (full 7-item set)',
    props: {
      formName: 'Customer Feedback Form',
      initialOpen: true,
    },
  },
  {
    id: 'disabled-trigger',
    title: 'Disabled trigger',
    props: {
      formName: 'Archived Survey',
      initialOpen: false,
      disabled: true,
    },
  },
  {
    id: 'fewer-items',
    title: 'Fewer items (Info, Duplicate, Trash)',
    props: {
      formName: 'Event Registration',
      initialOpen: true,
      items: FEWER_ITEMS,
    },
  },
  {
    id: 'single-cluster',
    title: 'Single group, no dividers',
    props: {
      formName: 'Quick Poll',
      initialOpen: true,
      items: SINGLE_CLUSTER_ITEMS,
    },
  },
  {
    id: 'long-form-name',
    title: 'Long form name',
    props: {
      formName:
        'Annual Employee Satisfaction and Workplace Culture Survey — All Departments (2026)',
      initialOpen: true,
    },
  },
];
