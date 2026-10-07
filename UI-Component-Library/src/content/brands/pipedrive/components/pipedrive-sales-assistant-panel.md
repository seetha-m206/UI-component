---
component: "Pipedrive Sales Assistant Beta Panel"
ui_category: "AI > Assistant Panel"
source_product: "Pipedrive"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Authenticated Pipedrive component reconstructed with fictional local data and explicit provider boundaries."
---

# Pipedrive Sales Assistant Beta Panel

## Location

- **OBSERVED:** Gradient assistant control in the top toolbar.

## Screenshot

- **NEEDS VERIFICATION:** Source screenshot is not retained.

## Structure

- **OBSERVED:** Right panel with Sales Assistant Beta header, information and history controls, overflow and close controls, illustration, prompt composer, microphone, disabled send state, suggested questions, View more and AI accuracy notice.

## Actions

- **OBSERVED:** Panel open and close only. No prompt, suggestion, microphone or View more action was activated.

## Behavior & States

- **OBSERVED:** Send appeared disabled while the prompt was empty.
- **RECONSTRUCTION:** Local text can enable Send, but activating it produces a no-prompt-sent notice and performs no network request.

## Rules & Validation

- **NOT OBSERVED:** Prompt execution, response format, tool access, grounding, rate limits, errors and persistence.

## Technical Data

- **OBSERVED / DOM:** Provider accessibility output identified the launcher and panel title but did not expose the complete panel body in the first tree diff.

## Accessibility

- **NEEDS VERIFICATION:** Composer label, microphone name, focus containment and live-response announcements.

## Human Context

- **RECOMMENDATION:** Keep example prompts and an accuracy caveat near the empty composer.

## AI Context

- **OBSERVED:** The product labels this surface Sales Assistant Beta.
- **NEEDS VERIFICATION:** No claim is made about answer quality, data access or provider execution.

## Needs Verification

- **NEEDS VERIFICATION:** Responses, sources, permissions, privacy, dictation, errors and conversation history.

## Sources

- **OBSERVED:** Authenticated Pipedrive Sales Assistant Beta panel, 2026-10-07.
