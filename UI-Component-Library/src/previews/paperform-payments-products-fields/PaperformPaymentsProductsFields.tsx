import { useId, useState } from 'react';
import styles from './PaperformPaymentsProductsFields.module.css';

export interface ProductItem {
  sku: string;
  name: string;
  price: number;
  stock: number | null;
}

export type Surface = 'respondent' | 'payments-config';

export interface PaperformPaymentsProductsFieldsProps {
  initialSurface?: Surface;
  initialPriceReadOnly?: boolean;
  initialPriceValue?: number;
  initialPriceMin?: number;
  products?: ProductItem[];
  initialCouponsEnabled?: boolean;
  initialPricingRulesEnabled?: boolean;
  onPublish?: () => void;
}

const DEFAULT_PRODUCTS: ProductItem[] = [
  { sku: 'dlf3j', name: 'Test Mug', price: 12, stock: 3 },
  { sku: 'bmoq0', name: 'Test Tee', price: 10, stock: null },
];

/**
 * Reconstructed from Paperform's Price + Products fields and the Configure ->
 * Payments screen. Confirmed and reproduced faithfully: the read-only/editable
 * Price toggle and its exact minimum-price warning copy; card-layout Products
 * using native checkbox selection (a real, confirmed difference from the
 * custom div-radio pattern used by paperform-yes-no-field/paperform-rating-field);
 * a quantity spinner clamped to stock via the exact "You must select no more
 * than N" blocking copy; a live running total on the Submit button; and —
 * most importantly — that Publish succeeds silently with no warning even
 * though no payment gateway is connected (a confirmed real safety gap, not a
 * bug this reconstruction papers over). No comparison baseline exists for
 * this component anywhere in this library.
 */
