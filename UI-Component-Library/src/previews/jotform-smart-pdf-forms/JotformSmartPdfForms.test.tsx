import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { JotformSmartPdfForms } from './JotformSmartPdfForms';

describe('JotformSmartPdfForms', () => {
  it('clicking "Upload a Document" shows all 4 pipeline steps immediately', async () => {
    const user = userEvent.setup();
    // A very large delay means none of the 4 step timers can fire during
    // this test, so there's no race between this assertion and the pipeline
    // completing (which switches mode to BUILD and unmounts this list) —
    // see the sibling "lands on BUILD" test below for that transition,
    // asserted via the deterministic initialMode="build" fixture path
    // instead of waiting through real timers.
    render(<JotformSmartPdfForms stepDelayMs={60_000} />);

    expect(screen.getByRole('tab', { name: 'UPLOAD', selected: true })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Upload a Document' }));

    // All 4 step labels mount together as soon as the pipeline starts —
    // only their done/current styling advances per step, not their
    // presence — so they're assertable immediately, no need to wait.
    expect(screen.getByText('Processing your document')).toBeInTheDocument();
    expect(screen.getByText('Detecting fields and content')).toBeInTheDocument();
    expect(screen.getByText('Building your online form')).toBeInTheDocument();
    expect(screen.getByText('Finalizing everything…')).toBeInTheDocument();
  });

  it('lands on BUILD with the generated form once conversion completes', () => {
    // Exercises the post-pipeline state directly via the fixture path
    // (same approach as the other fixture-seeded tests in this file)
    // rather than waiting through real setTimeout delays.
    render(<JotformSmartPdfForms initialMode="build" initialFormGenerated />);
    expect(screen.getByRole('tab', { name: 'BUILD', selected: true })).toBeInTheDocument();
    expect(screen.getByText('Coffee Club Membership Signup')).toBeInTheDocument();
  });

  it('shows a compound Full Name field with First Name / Last Name sub-inputs', () => {
    render(<JotformSmartPdfForms initialMode="build" initialFormGenerated />);
    const group = screen.getByRole('group', { name: 'Full Name' });
    expect(within(group).getByLabelText('First Name')).toBeInTheDocument();
    expect(within(group).getByLabelText('Last Name')).toBeInTheDocument();
  });

  it('merges the two source checkbox lines into ONE Checkbox field, not two separate fields', () => {
    render(<JotformSmartPdfForms initialMode="build" initialFormGenerated />);

    const checkboxGroups = screen.getAllByRole('group').filter((g) => g.tagName === 'FIELDSET');
    const checkboxField = screen.getByRole('group', { name: 'Checkbox' });

    // Only one fieldset is the merged Checkbox field — the other is Full Name.
    expect(checkboxGroups).toHaveLength(2);
    expect(within(checkboxField).getAllByRole('checkbox')).toHaveLength(2);
    expect(
      within(checkboxField).getByLabelText('Sign me up for the weekly newsletter')
    ).toBeInTheDocument();
    expect(
      within(checkboxField).getByLabelText('I agree to the Terms & Conditions')
    ).toBeInTheDocument();

    // There must be no separate, independent group for either checkbox label.
    expect(
      screen.queryByRole('group', { name: 'Sign me up for the weekly newsletter' })
    ).not.toBeInTheDocument();
  });

  it('clicking Preview PDF shows the re-merged full name and the signature timestamp stamp', async () => {
    const user = userEvent.setup();
    render(
      <JotformSmartPdfForms
        initialMode="build"
        initialFormGenerated
        initialValues={{ firstName: 'Jordan', lastName: 'Rivera', signed: true }}
      />
    );

    await user.click(screen.getByRole('button', { name: 'Preview PDF' }));

    expect(screen.getByText('Full Name: Jordan Rivera')).toBeInTheDocument();
    expect(screen.getByText(/^Signed at: /)).toBeInTheDocument();
  });

  it('opens directly on the Preview PDF view when initialView is "preview"', () => {
    render(
      <JotformSmartPdfForms
        initialMode="build"
        initialFormGenerated
        initialView="preview"
        initialValues={{ firstName: 'Jordan', lastName: 'Rivera', signed: true }}
      />
    );
    expect(screen.getByText('Full Name: Jordan Rivera')).toBeInTheDocument();
    expect(screen.getByText(/^Signed at: /)).toBeInTheDocument();
  });

  it('returning from Preview PDF to the live form clears the drawn signature (confirmed friction point)', async () => {
    const user = userEvent.setup();
    render(
      <JotformSmartPdfForms
        initialMode="build"
        initialFormGenerated
        initialView="preview"
        initialValues={{ firstName: 'Jordan', lastName: 'Rivera', signed: true }}
      />
    );

    await user.click(screen.getByRole('button', { name: 'Back to Form' }));
    expect(screen.getByRole('button', { name: '✍ Click to draw your signature' })).toBeInTheDocument();
  });

  it('BUILD/SETTINGS/PUBLISH tabs are disabled before a document has been converted', () => {
    render(<JotformSmartPdfForms />);
    expect(screen.getByRole('tab', { name: 'BUILD' })).toBeDisabled();
    expect(screen.getByRole('tab', { name: 'SETTINGS' })).toBeDisabled();
    expect(screen.getByRole('tab', { name: 'PUBLISH' })).toBeDisabled();
  });

  it('disables every control when disabled is true', () => {
    render(<JotformSmartPdfForms initialMode="build" initialFormGenerated disabled />);
    expect(screen.getByRole('button', { name: 'Preview PDF' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeDisabled();
    screen.getAllByRole('checkbox').forEach((box) => expect(box).toBeDisabled());
  });
});
