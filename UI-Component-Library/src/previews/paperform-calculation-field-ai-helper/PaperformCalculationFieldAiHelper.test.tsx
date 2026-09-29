import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PaperformCalculationFieldAiHelper } from './PaperformCalculationFieldAiHelper';

describe('PaperformCalculationFieldAiHelper', () => {
  it('renders the CALCULATION tab by default with an empty formula', () => {
    render(<PaperformCalculationFieldAiHelper />);
    expect(screen.getByRole('tab', { name: 'CALCULATION' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByPlaceholderText(/cmlfb/)).toBeInTheDocument();
  });

  it('evaluates a correct formula to the confirmed real result (152399025)', () => {
    render(<PaperformCalculationFieldAiHelper initialFormula="{{cmlfb}} * {{17gdk}};" />);
    expect(screen.getByText('152399025')).toBeInTheDocument();
  });

  it('evaluates the multi-statement discount formula to the confirmed real result (137159122.5)', () => {
    const discountFormula = `quantity = {{cmlfb}};
unit_price = {{17gdk}};
subtotal = quantity * unit_price;
discount = IF(quantity > 5, 0.10, 0);
total = subtotal * (1 - discount);
total;`;
    render(<PaperformCalculationFieldAiHelper initialFormula={discountFormula} />);
    expect(screen.getByText('137159122.5')).toBeInTheDocument();
  });

  it('shows a parse error for an invalid formula, and a Fix button appears', () => {
    render(<PaperformCalculationFieldAiHelper initialFormula="/{{cmlfb}} * {{17gdk}}" />);
    expect(screen.getByRole('alert')).toHaveTextContent(/formula looks invalid/i);
    expect(screen.getByRole('button', { name: 'Fix' })).toBeInTheDocument();
  });

  it('clicking Fix proposes the source-captured fixed formula, and Apply commits it only when clicked', async () => {
    const user = userEvent.setup();
    render(<PaperformCalculationFieldAiHelper initialFormula="/{{cmlfb}} * {{17gdk}}" />);
    await user.click(screen.getByRole('button', { name: 'Fix' }));

    expect(screen.getByText('{{cmlfb}} * {{17gdk}};')).toBeInTheDocument();
    expect(screen.getByText(/Result: 152399025/)).toBeInTheDocument();
    // The code pane itself is untouched until Apply.
    expect(screen.getByRole('alert')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Apply' }));
    expect(screen.getByDisplayValue('{{cmlfb}} * {{17gdk}};')).toBeInTheDocument();
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('a free-text discount prompt proposes the source-captured discount program', async () => {
    const user = userEvent.setup();
    render(<PaperformCalculationFieldAiHelper />);
    const input = screen.getByPlaceholderText('What do you want the calculation to do?');
    await user.type(input, 'add a 10% discount if the quantity is over 5');
    await user.click(screen.getByRole('button', { name: 'Send' }));

    expect(screen.getByText(/Result: 137159122.5/)).toBeInTheDocument();
    expect(screen.getByText(/Added a 10% discount/i)).toBeInTheDocument();
  });

  it('switches to the HOW TO USE tab', async () => {
    const user = userEvent.setup();
    render(<PaperformCalculationFieldAiHelper />);
    await user.click(screen.getByRole('tab', { name: 'HOW TO USE' }));
    expect(screen.getByText(/Concatenate/)).toBeInTheDocument();
  });
});
