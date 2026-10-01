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
    id: 'help-open',
    title: 'Help open · local explanation, provider unverified',
    props: {
      initialHelpOpen: true,
    },
  },
];
