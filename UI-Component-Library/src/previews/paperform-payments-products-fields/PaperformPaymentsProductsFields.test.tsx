import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PaperformPaymentsProductsFields } from './PaperformPaymentsProductsFields';

describe('PaperformPaymentsProductsFields', () => {
  it('renders the respondent view by default, with a fixed price and a product grid', () => {
    render(<PaperformPaymentsProductsFields initialPriceReadOnly initialPriceValue={10} />);
    expect(screen.getByText('$10.00 (fixed)')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit — \$10\.00/ })).toBeInTheDocument();
  });

  it('shows the exact confirmed minimum-price warning when an editable price is entered below the minimum', async () => {
    const user = userEvent.setup();
    render(
      <PaperformPaymentsProductsFields
        initialPriceReadOnly={false}
        initialPriceValue={8}
        initialPriceMin={5}
      />
    );
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    const input = screen.getByRole('textbox');
    await user.clear(input);
    await user.type(input, '3');
    expect(screen.getByRole('alert')).toHaveTextContent(
      'PLEASE ENTER A NUMBER GREATER THAN OR EQUAL TO 5'
    );
  });

  it('selecting a product updates the live running total on the Submit button', async () => {
    const user = userEvent.setup();
    render(<PaperformPaymentsProductsFields initialPriceReadOnly initialPriceValue={10} />);
    await user.click(screen.getAllByRole('checkbox')[0]); // Test Mug, $12
    expect(await screen.findByRole('button', { name: /Submit — \$22\.00/ })).toBeInTheDocument();
  });

  it('clamps quantity to stock and shows the exact confirmed blocking copy', async () => {
    const user = userEvent.setup();
    render(<PaperformPaymentsProductsFields initialPriceReadOnly initialPriceValue={10} />);
    const checkboxes = screen.getAllByRole('checkbox');
    await user.click(checkboxes[0]); // Test Mug, stock 3
    const quantityInput = screen.getByRole('spinbutton', { name: 'Quantity for Test Mug' });
    await user.clear(quantityInput);
    await user.type(quantityInput, '5');
    expect(screen.getByRole('alertdialog')).toHaveTextContent('You must select no more than 3');
    await user.click(screen.getByRole('button', { name: 'OK' }));
    expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument();
    expect(quantityInput).toHaveValue(3);
  });

  it('switches to the Configure → Payments surface, defaulting to "No Account"', async () => {
    const user = userEvent.setup();
    render(<PaperformPaymentsProductsFields />);
    await user.click(screen.getByRole('tab', { name: 'Configure → Payments' }));
    expect(screen.getByText("No Account (Don't take payment)")).toBeInTheDocument();
  });

  it('reveals the coupon table and pricing-rule row only when their toggles are on', async () => {
    const user = userEvent.setup();
    render(<PaperformPaymentsProductsFields initialSurface="payments-config" />);
    expect(screen.queryByRole('table')).not.toBeInTheDocument();
    await user.click(screen.getByRole('checkbox', { name: 'Coupons' }));
    expect(screen.getByRole('table')).toBeInTheDocument();
    await user.click(screen.getByRole('checkbox', { name: 'Custom Pricing Rules' }));
    expect(screen.getByText(/When/)).toBeInTheDocument();
  });

  it('publishes silently with no warning even though no payment gateway is connected (confirmed real behavior, not a bug this preview hides)', async () => {
    const user = userEvent.setup();
    const onPublish = vi.fn();
    render(<PaperformPaymentsProductsFields initialSurface="payments-config" onPublish={onPublish} />);
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Publish' }));
    expect(onPublish).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('status')).toHaveTextContent('Your form has been published!');
    // No warning of any kind about the missing payment gateway.
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });
});
