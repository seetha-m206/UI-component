import { createElement } from 'react';
import type { PreviewFixture, PropSchemaField } from '../types';
import type {
  ThemeIconButtonGroupSelectorProps,
  ThemeIconOption,
} from './ThemeIconButtonGroupSelector';

/**
 * Deterministic synthetic icon markup only — small inline `<svg>` shapes
 * standing in for Zoho's actual mock-up icons (not captured/exported in the
 * research record; the record documents structure and CSS, not the icon
 * artwork itself). No network calls, no external icon assets.
 */
function svgIcon(paths: string[]): ThemeIconOption['icon'] {
  return createElement(
    'svg',
    { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5 },
    paths.map((d, i) => createElement('path', { key: i, d }))
  );
}

const PLAIN_ICON = svgIcon(['M3 4h18v16H3z']);
const LEFT_BANNER_ICON = svgIcon(['M3 4h6v16H3z', 'M11 4h10v16H11z']);
const RIGHT_BANNER_ICON = svgIcon(['M3 4h10v16H3z', 'M15 4h6v16H15z']);

const ALIGN_LEFT_ICON = svgIcon(['M3 6h14M3 12h10M3 18h14']);
const ALIGN_CENTER_ICON = svgIcon(['M5 6h14M7 12h10M5 18h14']);
const ALIGN_RIGHT_ICON = svgIcon(['M7 6h14M11 12h10M7 18h14']);

const bannerLayoutOptions: ThemeIconOption[] = [
  { id: '1', icon: PLAIN_ICON, label: 'Plain' },
  { id: '2', icon: LEFT_BANNER_ICON, label: 'Left Banner' },
  { id: '3', icon: RIGHT_BANNER_ICON, label: 'Right Banner' },
];

const textAlignOptions: ThemeIconOption[] = [
  { id: 'left', icon: ALIGN_LEFT_ICON, label: 'Left' },
  { id: 'center', icon: ALIGN_CENTER_ICON, label: 'Center' },
  { id: 'right', icon: ALIGN_RIGHT_ICON, label: 'Right' },
];

export const propsSchema: PropSchemaField[] = [
  {
    name: 'value',
    type: 'string | null',
    required: true,
    description:
      "Selected option id, or null if none of the options is yet marked selected. Mirrors Zoho's themeprop_val.",
  },
  {
    name: 'onChange',
    type: '(value: string) => void',
    required: false,
    description:
      "Called with the clicked option's id. No toggle-off click behavior was observed for this control (unlike Yes/No or Rating).",
  },
  {
    name: 'options',
    type: 'ThemeIconOption[]',
    required: true,
    description: 'The 2-3 selectable icon options in the group, each with an id, icon, and label.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description:
      'Prevents any interaction when true. A disabled state was not observed in the source record; conventional reduced-opacity treatment is used here.',
  },
  {
    name: 'label',
    type: 'string',
    required: true,
    description: 'The group label, e.g. "Form Layout" or "Text Alignment".',
  },
  {
    name: 'variant',
    type: "'tile' | 'icon'",
    required: false,
    description:
      "Which of the two documented visual sub-styles to render: 'tile' = ~80x80px image-preview tiles with hover tooltip (Form Layout / Container Style / Header Style); 'icon' = ~35x35px compact icon-only buttons, no tooltip observed (Text Alignment). Defaults to 'tile'.",
  },
];

/**
 * Deterministic synthetic data only — no real form/theme content. Each
 * fixture is a starting point for the interactive preview harness: value,
 * disabled and options can still be exercised live via the preview controls
 * once a fixture is selected.
 */
export const fixtures: PreviewFixture<ThemeIconButtonGroupSelectorProps>[] = [
  {
    id: 'tile-first-selected',
    title: 'Tile variant — first option selected',
    props: {
      value: '1',
      label: 'Form Layout',
      options: bannerLayoutOptions,
      disabled: false,
      variant: 'tile',
    },
  },
  {
    id: 'tile-other-selected',
    title: 'Tile variant — different option selected',
    props: {
      value: '3',
      label: 'Header Style',
      options: bannerLayoutOptions,
      disabled: false,
      variant: 'tile',
    },
  },
  {
    id: 'tile-unselected',
    title: 'Tile variant — no theme property matched yet',
    props: {
      value: null,
      label: 'Container Style',
      options: bannerLayoutOptions,
      disabled: false,
      variant: 'tile',
    },
  },
  {
    id: 'icon-center-selected',
    title: 'Small icon variant — center alignment selected',
    props: {
      value: 'center',
      label: 'Text Alignment',
      options: textAlignOptions,
      disabled: false,
      variant: 'icon',
    },
  },
  {
    id: 'icon-left-selected',
    title: 'Small icon variant — left alignment selected',
    props: {
      value: 'left',
      label: 'Text Alignment',
      options: textAlignOptions,
      disabled: false,
      variant: 'icon',
    },
  },
  {
    id: 'disabled',
    title: 'Disabled by default',
    props: {
      value: '1',
      label: 'Form Layout (locked)',
      options: bannerLayoutOptions,
      disabled: true,
      variant: 'tile',
    },
  },
];
