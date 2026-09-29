import type { PreviewFixture, PropSchemaField } from '../types';
import type {
  TwoLineDropdownAndAccordionProps,
  TwoLineOption,
  AccordionSectionInput,
} from './TwoLineDropdownAndAccordion';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'dropdownOptions',
    type: 'TwoLineOption[]',
    required: true,
    description:
      'Options for the two-line dropdown, each a genuine title + subtitle pair, matching the source\'s captured Select2 templateResult DOM (a title <div> and a subtitle <span class="sharingTxtDis">, not two text nodes in one element).',
  },
  {
    name: 'dropdownValue',
    type: 'string',
    required: true,
    description: 'value of the currently-selected option.',
  },
  {
    name: 'onDropdownChange',
    type: '(value: string) => void',
    required: false,
    description: 'Fired when an option is chosen. Selection is held locally, matching the source (never submitted until an outer action like "Share" is taken).',
  },
  { name: 'dropdownLabel', type: 'string', required: false, description: 'Caption above the trigger. Defaults to "Permission".' },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description:
      'Disables the dropdown trigger. Named `disabled` (not `dropdownDisabled`) so this preview\'s harness Disabled/Enabled toggle control can drive it directly.',
  },
  {
    name: 'accordionSections',
    type: 'AccordionSectionInput[]',
    required: true,
    description: 'Ordered accordion sections ({ id, title, content }).',
  },
  {
    name: 'initialOpenSectionIds',
    type: 'string[]',
    required: false,
    description:
      'Which section ids start open. Defaults to just the first section\'s id, matching the source\'s "Container open by default, other four closed."',
  },
  {
    name: 'onAccordionToggle',
    type: '(id: string, open: boolean) => void',
    required: false,
    description: 'Fired whenever a section is expanded or collapsed.',
  },
];

const PERMISSION_OPTIONS: TwoLineOption[] = [
  { value: 'submit', title: 'Submit Form', subtitle: 'View & submit form' },
  {
    value: 'modify',
    title: 'Modify Form',
    subtitle: 'Modify form & configurations, Submit form',
  },
  {
    value: 'modify-entries-reports',
    title: 'Modify Form, Entries, Reports',
    subtitle:
      'All permissions given under Modify Form + Edit entries, Create & modify reports',
  },
];

const THEME_ACCORDION_SECTIONS: AccordionSectionInput[] = [
  { id: 'container', title: 'Container', content: 'Overall container width, alignment, and background.' },
  { id: 'border', title: 'Border', content: 'Border width, style, color, and corner radius.' },
  {
    id: 'edges-spacing-shadow',
    title: 'Edges, Spacing & Shadow',
    content: 'Outer margin, inner padding, and drop-shadow controls.',
  },
  {
    id: 'form-responsiveness',
    title: 'Form responsiveness',
    content: 'Breakpoint behavior for tablet and mobile widths.',
  },
  { id: 'scroll-behaviour', title: 'Scroll behaviour', content: 'Sticky header and scroll-snap options.' },
];

export const fixtures: PreviewFixture<TwoLineDropdownAndAccordionProps>[] = [
  {
    id: 'default',
    title: 'Default (Submit Form selected, Container open)',
    props: {
      dropdownOptions: PERMISSION_OPTIONS,
      dropdownValue: 'submit',
      accordionSections: THEME_ACCORDION_SECTIONS,
    },
  },
  {
    id: 'modify-entries-reports-selected',
    title: 'Highest permission tier selected',
    props: {
      dropdownOptions: PERMISSION_OPTIONS,
      dropdownValue: 'modify-entries-reports',
      accordionSections: THEME_ACCORDION_SECTIONS,
    },
  },
  {
    id: 'multiple-sections-open',
    title: 'Multiple accordion sections open at once',
    props: {
      dropdownOptions: PERMISSION_OPTIONS,
      dropdownValue: 'modify',
      accordionSections: THEME_ACCORDION_SECTIONS,
      initialOpenSectionIds: ['container', 'border', 'scroll-behaviour'],
    },
  },
  {
    id: 'all-collapsed',
    title: 'All accordion sections collapsed',
    props: {
      dropdownOptions: PERMISSION_OPTIONS,
      dropdownValue: 'submit',
      accordionSections: THEME_ACCORDION_SECTIONS,
      initialOpenSectionIds: [],
    },
  },
  {
    id: 'dropdown-disabled',
    title: 'Dropdown disabled',
    props: {
      dropdownOptions: PERMISSION_OPTIONS,
      dropdownValue: 'submit',
      disabled: true,
      accordionSections: THEME_ACCORDION_SECTIONS,
    },
  },
];
