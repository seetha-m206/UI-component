---
component: "Salesforce Sales New Task Form"
ui_category: "Forms > Utility Modal"
source_product: "Salesforce Sales (trial workspace)"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Component: Salesforce Sales New Task Form

## Location

- **OBSERVED:** Opened from the To Do List utility and cancelled without entering data.

## Structure

- **OBSERVED:** Task Information covered Assigned To, Related To, Subject, Name, Due Date and Comments.
- **OBSERVED:** Subject choices were Call, Send Letter, Send Quote and Other.
- **OBSERVED:** Status choices were Not Started, In Progress, Completed, Waiting on someone else and Deferred. Priority choices were High, Normal and Low.
- **OBSERVED:** Footer actions were Save & New, Cancel and Save. Assigned user identity was omitted from this public record.

## Behavior & States

- **OBSERVED:** Status defaulted to Not Started and Priority defaulted to Normal. No task was saved.
- **RECONSTRUCTION:** The catalogue fixture uses fictional owner, account and contact values.
- **NOT OBSERVED:** Reminder behavior, successful save, assignment notification and server errors.

## Needs Verification

- **NEEDS VERIFICATION:** Successful task creation, reminders and assignment outcomes.

## Sources

- **OBSERVED:** Private receipt screen ID `sales-new-task-form`.
