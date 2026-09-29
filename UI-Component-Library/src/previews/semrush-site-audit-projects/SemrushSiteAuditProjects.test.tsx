import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushSiteAuditProjects } from './SemrushSiteAuditProjects';

describe('SemrushSiteAuditProjects', () => {
  it('filters synthetic projects and restores the table from the empty state', async () => {
    render(<SemrushSiteAuditProjects />);
    const search = screen.getByRole('textbox', { name: 'Project name or domain' });
    await userEvent.type(search, 'no-match-example.invalid');
    expect(screen.getByRole('status')).toHaveTextContent(/Nothing found/i);
    await userEvent.click(screen.getByRole('button', { name: 'Show all projects' }));
    expect(screen.getByRole('gridcell', { name: /northstar\.example/i })).toBeInTheDocument();
  });

  it('toggles recency sort and exposes the crawl-limit dialog', async () => {
    render(<SemrushSiteAuditProjects />);
    await userEvent.click(screen.getByRole('button', { name: 'ascending' }));
    expect(screen.getByRole('button', { name: 'descending' })).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Pages crawled issue' }));
    expect(screen.getByRole('dialog', { name: 'Page crawl limit' })).toHaveTextContent(/5,000 \/5,000 pages/i);
  });

  it('shows a read-only settings menu and guards project creation locally', async () => {
    render(<SemrushSiteAuditProjects />);
    await userEvent.click(screen.getByRole('button', { name: 'Open settings for harbor.example project' }));
    const dialog = screen.getByRole('dialog', { name: 'Open settings for harbor.example project' });
    expect(within(dialog).getByText('Schedule: once')).toBeInTheDocument();
    expect(within(dialog).getByRole('checkbox')).toBeDisabled();

    await userEvent.click(screen.getByRole('button', { name: /Create SEO project/ }));
    await userEvent.type(screen.getByPlaceholderText('domain.com'), 'new.example');
    const createDialog = screen.getByRole('dialog', { name: 'Create SEO project' });
    await userEvent.click(within(createDialog).getByRole('button', { name: 'Create SEO project' }));
    expect(screen.getByRole('status')).toHaveTextContent(/No SEO project was created/i);
  });

  it('renders the observed no-results and creation-modal fixtures', () => {
    const { rerender } = render(<SemrushSiteAuditProjects initialState="no-results" />);
    expect(screen.getByRole('status')).toHaveTextContent(/did not match any projects/i);
    rerender(<SemrushSiteAuditProjects key="create-modal" initialState="create-modal" />);
    expect(screen.getByRole('dialog', { name: 'Create SEO project' })).toBeInTheDocument();
  });
});
