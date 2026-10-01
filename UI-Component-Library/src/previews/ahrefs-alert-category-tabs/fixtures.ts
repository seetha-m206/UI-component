import type { PreviewFixture, PropSchemaField } from '../types';
import type { AhrefsAlertCategoryTabsProps } from './AhrefsAlertCategoryTabs';
export const propsSchema: PropSchemaField[] = [
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables local preview controls.',
  },
];
export const fixtures: PreviewFixture<AhrefsAlertCategoryTabsProps>[] = [
  { id: 'default', title: 'Alert category tabs', props: {} },
];
