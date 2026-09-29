---
component: "Payments / Products Field Family (Price, Products, Configure → Payments)"
ui_category: "Forms > Form"
source_product: "Paperform"
last_verified: "2026-09-23"
evidence_state: "source_reviewed"
status: 'complete'
summary: "Paperform's Price and Products fields plus the full Configure -> Payments screen (coupons, tax, a conditional pricing-rule builder) -- no Zoho Forms or Typeform equivalent exists, and publishing a priced form with no payment gateway connected is confirmed to be silent, with no warning."
---

# Component: Payments / Products Field Family

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **No comparison baseline exists.** Neither [[zoho-forms]] nor [[typeform]] documents a native price field, product catalogue, coupons, tax handling, or a conditional pricing-rule builder anywhere in this library. This is Paperform's clearest confirmed differentiator — see Competitor Comparisons below for the "none recorded" table, which is a deliberate finding, not an unfilled gap.

## Location
- **Product:** Paperform
- **Screen(s) it appears on:** Builder question cards (Price, Products field types) and their config drawers; Manage Products modal; Choose Layout modal; Configure → Payments (account, currency, tax, Coupons, Custom Pricing Rules); the published respondent form. Tested on scratch form `xborqzxj` — "P1 Deposit" (Price, key `99ec9`) and "P2 Pick products" (Products, key `1pgiu`). **Safety: no payment processor was connected** (account left at "No Account (Don't take payment)"); no test submission was made.

## Structure
- **Price field drawer:** Required / two-column / visibility-logic (common controls) plus **Question is read only** (default on — fixed price, shows "Price" value + a "Disable prefilling" toggle; turning it off relabels to "Default Price", removes the prefilling toggle, and lets the respondent type their own amount), **Price is discountable** (default on, lets coupons apply), Placeholder text, Price/Default Price value, and **Minimum price** (the pay-what-you-want floor, saved as `minValue`).
- **Products field drawer:** Manage Products, Choose Layout, Required, **Can buy more than one product** (default off, saved as `multipleAnswers`), visibility logic, Set default answer, Question ID.
- **Manage Products modal:** a left-side product list (name, auto-generated SKU, duplicate/delete/reorder controls, "Add Product +") plus Export/Import CSV buttons, and a right-side editor pane per selected product (Name*, SKU* [auto-generated 5-char id, editable], Price* [step=any, min=0], Stock [optional, `-` = unlimited, enforced at runtime], Images [file picker, not exercised]).
- **Choose Layout modal:** "Hide product prices" toggle, Layout (List/Card/Gallery), a separately-configurable mobile layout, and a live preview pane.
- **Configure → Payments screen:** Payment account dropdown (single option observed: "No Account (Don't take payment)", plus a "Manage All Payment Accounts ›" link to Account → Services), Currency (124 options), Payment tax percentage, **Coupons** toggle (reveals a table: Coupon Code/Type/Amount/Percentage/Expires After/Enabled/Delete + "Add Coupon +"), **Custom Pricing Rules** toggle (reveals Processing Fee %/fixed-amount fields, a Checkout label, and a rule-row builder — see Actions).

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| Price field "Question is read only" toggle | Turn off | Switches to a respondent-editable price | Drawer relabels "Price" to "Default Price"; "Disable prefilling for question" toggle disappears (it only applies to the fixed/read-only mode) | Same screen |
| Respondent Price input (min = 5 configured) | Type `3` | Attempts an under-minimum value | An inline warning bar in the theme's Warning color: **"PLEASE ENTER A NUMBER GREATER THAN OR EQUAL TO 5"**. The submit total still recalculates using the invalid `3` — the warning does not block the running total from updating. | Same screen |
| Products field, Card layout, multi-select on | Click a product tile | Selects it | Tile fills with the theme's Active color; a quantity `<input type="number">` (min 1, max = configured stock) appears for that product | Same screen |
| Quantity input | Type a value exceeding stock (e.g. 5 with stock 3) | Attempts an over-stock quantity | A modal: **"You must select no more than 3"** — the value is clamped to the stock ceiling, not just rejected | Same screen (modal) |
| Coupons toggle | Turn on | Reveals coupon management | A table (Coupon Code/Type/Amount/Percentage/Expires After/Enabled/Delete); "Add Coupon +" adds a row defaulting to type "Discount Price", amount 5, percentage 0, Enabled; deleting a row asks "Are you sure you want to remove this coupon?" | Same screen |
| Custom Pricing Rules toggle | Turn on | Reveals the rule builder | Processing Fee (%) and Processing Fee (Fixed amount) fields, a Checkout label field, and a rule list where each row reads "When [question] [condition] [value] then [operator] [amount]" with reorder/duplicate/delete controls and "Add another rule" | Same screen |
| Publish (form has Price/Products fields, no payment account connected) | Click Publish | Publishes | **Publishes silently — no warning, no block, no prompt to connect a gateway.** Status changes to PUBLISHED with the normal "Your form has been published!" toast, identical to publishing any other form. | Same screen |

