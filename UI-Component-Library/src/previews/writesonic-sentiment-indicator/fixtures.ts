import type { PreviewFixture } from '../types';
import type { WritesonicProps } from '../writesonic-shared/Writesonic';
export { propsSchema } from '../writesonic-shared/config';
export const fixtures: PreviewFixture<WritesonicProps>[] = [
  {
    id: 'observed-layout',
    title: 'Observed layout · fictional data',
    props: {},
  },
  {
    id: 'positive',
    title: 'Positive · fictional variant',
    props: {
      sentiment: 'Positive',
    },
  },
  {
    id: 'negative',
    title: 'Negative · fictional variant',
    props: {
      sentiment: 'Negative',
    },
  },
];
