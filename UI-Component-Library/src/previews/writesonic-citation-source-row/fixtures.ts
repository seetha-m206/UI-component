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
    id: 'loading',
    title: 'Loading · local simulation only',
    props: {
      state: 'loading',
    },
  },
  {
    id: 'empty',
    title: 'Empty · local simulation only',
    props: {
      state: 'empty',
    },
  },
  {
    id: 'error',
    title: 'Error · local simulation only',
    props: {
      state: 'error',
    },
  },
];
