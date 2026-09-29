import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RespondentRuntimeGuidedVsStandard } from './RespondentRuntimeGuidedVsStandard';
import { fixtures } from './fixtures';

function getFixture(id: string) {
  const fixture = fixtures.find((f) => f.id === id);
  if (!fixture) throw new Error(`fixture not found: ${id}`);
  return fixture.props;
}

describe('RespondentRuntimeGuidedVsStandard', () => {
  it('guided mode shows only the first question, not all 4', () => {
    render(<RespondentRuntimeGuidedVsStandard {...getFixture('guided')} />);
    expect(screen.getByText('Excited to get started?')).toBeInTheDocument();
    expect(screen.queryByText('What should we call you?')).not.toBeInTheDocument();
    expect(screen.queryByText('Any other comments?')).not.toBeInTheDocument();
  });

  it('standard mode mounts all 4 questions at once with a single Submit at the end', () => {
    render(<RespondentRuntimeGuidedVsStandard {...getFixture('standard')} />);
    expect(screen.getByText('Excited to get started?')).toBeInTheDocument();
    expect(screen.getByText('What should we call you?')).toBeInTheDocument();
    expect(screen.getByText('Do you agree to the terms and conditions?')).toBeInTheDocument();
    expect(screen.getByText('Any other comments?')).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: 'Submit' })).toHaveLength(1);
  });

  it('guided mode starts progress at 0% (screenIndex 0 of 3)', () => {
    render(<RespondentRuntimeGuidedVsStandard {...getFixture('guided')} />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
  });

  it('selecting a Yes/No answer auto-advances to the next screen and updates progress', async () => {
    const user = userEvent.setup();
    render(<RespondentRuntimeGuidedVsStandard {...getFixture('guided')} />);

    expect(screen.getByText('Excited to get started?')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Yes' }));

    // Advanced to question 2 (prose + text question) without any "Next" click.
    expect(screen.getByText("Great! Let's collect a few more details before we begin.")).toBeInTheDocument();
    expect(screen.getByText('What should we call you?')).toBeInTheDocument();
    expect(screen.queryByText('Excited to get started?')).not.toBeInTheDocument();
    // 1 of 3 -> 33%.
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '33');
  });

  it('pressing Enter in a text answer advances to the next screen', async () => {
    const user = userEvent.setup();
    render(<RespondentRuntimeGuidedVsStandard {...getFixture('guided')} />);

    await user.click(screen.getByRole('button', { name: 'Yes' }));
    const textInput = screen.getByLabelText('What should we call you?');
    await user.type(textInput, 'Ada{Enter}');

    expect(screen.getByText('Do you agree to the terms and conditions?')).toBeInTheDocument();
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '67');
  });

  it('reaches 100% progress and shows a submitted panel after the last screen advances', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    render(<RespondentRuntimeGuidedVsStandard {...getFixture('guided')} onSubmit={onSubmit} />);

    await user.click(screen.getByRole('button', { name: 'Yes' }));
    await user.type(screen.getByLabelText('What should we call you?'), 'Ada{Enter}');
    await user.click(screen.getByRole('button', { name: 'Yes' }));
    // Last screen is a text question; its advance button is labeled Submit.
    await user.type(screen.getByLabelText('Any other comments?'), 'Looks great{Enter}');

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('status')).toHaveTextContent('Form submitted.');
  });

  it('guided mode exposes no back-navigation control at all', () => {
    render(<RespondentRuntimeGuidedVsStandard {...getFixture('guided')} />);
    expect(screen.queryByRole('button', { name: /back/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /previous/i })).not.toBeInTheDocument();
  });

  it('switching the Form Experience mode swaps the renderer but keeps the same document content available', async () => {
    const user = userEvent.setup();
    const onModeChange = vi.fn();
    render(<RespondentRuntimeGuidedVsStandard {...getFixture('guided')} onModeChange={onModeChange} />);

    await user.click(screen.getByRole('radio', { name: 'Classic (Standard)' }));

    expect(onModeChange).toHaveBeenCalledWith('standard');
    expect(screen.getByText('Excited to get started?')).toBeInTheDocument();
    expect(screen.getByText('What should we call you?')).toBeInTheDocument();
  });

  it('standard mode: filling all answers and clicking Submit calls onSubmit once', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    render(<RespondentRuntimeGuidedVsStandard {...getFixture('standard')} onSubmit={onSubmit} />);

    await user.click(screen.getAllByRole('button', { name: 'Yes' })[0]);
    await user.type(screen.getByLabelText('What should we call you?'), 'Ada');
    await user.click(screen.getAllByRole('button', { name: 'Yes' })[1]);
    await user.click(screen.getByRole('button', { name: 'Submit' }));

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({ q1: 'Yes', q2: 'Ada', q3: 'Yes' })
    );
  });

  it('disabled prevents mode switching and answering', async () => {
    const user = userEvent.setup();
    const onModeChange = vi.fn();
    render(
      <RespondentRuntimeGuidedVsStandard {...getFixture('disabled-guided')} onModeChange={onModeChange} />
    );

    const yesButton = screen.getByRole('button', { name: 'Yes' });
    expect(yesButton).toBeDisabled();
    await user.click(screen.getByRole('radio', { name: 'Classic (Standard)' }));
    expect(onModeChange).not.toHaveBeenCalled();
  });
});
