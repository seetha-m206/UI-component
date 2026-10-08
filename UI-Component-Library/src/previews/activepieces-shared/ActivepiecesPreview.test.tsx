import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ActivepiecesPreview } from './ActivepiecesPreview';
import { activepiecesIds, activepiecesPreviews } from './registry';

describe('ActivepiecesPreview', () => {
  it('registers every audited component exactly once', () => {
    expect(activepiecesIds).toHaveLength(104);
    expect(new Set(activepiecesIds).size).toBe(104);
    expect(Object.keys(activepiecesPreviews)).toHaveLength(104);
    for (const id of activepiecesIds) expect(activepiecesPreviews[id]).toBeDefined();
  });
  it('excludes observed account and project identifiers', () => {
    const { container } = render(<ActivepiecesPreview variant="application-shell" />);
    expect(container).not.toHaveTextContent('@centilio.com');
    expect(container).not.toHaveTextContent('g4j1EaSqNb3VDL0Ui5RWN');
    expect(container).toHaveTextContent('Northstar Lab');
  });
  it('keeps consequential MCP and plan actions disabled', () => {
    render(<ActivepiecesPreview variant="role-access-gate" />);
    expect(screen.getByRole('button', { name: 'Upgrade to Team' })).toBeDisabled();
  });
  it('shows local-only feedback for safe fixture interactions', async () => {
    const user = userEvent.setup();
    render(<ActivepiecesPreview variant="template-catalogue" />);
    await user.click(screen.getByRole('button', { name: /Daily briefing/i }));
    expect(screen.getByRole('status')).toHaveTextContent('fictional fixture');
  });
  it('keeps unobserved builder entry disabled', () => {
    render(<ActivepiecesPreview variant="flow-builder-boundary" />);
    expect(screen.getByRole('button', { name: 'Provider fixture required' })).toBeDisabled();
  });
});
