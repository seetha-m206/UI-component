import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { JotformWorkflowsWorkflowBuilder } from './JotformWorkflowsWorkflowBuilder';

describe('JotformWorkflowsWorkflowBuilder', () => {
  it('opens on the Start Point modal with Next disabled until a trigger is selected', async () => {
    const user = userEvent.setup();
    render(<JotformWorkflowsWorkflowBuilder />);

    expect(screen.getByRole('dialog', { name: 'Start Point' })).toBeInTheDocument();
    const next = screen.getByRole('button', { name: 'Next' });
    expect(next).toBeDisabled();

    await user.click(screen.getByRole('button', { name: /^Form/ }));
    expect(next).toBeEnabled();
    expect(screen.getByRole('button', { name: /^Form/ })).toHaveAttribute('aria-pressed', 'true');
  });

  it('shows NEW badges on Integrations, Email, and Webhook triggers but not Form or Schedule', () => {
    render(<JotformWorkflowsWorkflowBuilder />);
    const dialog = screen.getByRole('dialog', { name: 'Start Point' });
    const integrationsTile = within(dialog).getByRole('button', { name: /^Integrations/ });
    const formTile = within(dialog).getByRole('button', { name: /^Form/ });
    expect(within(integrationsTile).getByText('NEW')).toBeInTheDocument();
    expect(within(formTile).queryByText('NEW')).not.toBeInTheDocument();
  });

  it('picking Form then confirming a form + condition lands on the canvas with a START POINT node', async () => {
    const user = userEvent.setup();
    const onTriggerConfirm = vi.fn();
    render(<JotformWorkflowsWorkflowBuilder onTriggerConfirm={onTriggerConfirm} />);

    await user.click(screen.getByRole('button', { name: /^Form/ }));
    await user.click(screen.getByRole('button', { name: 'Next' }));

    expect(screen.getByRole('dialog', { name: 'Form start settings' })).toBeInTheDocument();
    const confirm = screen.getByRole('button', { name: 'Confirm' });
    expect(confirm).toBeDisabled();

    await user.selectOptions(screen.getByLabelText('Form'), 'Coffee Club Signup');
    expect(confirm).toBeEnabled();
    await user.selectOptions(screen.getByLabelText('When'), 'Once per respondent');
    await user.click(confirm);

    expect(onTriggerConfirm).toHaveBeenCalledWith({
      trigger: 'form',
      formName: 'Coffee Club Signup',
      condition: 'Once per respondent',
    });
    expect(screen.getByTestId('workflow-canvas')).toBeInTheDocument();
    expect(screen.getByTestId('start-point-node')).toHaveTextContent('Coffee Club Signup');
    expect(screen.getByTestId('start-point-node')).toHaveTextContent('Once per respondent');
  });

  it('a non-Form trigger proceeds directly from Start Point to the canvas', async () => {
    const user = userEvent.setup();
    render(<JotformWorkflowsWorkflowBuilder />);

    await user.click(screen.getByRole('button', { name: /^Schedule/ }));
    await user.click(screen.getByRole('button', { name: 'Next' }));

    expect(screen.getByTestId('workflow-canvas')).toBeInTheDocument();
    expect(screen.getByTestId('start-point-node')).toHaveTextContent('Schedule');
  });

  it('adding an element via "+ Add Element Here" chains a new visible node, and supports chaining a second one', async () => {
    const user = userEvent.setup();
    const onElementAdd = vi.fn();
    render(
      <JotformWorkflowsWorkflowBuilder
        initialStage="canvas"
        initialTrigger="form"
        initialFormName="Coffee Club Signup"
        initialCondition="For every submission"
        onElementAdd={onElementAdd}
      />
    );

    await user.click(screen.getByRole('button', { name: '+ Add Element Here' }));
    expect(screen.getByRole('listbox', { name: 'Workflow Elements' })).toBeInTheDocument();
    await user.click(screen.getByRole('option', { name: 'Approval' }));

    expect(onElementAdd).toHaveBeenCalledWith('Approval');
    expect(screen.getByTestId('step-node-0')).toHaveTextContent('Approval');
    expect(screen.queryByRole('listbox', { name: 'Workflow Elements' })).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: '+ Add Element Here' }));
    await user.click(screen.getByRole('option', { name: 'Email' }));

    expect(screen.getByTestId('step-node-0')).toHaveTextContent('Approval');
    expect(screen.getByTestId('step-node-1')).toHaveTextContent('Email');
  });

  it('pre-chained steps render in order when a fixture seeds initialSteps', () => {
    render(
      <JotformWorkflowsWorkflowBuilder
        initialStage="canvas"
        initialTrigger="form"
        initialFormName="Coffee Club Signup"
        initialSteps={['Approval', 'Email']}
      />
    );
    expect(screen.getByTestId('step-node-0')).toHaveTextContent('Approval');
    expect(screen.getByTestId('step-node-1')).toHaveTextContent('Email');
  });

  it('switching to SETTINGS and PUBLISH shows each mode its own sub-nav', async () => {
    const user = userEvent.setup();
    const onModeChange = vi.fn();
    render(<JotformWorkflowsWorkflowBuilder onModeChange={onModeChange} />);

    await user.click(screen.getByRole('tab', { name: 'SETTINGS' }));
    expect(onModeChange).toHaveBeenCalledWith('settings');
    expect(screen.getByLabelText('Settings navigation')).toBeInTheDocument();

    await user.click(screen.getByRole('tab', { name: 'PUBLISH' }));
    expect(onModeChange).toHaveBeenCalledWith('publish');
    expect(screen.getByLabelText('Publish navigation')).toBeInTheDocument();
    expect(screen.getByText('Quick Share')).toBeInTheDocument();
  });

  it('disables every interactive control when disabled', async () => {
    const user = userEvent.setup();
    render(<JotformWorkflowsWorkflowBuilder disabled />);

    await user.click(screen.getByRole('button', { name: /^Form/ }));
    expect(screen.getByRole('button', { name: 'Next' })).toBeDisabled();
    expect(screen.getByRole('button', { name: /^Form/ })).toBeDisabled();
  });

  it('never calls fetch/XHR across any interaction (fully client-side, per the source record)', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    render(<JotformWorkflowsWorkflowBuilder />);

    await user.click(screen.getByRole('button', { name: /^Form/ }));
    await user.click(screen.getByRole('button', { name: 'Next' }));
    await user.selectOptions(screen.getByLabelText('Form'), 'Coffee Club Signup');
    await user.click(screen.getByRole('button', { name: 'Confirm' }));
    await user.click(screen.getByRole('button', { name: '+ Add Element Here' }));
    await user.click(screen.getByRole('option', { name: 'Task' }));

    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
