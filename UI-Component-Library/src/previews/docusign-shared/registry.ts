import type { PreviewConfig, PreviewRegistry } from '../types';
import { DocusignPreview, type DocusignVariant } from './DocusignPreview';

const config: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 1180 },
    { id: 'narrow', label: 'Narrow', width: 390 },
  ],
  toggles: [],
};

export const docusignEntries: Array<[string, DocusignVariant, string]> = [
  ['docusign-application-shell', 'application-shell', 'Authenticated application shell'],
  ['docusign-home-empty-state', 'home-empty-state', 'Home first-envelope empty state'],
  ['docusign-start-menu', 'start-menu', 'Start menu'],
  ['docusign-agreements-sidebar', 'agreements-sidebar', 'Agreement navigation'],
  ['docusign-agreements-filters', 'agreements-filters', 'Agreement filter panel'],
  ['docusign-draft-envelope-table', 'draft-envelope-table', 'Saved draft envelope table'],
  ['docusign-envelope-setup', 'envelope-setup', 'Envelope setup form'],
  ['docusign-uploaded-document-card', 'uploaded-document-card', 'Uploaded document card'],
  ['docusign-recipient-routing', 'recipient-routing', 'Ordered recipient editor'],
  [
    'docusign-recipient-field-assignment',
    'recipient-field-assignment',
    'Recipient-specific field assignment',
  ],
  ['docusign-templates-empty-state', 'templates-empty-state', 'Template empty state'],
  ['docusign-template-gallery', 'template-gallery', 'Starter template gallery'],
  ['docusign-template-editor', 'template-editor', 'Template preparation editor'],
  ['docusign-field-palette', 'field-palette', 'Field placement palette'],
  ['docusign-editor-toolbar', 'editor-toolbar', 'Document editor toolbar'],
  ['docusign-reports-dashboard', 'reports-dashboard', 'Administrator report dashboard'],
  ['docusign-tasks-empty-state', 'tasks-empty-state', 'Task empty state'],
  ['docusign-admin-navigation', 'admin-navigation', 'Admin navigation'],
  ['docusign-admin-notifications', 'admin-notifications', 'Admin notifications'],
  ['docusign-users-table', 'users-table', 'Users table'],
  ['docusign-audit-log-table', 'audit-log-table', 'Audit log table'],
  ['docusign-signing-settings', 'signing-settings', 'Signing settings'],
  ['docusign-reminders-expiration', 'reminders-expiration', 'Reminders and expiration'],
  ['docusign-profile-menu', 'profile-menu', 'Profile menu'],
  ['docusign-help-menu', 'help-menu', 'Help menu'],
  ['docusign-table-pagination', 'table-pagination', 'Pagination footer'],
  ['docusign-loading-state', 'loading-state', 'Loading state'],
];

export const docusignIds = docusignEntries.map(([id]) => id);
export const docusignPreviews: PreviewRegistry = Object.fromEntries(
  docusignEntries.map(([id, variant, description]) => [
    id,
    {
      type: 'reconstructed' as const,
      Component: DocusignPreview,
      label: 'Authenticated-source reconstruction',
      runtimeVerified: true,
      evidence:
        'Authenticated DocuSign observation on 2026-10-09. The first pass was read-only. A later user-authorized bounded pass uploaded two explicitly fictional PDFs and saved two unsent drafts using reserved example.com recipients. Provider identity, account numbers, opaque IDs, private audit values, tokens and payloads are omitted.',
      fixtures: [{ id: 'default', title: description, props: { variant } }],
      config,
      propsSchema: [{ name: 'variant', type: 'DocusignVariant', required: true, description }],
    },
  ])
) as PreviewRegistry;
