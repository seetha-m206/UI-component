---
component: "Collaborator / Sharing Permissions (Form-Level Specific Users + Org-Level User Management)"
ui_category: "Collaboration > Sharing/permissions"
source_product: "Zoho Forms"
last_verified: "2026-09-18"
evidence_state: "source_reviewed"
status: 'complete'
summary: "Two structurally distinct permission systems -- form-level Specific Users sharing (autocomplete-only, 3-tier) and org-level User Management (free-text invite, role hierarchy) -- with a structural, not just message-based, guardrail against an ownerless org."
---

# Component: Collaborator / Sharing Permissions Dialog

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **Relationship to [[publish-share-flow]]:** that record covers the respondent-facing Public/Embed Share screen. This record is deliberately scoped to the **owner-level** collaborator/permission surfaces, which turned out to be **two structurally distinct systems**, not one — see Structure below. Account under test: trial plan, single-member organization ("zohoforms" org, 1 active user, 2 available license seats).

## Location
- **Product:** Zoho Forms
- **Screen(s) it appears on:**
  - **Surface A — Form-level:** Builder → SHARE → Specific Users.
  - **Surface B — Org-level:** global hamburger menu (☰) → Setup → Users ("User Management").
  - The Builder header's people-icon "Collaborators" panel is a read-only summary of Surface A, and explicitly points there: *"No collaborators added. Configure it under Share → Specific User → Modify Form."*

## Structure
### Surface A — Share → Specific Users (form-level)
- Screen title: "Share Privately — Share the form with users within your organization and manage form-specific permissions."
- Fields: `Share With` (email box) + `Permission` dropdown, `Notifications` (Notify Users / Push Notification to Mobile checkboxes), `Share` button.
- **Permission dropdown — exactly 3 fixed tiers**, no custom/free-form permission builder:

| Tier | Description shown in UI |
|---|---|
| Submit Form (default) | "View & submit form" |
| Modify Form | "Modify form & configurations, Submit form" |
| Modify Form, Entries, Reports | "All permissions given under Modify Form + Edit entries, Create & modify reports" |

- Sibling tabs in the same "SHARE WITH" left rail:
  - **Public** — the toggleable public link/QR/embed screen (out of scope here; see [[publish-share-flow]]).
  - **Groups** — "Share the form with groups in your organization." Groups get a **fixed Submit-Form-equivalent permission only** — no permission dropdown at all.
  - **All Users** — just an org-name confirmation chip + notify checkbox + Share button — again **no permission-tier dropdown**, unlike Specific Users.
- Permission granularity (the 3-tier dropdown) exists **only** in the Specific Users flow.

