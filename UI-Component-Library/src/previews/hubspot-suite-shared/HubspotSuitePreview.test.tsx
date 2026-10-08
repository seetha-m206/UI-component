import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vitest';
import { allComponents } from '../../utils/loadComponents';
import { previewRegistry } from '../registry';
import { sourceRegistry } from '../sourceRegistry';
import { hubspotSuiteIds, hubspotSuiteRecords } from './registry';

afterEach(() => cleanup());

describe('HubSpot complete preview registry', () => {
  it('registers every HubSpot catalogue record and exposes source files', () => {
    const records = allComponents.filter(
      (entry) => entry.brand.startsWith('hubspot-') && !entry.id.includes('-audit-')
    );
    expect(records).toHaveLength(101);
    expect(hubspotSuiteIds).toHaveLength(71);

    for (const record of records) {
      const preview = previewRegistry[record.id];
      expect(preview, `${record.brand}/${record.id} preview`).toBeDefined();
      expect(sourceRegistry[record.id]?.files.length, `${record.id} source files`).toBeGreaterThan(
        0
      );
    }
  });

  it('gives every new suite record concrete fictional data and multiple states', () => {
    expect(hubspotSuiteRecords).toHaveLength(71);
    expect(
      hubspotSuiteRecords.filter((record) => record.brand === 'hubspot-sales-hub')
    ).toHaveLength(15);

    for (const record of hubspotSuiteRecords) {
      expect(record.fields.length, `${record.id} fields`).toBeGreaterThanOrEqual(2);
      expect(
        record.fields.some((field) => /status|state|entitlement/i.test(field.key)),
        `${record.id} status`
      ).toBe(true);
      const preview = previewRegistry[record.id];
      expect(preview.type).toBe('reconstructed');
      if (preview.type === 'reconstructed') {
        expect(preview.fixtures.length, `${record.id} fixtures`).toBeGreaterThanOrEqual(2);
        expect(preview.runtimeVerified).toBe(true);
      }
    }
  });

  it('renders every fixture for all 101 HubSpot preview entries', () => {
    const records = allComponents.filter(
      (entry) => entry.brand.startsWith('hubspot-') && !entry.id.includes('-audit-')
    );
    let renderedFixtures = 0;

    for (const record of records) {
      const preview = previewRegistry[record.id];
      if (preview.type === 'reconstructed') {
        for (const fixture of preview.fixtures) {
          const { unmount } = render(<preview.Component {...fixture.props} />);
          expect(
            document.body.textContent?.trim().length,
            `${record.id}/${fixture.id}`
          ).toBeGreaterThan(0);
          renderedFixtures += 1;
          unmount();
        }
      } else {
        for (const example of preview.examples) {
          const { unmount } = render(<preview.Component {...example.props} />);
          expect(
            document.body.textContent?.trim().length,
            `${record.id}/${example.title}`
          ).toBeGreaterThan(0);
          renderedFixtures += 1;
          unmount();
        }
      }
    }

    expect(renderedFixtures).toBe(200);
  });

  it('keeps suite actions and filtering inside the fictional local renderer', async () => {
    const user = userEvent.setup();
    const preview = previewRegistry['hubspot-development-overview'];
    expect(preview.type).toBe('reconstructed');
    if (preview.type !== 'reconstructed') return;

    render(<preview.Component {...preview.fixtures[0].props} />);
    await user.click(screen.getByRole('button', { name: 'Create new' }));
    expect(screen.getByRole('status')).toHaveTextContent('was not sent to HubSpot');

    await user.type(
      screen.getByRole('textbox', { name: 'Filter fictional fixture properties' }),
      'no-match-value'
    );
    await user.click(screen.getByRole('radio', { name: 'Table' }));
    expect(
      screen.getByText('No fictional fixture properties match this search.')
    ).toBeInTheDocument();
  });
});
