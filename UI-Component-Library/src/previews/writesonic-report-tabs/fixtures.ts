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
    id: 'disabled',
    title: 'Disabled · local simulation only',
    props: {
      state: 'disabled',
    },
  },
  {
    id: 'final-step',
    title: 'Answers step · plan action guarded locally',
    props: {
      initialPanel: 'Answers',
    },
  },
];
