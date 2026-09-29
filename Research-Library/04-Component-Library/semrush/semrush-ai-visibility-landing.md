---
component: Semrush AI Visibility Landing
ui_category: 'Marketing & Onboarding > AI Visibility Landing'
source_product: Semrush
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Public-facing AI Visibility landing workspace with domain-entry actions, history recall, capability cards, a coming-soon state, independent FAQ disclosures, a repeated CTA, and trust evidence.
---

# Component: Semrush AI Visibility Landing

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location

- **Product:** Semrush AI Visibility.
- **Observed screen:** Authenticated AI Visibility landing page before a new domain analysis is started.
- **Route family:** AI Visibility Overview entry.
- **Evidence boundary:** The screen showed account-specific recent-domain history. That value remains session-only. The preview uses a synthetic domain.

## Structure

Persistent Semrush shell → AI Visibility hero → domain input and primary action → last-checked history → three benefit summaries → five capability cards plus one future-state card → eight FAQ disclosures → repeated bottom domain action → trust-logo strip.

## Actions

| Reusable component | States and controls | Safe interaction tested | Observed result |
|---|---|---|---|
| Hero domain-entry form | Empty, focused, and populated | Entered and cleared a synthetic domain without submitting | Text input remained editable. It exposed a text type, descriptive placeholder, `aria-invalid=false`, and no required attribute |
| Primary CTA | Enabled appearance | Not submitted | “Get started” outcome, request, validation, loading, error, quota, and navigation behavior need verification |
| Last-checked history | Prior-domain link | Inspected only | A previously checked domain was available directly below the hero input |
| Benefit summaries | Three-item informational row | Observed | Summarized visibility tracking, competitor insight, and growth conversion |
| Capability cards | Five available capabilities | Observed | Covered brand tracking, prompts, competitive gaps, AI-search preparation, and brand narrative |
| Future capability card | “Coming soon” badge | Observed | ROI reporting was visibly unavailable and described future analytics and conversion connections |
| FAQ disclosure group | All collapsed, one open, and multiple open | Opened all eight items safely | Disclosure rows expanded independently. Opening a second item did not close the first |
| Bottom CTA | Empty domain input and primary action | Not submitted | Repeated the domain-check action near the page end |
| Trust strip | Static brand marks | Observed | Presented social proof after the bottom CTA |

## Behavior & States

- The hero input accepts a domain, subdomain, or URL.
- Primary and bottom CTA buttons remain visibly enabled when their inputs are empty. Empty-submit validation was not tested.
- The page displays a last-checked history link directly under both CTA areas.
- Benefit summaries establish the value proposition before the detailed capability cards.
- The ROI capability uses a neutral “Coming soon” badge instead of an enabled action.
- Each FAQ row is an independent disclosure. Multiple answers can remain visible simultaneously.
- Expanded FAQ buttons expose an expanded accessibility state and their answer appears as a named region.
- The reconstruction prevents navigation and analysis requests. CTA clicks only produce a local status message.
- The disabled fixture turns off inputs, history, CTA, and FAQ controls.

### State fixtures

| Fixture | Purpose | Evidence status |
|---|---|---|
| Landing default | Hero, history, benefits, capabilities, closed FAQs, bottom CTA, and trust strip | Observed |
| Domain entered | Editable populated text field | Observed with a synthetic value |
| One FAQ open | One disclosure answer and expanded state | Observed |
| Multiple FAQs | Independent multi-open behavior | Observed |
| Coming soon | Unavailable ROI capability | Observed |
| Guarded CTA | Local-only action feedback | Synthetic safety state based on an intentionally untested live action |
| Disabled | Non-interactive preview | Synthetic design-system state |

## Rules & Validation

- Never submit a real domain analysis during an evidence-only pass.
- Keep the form label available to assistive technology even when the visual UI relies on placeholder text.
- Preserve independent FAQ expansion. Do not implement this observed pattern as a one-at-a-time accordion.
- Do not present “Coming soon” content as an actionable feature.
- Treat history links as account-derived data and replace their values in reusable fixtures.
- Repeated CTAs should share input state and validation rules in a product implementation.
- Do not infer required-field errors, loading spinners, result navigation, or quota effects until they are directly tested.

## Technical Data

- **OBSERVED:** The hero and bottom controls are text inputs paired with primary action buttons.
- **OBSERVED:** The hero placeholder requests a domain, subdomain, or URL. The bottom placeholder requests a website.
- **OBSERVED:** The hero input had `type=text`, no `required` attribute, and `aria-invalid=false` before submission.
- **OBSERVED:** Eight FAQ buttons expose collapsed or expanded state.
- **OBSERVED:** Expanded FAQ answers appear as named regions associated with their questions.
- **OBSERVED:** Multiple FAQ rows can be expanded concurrently.
- **OBSERVED:** Update frequency differs by surface according to the FAQ: prompt tracking daily, Brand Performance weekly, and Visibility Overview monthly.
- **NOT OBSERVED:** CTA submission, empty or malformed-domain validation, request payloads, loading behavior, quota consumption, server errors, final routing, and analytics events.
- **NOT OBSERVED:** Keyboard focus order beyond semantic control roles and responsive breakpoints outside the active desktop viewport.
- **INFERENCE:** The repeated CTA likely routes through a shared domain-analysis workflow.
- **RECOMMENDATION:** Centilio Seek should reuse one validated domain-entry component in both locations and keep expandable educational content independently controllable.

## Accessibility

- Domain inputs require persistent programmatic labels because placeholders disappear after entry.
- FAQ triggers should be buttons with `aria-expanded` and `aria-controls`.
- Answers should be associated regions or panels with stable identifiers.
- “Coming soon” should be readable text, not color alone.
- Local status feedback uses a polite status region in the reconstruction.

## Cross-Component Pattern Note

The persistent two-level navigation is documented in [[semrush-ai-visibility-shell]]. A successful domain action is expected to lead toward [[semrush-ai-visibility-dashboard]], but that transition was not submitted in this pass. The capability cards link conceptually to [[semrush-ai-competitor-setup]], [[semrush-prompt-research-entry]], and [[semrush-brand-performance-insights]].

## Competitor Comparisons

| Product | Comparable pattern | Strength | Open question |
|---|---|---|---|
| Semrush | Education-first landing page with repeated domain analysis CTA | Explains the product before asking for commitment and supports multi-open FAQ comparison | Live validation, quota, and transition behavior remain unverified |
| Centilio Seek | Proposed guided research entry | Can pair clear capability education with a single reusable domain-analysis control | Final onboarding, plan, validation, and provider contracts remain open |

## Best Observed Approach

Lead with one concrete input and action, explain the workflow using compact benefits and capability cards, label unavailable capabilities explicitly, allow several FAQ answers to remain open for comparison, and repeat the primary action after the educational content.

## Sources

- **OBSERVATION:** Authenticated Semrush AI Visibility landing-screen review, 2026-09-29.
- **OBSERVATION:** Accessibility and DOM captures for text inputs, enabled CTA controls, eight FAQ buttons, expanded regions, and independent multi-open behavior.
- **OBSERVATION:** Screenshots of the hero, capability transition, expanded FAQ content, bottom CTA, and trust strip.
- **RECONSTRUCTION:** Local React preview uses synthetic values and local-only actions. No analysis was started.
