---
component: 'Ubersuggest AI Chat Entry'
ui_category: 'Application Layout > Observed Screen'
source_product: Ubersuggest
last_verified: 2026-09-30
evidence_state: source_reviewed
status: complete
summary: 'Empty AI chat with history toggle, suggested prompts and composer. Observed scope only, no provider submissions.'
---

# Component: Ubersuggest AI Chat Entry

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data

## Location

- **Product:** Ubersuggest.
- **Source:** [https://app.neilpatel.com/en/ai-chat](https://app.neilpatel.com/en/ai-chat).
- **Scope:** screen-level capture on M5, 2026-09-30.
- **Documented boundary:** Empty AI chat with history toggle, suggested prompts and composer.
- **Completion meaning:** This record covers the named observed entry, empty, control or access-gate states. It does not certify the product workflow beyond that boundary.

## Structure

Empty AI chat with history toggle, suggested prompts and composer. The shared application chrome is represented with an orange wordmark, white header, left navigation and responsive content area. The integration instruction routes use a different provider landing shell, simplified in this reconstruction. Actual report data is never synthesized as an observed provider result.

## Actions

| Element           | User action                | Result and new state | Evidence |
| ----------------- | -------------------------- | -------------------- | -------- |
| Hide chat history | Activate                   | History collapses    | OBSERVED |
| Composer          | Enter a fictional question | Send enables         | OBSERVED |
| Composer          | Clear                      | No message is sent   | OBSERVED |

## Behavior & States

**OBSERVED:** The actions above were exercised or inspected in the authenticated browser. Settled states are separated from loading scaffolds. Captures include a timestamp, actual URL, DOM snapshot, control metadata and session-only screenshot.

**RECONSTRUCTION:** Fixtures are default, draft. Values are fictional, while the represented UI state was observed. The local preview uses controlled React state and disables external side effects. Opening a guard message is a local safety behavior, not a provider result. No invented provider error, timeout or successful submission fixture is included.

**Scope boundary:** Suggested prompts were not activated because they may submit. No response, tool execution or saved conversation is claimed.

## Known Limitations

- Not observed beyond this scope: Suggested prompts were not activated because they may submit. No response, tool execution or saved conversation is claimed.
- Not independently tested: provider requests, response schemas, persistence and successful submissions. Network behavior is outside this observation-only pass.
- Local previews use fictional values and simplified fonts and widgets. Browser verification certifies the reconstruction only.

## Rules & Validation

- User instruction for this pass: observe without submitting. No search, crawl, create, upload, install, purchase, export or settings save was performed.
- Empty, enabled, disabled, token-count, limit and plan-gate states are attributed only where recorded above.
- Do not infer server behavior from button readiness or a provider's descriptive text.
- Local calendar application, filter draft clearing, focus containment and topic removal are reconstruction behaviors where the action table does not explicitly identify a provider observation.
- Browser capture account values remain private. Reusable examples contain only fictional identities, domains and queries.

## Technical Data

**OBSERVED:** Ubersuggest AI: 30px

The JSON receipt preserves rendered roles, labels, button disabled states, headings, field heights and the visible screen width. A checkbox's accessible name may change from Select row to Unselect row. Some integration FAQs use native details/summary after hydration. Native page selectors and screenshot inspection were used together because pointer targets and accessibility semantics could change during loading.

**RECONSTRUCTION:** Shared React implementation in `ubersuggest-remaining/Remaining.tsx` and scoped CSS. System fonts approximate the observed Roboto and Geomanist. Static fictional artwork replaces provider screenshots. Native select and date inputs simplify provider widgets. No provider JavaScript, backend code, private API, payload, schema or network client is claimed.

**Network boundary:** No submission was authorized, so request/response contracts, backend validation, caching and persistence are outside the evidence scope. Navigation requests are not treated as workflow completion.

## Accessibility

Source semantics appear in the action receipt. The local reconstruction adds explicit field labels, named dialogs, visible keyboard focus, Escape dismissal and a modal focus loop. These accessibility improvements are tested locally and are not automatically attributed to Ubersuggest. Local responsive acceptance uses the catalogue's desktop and mobile harnesses, distinct from source viewport observations.

## Human View

Empty AI chat with history toggle, suggested prompts and composer. You can explore the captured states using fictional inputs. The preview cannot alter your Ubersuggest account. The source boundary is specific: Suggested prompts were not activated because they may submit. No response, tool execution or saved conversation is claimed.

## AI Context

This is observed UI research and a local reconstruction. `source_reviewed` means direct provider inspection, not proof of submitted provider outcomes or undocumented internals. A complete scoped record never means every product state is known. Retain the source boundary whenever reusing these controls. Do not use this document as authorization for external actions.

## Cross-Component Pattern Note

See [[ubersuggest-dashboard-workspace]] for the first-pass shell and [[ubersuggest-rank-tracking]] for the newly observed empty report. The screen and control records share an implementation but retain separate fixture sets, routes and evidence scope.

## Competitor Comparisons

This record supports comparison with the existing Ahrefs and Semrush libraries by UI category. No product-superiority conclusion is made from this observation.

## Best Observed Approach

History collapses. Preserve visible readiness and gate messages, while keeping requested operations distinct from completed operations.

## Sources

- **OBSERVED:** [Provider screen](https://app.neilpatel.com/en/ai-chat), captured 2026-09-30T10:54:51.388Z with Codex in-app browser on M5.
- **DOM AND MEASUREMENTS:** `Internal/scratch-2026-09/ubersuggest/remaining/ai-chat.json`.
- **ACTION RECEIPTS:** Other state captures and the trace in the same evidence directory. Screenshots are session-only because they can contain account chrome.
- **RECONSTRUCTION:** `UI-Component-Library/src/previews/ubersuggest-ai-chat-entry/` and `ubersuggest-remaining/`.
- **LOCAL ACCEPTANCE:** `Internal/scratch-2026-09/ubersuggest/remaining/verification.md` and the additive parent acceptance ledger.