## Behavior & States
- **Live running total on the Submit button** — confirmed directly: "Submit — $10.00" → "$22.00" (after adding a $12 product ×1) → "$46.00" (×3) → "$39.00" (after lowering the deposit to $3). This recalculates live as fields change, with no separate "calculate total" step.
- **No payment UI loads at all when no gateway is connected** — confirmed via direct inspection: no Stripe/PayPal/Braintree/Square script, no iframe, no card fields; `window._state.payment_source` is `null`, currency `usd`. The respondent sees a dollar total on the Submit button with nothing behind it to actually process a charge.
- **Products field control type differs from every other Paperform field captured so far:** it uses **native `<input type="checkbox">`** per product (inside a `role="group"`), in contrast to the custom `div[role=radio]` pattern confirmed for [[paperform-yes-no-field]] and [[paperform-rating-field]] — a genuinely different, more standards-based implementation for this one field type.
- **Rule builder question list includes a pseudo-question "Price"** (the running total itself) alongside every real form question, with two extra conditions unlocked only for "Price" (is less than / is more than) beyond the six shared with Yes/No-style questions (is / isn't / is answered / isn't answered / contains / doesn't contain). Operators are `+ − × ÷ =`, so a rule can add, subtract, multiply, divide, or directly set the total.

## Rules & Validation
- Minimum price is enforced only as a visible warning on the respondent side — it does **not** block the running total from incorporating an under-minimum value, and was not tested through to actual submission (unclear whether Submit itself would be blocked).
- Stock is enforced by clamping the quantity input, not just by a post-hoc validation error.
- **No guard exists against publishing a priced form with no payment account connected** — confirmed a real, exploitable misconfiguration risk: a respondent sees a real dollar total on Submit with no indication that no payment will actually be processed.

## Technical Data
> OBSERVATION, directly captured via browser DOM/network inspection, Claude browser extension session, 2026-09-23.

- **Saved data shape** (inside the Products field entity's own data, not a separate catalogue):
```json
"products": [
  {"SKU":"dlf3j","name":"Test Mug","price":"12.00","quantity":3},
  {"SKU":"bmoq0","name":"Test Tee","price":10}
]
```
  Sibling keys on the field: `quantities`, `hasProductImages`, `multipleAnswers`. **Confirmed data-hygiene inconsistency:** an edited price saves as the **string** `"12.00"`, while an untouched default price saves as the **number** `10` — a real type inconsistency in the product's own persistence, not a capture artifact.
- **No separate product-catalogue endpoint exists.** From opening Manage Products through adding/editing two products, setting up coupons, tax, and a partial pricing rule, the only form-related network traffic observed was the standard draft autosave: `PUT /api/v1/form/<id>/versions/<draftId>` on the same ~15s dirty-check cadence already confirmed in [[document-canvas-editor-shell]]/[[respondent-runtime-guided-vs-standard]]. Products, coupons, tax, and pricing rules all ride on this same single save mechanism — commerce configuration lives entirely inside the form definition, not a separate backend.
- **Publish uses the identical PUT with `?publish=1`** regardless of whether a payment account is connected — confirmed no special-cased publish-time validation for priced forms.
- **Currency list:** 124 options (default USD, includes INR; last entries alphabetically include West African CFA Franc, CFP Franc, Yemeni Rial, South African Rand, Zambian Kwacha).

## Competitor Comparisons
> **Deliberately "none recorded," not a research gap.** Neither [[zoho-forms]] nor [[typeform]] documents any equivalent capability anywhere in this library as of 2026-09-23.

| Capability | Zoho Forms | Typeform | Paperform |
|---|---|---|---|
| Fixed / pay-what-you-want price field | none recorded | none recorded | ✔ (read-only toggle + configurable minimum) |
| Product catalogue (SKU, stock, images, CSV import/export) | none recorded | none recorded | ✔ |
| Product layouts (List / Card / Gallery, independent mobile layout) | none recorded | none recorded | ✔ |
| Coupons (amount / % / expiry) | none recorded | none recorded | ✔ |
| Tax % and processing fees | none recorded | none recorded | ✔ |
| Conditional pricing rules (+ − × ÷ =) | none recorded | none recorded | ✔ |
| Payment gateways | none recorded | none recorded | Stripe, Braintree, PayPal Business, Square (names only — none connected/tested) |
| Live running total on the submit control | none recorded | none recorded | ✔ |
| Guard against publishing with no gateway connected | — | — | ✘ **publishes silently, no warning** |

## Best Observed Approach
- **RECOMMENDATION:** commerce-in-the-form-model (products/pricing/coupons all living inside the same form definition, saved and published through the same single mechanism as every other field) is a genuinely elegant architectural choice worth studying further if either Zoho Forms or Typeform is found to have a comparable feature in future research. The live running-total-on-Submit-button pattern is a cheap, high-clarity UX worth flagging as a reusable idea regardless of competitor comparison. The **silent-publish-with-no-gateway gap is a confirmed, concrete weak point** — any future implementation should block or warn when priced fields exist without a connected payment method, since respondents currently have no way to know a displayed dollar total won't actually be charged.

## Cross-Component Pattern Note
1. **A third distinct interactive-control implementation confirmed for Paperform's respondent-facing fields:** native `<input type="checkbox">` for Products, vs. custom `div[role=radio]` for both [[paperform-yes-no-field]] and [[paperform-rating-field]] — this product does not use one consistent control-implementation strategy across its own field types.
2. **Confirms the dirty-state-gated ~15s draft-save cadence** first established in [[document-canvas-editor-shell]] applies to commerce configuration too (products, coupons, tax, pricing rules), not just document/question content — a single, consistent persistence mechanism across the whole builder.
3. **A genuinely new risk-finding category for this library:** a confirmed *business-logic* safety gap (publish with no payment method, no warning) rather than a UI/accessibility bug — worth a dedicated "safety/business-logic gap" tag if this pattern recurs in future captures, distinct from the ARIA-wiring and keyboard-accessibility defect classes already confirmed for [[paperform-yes-no-field]] and [[paperform-rating-field]].
4. **This finding was upgraded from a configuration-time risk to a confirmed, live data-integrity problem in [[paperform-submissions-results-view]]'s PF9 follow-up (2026-09-23).** A real completed submission was pushed through this exact scratch form's priced fields with no gateway connected (confirmed `payment:null` in the submit payload, exactly as this record predicted) — and the resulting submission is shown everywhere in the owner-facing UI as "Total Charged 22.00" / "Total Paid 22.00" (detail view / editor Results panel / CSV export all agree), with **no unpaid or no-gateway indicator anywhere**, and with product stock genuinely allocated against it. Read both records together: this one identifies the gap at configuration time, the other confirms its real-world consequence on live submission data.
5. **This Custom Pricing Rules grammar is one of three confirmed uses of the same shared condition-builder pattern in this product** — [[paperform-question-visibility-logic]] (PF10) confirms the identical `[question][operator][value]`+And/Or+nested-group primitive drives Question Visibility Logic and the Reports → Segments builder ([[paperform-submissions-results-view]]) too, with this component being the only one of the three that adds a "then [action]" clause (`+ − × ÷ =` against the running total). One reused internal rule-builder component, not three independent implementations.

## Sources
- OBSERVATION: Live exploration + DOM/network inspection of Paperform (builder + published respondent view), via Claude browser extension, 2026-09-23. Scratch form `xborqzxj`, fields "P1 Deposit" (Price, key `99ec9`) and "P2 Pick products" (Products, key `1pgiu`). No payment processor was connected at any point; no test submission was made. The form was left published with these fields live — a genuine, intentional test artifact, not reverted, consistent with this project's practice for non-sensitive test content.
