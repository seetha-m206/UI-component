import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TwoLineDropdownAndAccordion } from './TwoLineDropdownAndAccordion';
import { fixtures } from './fixtures';

function getFixture(id: string) {
  const fixture = fixtures.find((f) => f.id === id);
  if (!fixture) throw new Error(`fixture not found: ${id}`);
  return fixture.props;
}

describe('TwoLineDropdownAndAccordion', () => {
  it('the dropdown trigger shows only the selected option\'s title', () => {
    render(<TwoLineDropdownAndAccordion {...getFixture('default')} />);
    expect(screen.getByRole('button', { name: /Submit Form/ })).toBeInTheDocument();
  });

  it('opening the dropdown reveals every option as a genuine title + subtitle two-line row', async () => {
    const user = userEvent.setup();
    render(<TwoLineDropdownAndAccordion {...getFixture('default')} />);
    await user.click(screen.getByRole('button', { name: /Submit Form/ }));
    const listbox = screen.getByRole('listbox');
    expect(within(listbox).getByText('Modify Form')).toBeInTheDocument();
    expect(
      within(listbox).getByText('Modify form & configurations, Submit form')
    ).toBeInTheDocument();
    expect(
      within(listbox).getByText(
        'All permissions given under Modify Form + Edit entries, Create & modify reports'
      )
    ).toBeInTheDocument();
  });

  it('the currently-selected option is marked aria-selected before any hover/click', async () => {
    const user = userEvent.setup();
    render(<TwoLineDropdownAndAccordion {...getFixture('modify-entries-reports-selected')} />);
    await user.click(screen.getByRole('button', { name: /Modify Form, Entries, Reports/ }));
    expect(
      screen.getByRole('option', { name: 'Modify Form, Entries, Reports' })
    ).toHaveAttribute('aria-selected', 'true');
  });

  it('selecting a two-line option closes the panel, updates the trigger, and calls onDropdownChange', async () => {
    const user = userEvent.setup();
    const onDropdownChange = vi.fn();
    render(<TwoLineDropdownAndAccordion {...getFixture('default')} onDropdownChange={onDropdownChange} />);
    await user.click(screen.getByRole('button', { name: /Submit Form/ }));
    await user.click(screen.getByRole('option', { name: 'Modify Form' }));
    expect(onDropdownChange).toHaveBeenCalledWith('modify');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('a disabled dropdown cannot be opened', async () => {
    const user = userEvent.setup();
    render(<TwoLineDropdownAndAccordion {...getFixture('dropdown-disabled')} />);
    const trigger = screen.getByRole('button', { name: /Submit Form/ });
    expect(trigger).toBeDisabled();
    await user.click(trigger);
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('the default fixture starts with only "Container" open, matching the source\'s default state', () => {
    render(<TwoLineDropdownAndAccordion {...getFixture('default')} />);
    expect(screen.getByRole('button', { name: 'Container' })).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('button', { name: 'Border' })).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getByRole('button', { name: 'Scroll behaviour' })).toHaveAttribute(
      'aria-expanded',
      'false'
    );
  });

  it('accordion content stays mounted in the DOM even while collapsed (never removed, only hidden via height)', () => {
    render(<TwoLineDropdownAndAccordion {...getFixture('all-collapsed')} />);
    expect(screen.getByRole('button', { name: 'Container' })).toHaveAttribute('aria-expanded', 'false');
    // Content text is present in the DOM regardless of collapsed state.
    expect(
      screen.getByText('Overall container width, alignment, and background.')
    ).toBeInTheDocument();
  });

  it('clicking an accordion header toggles aria-expanded and fires onAccordionToggle', async () => {
    const user = userEvent.setup();
    const onAccordionToggle = vi.fn();
    render(<TwoLineDropdownAndAccordion {...getFixture('all-collapsed')} onAccordionToggle={onAccordionToggle} />);
    const header = screen.getByRole('button', { name: 'Border' });
    expect(header).toHaveAttribute('aria-expanded', 'false');
    await user.click(header);
    expect(header).toHaveAttribute('aria-expanded', 'true');
    expect(onAccordionToggle).toHaveBeenCalledWith('border', true);
    await user.click(header);
    expect(header).toHaveAttribute('aria-expanded', 'false');
    expect(onAccordionToggle).toHaveBeenCalledWith('border', false);
  });

  it('multiple sections can be open simultaneously (not a single-open accordion)', () => {
    render(<TwoLineDropdownAndAccordion {...getFixture('multiple-sections-open')} />);
    expect(screen.getByRole('button', { name: 'Container' })).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('button', { name: 'Border' })).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('button', { name: 'Scroll behaviour' })).toHaveAttribute(
      'aria-expanded',
      'true'
    );
    expect(screen.getByRole('button', { name: 'Form responsiveness' })).toHaveAttribute(
      'aria-expanded',
      'false'
    );
  });

  it('an open section\'s panel carries the height-transition open class (grid-template-rows based, not an opacity fade)', () => {
    render(<TwoLineDropdownAndAccordion {...getFixture('default')} />);
    const header = screen.getByRole('button', { name: 'Container' });
    const panelId = header.getAttribute('aria-controls');
    expect(panelId).toBeTruthy();
    const panel = document.getElementById(panelId!);
    expect(panel?.className).toMatch(/accordionPanelOpen/);
  });

  it('never calls fetch/XHR across opening the dropdown, selecting an option, and toggling a section', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    render(<TwoLineDropdownAndAccordion {...getFixture('default')} />);
    await user.click(screen.getByRole('button', { name: /Submit Form/ }));
    await user.click(screen.getByRole('option', { name: 'Modify Form' }));
    await user.click(screen.getByRole('button', { name: 'Border' }));
    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
