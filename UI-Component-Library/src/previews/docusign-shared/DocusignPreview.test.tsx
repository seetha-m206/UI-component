import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { DocusignPreview } from './DocusignPreview';
import { docusignEntries, docusignIds } from './registry';

describe('DocusignPreview', () => {
  it('registers and renders every variant', () => {
    expect(docusignIds).toHaveLength(27);
    for (const [, variant] of docusignEntries) {
      const { container } = render(<DocusignPreview variant={variant} />);
      expect(container.textContent).toMatch(/fictional|signflow|Research services/i);
      cleanup();
    }
  });

  it('keeps provider-changing controls disabled', () => {
    render(<DocusignPreview variant="template-editor" />);
    expect(screen.getByRole('button', { name: 'Save and close' })).toBeDisabled();
  });

  it('closes the local-only agreement filter panel', async () => {
    const user = userEvent.setup();
    render(<DocusignPreview variant="agreements-filters" />);
    expect(screen.getByRole('heading', { name: 'Filters' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(screen.queryByRole('heading', { name: 'Filters' })).not.toBeInTheDocument();
  });

  it('uses only fictional identity in profile reconstruction', () => {
    render(<DocusignPreview variant="profile-menu" />);
    expect(screen.getByText('nadia@example.test')).toBeInTheDocument();
    expect(screen.queryByText(/centilio\.com/i)).not.toBeInTheDocument();
  });

  it('renders two persisted fictional drafts without enabling transmission', () => {
    render(<DocusignPreview variant="draft-envelope-table" />);
    expect(screen.getByText('Fictional sample change order')).toBeInTheDocument();
    expect(screen.getByText('Fictional sample service approval')).toBeInTheDocument();
    for (const button of screen.getAllByRole('button', { name: 'Continue' })) {
      expect(button).toBeDisabled();
    }
  });

  it('shows ordered fictional recipients and keeps next disabled', () => {
    render(<DocusignPreview variant="recipient-routing" />);
    expect(screen.getByText('Morgan Vale')).toBeInTheDocument();
    expect(screen.getByText('Jordan Lee')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Next: Add fields' })).toBeDisabled();
  });
});
