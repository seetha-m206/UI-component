import type { PreviewFixture, PropSchemaField } from '../types';
import type { AhrefsSmmChannelOnboardingProps } from './AhrefsSmmChannelOnboarding';
export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialState',
    type: "'default' | 'banner-dismissed'",
    required: false,
    description: 'Starts with the observed announcement or a local dismissed state.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables every local control.',
  },
];
export const fixtures: PreviewFixture<AhrefsSmmChannelOnboardingProps>[] = [
  { id: 'default', title: 'First channel', props: { initialState: 'default' } },
  {
    id: 'banner-dismissed',
    title: 'Announcement dismissed',
    props: { initialState: 'banner-dismissed' },
  },
];
