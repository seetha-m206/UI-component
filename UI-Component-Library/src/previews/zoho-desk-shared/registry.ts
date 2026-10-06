import type { PreviewConfig, PreviewRegistry } from '../types';
import { ZohoDeskPreview } from './ZohoDeskPreview';
import { zohoDeskComponents } from './catalogue';

const config: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 1120 },
    { id: 'narrow', label: 'Narrow', width: 390 },
  ],
  toggles: [{ id: 'disabled', label: 'Fixture', onLabel: 'Disabled', offLabel: 'Enabled' }],
};

export const zohoDeskPreviews: PreviewRegistry = Object.fromEntries(
  zohoDeskComponents.map((component) => [
    component.id,
    {
      type: 'reconstructed' as const,
      Component: ZohoDeskPreview,
      label: 'Authenticated observation reconstructed with fictional local data',
      evidence:
        'Authenticated Zoho Desk Tickets, knowledge, community, customer, analytics, activity, queue, notification, contract, social, chat, messaging, feed, tag and scheduled-reply screens observed 2026-10-06. These fixtures are local reconstructions. Provider submission, activation, upload, filtering, communication, deletion, settings and persistence remain unverified.',
      runtimeVerified: false,
      fixtures: component.states.map((state) => ({
        id: state.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        title: state,
        props: { componentId: component.id, initialState: state },
      })),
      config,
      propsSchema: [
        {
          name: 'componentId',
          type: 'string',
          required: true,
          description: `Selects the ${component.title.toLowerCase()} reconstruction.`,
        },
        {
          name: 'initialState',
          type: 'string',
          required: false,
          description: 'Starts the fixture in a documented local state.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          description: 'Disables the fictional fixture without affecting Zoho Desk.',
        },
      ],
    },
  ])
);
