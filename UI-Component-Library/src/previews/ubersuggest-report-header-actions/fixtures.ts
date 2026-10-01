import type { PreviewFixture, PropSchemaField } from '../types';
import type { RemainingProps } from '../ubersuggest-remaining/Remaining';

export const fixtures: PreviewFixture<RemainingProps>[] = [
  {
    id: 'default',
    title: 'Observed default state · fictional values',
    props: { initialState: 'default' },
  },
  {
    id: 'feedback-attempted',
    title: 'Observed no-visible-transition state',
    props: { initialState: 'feedback-attempted' },
  },
];

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialState',
    type: 'string',
    required: false,
    description:
      'Observed default or feedback-attempted boundary. No export, navigation, submission, or provider request is possible.',
  },
];
