import type { PreviewConfig, PreviewRegistry } from '../types';
import { MondayPreview, type MondayVariant } from './MondayPreview';
import { mondayLeafEntries } from './leafFixtures';

const config: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 1180 },
    { id: 'narrow', label: 'Narrow', width: 390 },
  ],
  toggles: [{ id: 'disabled', label: 'Fixture', onLabel: 'Disabled', offLabel: 'Enabled' }],
};

const entries: Array<[string, MondayVariant, string]> = [
  ['monday-application-shell', 'application-shell', 'Authenticated monday.com application shell'],
  ['monday-workspace-overview', 'workspace-overview', 'Workspace overview and content index'],
  ['monday-global-search', 'global-search', 'Global search overlay'],
  ['monday-board-table', 'board-table', 'Grouped project board table'],
  ['monday-board-controls', 'board-controls', 'Board filter, display and grouping controls'],
  ['monday-dashboard-reporting', 'dashboard-reporting', 'Connected-board reporting dashboard'],
  ['monday-ai-workflows-onboarding', 'ai-workflows-onboarding', 'AI workflow onboarding boundary'],
  ['monday-agent-directory', 'agent-directory', 'Agent prompt boundary and catalogue'],
  ['monday-vibe-app-builder', 'vibe-app-builder', 'Prompted app-builder entry'],
  [
    'monday-notetaker-onboarding',
    'notetaker-onboarding',
    'Meeting intelligence onboarding boundary',
  ],
  ...mondayLeafEntries.map(
    ({ id, variant, description }) => [id, variant, description] as [string, MondayVariant, string]
  ),
];

export const mondayIds = entries.map(([id]) => id);

export const mondayPreviews: PreviewRegistry = Object.fromEntries(
  entries.map(([id, variant, description]) => [
    id,
    {
      type: 'reconstructed' as const,
      Component: MondayPreview,
      label: 'Authenticated-source reconstruction',
      runtimeVerified: true,
      evidence:
        'Authenticated monday.com observation on 2026-10-08. Workspace identity, user identity, object IDs, dates, board names, query strings, payloads and provider screenshots are omitted or fictionalized. No create, edit, delete, invite, export, publish, install, prompt submission, upload, workflow execution, recording, purchase, permission, API or security change was exercised. Opening Board Options > AI suggestions automatically generated a preview. It was canceled and no column was added or board data saved.',
      fixtures: [{ id: 'default', title: description, props: { variant } }],
      config,
      propsSchema: [
        { name: 'variant', type: 'MondayVariant', required: true, description },
        {
          name: 'initialState',
          type: 'string',
          required: false,
          description: 'Reserved for documented fictional states.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          description: 'Marks the fixture disabled without contacting monday.com.',
        },
      ],
    },
  ])
);
