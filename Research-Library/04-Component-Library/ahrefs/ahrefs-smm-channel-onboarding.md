---
component: Ahrefs SMM Channel Onboarding
ui_category: 'Onboarding > Social Channel Connection'
source_product: Ahrefs
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Authenticated Social Media Manager first-channel onboarding with announcement, channel connection CTA, network row, and illustrative calendar.
---

# Component: Ahrefs SMM Channel Onboarding

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location and evidence boundary

Observed at authenticated `/social-media` with no connected channels. No channel connection was opened, no OAuth permission was requested, no feedback was sent, and no post was created or scheduled.

## Structure

Shared Ahrefs header → YouTube Shorts announcement with feedback link and close control → centered first-channel heading and explanation → orange Connect channel action → supported-network icons → illustrative scheduling calendar → footer and help launcher.

## Actions and states

| Surface             | Observed state                                             | Local reconstruction               |
| ------------------- | ---------------------------------------------------------- | ---------------------------------- |
| Announcement        | YouTube Shorts release message                             | Locally dismissible                |
| Share your feedback | External feedback link                                     | Guarded                            |
| Connect channel     | Primary onboarding action                                  | Stops at needs-verification status |
| Network row         | LinkedIn, X, Facebook, TikTok, Instagram, Threads, YouTube | Decorative labelled group          |
| Calendar            | Example scheduled-content image                            | Synthetic CSS illustration         |
| Banner dismissed    | Not verified for persistence                               | Synthetic fixture                  |
| Disabled            | Not observed                                               | Synthetic design-system override   |

## Rules and validation

- Treat channel connection as an account-linking permission flow.
- Never open OAuth, grant permissions, transmit feedback, or publish during evidence-only review.
- Keep supported networks visible before connection.
- Separate announcement dismissal from any account action.

## Technical Data

- **OBSERVED:** The page heading is “Connect your first channel”.
- **OBSERVED:** The explanation says a channel is required to start managing an online presence.
- **OBSERVED:** The release strip says YouTube Shorts can be scheduled and published alongside other channels.
- **OBSERVED:** Seven network icons precede an onboarding calendar illustration.
- **NOT OBSERVED:** Provider-specific OAuth, permission scopes, connection errors, account selection, calendar behavior, post creation, scheduling, publishing, analytics, or limits.
- **INFERENCE:** The illustration previews the post calendar without exposing an empty operational shell.
- **RECOMMENDATION:** Seek or Centilio Social should show requested permissions and publishing scope before account connection.

## Accessibility

The onboarding title is a level-one heading. The announcement has a stable label and dismiss button. The channel list has a group label. Connection and guarded links are native buttons with visible focus behavior.

## Competitor comparison

Ahrefs uses one focused connection action plus an illustrative outcome. Semrush social workflows tend to expose a wider campaign workspace. Centilio Social can retain the focused onboarding while making permission and approval states explicit.

## Sources

- **OBSERVATION:** Authenticated Ahrefs Social Media Manager onboarding review in the Codex in-app browser, 2026-09-29.
- **RECONSTRUCTION:** Local React preview with guarded actions. No social account, OAuth permission, feedback submission, post, external navigation, deployment, commit, or push action occurred.
