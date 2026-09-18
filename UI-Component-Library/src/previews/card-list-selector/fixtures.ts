import { createElement } from 'react';
import type { PreviewFixture, PropSchemaField } from '../types';
import type { CardListSelectorProps } from './CardListSelector';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'items',
    type: 'CardListSelectorItem[]',
    required: true,
    description: 'The cards to render, each with an id, icon, title, and one-line description.',
  },
  {
    name: 'value',
    type: 'string | null',
    required: true,
    description: "The currently selected card's id, or null if nothing is selected.",
  },
  {
    name: 'onChange',
    type: '(id: string) => void',
    required: false,
    description:
      'Called with the clicked card id. Unlike yes-no-toggle-field / rating-star-field, there is no observed toggle-off: re-clicking the already-selected card is a no-op (tab-list-like behavior).',
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
    required: true,
    description: 'Accessible group name, rendered above the cards.',
  },
  {
    name: 'layout',
    type: "'list' | 'grid'",
    required: false,
    description:
      "'list' (default) models the Share sidebar variant (the only one with a confirmed selected-state treatment); 'grid' models the New-Form chooser variant.",
  },
];

// Small, deterministic, self-drawn placeholder icons — a plain stand-in for
// Zoho's own CSS sprite-sheet icons, which are product-specific binary
// assets not available in this repository (see README "Deviations").
function icon(path: string) {
  return createElement(
    'svg',
    { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5 },
    createElement('path', { d: path, strokeLinecap: 'round', strokeLinejoin: 'round' })
  );
}

const blankIcon = icon('M6 3h9l3 3v15H6V3zM14 3v4h4');
const templateIcon = icon('M4 4h16v16H4zM4 10h16M10 10v10');
const aiIcon = icon(
  'M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1'
);
const importIcon = icon('M12 3v12M7 10l5 5 5-5M4 20h16');
const shareIcon = icon(
  'M18 8a3 3 0 100-6 3 3 0 000 6zM6 15a3 3 0 100-6 3 3 0 000 6zM18 22a3 3 0 100-6 3 3 0 000 6zM8.6 13.5l6.8-3.9M8.6 10.5l6.8 3.9'
);
const embedIcon = icon('M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12');
const trackingIcon = icon('M4 19h16M7 15v-4M12 15V7M17 15v-8');

export const fixtures: PreviewFixture<CardListSelectorProps>[] = [
  {
    id: 'list-unselected',
    title: 'List — nothing selected',
    props: {
      label: 'Share this form',
      layout: 'list',
      value: null,
      disabled: false,
      items: [
        {
          id: 'share',
          icon: shareIcon,
          title: 'Share With',
          description: 'Share the form link directly with people or teams.',
        },
        {
          id: 'embed',
          icon: embedIcon,
          title: 'Embed',
          description: 'Add this form to your website or blog.',
        },
        {
          id: 'campaigns',
          icon: shareIcon,
          title: 'Email Campaigns',
          description: 'Send this form as part of an email campaign.',
        },
        {
          id: 'utm',
          icon: trackingIcon,
          title: 'UTM Tracking',
          description: 'Track form submissions by campaign source.',
        },
        {
          id: 'gtm',
          icon: trackingIcon,
          title: 'Google Tag Manager',
          description: 'Add custom tracking scripts and tags.',
        },
      ],
    },
  },
  {
    id: 'list-selected',
    title: 'List — item selected',
    props: {
      label: 'Share this form',
      layout: 'list',
      value: 'embed',
      disabled: false,
      items: [
        {
          id: 'share',
          icon: shareIcon,
          title: 'Share With',
          description: 'Share the form link directly with people or teams.',
        },
        {
          id: 'embed',
          icon: embedIcon,
          title: 'Embed',
          description: 'Add this form to your website or blog.',
        },
        {
          id: 'campaigns',
          icon: shareIcon,
          title: 'Email Campaigns',
          description: 'Send this form as part of an email campaign.',
        },
        {
          id: 'utm',
          icon: trackingIcon,
          title: 'UTM Tracking',
          description: 'Track form submissions by campaign source.',
        },
        {
          id: 'gtm',
          icon: trackingIcon,
          title: 'Google Tag Manager',
          description: 'Add custom tracking scripts and tags.',
        },
      ],
    },
  },
  {
    id: 'disabled',
    title: 'Disabled',
    props: {
      label: 'Share this form',
      layout: 'list',
      value: 'share',
      disabled: true,
      items: [
        {
          id: 'share',
          icon: shareIcon,
          title: 'Share With',
          description: 'Share the form link directly with people or teams.',
        },
        {
          id: 'embed',
          icon: embedIcon,
          title: 'Embed',
          description: 'Add this form to your website or blog.',
        },
        {
          id: 'campaigns',
          icon: shareIcon,
          title: 'Email Campaigns',
          description: 'Send this form as part of an email campaign.',
        },
      ],
    },
  },
  {
    id: 'long-description',
    title: 'Long description text',
    props: {
      label: 'Choose a tracking option',
      layout: 'list',
      value: null,
      disabled: false,
      items: [
        {
          id: 'utm',
          icon: trackingIcon,
          title: 'UTM Tracking',
          description:
            'Automatically capture UTM source, medium, campaign, term, and content parameters from the referring URL for every response submitted through this form, so you can attribute leads back to the exact campaign that generated them.',
        },
        {
          id: 'gtm',
          icon: trackingIcon,
          title: 'Google Tag Manager & Custom Tracking',
          description:
            'Add your own Google Tag Manager container id or custom JavaScript tracking snippets to this form.',
        },
      ],
    },
  },
  {
    id: 'grid-layout',
    title: 'Grid — New Form chooser',
    props: {
      label: 'Choose how to create your form',
      layout: 'grid',
      value: null,
      disabled: false,
      items: [
        {
          id: 'blank',
          icon: blankIcon,
          title: 'Blank Form',
          description: 'Start from scratch and build your form field by field.',
        },
        {
          id: 'templates',
          icon: templateIcon,
          title: 'Templates',
          description: 'Pick from a ready-made template for common use cases.',
        },
        {
          id: 'zia',
          icon: aiIcon,
          title: 'AI Form Generator',
          description: 'Describe your form and let AI build it for you.',
        },
        {
          id: 'import',
          icon: importIcon,
          title: 'Import Form',
          description: 'Bring in a form you already built elsewhere.',
        },
        {
          id: 'pdf',
          icon: importIcon,
          title: 'PDF to Form',
          description: 'Convert an existing PDF form into a digital one.',
        },
        {
          id: 'image',
          icon: importIcon,
          title: 'Image to Form',
          description: 'Turn a scanned or photographed form into a digital one.',
        },
        {
          id: 'integ',
          icon: shareIcon,
          title: 'From Integration',
          description: 'Create a form from a connected third-party app.',
        },
      ],
    },
  },
  {
    id: 'two-item',
    title: 'Minimal two-card set',
    props: {
      label: 'Pick a form type',
      layout: 'grid',
      value: 'standard',
      disabled: false,
      items: [
        {
          id: 'standard',
          icon: templateIcon,
          title: 'Standard',
          description: 'A single continuous page of fields.',
        },
        {
          id: 'card',
          icon: blankIcon,
          title: 'Card',
          description: 'One question per screen, shown as a stack of cards.',
        },
      ],
    },
  },
];
