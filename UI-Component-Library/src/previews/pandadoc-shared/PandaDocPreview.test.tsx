import '@testing-library/jest-dom/vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PandaDocPreview, pandadocCatalogue } from './PandaDocPreview';

describe('PandaDocPreview', () => {
  it.each(pandadocCatalogue)('renders $id', ({ variant }) => {
    const { container } = render(<PandaDocPreview variant={variant} />);
    expect(container.firstElementChild).toBeInTheDocument();
  });

  it('keeps actions inside the fictional fixture', () => {
    render(<PandaDocPreview variant="dashboard-empty-state" />);
    fireEvent.click(screen.getAllByRole('button', { name: 'Open document creation' })[0]);
    expect(screen.getByRole('status')).toHaveTextContent('No provider request was made');
  });

  it('marks the provider write boundary in every registry fixture', () => {
    render(<PandaDocPreview variant="content-editor-field-palette" />);
    expect(screen.getByRole('status')).toHaveTextContent('fictional local fixture');
  });
});
