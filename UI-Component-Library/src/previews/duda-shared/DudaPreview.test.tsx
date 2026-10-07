import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DudaPreview } from './DudaPreview';
import { dudaPreviews } from './registry';
import { dudaDefinitions } from './catalogue';
import { sourceRegistry } from '../sourceRegistry';

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});
describe('Duda evidence and fixture completeness', () => {
  it('has an independent registered preview, source and state provenance for every record', () => {
    expect(dudaDefinitions).toHaveLength(56);
    expect(new Set(dudaDefinitions.map((d) => d.id)).size).toBe(56);
    for (const def of dudaDefinitions) {
      const entry = dudaPreviews[def.id];
      expect(entry.type).toBe('reconstructed');
      if (entry.type !== 'reconstructed') continue;
      expect(entry.fixtures.length).toBeGreaterThanOrEqual(2);
      expect(entry.propsSchema.map((p) => p.name)).toContain('initialState');
      expect(def.evidence[0].sha256).toMatch(/^[0-9a-f]{64}$/);
      expect(def.evidence[0].snapshots.length).toBeGreaterThan(0);
      expect(def.states.every((s) => s.provenance !== 'OBSERVED_STRUCTURE' || !!s.evidence)).toBe(
        true
      );
      expect(sourceRegistry[def.id].files.some((f) => f.fileName.endsWith('DudaPreview.tsx'))).toBe(
        true
      );
      expect(sourceRegistry[def.id].files.some((f) => f.fileName.endsWith('catalogue.ts'))).toBe(
        true
      );
      expect(sourceRegistry[def.id].files.some((f) => f.fileName.endsWith('duda.module.css'))).toBe(
        true
      );
    }
  });
  for (const [id, entry] of Object.entries(dudaPreviews)) {
    if (entry.type !== 'reconstructed') continue;
    it.each(entry.fixtures)(`${id}: $id mounts without provider requests`, (fixture) => {
      const network = vi.fn(() => {
        throw new Error('Provider network forbidden in fixture');
      });
      vi.stubGlobal('fetch', network);
      render(<entry.Component {...fixture.props} />);
      expect(screen.getByText('RECONSTRUCTION · fictional local fixture')).toBeInTheDocument();
      expect(document.querySelector(`[data-duda-component="${id}"]`)).toBeInTheDocument();
      expect(network).not.toHaveBeenCalled();
      if (fixture.id === 'disabled') {
        expect(document.querySelector('fieldset')).toBeDisabled();
        for (const button of screen.queryAllByRole('button')) expect(button).toBeDisabled();
      }
    });
  }
});
describe('Duda local behavior and false-success paths', () => {
  it('disclosure selects locally, closes, and restores focus on Escape', async () => {
    const user = userEvent.setup();
    render(<DudaPreview componentId="duda-project-action-menu" />);
    await user.click(screen.getByRole('menuitem', { name: /Rename Project/ }));
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent('No Duda request');
    const trigger = screen.getByRole('button', { name: /Rename Project/ });
    await user.click(trigger);
    fireEvent.keyDown(screen.getByRole('menu'), { key: 'Escape' });
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });
  it('collection search preserves rows and Clear restores saved fictional data', async () => {
    const user = userEvent.setup();
    render(<DudaPreview componentId="duda-internal-collection-editor" />);
    await user.type(screen.getByLabelText('Search by'), 'absent');
    expect(screen.getByText('No matching rows')).toBeInTheDocument();
    expect(screen.getByText('2 items')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Clear' }));
    expect(screen.getByText('maple-inspection')).toBeInTheDocument();
  });
  it('invalid field save does not claim success or replace the original schema', async () => {
    const user = userEvent.setup();
    render(<DudaPreview componentId="duda-internal-collection-editor" />);
    await user.click(screen.getByRole('button', { name: 'Add New Field' }));
    await user.clear(screen.getByLabelText('Field name'));
    await user.click(screen.getByRole('button', { name: 'Save field' }));
    expect(screen.getByRole('alert')).toHaveTextContent('HTTP 400');
    expect(screen.getByRole('columnheader', { name: 'Service label' })).toBeInTheDocument();
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Add New Field' }));
    await user.clear(screen.getByLabelText('Field name'));
    await user.type(screen.getByLabelText('Field name'), 'Research label');
    await user.click(screen.getByRole('button', { name: 'Save field' }));
    expect(screen.getByRole('columnheader', { name: 'Research label' })).toBeInTheDocument();
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });
  it('row dialog writes only to local state, and an added row increases count', async () => {
    const user = userEvent.setup();
    render(<DudaPreview componentId="duda-collection-row-editor" initialState="populated" />);
    await user.click(screen.getByRole('button', { name: 'Edit row 2' }));
    await user.clear(screen.getByLabelText('Service label'));
    await user.type(screen.getByLabelText('Service label'), 'Local revised label');
    await user.click(within(screen.getByRole('dialog')).getByRole('button', { name: 'Close' }));
    expect(screen.getByText('Local revised label')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Add Row' }));
    expect(screen.getByText('3 items')).toBeInTheDocument();
  });
  it('default role permissions stay read-only while permission search is usable', async () => {
    render(<DudaPreview componentId="duda-default-role-dialog" />);
    expect(screen.getByLabelText('Blog')).toBeChecked();
    expect(screen.getByLabelText('Blog')).toBeDisabled();
    await userEvent.type(screen.getByLabelText('Search permissions'), 'Blog');
    expect(screen.queryByLabelText('Editor')).not.toBeInTheDocument();
    expect(screen.getByLabelText('Blog')).toBeInTheDocument();
  });
  it('SEO filtered success cannot erase missing metadata evidence', async () => {
    render(<DudaPreview componentId="duda-page-seo-metadata-table" />);
    expect(screen.getByLabelText('Home SEO title')).toHaveValue('');
    await userEvent.click(screen.getByRole('button', { name: 'Needs Attention (0)' }));
    expect(screen.getByText(/not overall site health/)).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'All Pages' }));
    expect(screen.getByLabelText('Home SEO title')).toHaveValue('');
  });
  it('required validation prevents a local creation success', async () => {
    render(<DudaPreview componentId="duda-site-creation-dialog" initialState="validation" />);
    await userEvent.click(screen.getByRole('button', { name: 'Start Building' }));
    expect(screen.getByRole('alert')).toHaveTextContent('name is required');
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });
  it('submission text is configuration and Tracking never executes pasted code', async () => {
    const network = vi.fn();
    vi.stubGlobal('fetch', network);
    render(<DudaPreview componentId="duda-form-submission-configuration" />);
    expect((screen.getByLabelText('Thank you message') as HTMLTextAreaElement).value).toContain(
      'Thank you'
    );
    await userEvent.click(screen.getByRole('button', { name: 'Tracking' }));
    fireEvent.change(screen.getByLabelText('Form conversion code'), {
      target: { value: 'fetch("https://provider.invalid")' },
    });
    expect(network).not.toHaveBeenCalled();
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });
  it('device selection updates width without publication', async () => {
    render(<DudaPreview componentId="duda-site-responsive-preview" />);
    await userEvent.click(screen.getByRole('button', { name: 'Mobile' }));
    expect(screen.getByLabelText('Width')).toHaveValue(413);
    await userEvent.click(screen.getByRole('button', { name: 'Publish' }));
    expect(screen.getByRole('status')).toHaveTextContent('local simulation only');
  });
  it('numeric fixture can clear its fictional value without affecting text data', async () => {
    render(<DudaPreview componentId="duda-collection-row-editor" initialState="number-decimal" />);
    expect(screen.getByLabelText('Research count')).toHaveValue(-1.5);
    fireEvent.change(screen.getByLabelText('Research count'), { target: { value: '' } });
    expect(screen.getByLabelText('Research count')).toHaveValue(null);
    expect(screen.getByLabelText('Service label')).toHaveValue('Fictional roof inspection');
  });
  it('dynamic binding shows collection data and an empty first item', async () => {
    render(<DudaPreview componentId="duda-dynamic-page-binding" initialState="options" />);
    await userEvent.click(screen.getByRole('button', { name: /^Connect$/ }));
    expect(screen.getByLabelText('Bound text')).toHaveTextContent('Fictional roof inspection');
    await userEvent.selectOptions(screen.getByLabelText('Item'), '1');
    expect(screen.getByLabelText('Bound text')).toBeEmptyDOMElement();
  });
  it('existing collection escapes the new collection plan restriction', async () => {
    render(<DudaPreview componentId="duda-dynamic-page-binding" initialState="plan-gate" />);
    expect(screen.getByRole('button', { name: 'Add Page' })).toBeDisabled();
    await userEvent.selectOptions(
      screen.getByLabelText('Connect to a collection'),
      'Maple Research Services'
    );
    expect(screen.getByRole('button', { name: 'Add Page' })).toBeEnabled();
  });
  it('widget no-match results recover through Clear', async () => {
    render(<DudaPreview componentId="duda-widget-search-empty" initialState="empty" />);
    expect(screen.getByText('No Result for')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Clear' }));
    expect(screen.queryByRole('button', { name: 'Contact Form' })).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Form' }));
    expect(screen.getByRole('button', { name: 'Contact Form' })).toBeInTheDocument();
  });
});
