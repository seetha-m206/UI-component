import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PaperformQuestionVisibilityLogic } from './PaperformQuestionVisibilityLogic';

describe('PaperformQuestionVisibilityLogic', () => {
  it('renders the rule modal open by default, with the confirmed real condition', () => {
    render(<PaperformQuestionVisibilityLogic />);
    expect(screen.getByRole('dialog', { name: /Configure Logic for Q3/ })).toBeInTheDocument();
    expect(screen.getByLabelText('Choose question')).toHaveValue('Q1 Do you like forms?');
  });

  it('clicking Done closes the modal and shows the "Configure Logic -> N condition(s)" summary', async () => {
    const user = userEvent.setup();
    const onDone = vi.fn();
    render(<PaperformQuestionVisibilityLogic onDone={onDone} />);
    await user.click(screen.getByRole('button', { name: 'Done' }));
    expect(onDone).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('button', { name: /Configure Logic → 1 condition/ })).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: /Question keeps answer when not visible/ })).toBeChecked();
  });

  it('Classic live preview: Q3 is unmounted until Q1 is Yes, and its typed value is retained across a hide cycle', async () => {
    const user = userEvent.setup();
    render(<PaperformQuestionVisibilityLogic initialTab="live-preview" />);
    expect(screen.getByText(/Q3 is not mounted in the DOM/)).toBeInTheDocument();
    await user.selectOptions(screen.getByLabelText('Q1 Do you like forms?'), 'Yes');
    const q3Input = screen.getByLabelText('Q3 Your name');
    await user.type(q3Input, 'Typed Name');
    await user.selectOptions(screen.getByLabelText('Q1 Do you like forms?'), 'No');
    expect(screen.getByText(/its value is retained/)).toBeInTheDocument();
    await user.selectOptions(screen.getByLabelText('Q1 Do you like forms?'), 'Yes');
    expect(screen.getByLabelText('Q3 Your name')).toHaveValue('Typed Name');
  });

  it('Guided live preview: the dependent screen is skipped entirely and the progress denominator recalculates', async () => {
    const user = userEvent.setup();
    render(<PaperformQuestionVisibilityLogic initialTab="live-preview" />);
    await user.click(screen.getByRole('radio', { name: 'One-at-a-time (Guided)' }));
    expect(screen.getByText('Step 1 of 4 (25%)')).toBeInTheDocument();
    await user.selectOptions(screen.getByRole('combobox'), 'No');
    await user.click(screen.getByRole('button', { name: 'Next' }));
    expect(screen.getByText('Step 2 of 3 (67%)')).toBeInTheDocument();
    expect(screen.getByText(/Q3's screen is skipped entirely/)).toBeInTheDocument();
  });

  it('Edge case: changing the referenced question\'s type shows no warning was ever given by the source product', async () => {
    const user = userEvent.setup();
    render(<PaperformQuestionVisibilityLogic initialTab="edge-cases" />);
    await user.click(screen.getByRole('button', { name: "Change Q1's type: Yes/No → Text" }));
    expect(screen.getByRole('alert')).toHaveTextContent(/no warning was shown/);
  });

  it('Edge case: deleting the referenced question orphans the rule instantly with no confirmation', async () => {
    const user = userEvent.setup();
    render(<PaperformQuestionVisibilityLogic initialTab="edge-cases" />);
    await user.click(screen.getByRole('button', { name: /Delete Q1 via card gutter/ }));
    expect(screen.getByRole('alert')).toHaveTextContent(/silently orphaned/);
  });
});
