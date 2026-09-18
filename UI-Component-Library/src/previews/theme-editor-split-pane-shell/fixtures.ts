import type { PreviewFixture, PropSchemaField } from '../types';
import type { ThemeEditorSplitPaneShellProps } from './ThemeEditorSplitPaneShell';
import { FONT_OPTIONS } from './ThemeEditorSplitPaneShell';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'value',
    type: '{ backgroundColor: string; fontFamily: string }',
    required: true,
    description:
      'Current theme config. Mirrors the source: config changes are pushed as CSS custom properties onto a shared ancestor of the preview content, not applied directly to the changing element.',
  },
  {
    name: 'onChange',
    type: '(value: ThemeConfigValue) => void',
    required: false,
    description: 'Called with the updated config whenever a config panel control changes.',
  },
  {
    name: 'collapsed',
    type: 'boolean',
    required: false,
    description:
      'Whether the left config panel is folded away (observed: `#toggleDiv`). Defaults to false. Collapsing does NOT resize the preview pane into the freed space — an observed finding, reproduced here.',
  },
  {
    name: 'onCollapsedChange',
    type: '(collapsed: boolean) => void',
    required: false,
    description: 'Called with the new collapsed state when the collapse toggle button is clicked.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description:
      'Disables every config control. NOT an observed state in the source record ("Disabled state: not observed") — included as a flagged assumption only (e.g. while a save were in flight). Defaults to false.',
  },
];

const FONT_GEORGIA = FONT_OPTIONS.find((f) => f.id === 'georgia')!.value;
const FONT_COURIER = FONT_OPTIONS.find((f) => f.id === 'courier')!.value;
const FONT_INTER = FONT_OPTIONS.find((f) => f.id === 'inter')!.value;

/**
 * Deterministic synthetic data only — no real form/theme content pulled
 * from any Zoho account. Each fixture is a starting point for the
 * interactive preview harness: value/collapsed/disabled can still be
 * changed live via the preview controls once a fixture is selected.
 */
export const fixtures: PreviewFixture<ThemeEditorSplitPaneShellProps>[] = [
  {
    id: 'default',
    title: 'Default theme',
    props: {
      value: { backgroundColor: '#ffffff', fontFamily: FONT_INTER },
      collapsed: false,
      disabled: false,
    },
  },
  {
    id: 'blue-container',
    title: 'Blue container background',
    props: {
      value: { backgroundColor: '#245ba7', fontFamily: FONT_INTER },
      collapsed: false,
      disabled: false,
    },
  },
  {
    id: 'warm-serif',
    title: 'Warm background + serif font',
    props: {
      value: { backgroundColor: '#fbe4c9', fontFamily: FONT_GEORGIA },
      collapsed: false,
      disabled: false,
    },
  },
  {
    id: 'mono-dark',
    title: 'Dark background + monospace font',
    props: {
      value: { backgroundColor: '#1f2430', fontFamily: FONT_COURIER },
      collapsed: false,
      disabled: false,
    },
  },
  {
    id: 'collapsed-panel',
    title: 'Config panel collapsed',
    props: {
      value: { backgroundColor: '#ffffff', fontFamily: FONT_INTER },
      collapsed: true,
      disabled: false,
    },
  },
  {
    id: 'disabled-controls',
    title: 'Disabled (assumption, not observed)',
    props: {
      value: { backgroundColor: '#e7eaf3', fontFamily: FONT_INTER },
      collapsed: false,
      disabled: true,
    },
  },
];
