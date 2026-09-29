import type { PreviewFixture, PropSchemaField } from '../types';
import type { AhrefsAccessControlUpgradeModalProps } from './AhrefsAccessControlUpgradeModal';
export const propsSchema: PropSchemaField[] = [
  { name: 'initialOpen', type: 'boolean', required: false, description: 'Starts open or closed.' },
  { name: 'disabled', type: 'boolean', required: false, description: 'Disables modal actions.' },
];
export const fixtures: PreviewFixture<AhrefsAccessControlUpgradeModalProps>[] = [
  { id: 'open', title: 'Open', props: { initialOpen: true } },
  { id: 'closed', title: 'Closed', props: { initialOpen: false } },
];
