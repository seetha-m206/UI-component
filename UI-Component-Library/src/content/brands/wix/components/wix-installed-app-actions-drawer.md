---
component: "Wix Installed App Actions Drawer"
ui_category: "Actions > Management Drawer"
source_product: "Wix"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Installed-app drawer separating editor shortcuts from app information, reviews, support and deletion."
---

# Wix Installed App Actions Drawer

## Structure
- **OBSERVED:** The drawer repeated Wix Portfolio identity and setup status. Quick actions were Open Dashboard and Open in Editor. Manage actions were View app info, Rate and review, Contact Customer Care and Delete app.

## Behavior & States
- **OBSERVED:** The drawer overlaid Manage Apps and exposed a close control.
- **NOT OBSERVED:** Confirmation dialogs, deletion permissions, editor launch and support.
- **RECONSTRUCTION:** Every management control returns a local guard. Delete cannot remove anything.

## Local Preview Captures

- **RECONSTRUCTION:** These images capture the fictional local preview. They are not Wix provider screenshots.

### Observed drawer open

![wix-installed-app-actions-drawer — Observed drawer open](/research/wix/fixtures/wix-installed-app-actions-drawer--open.jpg)

- **RECONSTRUCTION / CAPTURE:** `open` at 1600 × 1200. SHA-256 `f3be02254b04cc5a61d537f1d05fc489fc023136cf51be7e92cf0f2c231c926c`.

## Sources
- **OBSERVED:** Authenticated Wix installed-app action drawer, 2026-10-07. No durable provider screenshot was archived.
