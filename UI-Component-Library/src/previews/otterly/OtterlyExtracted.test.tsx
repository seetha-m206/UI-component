import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { OtterlyExtracted } from './OtterlyExtracted';

describe('OtterlyAI fictional previews', () => {
  it('keeps competitor edits local and reversible', async () => {
    const user = userEvent.setup();
    render(<OtterlyExtracted variant="competitors" />);
    expect(screen.getByLabelText('Competitor 1 name')).toHaveValue('Orbit');
    await user.click(screen.getByRole('button', { name: 'Remove competitor Orbit' }));
    expect(screen.queryByDisplayValue('Orbit')).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /add competitor/i }));
    expect(screen.getAllByLabelText(/competitor \d name/i)).toHaveLength(2);
  });

  it('switches research modes without submitting a query', async () => {
    const user = userEvent.setup();
    render(<OtterlyExtracted variant="research" />);
    expect(screen.getByRole('textbox', { name: 'SEO keywords' })).toBeInTheDocument();
    await user.click(screen.getByRole('radio', { name: 'Specific URL' }));
    expect(screen.getByLabelText('URL')).toBeInTheDocument();
    expect(screen.queryByRole('textbox', { name: 'SEO keywords' })).not.toBeInTheDocument();
  });

  it('starts with audit submission disabled', () => {
    render(<OtterlyExtracted variant="audit" />);
    expect(screen.getByRole('button', { name: 'Start audit' })).toBeDisabled();
    expect(screen.getByText('No audits yet.')).toBeInTheDocument();
  });

  it('keeps response and citation evidence in the same fictional prompt context', async () => {
    const user = userEvent.setup();
    render(<OtterlyExtracted variant="detail" />);
    await user.click(screen.getByRole('tab', { name: 'Responses' }));
    expect(screen.getByText('Fictional example response with no provider claim.')).toBeInTheDocument();
    await user.click(screen.getByRole('tab', { name: 'Citations' }));
    expect(screen.getByText('https://orbit.example/guide')).toBeInTheDocument();
  });

  it('retains the selected coverage comparison scope', async () => {
    const user = userEvent.setup();
    render(<OtterlyExtracted variant="coverage" />);
    await user.click(screen.getByRole('button', { name: /Me \+ Top 5 competitors/ }));
    await user.click(screen.getByRole('menuitem', { name: 'Me + all competitors' }));
    expect(screen.getByRole('button', { name: /Me \+ all competitors/ })).toBeInTheDocument();
  });

  it('starts citation changes on Top and switches to Lost', async () => {
    const user = userEvent.setup();
    render(<OtterlyExtracted variant="citation-changes" />);
    expect(screen.getByRole('tab', { name: 'Top' })).toHaveAttribute('aria-selected', 'true');
    await user.click(screen.getByRole('tab', { name: 'Lost' }));
    expect(screen.getByRole('tab', { name: 'Lost' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('−1')).toBeInTheDocument();
  });

  it('filters fictional domains by category and restores them', async () => {
    const user = userEvent.setup();
    render(<OtterlyExtracted variant="source-categories" />);
    expect(screen.getByText('harbor.example')).toBeInTheDocument();
    await user.click(screen.getByRole('checkbox', { name: 'Brand' }));
    expect(screen.queryByText('harbor.example')).not.toBeInTheDocument();
    await user.click(screen.getByRole('checkbox', { name: 'Brand' }));
    expect(screen.getByText('harbor.example')).toBeInTheDocument();
  });

  it('keeps a pending citation trend separate from populated URL evidence', () => {
    render(<OtterlyExtracted variant="citation-trends" />);
    expect(screen.getByText('Top Winners')).toBeInTheDocument();
    expect(screen.getByText('Top Losers')).toBeInTheDocument();
    expect(screen.getByText(/cited URL table can be populated/)).toBeInTheDocument();
  });
});
