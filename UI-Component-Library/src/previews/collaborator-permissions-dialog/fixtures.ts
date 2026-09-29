import type { PreviewFixture, PropSchemaField } from '../types';
import type { CollaboratorPermissionsDialogProps, OrgAccount, OrgUserRow } from './CollaboratorPermissionsDialog';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialSurface',
    type: "'share-specific-users' | 'setup-users'",
    required: false,
    description:
      "Which of the two structurally distinct surfaces is showing at mount. Defaults to 'share-specific-users'.",
  },
  {
    name: 'initialShareSubTab',
    type: "'specific-users' | 'groups' | 'all-users'",
    required: false,
    description: "Which Surface A sub-tab is active. Defaults to 'specific-users'.",
  },
  {
    name: 'orgAccounts',
    type: 'OrgAccount[]',
    required: true,
    description:
      'Existing org accounts the "Share With" box\'s autocomplete is restricted to — confirmed NOT a free-email invite field.',
  },
  {
    name: 'orgName',
    type: 'string',
    required: false,
    description: 'Org name shown as a confirmation chip on the All Users sub-tab.',
  },
  {
    name: 'onShare',
    type: '(payload: SharePayload) => void',
    required: false,
    description: 'Fired when Share succeeds on the Specific Users sub-tab (a matched account was chosen).',
  },
  {
    name: 'onShareGroup',
    type: '(group: string) => void',
    required: false,
    description: 'Fired when Share is clicked on the Groups sub-tab.',
  },
  {
    name: 'onShareAllUsers',
    type: '() => void',
    required: false,
    description: 'Fired when Share is clicked on the All Users sub-tab.',
  },
  {
    name: 'users',
    type: 'OrgUserRow[]',
    required: true,
    description: 'Surface B\'s org-level user table rows ({ id, email, role }).',
  },
  {
    name: 'totalUsersStat',
    type: 'number',
    required: true,
    description:
      "Display-only stat tile value, shown exactly as given — NOT derived from users.length (the source's own trial-org tiles, 3/1/0/2, don't reduce to a simple row count either).",
  },
  { name: 'activeUsersStat', type: 'number', required: true, description: 'Display-only stat tile value.' },
  { name: 'inactiveUsersStat', type: 'number', required: true, description: 'Display-only stat tile value.' },
  {
    name: 'availableUsersStat',
    type: 'number',
    required: true,
    description: 'Display-only stat tile value (available license seats).',
  },
  {
    name: 'onAddUser',
    type: '(email: string) => void',
    required: false,
    description:
      'Fired when the "+ Add User" modal\'s Add button is clicked. No row is appended — the real final invite submit was deliberately never executed in the source, so the resulting row shape is unconfirmed.',
  },
  {
    name: 'onChangeSuperAdmin',
    type: '() => void',
    required: false,
    description:
      'Fired only from the "an Admin already exists" placeholder branch of Change Super Admin — never exercised in the source.',
  },
];

const ORG_ACCOUNTS: OrgAccount[] = [
  { email: 'owner@zohoforms.example.com' },
  { email: 'priya@zohoforms.example.com' },
  { email: 'arjun@zohoforms.example.com' },
];

const USERS_NO_ADMIN: OrgUserRow[] = [
  { id: 'u1', email: 'owner@zohoforms.example.com', role: 'Super Admin' },
];

const USERS_WITH_ADMIN: OrgUserRow[] = [
  { id: 'u1', email: 'owner@zohoforms.example.com', role: 'Super Admin' },
  { id: 'u2', email: 'priya@zohoforms.example.com', role: 'Admin' },
  { id: 'u3', email: 'arjun@zohoforms.example.com', role: 'Respondent' },
];

export const fixtures: PreviewFixture<CollaboratorPermissionsDialogProps>[] = [
  {
    id: 'surface-a-specific-users',
    title: 'Surface A — Share → Specific Users',
    props: {
      initialSurface: 'share-specific-users',
      initialShareSubTab: 'specific-users',
      orgAccounts: ORG_ACCOUNTS,
      users: USERS_NO_ADMIN,
      totalUsersStat: 3,
      activeUsersStat: 1,
      inactiveUsersStat: 0,
      availableUsersStat: 2,
    },
  },
  {
    id: 'surface-a-groups',
    title: 'Surface A — Groups sub-tab (no permission dropdown)',
    props: {
      initialSurface: 'share-specific-users',
      initialShareSubTab: 'groups',
      orgAccounts: ORG_ACCOUNTS,
      users: USERS_NO_ADMIN,
      totalUsersStat: 3,
      activeUsersStat: 1,
      inactiveUsersStat: 0,
      availableUsersStat: 2,
    },
  },
  {
    id: 'surface-a-all-users',
    title: 'Surface A — All Users sub-tab (no permission dropdown)',
    props: {
      initialSurface: 'share-specific-users',
      initialShareSubTab: 'all-users',
      orgAccounts: ORG_ACCOUNTS,
      orgName: 'zohoforms',
      users: USERS_NO_ADMIN,
      totalUsersStat: 3,
      activeUsersStat: 1,
      inactiveUsersStat: 0,
      availableUsersStat: 2,
    },
  },
  {
    id: 'surface-b-trial-org-no-admin',
    title: 'Surface B — Setup → Users (trial org, 0 Admins, matches source: 3/1/0/2)',
    props: {
      initialSurface: 'setup-users',
      orgAccounts: ORG_ACCOUNTS,
      users: USERS_NO_ADMIN,
      totalUsersStat: 3,
      activeUsersStat: 1,
      inactiveUsersStat: 0,
      availableUsersStat: 2,
    },
  },
  {
    id: 'surface-b-with-admin',
    title: 'Surface B — Setup → Users (an Admin exists)',
    props: {
      initialSurface: 'setup-users',
      orgAccounts: ORG_ACCOUNTS,
      users: USERS_WITH_ADMIN,
      totalUsersStat: 3,
      activeUsersStat: 3,
      inactiveUsersStat: 0,
      availableUsersStat: 0,
    },
  },
];
