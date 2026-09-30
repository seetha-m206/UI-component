import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsWelcomeLearningPanel } from './AhrefsWelcomeLearningPanel';
describe('AhrefsWelcomeLearningPanel', () => {
  it('dismisses locally and guards resource navigation', () => {
    render(<AhrefsWelcomeLearningPanel />);
    fireEvent.click(screen.getByRole('button', { name: /Ahrefs SEO hub/ }));
    expect(screen.getByRole('status')).toHaveTextContent('needs live verification');
    fireEvent.click(screen.getByRole('button', { name: 'Dismiss welcome resources' }));
    expect(screen.getByRole('button', { name: 'Show learning resources' })).toBeInTheDocument();
  });
});
