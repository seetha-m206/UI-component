---
component: "Freshchat FAQ Article Detail"
ui_category: "Knowledge > Article Detail"
source_product: "Freshchat"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed inline FAQ article detail with expand control, related links and untouched rating actions."
---

# Freshchat FAQ Article Detail

## Location

- **OBSERVED:** Freshchat FAQ search result → article detail.

## Structure

- **OBSERVED:** Back control, category label, article title, expand control, structured article body, related link and usefulness prompt with like/dislike buttons.

## Actions

- **OBSERVED:** Opening the result replaced the result list with article content inside the widget.
- **NOT OBSERVED:** Expand, related-link navigation and usefulness rating were not invoked.

## Behavior & States

- **OBSERVED:** Inline article state with neither rating selected.
- **RECONSTRUCTION:** Rating controls remain disabled and show a local boundary notice.

## Technical Data

- **OBSERVED / DOM:** Article title and content body exposed dedicated identifiers; images and links were embedded in the article body.
- **NEEDS VERIFICATION:** Article fetch endpoint, sanitization, analytics, expansion behavior and rating submission.

## Sources

- **OBSERVED:** Freshchat Legacy help article displayed in the embedded widget, 2026-10-08.
