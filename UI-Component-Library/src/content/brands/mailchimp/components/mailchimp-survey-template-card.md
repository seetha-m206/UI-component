---
component: "Mailchimp Survey Template Card"
ui_category: "Forms > Survey Template Card"
source_product: "Mailchimp"
last_verified: "2026-10-09"
evidence_state: "source_reviewed"
status: "complete"
summary: "Authenticated Mailchimp survey template card reconstructed with fictional data and guarded actions."
---

# Component: Mailchimp Survey Template Card

## Location

- **OBSERVATION:** Audience Surveys.

## Screenshot

![Fictional local preview](/research/mailchimp/fixtures/mailchimp-survey-template-card.png)

## Structure

- **OBSERVATION:** Survey goal, question format and concise starter description.
- **RECONSTRUCTION:** The local preview uses the fictional Atlas Studio account and contains no observed account, contact, campaign, audience, billing or integration identifiers.

## Behavior

- **OBSERVATION:** The component was visible and inspectable in the authenticated Mailchimp interface.
- **RECONSTRUCTION:** Local controls update fixture state only and never call Mailchimp.

## Actions

- **OBSERVATION:** Review starter templates.
- **NOT OBSERVED:** Template selection, survey editing, response collection and publication.

## States

- **OBSERVATION:** The described authenticated state was visible on 2026-10-09.
- **RECONSTRUCTION:** The preview provides a guarded default and selected local-only states where applicable.
- **NEEDS VERIFICATION:** Provider persistence, authorization, populated data, error, responsive and consequential outcome behavior.

## Rules and Validation

- **RECONSTRUCTION:** Campaign send, contact import, integration connection, form or website publication, upload, AI generation, settings save, upgrade, purchase, deletion and logout controls are disabled.

## Human Context

- **RECOMMENDATION:** Keep the next safe action legible, separate plan or connection gates from task content, and preserve clear empty and loading states.

## AI Context

- **OBSERVATION:** The surrounding Mailchimp surface referenced automation, templates, search or AI-assisted website options.
- **NOT OBSERVED:** No prompt was submitted and no generated output, model contract, quota, persistence or entitlement behavior was exercised.
- **RECOMMENDATION:** Treat any generation or recommendation control as executable and require an explicit confirmation boundary before provider computation.

## Technical Data

- **OBSERVATION:** Only the official admin origin, sanitized route family and visible semantic labels were retained.
- **NOT OBSERVED:** Query strings, audience identifiers, CSRF values, analytics session identifiers, request bodies, response payloads, tokens and opaque integration IDs were excluded.
- **INFERENCE:** Visual grouping suggests a reusable product component and does not establish an API contract.

## Lessons

- **RECOMMENDATION:** Reuse this pattern in Centilio Pulse with fictional fixtures, explicit boundary copy and disabled consequential actions during research review.

## Sources

- **OBSERVATION:** Authenticated Mailchimp interface, read-only observation, 2026-10-09.
- **NOT OBSERVED:** Template selection, survey editing, response collection and publication.
