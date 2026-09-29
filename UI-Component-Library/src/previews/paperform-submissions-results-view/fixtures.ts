import type { PreviewFixture, PropSchemaField } from '../types';
import type { PaperformSubmissionsResultsViewProps } from './PaperformSubmissionsResultsView';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialTab',
    type: "'submissions' | 'partials' | 'products' | 'reports'",
    required: false,
    description: 'Which tab of the submissions app the preview mounts showing. Defaults to \'submissions\'.',
  },
  {
    name: 'reproduceDuplicateFetch',
    type: 'boolean',
    required: false,
    description:
      'Replays the confirmed duplicate GET .../submissions network call on mounting the Submissions tab (editor Results panel only, per PF9). Defaults to true.',
  },
  {
    name: 'hasCompletedSubmission',
    type: 'boolean',
    required: false,
    description:
      "When true (default), shows the real populated row from PF9's completed submission (Total 22.00, Customer '-', a PDFs menu, and the confirmed payment-status finding). When false, shows the original PF8 blocked-submission empty state.",
  },
  {
    name: 'onSubmitAttempt',
    type: '() => void',
    required: false,
    description: 'Fired when the demo "Submit test response" button is clicked (only shown when hasCompletedSubmission is false).',
  },
  {
    name: 'onExportClick',
    type: '() => void',
    required: false,
    description: 'Fired when "Export All" is clicked. No real file is produced; a toast notes the confirmed CSV/signed-URL mechanism.',
  },
];

export const fixtures: PreviewFixture<PaperformSubmissionsResultsViewProps>[] = [
  {
    id: 'submissions-populated',
    title: 'Submissions — real completed submission (PF9) + payment-status finding',
    props: {
      initialTab: 'submissions',
      hasCompletedSubmission: true,
    },
  },
  {
    id: 'submissions-blocked',
    title: 'Submissions — original PF8 blocked-submission empty state',
    props: {
      initialTab: 'submissions',
      hasCompletedSubmission: false,
    },
  },
  {
    id: 'partial-detail',
    title: 'Partial Submissions — Last-answered bug + live Calculation total',
    props: {
      initialTab: 'partials',
    },
  },
  {
    id: 'products-ledger',
    title: 'Products — stock allocated by the completed submission',
    props: {
      initialTab: 'products',
      hasCompletedSubmission: true,
    },
  },
  {
    id: 'reports-segments',
    title: 'Reports — Segments query builder',
    props: {
      initialTab: 'reports',
    },
  },
];
