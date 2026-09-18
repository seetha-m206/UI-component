import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FormOverflowMenu } from './FormOverflowMenu';

describe('FormOverflowMenu', () => {
  it('renders a closed menu with an accessible trigger', () => {
    render(<FormOverflowMenu formName="Customer Feedback Form" />);
    const trigger = screen.getByRole('button', { name: 'More actions for Customer Feedback Form' });
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveAttribute('aria-haspopup', 'menu');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('opens the menu on trigger click, with all 7 default items in the documented order', async () => {
    const user = userEvent.setup();
    render(<FormOverflowMenu formName="Customer Feedback Form" />);
    await user.click(screen.getByRole('button', { name: /More actions/ }));

    const menu = screen.getByRole('menu');
    expect(menu).toBeInTheDocument();
    const items = screen.getAllByRole('menuitem');
    expect(items.map((el) => el.textContent)).toEqual([
      'Info',
      'Duplicate',
      'Enable / Disable',
      'Move to Folder',
      'Change Ownership',
      'Change Form Type',
      'Trash',
    ]);
  });

  it('moves focus to the first item when opened by click', async () => {
    const user = userEvent.setup();
    render(<FormOverflowMenu formName="Customer Feedback Form" />);
    await user.click(screen.getByRole('button', { name: /More actions/ }));
    expect(screen.getByRole('menuitem', { name: 'Info' })).toHaveFocus();
  });

  it('closes the menu on Escape and returns focus to the trigger', async () => {
    const user = userEvent.setup();
    render(<FormOverflowMenu formName="Customer Feedback Form" />);
    const trigger = screen.getByRole('button', { name: /More actions/ });
    await user.click(trigger);
    expect(screen.getByRole('menu')).toBeInTheDocument();

    await user.keyboard('{Escape}');
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it('closes the menu on outside click', async () => {
    const user = userEvent.setup();
    render(
      <div>
        <FormOverflowMenu formName="Customer Feedback Form" />
        <button type="button">Outside</button>
      </div>
    );
    await user.click(screen.getByRole('button', { name: /More actions/ }));
    expect(screen.getByRole('menu')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Outside' }));
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('navigates items with ArrowDown/ArrowUp, wrapping at the ends', async () => {
    const user = userEvent.setup();
    render(<FormOverflowMenu formName="Customer Feedback Form" />);
    await user.click(screen.getByRole('button', { name: /More actions/ }));

    expect(screen.getByRole('menuitem', { name: 'Info' })).toHaveFocus();
    await user.keyboard('{ArrowDown}');
    expect(screen.getByRole('menuitem', { name: 'Duplicate' })).toHaveFocus();

    await user.keyboard('{ArrowUp}');
    expect(screen.getByRole('menuitem', { name: 'Info' })).toHaveFocus();

    // Wraps backward past the first item to the last item.
    await user.keyboard('{ArrowUp}');
    expect(screen.getByRole('menuitem', { name: 'Trash' })).toHaveFocus();
  });

  it('jumps to the first/last item with Home/End', async () => {
    const user = userEvent.setup();
    render(<FormOverflowMenu formName="Customer Feedback Form" />);
    await user.click(screen.getByRole('button', { name: /More actions/ }));

    await user.keyboard('{End}');
    expect(screen.getByRole('menuitem', { name: 'Trash' })).toHaveFocus();

    await user.keyboard('{Home}');
    expect(screen.getByRole('menuitem', { name: 'Info' })).toHaveFocus();
  });

  it('opens with ArrowUp on the trigger and focuses the last item', async () => {
    const user = userEvent.setup();
    render(<FormOverflowMenu formName="Customer Feedback Form" />);
    const trigger = screen.getByRole('button', { name: /More actions/ });
    trigger.focus();
    await user.keyboard('{ArrowUp}');
    expect(screen.getByRole('menu')).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Trash' })).toHaveFocus();
  });

  it('calls onSelect for a plain item, and closes the menu', async () => {
    const onSelect = vi.fn();
    const user = userEvent.setup();
    render(<FormOverflowMenu formName="Customer Feedback Form" onSelect={onSelect} />);
    await user.click(screen.getByRole('button', { name: /More actions/ }));
    await user.click(screen.getByRole('menuitem', { name: 'Duplicate' }));

    expect(onSelect).toHaveBeenCalledWith('duplicate');
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('calls onEnableDisable (not onSelect) for the Enable/Disable item', async () => {
    const onSelect = vi.fn();
    const onEnableDisable = vi.fn();
    const user = userEvent.setup();
    render(
      <FormOverflowMenu
        formName="Customer Feedback Form"
        onSelect={onSelect}
        onEnableDisable={onEnableDisable}
      />
    );
    await user.click(screen.getByRole('button', { name: /More actions/ }));
    await user.click(screen.getByRole('menuitem', { name: 'Enable / Disable' }));

    expect(onEnableDisable).toHaveBeenCalledTimes(1);
    expect(onSelect).not.toHaveBeenCalled();
  });

  it('calls onDelete (not onSelect) for the destructive Trash item', async () => {
    const onSelect = vi.fn();
    const onDelete = vi.fn();
    const user = userEvent.setup();
    render(
      <FormOverflowMenu formName="Customer Feedback Form" onSelect={onSelect} onDelete={onDelete} />
    );
    await user.click(screen.getByRole('button', { name: /More actions/ }));
    await user.click(screen.getByRole('menuitem', { name: 'Trash' }));

    expect(onDelete).toHaveBeenCalledTimes(1);
    expect(onSelect).not.toHaveBeenCalled();
  });

  it('cannot be opened when disabled', async () => {
    const user = userEvent.setup();
    render(<FormOverflowMenu formName="Archived Survey" disabled />);
    const trigger = screen.getByRole('button', { name: /More actions/ });
    expect(trigger).toBeDisabled();
    await user.click(trigger);
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('supports a custom, shorter item list via the items prop', async () => {
    const user = userEvent.setup();
    render(
      <FormOverflowMenu
        formName="Quick Poll"
        items={[
          { id: 'info', label: 'Info' },
          { id: 'duplicate', label: 'Duplicate' },
        ]}
      />
    );
    await user.click(screen.getByRole('button', { name: /More actions/ }));
    expect(screen.getAllByRole('menuitem')).toHaveLength(2);
  });

  it('honors initialOpen to seed the menu already open', () => {
    render(<FormOverflowMenu formName="Customer Feedback Form" initialOpen />);
    expect(screen.getByRole('menu')).toBeInTheDocument();
  });
});
