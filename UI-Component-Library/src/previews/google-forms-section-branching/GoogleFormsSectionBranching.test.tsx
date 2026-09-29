import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GoogleFormsSectionBranching } from './GoogleFormsSectionBranching';

describe('GoogleFormsSectionBranching', () => {
  it('renders Section 1 with the two branch options by default', () => {
    render(<GoogleFormsSectionBranching />);
    expect(screen.getByText('Section 1 of 3')).toBeInTheDocument();
    expect(screen.getByLabelText('No, go through section 2')).toBeInTheDocument();
    expect(screen.getByLabelText('Yes, skip to section 3')).toBeInTheDocument();
  });

  it('picking "No" and clicking Next goes to Section 2, not Section 3', async () => {
    const user = userEvent.setup();
    render(<GoogleFormsSectionBranching />);
    await user.click(screen.getByLabelText('No, go through section 2'));
    await user.click(screen.getByRole('button', { name: 'Next' }));
    expect(screen.getByText('Section 2 of 3')).toBeInTheDocument();
  });

  it('picking "Yes, skip" and clicking Next jumps straight to Section 3 — Section 2 is never mounted', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    render(<GoogleFormsSectionBranching onSubmit={onSubmit} />);
    await user.click(screen.getByLabelText('Yes, skip to section 3'));
    await user.click(screen.getByRole('button', { name: 'Next' }));
    expect(screen.getByText('Section 3 of 3')).toBeInTheDocument();
    expect(screen.queryByText('Section 2 of 3')).not.toBeInTheDocument();
    expect(
      screen.getByText(/Section 2 was never mounted/),
    ).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Submit' }));
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('skip-aware Back: from Section 3 arrived via skip, Back returns directly to Section 1 with the prior answer still selected', async () => {
    const user = userEvent.setup();
    render(<GoogleFormsSectionBranching />);
    await user.click(screen.getByLabelText('Yes, skip to section 3'));
    await user.click(screen.getByRole('button', { name: 'Next' }));
    expect(screen.getByText('Section 3 of 3')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Back' }));
    expect(screen.getByText('Section 1 of 3')).toBeInTheDocument();
    expect(screen.queryByText('Section 2 of 3')).not.toBeInTheDocument();
    expect(screen.getByLabelText('Yes, skip to section 3')).toBeChecked();
  });

  it('non-skip Back: from Section 2 (arrived normally), Back returns to Section 1', async () => {
    const user = userEvent.setup();
    render(<GoogleFormsSectionBranching />);
    await user.click(screen.getByLabelText('No, go through section 2'));
    await user.click(screen.getByRole('button', { name: 'Next' }));
    expect(screen.getByText('Section 2 of 3')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Back' }));
    expect(screen.getByText('Section 1 of 3')).toBeInTheDocument();
    expect(screen.getByLabelText('No, go through section 2')).toBeChecked();
  });

  it('Editor: deleting the referenced Section 3 silently resets both option dropdowns to the default, with no confirmation warning about the rules', async () => {
    const user = userEvent.setup();
    render(<GoogleFormsSectionBranching initialTab="editor" />);
    expect(screen.getByLabelText("Destination for 'Yes, skip to section 3'")).toHaveValue(
      'Go to section 3 (Section 3)',
    );
    await user.click(screen.getByRole('button', { name: 'Delete Section 3' }));
    expect(screen.getByLabelText("Destination for 'Yes, skip to section 3'")).toHaveValue(
      'Continue to next section',
    );
    expect(screen.getByLabelText("Destination for 'No, go through section 2'")).toHaveValue(
      'Continue to next section',
    );
    expect(screen.getByRole('alert')).toHaveTextContent(/no mention of the two branching rules/);
    expect(
      screen.queryByRole('option', { name: 'Go to section 3 (Section 3)' }),
    ).not.toBeInTheDocument();
  });
});
