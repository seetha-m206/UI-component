import type { PreviewFixture, PropSchemaField } from '../types';
import type { ComponentProps } from 'react';
import { SeRankingAuditToast } from './SeRankingAuditToast';

export const fixtures: PreviewFixture<ComponentProps<typeof SeRankingAuditToast>>[] = [
  { id: 'open', title: 'Observed audit-complete toast', props: { initiallyOpen: true } },
  { id: 'closed', title: 'Reconstructed dismissed state', props: { initiallyOpen: false } },
];

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initiallyOpen',
    type: 'boolean',
    required: false,
    description: 'Starts the local audit notification visible or dismissed.',
  },
];
