import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GoogleFormsResponsesView } from './GoogleFormsResponsesView';

describe('GoogleFormsResponsesView', () => {
  it('renders the Summary tab by default with per-question chart types', () => {
    render(<GoogleFormsResponsesView />);
    expect(screen.getByRole('tab', { name: 'Summary', selected: true })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /Pie chart/ })).toBeInTheDocument();
    expect(screen.getByText(/Great experience overall/)).toBeInTheDocument();
    expect(screen.getByText(/No chart for open-text answers/)).toBeInTheDocument();
  });

  it('confirms the per-question-answered count quirk: Multiple choice shows 4 responses, Feedback/Satisfaction show 2', () => {
    render(<GoogleFormsResponsesView reproduceNetworkLog={false} />);
    expect(screen.getByText('4 responses')).toBeInTheDocument();
    expect(screen.getAllByText('2 responses')).toHaveLength(2);
  });

  it('logs the confirmed distinct on-demand fetch for each tab, not one shared load', async () => {
    const user = userEvent.setup();
    render(<GoogleFormsResponsesView />);
    expect(screen.getByText(/aggregatestatistics/)).toBeInTheDocument();
    await user.click(screen.getByRole('tab', { name: 'Question' }));
    expect(screen.getByText(/getresponseclusters/)).toBeInTheDocument();
    await user.click(screen.getByRole('tab', { name: 'Individual' }));
    expect(screen.getByText(/getsingleresponse/)).toBeInTheDocument();
    // all three log entries persist -- confirms three separate fetches, not one replaced load
    expect(screen.getByText(/aggregatestatistics/)).toBeInTheDocument();
    expect(screen.getByText(/getresponseclusters/)).toBeInTheDocument();
  });

  it('Individual tab: a response that predates a question renders it blank, not hidden', async () => {
    const user = userEvent.setup();
    render(<GoogleFormsResponsesView initialTab="individual" reproduceNetworkLog={false} />);
    expect(screen.getAllByText(/predates this question/).length).toBeGreaterThan(0);
    await user.click(screen.getByRole('button', { name: 'Next response' }));
    expect(screen.queryByText(/predates this question/)).not.toBeInTheDocument();
  });

  it('Individual tab: jump-to-N field navigates directly to that response', async () => {
    const user = userEvent.setup();
    render(<GoogleFormsResponsesView initialTab="individual" reproduceNetworkLog={false} />);
    const jumpField = screen.getByLabelText('Jump to response number');
    await user.clear(jumpField);
    await user.type(jumpField, '3');
    expect(screen.getByLabelText('Previous response')).not.toBeDisabled();
    expect(screen.getByLabelText('Next response')).not.toBeDisabled();
    // Response 3 has real answers (not the blank-question fixture) -- confirms the jump actually moved
    expect(screen.queryByText(/predates this question/)).not.toBeInTheDocument();
  });

  it('Individual tab: points override and private feedback are both editable', async () => {
    const user = userEvent.setup();
    render(<GoogleFormsResponsesView initialTab="individual" reproduceNetworkLog={false} />);
    const pointsInput = screen.getByLabelText('Points');
    await user.clear(pointsInput);
    await user.type(pointsInput, '5');
    expect(pointsInput).toHaveValue('5');
    const feedbackInput = screen.getByLabelText('Add individual feedback');
    await user.type(feedbackInput, 'Nice answer');
    expect(feedbackInput).toHaveValue('Nice answer');
  });
});
