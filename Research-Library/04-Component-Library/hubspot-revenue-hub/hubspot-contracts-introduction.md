---
component: "HubSpot Contracts Introduction"
ui_category: "Revenue > Contracts"
source_product: "HubSpot Revenue Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# HubSpot Contracts Introduction

## Location

- **OBSERVED:** `/contacts/343751787/objects/0-721`.

## Screenshots

- **OBSERVED:** `2026-10-07-contracts-state.png`.

## Screen, Actions & States

- **OBSERVED:** Introductory state described manual contract creation, changes, renewals and audit history with Apply for beta and Learn more actions.
- **OBSERVED:** Automatic quote-to-contract required Revenue Hub Professional or Enterprise, with Start trial. Benefits covered structured linked records, TCV, ACV, MRR, ARR, renewal tracking, mid-term changes, proration and renewal inheritance.
- **NOT ACTIVATED:** Beta application, trial, learning links and contract actions.
- **NEEDS VERIFICATION:** Contract index, create and edit flows, approvals, revision history, renewals and reporting.

## Fictional Local Fixture

```yaml
contract: Northstar Annual Agreement
status: draft
acv: 24000
renewal_date: 2027-03-31
revision: 1
```

## Evidence Boundary

- **FACT:** The Contracts introduction was directly observed.
- **RECONSTRUCTION:** The contract fixture is fictional and local only.
- **NEEDS VERIFICATION:** No contract or beta enrolment was created.

## Sources

- Authenticated HubSpot Contracts introduction, observed 2026-10-07.
