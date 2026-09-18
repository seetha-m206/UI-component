import { previewRegistry } from './registry';
import { allComponents } from '@utils/loadComponents';

describe('previewRegistry', () => {
  const ids = Object.keys(previewRegistry);

  it('has at least one registered preview', () => {
    expect(ids.length).toBeGreaterThan(0);
  });

  it.each(ids)('key "%s" resolves to a valid component', (id) => {
    const entry = previewRegistry[id];
    expect(typeof entry.Component).toBe('function');
  });

  it.each(ids)('key "%s" matches a real documented component id', (id) => {
    expect(allComponents.some((c) => c.id === id)).toBe(true);
  });

  it('static entries have at least one example, with unique titles (used as React keys)', () => {
    for (const [id, entry] of Object.entries(previewRegistry)) {
      if (entry.type === 'reconstructed') continue;
      expect(entry.examples.length, `no examples in "${id}"`).toBeGreaterThan(0);
      const titles = entry.examples.map((example) => example.title);
      expect(new Set(titles).size, `duplicate example titles in "${id}"`).toBe(titles.length);
    }
  });

  it('reconstructed entries have fixtures, viewports, and a props schema, with unique fixture ids', () => {
    for (const [id, entry] of Object.entries(previewRegistry)) {
      if (entry.type !== 'reconstructed') continue;
      expect(entry.fixtures.length, `no fixtures in "${id}"`).toBeGreaterThan(0);
      expect(entry.config.viewports.length, `no viewports in "${id}"`).toBeGreaterThan(0);
      // toggles may legitimately be empty for screen/dashboard-level components
      // (e.g. a "required" or even "disabled" axis doesn't fit a whole board view).
      expect(entry.propsSchema.length, `no propsSchema in "${id}"`).toBeGreaterThan(0);
      const ids = entry.fixtures.map((f) => f.id);
      expect(new Set(ids).size, `duplicate fixture ids in "${id}"`).toBe(ids.length);
    }
  });
});
