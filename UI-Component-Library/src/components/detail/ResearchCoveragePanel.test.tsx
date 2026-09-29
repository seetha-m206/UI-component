import { render, screen } from '@testing-library/react';
import { ResearchCoveragePanel, type CoverageItem } from './ResearchCoveragePanel';

const ITEMS: CoverageItem[] = [
  { label: 'Overview', ready: true },
  { label: 'Rules', ready: true },
  { label: 'Technical Data', ready: false },
  { label: 'Sources', ready: false },
];

describe('ResearchCoveragePanel', () => {
  it('renders the category, product, status, and verified-date facts', () => {
    render(
      <ResearchCoveragePanel
        category="Forms > Dropdown"
        product="Zoho Forms"
        status="partial"
        lastVerified="2026-09-28"
        items={ITEMS}
      />
    );
    expect(screen.getByLabelText('Research coverage')).toBeInTheDocument();
    expect(screen.getByText('Forms > Dropdown')).toBeInTheDocument();
    expect(screen.getByText('Zoho Forms')).toBeInTheDocument();
    expect(screen.getByText('2026-09-28')).toBeInTheDocument();
    expect(screen.getByText('partial')).toBeInTheDocument();
  });

  it('computes the coverage ring and caption as ready-count over total', () => {
    render(
      <ResearchCoveragePanel
        category="Forms"
        product="Zoho Forms"
        status="partial"
        lastVerified="2026-09-28"
        items={ITEMS}
      />
    );
    expect(screen.getByText('2/4')).toBeInTheDocument();
    expect(screen.getByText('50%')).toBeInTheDocument();
    const ring = screen.getByRole('progressbar', { name: 'Captured evidence' });
    expect(ring).toHaveAttribute('aria-valuenow', '2');
    expect(ring).toHaveAttribute('aria-valuemax', '4');
  });

  it('renders every item as a chip with its ready state reflected via data-ready', () => {
    render(
      <ResearchCoveragePanel
        category="Forms"
        product="Zoho Forms"
        status="partial"
        lastVerified="2026-09-28"
        items={ITEMS}
      />
    );
    expect(screen.getByText('Overview')).toHaveAttribute('data-ready', 'true');
    expect(screen.getByText('Sources')).toHaveAttribute('data-ready', 'false');
  });

  it('shows 0/0 and 0% without dividing by zero when given no items', () => {
    render(
      <ResearchCoveragePanel
        category="Forms"
        product="Zoho Forms"
        status="incomplete"
        lastVerified="2026-09-28"
        items={[]}
      />
    );
    expect(screen.getByText('0/0')).toBeInTheDocument();
    expect(screen.getByText('0%')).toBeInTheDocument();
  });

  it('shows the complete status pill when every item is ready', () => {
    render(
      <ResearchCoveragePanel
        category="Forms"
        product="Zoho Forms"
        status="complete"
        lastVerified="2026-09-28"
        items={[{ label: 'Overview', ready: true }]}
      />
    );
    expect(screen.getByText('complete')).toHaveClass('pill--complete');
    expect(screen.getByText('100%')).toBeInTheDocument();
  });
});
