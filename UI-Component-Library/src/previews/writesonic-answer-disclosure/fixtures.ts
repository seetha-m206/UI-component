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
    id: 'expanded',
    title: 'Expanded · observed interaction with fictional answer',
    props: {
      initialExpanded: true,
    },
  },
];
