import type { PreviewFixture, PropSchemaField } from '../types';
import type { DeepProps } from '../freshservice-shared/FreshserviceDeep';
export const fixtures: PreviewFixture<Omit<DeepProps, 'variant'>>[] = [
  { id: 'default', title: 'Observed structure with local behavior', props: {} },
  {
    id: 'article-insights',
    title: 'Article Insights tab label',
    props: { initialTab: 'Article Insights' },
  },
];
export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialTab',
    type: 'string',
    required: false,
    description: 'Sets the initial local report page when it matches an observed label.',
  },
];
