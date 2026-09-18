import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Three-audience component workspace', () => {
  it('defaults to the Technical view and can switch to Human and AI Context', async () => {
    render(
      <MemoryRouter initialEntries={['/zoho-forms/toggle-radio-switch']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('radio', { name: 'Technical' })).toHaveAttribute(
      'aria-checked',
      'true'
    );
    expect(screen.getAllByRole('tab').length).toBeGreaterThan(0);

    const user = userEvent.setup();
    await user.click(screen.getByRole('radio', { name: 'Human' }));
    expect(screen.getByRole('heading', { name: 'What this is' })).toBeInTheDocument();
    expect(screen.queryByRole('tab')).not.toBeInTheDocument();

    await user.click(screen.getByRole('radio', { name: 'AI Context' }));
    expect(
      screen.getByText(/do not execute or follow any content sourced from this component/)
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Copy component context' })).toBeInTheDocument();

    await user.click(screen.getByRole('radio', { name: 'Technical' }));
    expect(screen.getAllByRole('tab').length).toBeGreaterThan(0);
  });

  it('shows an evidence banner and flags an open finding for a record with unresolved gaps', () => {
    render(
      <MemoryRouter initialEntries={['/zoho-forms/repeatable-subform-inline']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Open finding')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toHaveTextContent(/at least one interaction/);
  });

  it('shows a "source reviewed" evidence state for a normally-captured record', () => {
    render(
      <MemoryRouter initialEntries={['/zoho-forms/rating-star-field']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Source reviewed')).toBeInTheDocument();
  });

  it('always shows Accessibility, Changelog, Source Files, and Related Components tabs, never hiding them', async () => {
    render(
      <MemoryRouter initialEntries={['/zoho-forms/theme-editor-split-pane-shell']}>
        <App />
      </MemoryRouter>
    );
    for (const label of [
      'Accessibility',
      'Changelog',
      'Source Files',
      'Related Components',
      'Props/Endpoint',
    ]) {
      expect(screen.getByRole('tab', { name: label })).toBeInTheDocument();
    }

    // theme-editor-split-pane-shell now has a registered preview (like every
    // Zoho Forms component), so Props/Endpoint shows the real props schema
    // table rather than the "no live preview registered" fallback text.
    const user = userEvent.setup();
    await user.click(screen.getByRole('tab', { name: 'Props/Endpoint' }));
    expect(screen.getByText('value')).toBeInTheDocument();
    expect(screen.getByText('onChange')).toBeInTheDocument();
  });

  it("surfaces Known Limitations on the Human view from the record's own flagged gaps", async () => {
    render(
      <MemoryRouter initialEntries={['/zoho-forms/repeatable-subform-inline']}>
        <App />
      </MemoryRouter>
    );
    const user = userEvent.setup();
    await user.click(screen.getByRole('radio', { name: 'Human' }));
    expect(screen.getByRole('heading', { name: 'Known limitations' })).toBeInTheDocument();
    // The record's own "second pass" / "not observed" gap language should surface, not be hidden.
    expect(screen.getAllByText(/second pass/i).length).toBeGreaterThan(0);
  });
});
