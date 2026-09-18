import type { PreviewFixture, PropSchemaField } from '../types';
import type { SidebarSettingsSubnavProps, SidebarNavItem } from './SidebarSettingsSubnav';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'items',
    type: 'SidebarNavItem[]',
    required: true,
    description:
      'Ordered list of settings-category nav items ({ id, label, icon? }). Mirrors one <li>/<a> pair per item in the source `#storageSettingsUL` list.',
  },
  {
    name: 'value',
    type: 'string',
    required: true,
    description: "id of the currently active item (source's `select`-class-bearing <li>/<a> pair).",
  },
  {
    name: 'onChange',
    type: '(id: string) => void',
    required: false,
    description:
      "Called with the clicked item's id. Stands in for the host application fetching and swapping the content pane — this reconstruction never calls fetch/XHR itself. Not called when clicking the already-active item (no deselect state was observed).",
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Prevents any interaction when true. Defaults to false.',
  },
  {
    name: 'label',
    type: 'string',
    required: false,
    description: 'Accessible name for the nav landmark. Defaults to "Settings".',
  },
];

const submissionsAndStorageItems: SidebarNavItem[] = [
  { id: 'geolocation', label: 'Geolocation', icon: '\u{1F4CD}' },
  { id: 'saveForLater', label: 'Save for Later', icon: '\u{1F4BE}' },
  { id: 'editResponse', label: 'Edit Response', icon: '✏️' },
  { id: 'attachments', label: 'Manage Form Attachments', icon: '\u{1F4CE}' },
  { id: 'autoTrash', label: 'Auto-Trash', icon: '\u{1F5D1}️' },
  { id: 'reviewSub', label: 'Review Before Submission', icon: '\u{1F441}️' },
];

/**
 * Deterministic synthetic data only — the item ids/labels reuse the exact
 * section names captured in the source record's DOM snippet
 * (`geolocationLI`/`geolocationlink`, `reviewSubLI`/`reviewSublink`, etc.),
 * not invented content. Each fixture is a starting point for the
 * interactive preview harness: `value`/`disabled` can still be changed live
 * via the preview controls once a fixture is selected.
 */
export const fixtures: PreviewFixture<SidebarSettingsSubnavProps>[] = [
  {
    id: 'first-item-active',
    title: 'First item active (Geolocation)',
    props: {
      items: submissionsAndStorageItems,
      value: 'geolocation',
      disabled: false,
      label: 'Submissions & Storage',
    },
  },
  {
    id: 'different-item-active',
    title: 'Review Before Submission active',
    props: {
      items: submissionsAndStorageItems,
      value: 'reviewSub',
      disabled: false,
      label: 'Submissions & Storage',
    },
  },
  {
    id: 'middle-item-active',
    title: 'Auto-Trash active',
    props: {
      items: submissionsAndStorageItems,
      value: 'autoTrash',
      disabled: false,
      label: 'Submissions & Storage',
    },
  },
  {
    id: 'disabled',
    title: 'Disabled sidebar',
    props: {
      items: submissionsAndStorageItems,
      value: 'saveForLater',
      disabled: true,
      label: 'Submissions & Storage',
    },
  },
  {
    id: 'long-labels',
    title: 'Long item labels',
    props: {
      items: [
        { id: 'geolocation', label: 'Geolocation and precise device-level location capture' },
        {
          id: 'saveForLater',
          label: 'Save for Later with configurable partial-response expiry windows',
        },
        {
          id: 'editResponse',
          label: 'Edit Response permissions for previously submitted entries',
        },
        {
          id: 'attachments',
          label: 'Manage Form Attachments, storage quotas, and allowed file types',
        },
      ],
      value: 'attachments',
      disabled: false,
      label: 'Submissions & Storage',
    },
  },
  {
    id: 'no-icons',
    title: 'Items without icons',
    props: {
      items: submissionsAndStorageItems.map(({ id, label }) => ({ id, label })),
      value: 'editResponse',
      disabled: false,
      label: 'Submissions & Storage',
    },
  },
];
