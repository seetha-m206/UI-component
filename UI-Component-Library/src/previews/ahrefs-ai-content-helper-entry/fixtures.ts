import type { PreviewFixture, PropSchemaField } from '../types';
import type { AhrefsAiContentHelperEntryProps } from './AhrefsAiContentHelperEntry';
export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialState',
    type: "'documents' | 'brand-kits'",
    required: false,
    description: 'Starts on Documents or the synthetic Brand kits empty state.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables every local control.',
  },
];
export const fixtures: PreviewFixture<AhrefsAiContentHelperEntryProps>[] = [
  { id: 'documents', title: 'Documents', props: { initialState: 'documents' } },
  { id: 'brand-kits', title: 'Brand kits', props: { initialState: 'brand-kits' } },
];
