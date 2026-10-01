import type { PreviewFixture, PropSchemaField } from '../types';
import type { ComponentProps } from 'react';
import { SeRankingSurveyDialog } from './SeRankingSurveyDialog';

export const fixtures: PreviewFixture<ComponentProps<typeof SeRankingSurveyDialog>>[] = [
  { id: 'open', title: 'Observed open survey', props: { initiallyOpen: true } },
  { id: 'closed', title: 'Reconstructed closed state', props: { initiallyOpen: false } },
];

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initiallyOpen',
    type: 'boolean',
    required: false,
    description: 'Starts the local survey specimen open or closed.',
  },
];
