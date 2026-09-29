import type { PreviewFixture, PropSchemaField } from '../types';
import type { PaperformPaymentsProductsFieldsProps } from './PaperformPaymentsProductsFields';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialSurface',
    type: "'respondent' | 'payments-config'",
    required: false,
    description: 'Which of the two documented screens the preview mounts showing. Defaults to \'respondent\'.',
  },
  {
    name: 'initialPriceReadOnly',
    type: 'boolean',
    required: false,
    description:
      "Confirmed real toggle: read-only (fixed price) vs. editable (respondent types their own amount, subject to the minimum). Defaults to true.",
  },
  {
    name: 'initialPriceValue',
    type: 'number',
    required: false,
    description: 'Starting price value. Defaults to 10.',
  },
  {
    name: 'initialPriceMin',
    type: 'number',
    required: false,
    description:
      'The pay-what-you-want minimum. When the current price is below it, shows the exact confirmed warning copy.',
  },
  {
    name: 'products',
    type: 'ProductItem[]',
    required: false,
    description: 'Product catalogue for the Products field. Defaults to the source-captured 2-product test set (Test Mug $12 stock 3, Test Tee $10 unlimited stock).',
  },
  {
    name: 'initialCouponsEnabled',
    type: 'boolean',
    required: false,
    description: 'Starting state of the Coupons toggle on the Payments config screen.',
  },
  {
    name: 'initialPricingRulesEnabled',
    type: 'boolean',
    required: false,
    description: 'Starting state of the Custom Pricing Rules toggle.',
  },
  {
    name: 'onPublish',
    type: '() => void',
    required: false,
    description:
      'Fired when Publish is clicked. Confirmed real behavior: this always succeeds silently, with no warning, regardless of whether a payment gateway is connected — deliberately not gated on any prop here.',
  },
];

export const fixtures: PreviewFixture<PaperformPaymentsProductsFieldsProps>[] = [
  {
    id: 'respondent-fixed-price',
    title: 'Respondent view — fixed price + product picker',
    props: {
      initialSurface: 'respondent',
      initialPriceReadOnly: true,
      initialPriceValue: 10,
    },
  },
  {
    id: 'respondent-editable-min',
    title: 'Respondent view — editable price, try entering below the minimum',
    props: {
      initialSurface: 'respondent',
      initialPriceReadOnly: false,
      initialPriceValue: 8,
      initialPriceMin: 5,
    },
  },
  {
    id: 'respondent-stock-limit',
    title: 'Respondent view — pick a product and exceed its stock limit',
    props: {
      initialSurface: 'respondent',
      initialPriceReadOnly: true,
    },
  },
  {
    id: 'payments-config',
    title: 'Configure → Payments — no gateway connected',
    props: {
      initialSurface: 'payments-config',
    },
  },
  {
    id: 'payments-config-coupons-rules',
    title: 'Configure → Payments — Coupons + Pricing Rules expanded',
    props: {
      initialSurface: 'payments-config',
      initialCouponsEnabled: true,
      initialPricingRulesEnabled: true,
    },
  },
];
