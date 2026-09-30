import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SimilarwebOnboardingWorkspace } from './SimilarwebOnboardingWorkspace';

describe('SimilarwebOnboardingWorkspace', () => {
  it('reconstructs the observed step-four access gate', () => {
    render(<SimilarwebOnboardingWorkspace />);
    expect(screen.getByText('4/11')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'What’s your job title?' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Next/ })).toBeDisabled();
  });
});
