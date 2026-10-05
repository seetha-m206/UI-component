import type { PreviewFixture, PropSchemaField } from '../types';
import type { JotformSmartPdfFormsProps } from './JotformSmartPdfForms';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialMode',
    type: "'upload' | 'build' | 'settings' | 'publish'",
    required: false,
    description: 'Which mode tab is active on mount. Defaults to the real entry point, UPLOAD.',
  },
  {
    name: 'initialFormGenerated',
    type: 'boolean',
    required: false,
    description:
      "Skips straight past the upload pipeline, as if a document had already been converted — used by fixtures that start on BUILD or Preview PDF.",
  },
  {
    name: 'initialView',
    type: "'form' | 'preview'",
    required: false,
    description: 'Opens directly on the Preview PDF round-trip view instead of the live form.',
  },
  {
    name: 'initialValues',
    type: 'SmartPdfInitialValues',
    required: false,
    description:
      'Pre-fills the generated form (firstName, lastName, email, dateOfBirth, dateSigned, checkboxOptions, signed).',
  },
  {
    name: 'stepDelayMs',
    type: 'number',
    required: false,
    description:
      'Delay between each of the 4 simulated upload-pipeline steps. Defaults to 450ms; tests pass a smaller value.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Prevents any interaction when true. Defaults to false.',
  },
];

export const fixtures: PreviewFixture<JotformSmartPdfFormsProps>[] = [
  {
    id: 'upload-step',
    title: 'UPLOAD step',
    props: {
      initialMode: 'upload',
      initialFormGenerated: false,
      stepDelayMs: 450,
    },
  },
  {
    id: 'build-generated-form',
    title: 'BUILD — generated form',
    props: {
      initialMode: 'build',
      initialFormGenerated: true,
      initialValues: {
        firstName: 'Jordan',
        lastName: 'Rivera',
        email: 'jordan.rivera@example.com',
      },
    },
  },
  {
    id: 'preview-pdf-round-trip',
    title: 'Preview PDF — round-trip view',
    props: {
      initialMode: 'build',
      initialFormGenerated: true,
      initialView: 'preview',
      initialValues: {
        firstName: 'Jordan',
        lastName: 'Rivera',
        email: 'jordan.rivera@example.com',
        dateOfBirth: '1996-04-12',
        dateSigned: '2026-10-05',
        checkboxOptions: ['Sign me up for the weekly newsletter', 'I agree to the Terms & Conditions'],
        signed: true,
      },
    },
  },
  {
    id: 'disabled',
    title: 'Disabled',
    props: {
      initialMode: 'build',
      initialFormGenerated: true,
      disabled: true,
    },
  },
];
