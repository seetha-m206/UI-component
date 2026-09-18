import type { PreviewFixture, PropSchemaField } from '../types';
import type { ThemeColorPickerGradientProps } from './ThemeColorPickerGradient';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'value',
    type: '{ mode: "solid" | "gradient"; solidColor: string; gradientStart: string; gradientEnd: string; angle: number }',
    required: true,
    description:
      "Current fill: mode selects solid vs. gradient; solidColor/gradientStart/gradientEnd are hex strings; angle is degrees (0-350, 10° steps, matching the source's 36-step slider).",
  },
  {
    name: 'onChange',
    type: '(value: ThemeColorValue) => void',
    required: false,
    description:
      'Called with the full updated value object on any change: mode toggle, preset swatch pick, hex edit, or angle drag.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description:
      'Prevents opening the popover and disables the trigger when true. Defaults to false.',
  },
  {
    name: 'label',
    type: 'string',
    required: true,
    description: 'The theme property name shown above the trigger (e.g. "Background Color").',
  },
  {
    name: 'description',
    type: 'string',
    required: false,
    description: 'Optional helper text shown below the label.',
  },
];

/**
 * Deterministic synthetic data only — no real theme/session content. Each
 * fixture is a starting point for the interactive preview harness: mode,
 * colors, angle, and disabled can still be changed live via the preview
 * controls once a fixture is selected. The gradient values in
 * `gradient-two-stops` are taken directly from the source record's captured
 * example (`linear-gradient(230deg, rgb(255,222,214) 0%, rgb(191,172,254) 100%)`).
 */
export const fixtures: PreviewFixture<ThemeColorPickerGradientProps>[] = [
  {
    id: 'solid-default',
    title: 'Solid color (default)',
    props: {
      value: {
        mode: 'solid',
        solidColor: '#245BA7',
        gradientStart: '#FFDED6',
        gradientEnd: '#BFACFE',
        angle: 230,
      },
      label: 'Background Color',
      description: 'Applies to the form container background.',
      disabled: false,
    },
  },
  {
    id: 'gradient-two-stops',
    title: 'Gradient — two stops',
    props: {
      value: {
        mode: 'gradient',
        solidColor: '#245BA7',
        gradientStart: '#FFDED6',
        gradientEnd: '#BFACFE',
        angle: 230,
      },
      label: 'Background Color',
      description: 'Captured example from the source record: 230°, #FFDED6 → #BFACFE.',
      disabled: false,
    },
  },
  {
    id: 'popover-closed-default',
    title: 'Popover closed (default state)',
    props: {
      value: {
        mode: 'solid',
        solidColor: '#F84A4D',
        gradientStart: '#FFFFFF',
        gradientEnd: '#000000',
        angle: 90,
      },
      label: 'Header Color',
      disabled: false,
    },
  },
  {
    id: 'disabled',
    title: 'Disabled by default',
    props: {
      value: {
        mode: 'solid',
        solidColor: '#677788',
        gradientStart: '#FFFFFF',
        gradientEnd: '#000000',
        angle: 0,
      },
      label: 'Locked Theme Color',
      description: 'Disabled because this property is controlled by a parent theme setting.',
      disabled: true,
    },
  },
  {
    id: 'long-label',
    title: 'Long label',
    props: {
      value: {
        mode: 'gradient',
        solidColor: '#2563EB',
        gradientStart: '#7C3AED',
        gradientEnd: '#C026D3',
        angle: 45,
      },
      label:
        'Given the currently selected base theme, the background fill applied to the full-screen form container behind all fields and sections',
      disabled: false,
    },
  },
  {
    id: 'vertical-gradient',
    title: 'Gradient — vertical angle',
    props: {
      value: {
        mode: 'gradient',
        solidColor: '#16A34A',
        gradientStart: '#FFCA00',
        gradientEnd: '#16A34A',
        angle: 0,
      },
      label: 'Wallpaper Color',
      description: 'Angle set to 0° (top-to-bottom).',
      disabled: false,
    },
  },
];
