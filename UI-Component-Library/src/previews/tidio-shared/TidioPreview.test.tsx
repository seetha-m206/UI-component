import '@testing-library/jest-dom/vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { TidioPreview, tidioVariants } from './TidioPreview';

describe('TidioPreview', () => {
  it.each(tidioVariants)('renders the %s fixture', (variant) => {
    const { container } = render(<TidioPreview variant={variant} />);
    expect(container.firstElementChild).toBeInTheDocument();
  });

  it('keeps write-shaped actions inside the local fixture', () => {
    render(<TidioPreview variant="provider-action-boundaries" />);
    fireEvent.click(screen.getByRole('button', { name: 'Save settings' }));
    expect(screen.getByRole('status')).toHaveTextContent(
      'Save settings stayed inside this fictional fixture.'
    );
  });

  it('keeps activation disabled when prerequisites are absent', () => {
    render(<TidioPreview variant="lyro-channels" />);
    expect(screen.getByRole('button', { name: 'Activate Lyro' })).toBeDisabled();
  });
});