export function PaperformPaymentsProductsFields({
  initialSurface = 'respondent',
  initialPriceReadOnly = true,
  initialPriceValue = 10,
  initialPriceMin,
  products = DEFAULT_PRODUCTS,
  initialCouponsEnabled = false,
  initialPricingRulesEnabled = false,
  onPublish,
}: PaperformPaymentsProductsFieldsProps) {
  const [surface, setSurface] = useState<Surface>(initialSurface);
  const [priceValue, setPriceValue] = useState(initialPriceValue);
  const [priceDraft, setPriceDraft] = useState(String(initialPriceValue));
  const [selected, setSelected] = useState<Record<string, number>>({});
  const [stockNotice, setStockNotice] = useState<string | null>(null);
  const [couponsEnabled, setCouponsEnabled] = useState(initialCouponsEnabled);
  const [pricingRulesEnabled, setPricingRulesEnabled] = useState(initialPricingRulesEnabled);
  const [published, setPublished] = useState(false);
  const priceInputId = useId();

  const belowMin = initialPriceMin != null && priceValue < initialPriceMin;

  const total =
    priceValue +
    products.reduce((sum, p) => sum + p.price * (selected[p.sku] ?? 0), 0);

  function commitPrice(raw: string) {
    setPriceDraft(raw);
    const n = Number(raw);
    if (!Number.isNaN(n)) setPriceValue(n);
  }

  function toggleProduct(product: ProductItem) {
    setSelected((prev) => {
      const next = { ...prev };
      if (next[product.sku]) {
        delete next[product.sku];
      } else {
        next[product.sku] = 1;
      }
      return next;
    });
  }

  function setQuantity(product: ProductItem, raw: number) {
    if (product.stock != null && raw > product.stock) {
      setStockNotice(`You must select no more than ${product.stock}`);
      setSelected((prev) => ({ ...prev, [product.sku]: product.stock as number }));
      return;
    }
    setSelected((prev) => ({ ...prev, [product.sku]: Math.max(1, raw) }));
  }

  function handlePublish() {
    // Confirmed: publishing succeeds silently regardless of payment-account
    // state -- this reconstruction deliberately does NOT add a warning that
    // the real product doesn't have.
    setPublished(true);
    onPublish?.();
  }

  return (
    <div className={styles.root}>
      <div className={styles.surfaceTabs} role="tablist" aria-label="Preview surface">
        <button
          type="button"
          role="tab"
          aria-selected={surface === 'respondent'}
          className={surface === 'respondent' ? `${styles.tab} ${styles.tabActive}` : styles.tab}
          onClick={() => setSurface('respondent')}
        >
          Respondent view
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={surface === 'payments-config'}
          className={
            surface === 'payments-config' ? `${styles.tab} ${styles.tabActive}` : styles.tab
          }
          onClick={() => setSurface('payments-config')}
        >
          Configure → Payments
        </button>
      </div>

      {surface === 'respondent' ? (
        <div className={styles.panel}>
          <div className={styles.field}>
            <label htmlFor={priceInputId} className={styles.fieldLabel}>
              P1 Deposit
            </label>
            {initialPriceReadOnly ? (
              <div className={styles.fixedPrice}>${priceValue.toFixed(2)} (fixed)</div>
            ) : (
              <>
                <div className={styles.priceInputWrap}>
                  <span className={styles.prefix}>$</span>
                  <input
                    id={priceInputId}
                    className={styles.priceInput}
                    type="text"
                    inputMode="decimal"
                    value={priceDraft}
                    onChange={(e) => commitPrice(e.target.value)}
                  />
                </div>
                {belowMin && (
                  <p className={styles.warning} role="alert">
                    PLEASE ENTER A NUMBER GREATER THAN OR EQUAL TO {initialPriceMin}
                  </p>
                )}
              </>
            )}
          </div>

          <div className={styles.field}>
            <span className={styles.fieldLabel}>P2 Pick products</span>
            <div className={styles.productGrid} role="group" aria-label="Pick products">
              {products.map((product) => {
                const isSelected = Boolean(selected[product.sku]);
                return (
                  <label
                    key={product.sku}
                    className={isSelected ? `${styles.productTile} ${styles.productTileOn}` : styles.productTile}
                  >
                    <input
                      type="checkbox"
                      className={styles.checkbox}
                      checked={isSelected}
                      onChange={() => toggleProduct(product)}
                    />
                    <span className={styles.productName}>{product.name}</span>
                    <span className={styles.productPrice}>${product.price.toFixed(2)}</span>
                    {isSelected && (
                      <input
                        type="number"
                        className={styles.quantityInput}
                        min={1}
                        max={product.stock ?? undefined}
                        value={selected[product.sku]}
                        aria-label={`Quantity for ${product.name}`}
                        onChange={(e) => setQuantity(product, Number(e.target.value))}
                      />
                    )}
                  </label>
                );
              })}
            </div>
          </div>

          <button type="button" className={styles.submitButton}>
            Submit — ${total.toFixed(2)}
          </button>

          {stockNotice && (
            <div className={styles.modalOverlay} role="alertdialog" aria-label="Stock limit">
              <div className={styles.modal}>
                <p>{stockNotice}</p>
                <button type="button" className={styles.modalOk} onClick={() => setStockNotice(null)}>
                  OK
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className={styles.panel}>
          <div className={styles.configRow}>
            <span className={styles.configLabel}>Payment account used on this form</span>
            <select className={styles.select} value="none" disabled>
              <option value="none">No Account (Don&apos;t take payment)</option>
            </select>
          </div>
          <div className={styles.configRow}>
            <span className={styles.configLabel}>Currency</span>
            <select className={styles.select} defaultValue="usd">
              <option value="usd">United States Dollar</option>
              <option value="inr">Indian Rupee</option>
            </select>
          </div>
          <div className={styles.configRow}>
            <span className={styles.configLabel}>Payment tax percentage</span>
            <input type="number" className={styles.taxInput} defaultValue={0} />
          </div>

          <div className={styles.toggleRow}>
            <label className={styles.toggleLabel}>
              <input
                type="checkbox"
                checked={couponsEnabled}
                onChange={(e) => setCouponsEnabled(e.target.checked)}
              />
              Coupons
            </label>
          </div>
          {couponsEnabled && (
            <table className={styles.couponTable}>
              <thead>
                <tr>
                  <th>Coupon Code</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Enabled</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>WELCOME5</td>
                  <td>Discount Price</td>
                  <td>$5</td>
                  <td>Yes</td>
                </tr>
              </tbody>
            </table>
          )}

          <div className={styles.toggleRow}>
            <label className={styles.toggleLabel}>
              <input
                type="checkbox"
                checked={pricingRulesEnabled}
                onChange={(e) => setPricingRulesEnabled(e.target.checked)}
              />
              Custom Pricing Rules
            </label>
          </div>
          {pricingRulesEnabled && (
            <div className={styles.ruleRow}>
              When <strong>Q2 Pick products</strong> is answered then <strong>×</strong> 1
            </div>
          )}

          <button type="button" className={styles.publishButton} onClick={handlePublish}>
            Publish
          </button>
          {published && (
            <p role="status" className={styles.publishToast}>
              Your form has been published!
            </p>
          )}
        </div>
      )}
    </div>
  );
}
