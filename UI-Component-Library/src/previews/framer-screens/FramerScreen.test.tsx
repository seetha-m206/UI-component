import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vitest';
import { framerScreenPreviews } from './registry';
import { FramerScreen } from './FramerScreen';
import { allComponents } from '../../utils/loadComponents';
import { previewRegistry } from '../registry';
import { sourceRegistry } from '../sourceRegistry';

afterEach(cleanup);
describe('Framer screen preview and evidence completeness', () => {
  for (const [id, entry] of Object.entries(framerScreenPreviews)) {
    if (entry.type !== 'reconstructed') continue;
    it.each(entry.fixtures)(`${id} $id renders`, fixture => {
      render(<entry.Component {...fixture.props} />);
      expect(screen.getByText('RECONSTRUCTION · fictional data')).toBeInTheDocument();
    });
  }
  it.each(allComponents.filter(c => c.brand === 'framer'))('$id has preview, props, code, rules, accessibility and linked evidence', entry => {
    expect(new Set(entry.sections.map(s => s.heading)).size).toBe(entry.sections.length);
    const preview = previewRegistry[entry.id];
    expect(preview?.type).toBe('reconstructed');
    if (preview?.type === 'reconstructed') expect(preview.propsSchema.length).toBeGreaterThan(0);
    expect(sourceRegistry[entry.id]?.files.some(f => f.fileName.endsWith('.tsx'))).toBe(true);
    expect(entry.sections.some(s => s.heading === 'Rules & Validation')).toBe(true);
    expect(entry.sections.some(s => s.heading === 'Technical Data' && s.bodyMarkdown.includes('Accessibility'))).toBe(true);
    expect(entry.sections.some(s => s.heading === 'Sources' && s.bodyMarkdown.includes(`/research/framer/evidence/${entry.id}.html`))).toBe(true);
  });
  it('editor selection reveals inspector locally', async () => {
    render(<FramerScreen screen="editor" />);
    await userEvent.click(screen.getByRole('button', { name: 'Desktop · 25%' }));
    expect(screen.getByLabelText('Breakpoint width')).toBeInTheDocument();
  });
  it('workspace archive displays a distinct empty state', async () => {
    render(<FramerScreen screen="workspace" />);
    await userEvent.click(screen.getByRole('button', { name: 'Archive' }));
    expect(screen.getByText('No archived projects')).toBeInTheDocument();
  });
  it('settings sections render Fonts and Credits', async () => {
    render(<FramerScreen screen="settings" />);
    await userEvent.click(screen.getByRole('button', { name: 'Fonts' }));
    expect(screen.getByRole('button', { name: 'Add font information' })).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Credits' }));
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
  it('integration Code section does not execute scripts', async () => {
    render(<FramerScreen screen="integrations" />);
    await userEvent.click(screen.getByRole('button', { name: 'Code' }));
    await userEvent.click(screen.getByRole('button', { name: 'Add script information' }));
    expect(screen.getByRole('status')).toHaveTextContent('No provider request');
  });
});
