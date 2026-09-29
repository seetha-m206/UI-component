import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsAiContentGraderPlanGate } from './AhrefsAiContentGraderPlanGate';
describe('AhrefsAiContentGraderPlanGate', () => {
  it('renders the observed gate', () => {
    render(<AhrefsAiContentGraderPlanGate />);
    expect(screen.getByRole('heading', { name: 'AI Content Grader' })).toBeInTheDocument();
  });
});
