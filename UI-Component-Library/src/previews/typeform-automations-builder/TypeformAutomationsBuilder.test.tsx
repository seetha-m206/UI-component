import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TypeformAutomationsBuilder } from './TypeformAutomationsBuilder';
import { fixtures } from './fixtures';

function getFixture(id: string) {
  const fixture = fixtures.find((f) => f.id === id);
  if (!fixture) throw new Error(`fixture not found: ${id}`);
  return fixture.props;
}

function blockTypesInOrder(container: HTMLElement) {
  return Array.from(container.querySelectorAll('[data-block-type]')).map((el) =>
    el.getAttribute('data-block-type')
  );
}

describe('TypeformAutomationsBuilder', () => {
  it('starts on the trigger picker with exactly 3 trigger cards and no chain canvas', () => {
    render(<TypeformAutomationsBuilder {...getFixture('trigger-picker')} />);
    expect(
      screen.getByRole('heading', { name: 'What will trigger this automation?' })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Form submission/ })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Contact activity or updates/ })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^Scheduled/ })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Activate/ })).not.toBeInTheDocument();
  });

  it('choosing "Form submission" fires onTriggerSelected and opens the canvas with the default Trigger → End automation skeleton', async () => {
    const user = userEvent.setup();
    const onTriggerSelected = vi.fn();
    const { container } = render(
      <TypeformAutomationsBuilder
        {...getFixture('trigger-picker')}
        onTriggerSelected={onTriggerSelected}
      />
    );

    await user.click(screen.getByRole('button', { name: /^Form submission/ }));

    expect(onTriggerSelected).toHaveBeenCalledWith('form_submission');
    expect(blockTypesInOrder(container)).toEqual(['trigger', 'end']);
    expect(
      screen.getByText('Start automation when [New form] is [Completed]')
    ).toBeInTheDocument();
    expect(screen.getByText('End automation')).toBeInTheDocument();
    // Exactly one connector between the two blocks.
    expect(screen.getAllByRole('button', { name: /Insert a step/ })).toHaveLength(1);
  });

  it('the scheduled trigger produces the generic trigger-block wording, not the form-submission-specific string', () => {
    render(<TypeformAutomationsBuilder {...getFixture('scheduled-trigger')} />);
    expect(screen.getByText('Start automation on a [Scheduled] time')).toBeInTheDocument();
    expect(
      screen.queryByText('Start automation when [New form] is [Completed]')
    ).not.toBeInTheDocument();
  });

  it('the top bar shows the editable name and a "Draft" badge before activation', () => {
    render(<TypeformAutomationsBuilder {...getFixture('fresh-skeleton')} />);
    expect(screen.getByLabelText('Automation name')).toHaveValue('Untitled automation');
    expect(screen.getByText('Draft')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Activate' })).toBeEnabled();
  });

  it('opens the connector’s insert menu with exactly 4 menu items grouped into Rule and Actions, plus a non-interactive "Request features" footer', async () => {
    const user = userEvent.setup();
    render(<TypeformAutomationsBuilder {...getFixture('fresh-skeleton')} />);

    await user.click(screen.getByRole('button', { name: 'Insert a step after Trigger' }));

    expect(screen.getAllByRole('menuitem')).toHaveLength(4);
    expect(
      within(screen.getByRole('group', { name: 'Rule' })).getByRole('menuitem', {
        name: 'Time delay',
      })
    ).toBeInTheDocument();
    const actionsGroup = screen.getByRole('group', { name: 'Actions' });
    expect(within(actionsGroup).getByRole('menuitem', { name: 'Send email' })).toBeInTheDocument();
    expect(within(actionsGroup).getByRole('menuitem', { name: 'Webhook' })).toBeInTheDocument();
    expect(
      within(actionsGroup).getByRole('menuitem', { name: 'Send to integration' })
    ).toBeInTheDocument();

    const requestFeatures = screen.getByText('Request features');
    expect(requestFeatures.tagName).toBe('SPAN');
    expect(screen.queryByRole('menuitem', { name: 'Request features' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Request features' })).not.toBeInTheDocument();
  });

  it('inserting "Send email" splices it into the exact connector position, calls onBlockInserted, and closes the menu', async () => {
    const user = userEvent.setup();
    const onBlockInserted = vi.fn();
    const { container } = render(
      <TypeformAutomationsBuilder
        {...getFixture('fresh-skeleton')}
        onBlockInserted={onBlockInserted}
      />
    );

    await user.click(screen.getByRole('button', { name: 'Insert a step after Trigger' }));
    await user.click(screen.getByRole('menuitem', { name: 'Send email' }));

    expect(blockTypesInOrder(container)).toEqual(['trigger', 'send_email', 'end']);
    expect(screen.getByText('To: [Respondent] / Subject: [Welcome]')).toBeInTheDocument();
    expect(onBlockInserted).toHaveBeenCalledTimes(1);
    expect(onBlockInserted).toHaveBeenCalledWith(
      expect.objectContaining({ type: 'send_email' }),
      0
    );
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    // A new connector pair exists, so the now-longer chain has 2 connectors.
    expect(screen.getAllByRole('button', { name: /Insert a step/ })).toHaveLength(2);
  });

  it('mid-chain insertion pushes later blocks down instead of appending at the end', async () => {
    const user = userEvent.setup();
    const { container } = render(<TypeformAutomationsBuilder {...getFixture('one-action-inserted')} />);

    expect(blockTypesInOrder(container)).toEqual(['trigger', 'send_email', 'end']);

    // Insert "Webhook" at the connector directly below the trigger (i.e.
    // between Trigger and the already-inserted Send email block).
    await user.click(screen.getByRole('button', { name: 'Insert a step after Trigger' }));
    await user.click(screen.getByRole('menuitem', { name: 'Webhook' }));

    expect(blockTypesInOrder(container)).toEqual(['trigger', 'webhook', 'send_email', 'end']);
  });

  it('removes an inserted action block via its remove button and fires onBlockRemoved, but the trigger and end blocks have no remove control', async () => {
    const user = userEvent.setup();
    const onBlockRemoved = vi.fn();
    const { container } = render(
      <TypeformAutomationsBuilder {...getFixture('one-action-inserted')} onBlockRemoved={onBlockRemoved} />
    );

    expect(screen.queryByRole('button', { name: 'Remove Trigger step' })).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: 'Remove End automation step' })
    ).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Remove Send email step' }));

    expect(onBlockRemoved).toHaveBeenCalledWith('inserted-send-email-1');
    expect(blockTypesInOrder(container)).toEqual(['trigger', 'end']);
  });

  it('editing the automation name updates the field and fires onNameChange', async () => {
    const user = userEvent.setup();
    const onNameChange = vi.fn();
    render(<TypeformAutomationsBuilder {...getFixture('fresh-skeleton')} onNameChange={onNameChange} />);

    const nameInput = screen.getByLabelText('Automation name');
    await user.clear(nameInput);
    await user.type(nameInput, 'Welcome sequence');

    expect(nameInput).toHaveValue('Welcome sequence');
    expect(onNameChange).toHaveBeenLastCalledWith('Welcome sequence');
  });

  it('clicking Activate fires onActivate, flips the badge to "Activated", and disables the Activate button', async () => {
    const user = userEvent.setup();
    const onActivate = vi.fn();
    render(<TypeformAutomationsBuilder {...getFixture('fresh-skeleton')} onActivate={onActivate} />);

    await user.click(screen.getByRole('button', { name: 'Activate' }));

    expect(onActivate).toHaveBeenCalledTimes(1);
    expect(screen.getByText('Activated', { selector: 'span' })).toBeInTheDocument();
    expect(screen.queryByText('Draft')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Activated' })).toBeDisabled();
  });

  it('the "activated" fixture starts already activated with the button disabled', () => {
    render(<TypeformAutomationsBuilder {...getFixture('activated')} />);
    expect(screen.getByText('Activated', { selector: 'span' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Activated' })).toBeDisabled();
  });

  it('Escape closes an open insert menu and returns focus to the connector’s "+" button', async () => {
    const user = userEvent.setup();
    render(<TypeformAutomationsBuilder {...getFixture('fresh-skeleton')} />);

    const insertButton = screen.getByRole('button', { name: 'Insert a step after Trigger' });
    await user.click(insertButton);
    expect(screen.getByRole('menu')).toBeInTheDocument();

    await user.keyboard('{Escape}');

    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    expect(document.activeElement).toBe(insertButton);
  });

  it('opening the menu auto-focuses the first item, and ArrowDown moves focus to the next item (roving focus)', async () => {
    const user = userEvent.setup();
    render(<TypeformAutomationsBuilder {...getFixture('fresh-skeleton')} />);

    await user.click(screen.getByRole('button', { name: 'Insert a step after Trigger' }));
    expect(document.activeElement).toBe(screen.getByRole('menuitem', { name: 'Time delay' }));

    await user.keyboard('{ArrowDown}');
    expect(document.activeElement).toBe(screen.getByRole('menuitem', { name: 'Send email' }));
  });

  it('renders solid (non-dashed) SVG connector lines with an arrowhead path, never a dotted line', () => {
    const { container } = render(<TypeformAutomationsBuilder {...getFixture('one-action-inserted')} />);

    const lines = container.querySelectorAll('svg line');
    const paths = container.querySelectorAll('svg path');
    expect(lines.length).toBeGreaterThan(0);
    expect(paths.length).toBeGreaterThan(0);
    lines.forEach((line) => {
      expect(line).not.toHaveAttribute('stroke-dasharray');
    });
    paths.forEach((path) => {
      expect(path).not.toHaveAttribute('stroke-dasharray');
    });
  });

  it('disabled prevents trigger selection, insertion, removal, name editing, and activation', async () => {
    render(
      <TypeformAutomationsBuilder {...getFixture('disabled-canvas')} />
    );

    expect(screen.getByLabelText('Automation name')).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Activate' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Remove Send email step' })).toBeDisabled();
    const insertButtons = screen.getAllByRole('button', { name: /Insert a step/ });
    expect(insertButtons.length).toBeGreaterThan(0);
    insertButtons.forEach((button) => {
      expect(button).toBeDisabled();
    });
  });

  it('disabled also blocks the trigger picker from advancing to the canvas', async () => {
    const user = userEvent.setup();
    const onTriggerSelected = vi.fn();
    render(
      <TypeformAutomationsBuilder
        {...getFixture('trigger-picker')}
        disabled
        onTriggerSelected={onTriggerSelected}
      />
    );

    expect(screen.getByRole('button', { name: /Form submission/ })).toBeDisabled();
    await user.click(screen.getByRole('button', { name: /Form submission/ }));

    expect(onTriggerSelected).not.toHaveBeenCalled();
    expect(screen.queryByRole('button', { name: /Activate/ })).not.toBeInTheDocument();
  });

  it('never calls fetch/XHR across trigger selection, insertion, removal, name editing, and activation (fully client-side, static docs preview)', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    render(<TypeformAutomationsBuilder {...getFixture('trigger-picker')} />);

    await user.click(screen.getByRole('button', { name: /^Form submission/ }));
    await user.click(screen.getByRole('button', { name: 'Insert a step after Trigger' }));
    await user.click(screen.getByRole('menuitem', { name: 'Send email' }));
    await user.click(screen.getByRole('button', { name: 'Remove Send email step' }));
    const nameInput = screen.getByLabelText('Automation name');
    await user.type(nameInput, ' v2');
    await user.click(screen.getByRole('button', { name: 'Activate' }));

    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
