# OtterlyAI remaining-component batch

**Source:** Authenticated app observed 2026-10-01 in the Codex in-app browser. This pass covers read-only and unsaved entry states. Account content and credentials are excluded.

| Screen | New individual components | Observed boundary |
| --- | --- | --- |
| Brand Report date filter | Report date range picker | Presets and two-month calendar opened. No alternate range was applied. |
| Search prompts → Tags | Tag management empty state, Tag create dialog | Empty inventory and form fields observed. No tag created. |
| Search prompts → Add Prompts | Add Prompts form | Blank row, add/remove, import entry, disabled save observed. No prompt submitted. |
| Data sources | Data source entry | Logs provider selection entry observed. Provider list and connection were not opened. |
| Workspaces | Workspace usage and allocation, Workspace create entry | Quota overview and first workspace dialog step observed. No allocation or workspace changed. |
| Team management | Team invite dialog | Member table and invite fields observed. No invite sent. |
| API keys | API keys empty state | No-key state and creation entry observed. No key generated or revealed. |

## Existing coverage retained

Application shell, onboarding, populated Overview, Prompts report and detail, Citations, Recommendations processing, Agent analytics gate, AI Prompt Research modes, Search prompts inventory, GEO audit entries, and query fan-out entry remain in their existing records. The new items above do not turn unobserved submissions into verified behavior.

## Still outside observed evidence

Completed recommendations, connected agent analytics, provider connection steps, audit and query results, tag or prompt persistence, workspace allocation mutation, invitations, API-key lifecycle, downloads, payment, and live error paths. Some navigation controls did not reveal a new state in this pass, so no destination or behavior is inferred.