### Surface B — Setup → Users (org-level, the real "Manage users" screen)
- Title: "User Management." Header stat tiles: Total Users / Active Users / Inactive Users / Available Users (license seats) — observed 3/1/0/2 for this trial org.
- Role filter tabs: **All Users / Admin / User / Respondent**. Combined with the "Super Admin" badge on the owner row, the role hierarchy is: **Super Admin → Admin → User → Respondent** (Super Admin has no filter tab of its own — it's the singular org owner, surfaced only via badge and a dedicated action).
- `+ Add User` opens a modal with a single free-text `Email Address` field (250-char max) + Cancel/Add. **No role selector appears at this stage** — role is presumably assigned as a default, editable afterward (not reachable without completing a real invite — see Action → Result).

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| Surface A `Share With` field | Type a full external email (e.g. not an existing org account) | Attempts collaborator match | Dropdown shows **"No more email addresses"** — the field is an **autocomplete-only picker** restricted to existing org accounts, not a free-email invite | Same screen |
| Surface A `Share` button (with unmatched email in field) | Click | Attempts to share | Inline client-side error: **"Please choose an email address."** **No network request fires at all** — confirmed via network capture across the attempt. Rejection happens purely client-side. | Same screen |
| Surface B `+ Add User` → Email field → "Add" | Click "Add" (final submit) | Sends a real invitation, consumes a license seat | **Not executed** — deliberately stopped short: this would send a real email and irreversibly consume one of 2 available seats. Everything short of final submit (field behavior, absence of a role selector) is captured; the post-submit default-role/seat-consumption state is **unconfirmed**. | — |
| Surface B "Change Super Admin" button (with zero Admin-tier users in the org) | Click | Attempts ownership transfer | **Blocked** — a modal: "Only an active Admin can be assigned as a Super Admin. Currently, there are no active Admins." Single "OK" dismiss, no alternate path. | Same screen (blocking modal) |

## Behavior & States
- **Surface A autocomplete data source:** no XHR/fetch fired per keystroke while typing in the Specific Users box; switching away from and back to the tab produced only analytics beacons (`POST /trinfo`), no visible "list org members" API call — the org member list most likely ships pre-embedded in the page's initial bootstrap payload, with filtering happening client-side (**INFERENCE**, not directly confirmed via a captured list-members endpoint).
- **Owner-row guardrail:** there is **no delete or edit affordance on the Super Admin's own row at all** — no hover actions, no kebab menu; clicking the "Super Admin" badge does nothing. The only path to change ownership is the dedicated "Change Super Admin" button.
- **Guardrail confirmed structurally, not just by the message:** the Admin filter tab independently shows "You have not added an admin" (0 rows), matching the blocking dialog's claim. The product prevents an ownerless org **by construction** — you cannot transfer/vacate Super Admin unless another user already holds Admin role, and there is no route to delete the Super Admin account from this screen at all.
- **"Change your own role" and "remove the last owner" collapse into the same guardrail** — both are blocked by requiring a pre-existing Admin as prerequisite; not independently testable beyond that.

## Rules & Validation
- Surface A: exactly 3 fixed permission tiers for Specific Users; Groups and All Users are blanket Submit-Form-level grants with no tier choice.
- Surface B: role hierarchy is fixed (Super Admin → Admin → User → Respondent); Super Admin is singular and structurally un-vacatable without a pre-existing Admin.
- Net effect: an org can never be left ownerless through this UI — the failure mode instead is "stuck as sole Super Admin until you promote someone else to Admin first."

## Technical Data
> OBSERVATION, directly captured via browser DOM/JS/network inspection, Claude browser extension session, 2026-09-18.

- **Network — Surface A invalid-collaborator attempt:** zero requests fired on the failed Share click (confirmed via network-request capture across the attempt) — validation is entirely client-side for this specific failure mode.
- **Network — Surface A tab switching:** only `POST /trinfo` analytics beacons observed; no member-list API call captured.
- **Network — Surface B Add User:** not exercised to completion (see Actions); no request captured for the final invite submission.

## Competitor Comparisons
| Competitor | Same component implementation | Strengths | Weaknesses |
|---|---|---|---|
| *(TODO — not yet researched)* | | | |

## Best Observed Approach
- TODO — needs at least one competitor's equivalent permissions/roles surface captured before a comparative judgment can be made. Worth flagging as a candidate strength regardless of competitor comparison: the structural (not just validation-message-based) prevention of an ownerless org is a genuinely robust guardrail design — worth using as a positive benchmark when a competitor's equivalent is captured.

## Cross-Component Pattern Note
1. **Two structurally distinct permission systems coexist in this product** — form-level sharing (autocomplete-only, restricted to existing org accounts, 3-tier dropdown) and org-level user management (free-text email invite, no tier dropdown, role assigned post-invite). A UI element that looks like "the sharing feature" (the Collaborators panel) is actually just a read-only pointer to Surface A, not a surface of its own.
2. **A second confirmed "guardrail prevents bad state by construction, not by validation message" pattern** in this product, similar in spirit to (though a different mechanism than) [[publish-share-flow]]'s confirm-before-disable dialog — here the prevention is structural (no delete/edit control exists at all) rather than a confirmation step.

## Sources
- OBSERVATION: Live exploration of Zoho Forms (forms.zoho.in), Builder → Share → Specific Users, and ☰ → Setup → Users, via Claude browser extension, 2026-09-18. Trial-plan single-member org. Network capture via request monitoring across each attempted action. Final "Add User" invite submission deliberately not executed (would send a real email and consume a license seat) — flagged as an open follow-up, not a gap in method.
