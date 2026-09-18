import { render, screen } from '@testing-library/react';
import { PreviewBoundary } from './PreviewBoundary';

function Throws(): never {
  throw new Error('boom');
}

describe('PreviewBoundary', () => {
  it('renders children normally when there is no error', () => {
    render(
      <PreviewBoundary componentName="Test Component" exampleTitle="Default">
        <div>hello</div>
      </PreviewBoundary>
    );
    expect(screen.getByText('hello')).toBeInTheDocument();
  });

  it('shows a visible fallback and logs the error when a child throws', () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <PreviewBoundary componentName="Test Component" exampleTitle="Broken">
        <Throws />
      </PreviewBoundary>
    );

    expect(screen.getByRole('alert')).toHaveTextContent('Preview failed to load');
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      expect.stringContaining('"Test Component" example "Broken" failed to render'),
      expect.any(Error),
      expect.anything()
    );

    consoleErrorSpy.mockRestore();
  });
});
