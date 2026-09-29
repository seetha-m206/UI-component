---
component: "Responses View (Summary / Question / Individual)"
ui_category: "Enterprise Tables > Table"
source_product: "Google Forms"
last_verified: "2026-09-23"
evidence_state: "source_reviewed"
status: 'partial'
summary: "Responses View (Summary / Question / Individual) -- confirmed three genuinely separate on-demand fetches, no filter/search anywhere in Forms itself (display/aggregate only), and a per-question-answered (not per-respondent) Summary count. The linked Sheet real-time sync mechanism remains unresolved."
---

# Component: Responses View (Summary / Question / Individual)

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location
- **Product:** Google Forms
- **Screen(s) it appears on:** Builder → Responses tab, three sub-views (Summary / Question / Individual), plus the linked Google Sheet and the Responses tab's "⋮" export menu. Tested on the reused P1 test form (`1jXL4eFIxzAtW7-7NDo7v5EWGb28DmnkfyWijfmQPPeg`), quiz mode on, with 4 real submitted responses (3 pre-existing, 1 submitted live during this pass).

## Structure
- **Summary tab:** an "Insights" block (three stat tiles — Average, Median, Range — plus a "Total points distribution" histogram; present because quiz mode is on from P1, untested whether it shows on a non-quiz form), then one card per question. Per-question chart type is keyed to the question type: Multiple choice → pie chart with a "Copy chart" button; Linear scale → bar/histogram with 0.25-increment axis ticks and a "Copy chart" button; Short answer → no chart at all, a plain scrollable list of grey pill-shaped response rows with no "Copy chart" button (nothing chart-like to copy). Each card shows its own live "N responses" count, not the form-wide total.
- **Individual tab:** a header row with prev/next arrows around a directly-editable "N of M" jump-to field, plus print and delete icons (each scoped to just that one response). Body renders the entire filled form exactly as the respondent saw it, in read-only/locked controls, reusing the graded-response layout: a purple "N of 0 points" badge at the form level and per-section, a "Score released [timestamp]" line, and per-question a "/ 0" points override input plus an "Add individual feedback" link (a private comment on that respondent's answer to that specific question).
- **Export:** the Responses tab's own "⋮" (separate from the Questions-tab toolbar's "⋮") offers 6 items: Get email notifications for new responses, Select destination for responses (the Link-to-Sheets picker, also used to relink), Unlink form, Download responses (.csv), Print all responses, Delete all responses.

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| Summary / Question / Individual tabs | Click | Each fires its own on-demand fetch (see Technical Data) | The clicked sub-view's data loads and renders | Same screen |
| Individual tab's "N of M" field | Type a number | Jumps directly to that response | `POST .../getsingleresponse` fires; a "Loading response…" spinner appears | Same screen |
| Per-question "/ 0" points input (Individual tab) | Type a value | Overrides the auto-score for that question, for that respondent | Score updates; grader can override per-question, per-respondent | Same screen |
| "Add individual feedback" | Click, type | Attaches a private comment | Comment saved against that respondent's answer to that specific question — distinct from a form-wide confirmation message | Same screen |
| Responses tab "⋮" → Download responses (.csv) | Click | Direct CSV export | A CSV download, independent of the Sheets link entirely | — |

## Behavior & States
- **Summary tab data is confirmed per-question-answered, not per-respondent-total** — an accidental but useful test: response 1 predates the Feedback/Satisfaction questions (they didn't exist yet when it was submitted). Their Summary charts report "2 responses" (only respondents who actually saw and could answer the question), not "4 responses" (the full respondent count) — confirming the count logic scopes to answers received, not form-wide submissions.
- **A response that predates a question simply renders that question blank/unanswered for that respondent in the Individual tab**, rather than hiding the question or erroring.
- **Summary/Question/Individual are NOT resident from one initial load — each is a genuinely separate on-demand fetch**, confirmed via `read_network_requests` while switching tabs: distinct endpoints under `docs.google.com/forms/u/0/d/<formId>/` — `aggregatestatistics` (Summary), `getresponseclusters` (Question tab's per-option/per-value breakdown), `getsingleresponse` (POST, fires every time you page to a different response in Individual — one response fetched at a time, not all four upfront, with a visible "Loading response…" spinner each time).

## Rules & Validation
- **No filter/search anywhere in the Responses tab, confirmed across all three sub-views and the "⋮" menu** — no date filter, no answer-value filter, no search box, no saved-view/segment concept. The Question tab's "1 of N" pager flips through *questions*; Individual's pager flips through *responses*; neither filters by content. Filtering only becomes possible once data reaches the linked Google Sheet (Sheets' own filter views, `QUERY`/`FILTER` formulas) or the downloaded CSV — **Forms itself is a display/aggregate layer only, not a queryable one.**
- Not tested this pass (flagged for a future GF pass, not guessed at): Summary-tab chart types for Checkboxes, Dropdown, Rating, Multiple/Checkbox grid, Date, Time; whether the Insights stat tiles appear on a non-quiz form.

## Technical Data
> OBSERVATION, directly captured via `read_network_requests` while interacting, Claude browser extension session, 2026-09-23.

- **The editor's own live-update channel is a classic Google "bind" long-poll, not a raw WebSocket** — visible as repeated `GET .../bind?...RID=rpc&SID=<session>&AID=<incrementing counter>&TYPE=xmlhttp` requests, each returning 200. Same BrowserChannel-style transport as Docs/Sheets/Gmail; reads as a live persistent channel from the user's perspective (no manual refresh needed) but is mechanically a sequence of discrete long-held HTTP GETs, each replaced by the next once it resolves.
- **The linked Sheet's real-time update mechanism could not be pinned down as cleanly — flagged as unresolved, not guessed at.** Method: cleared the Sheet tab's network log, submitted a 4th response from a separate tab, then checked the Sheet tab without touching it — the new row was already present with no reload, but the network log at that moment showed only an unrelated `play.google.com/log` telemetry beacon, no new discrete request coinciding with the row appearing. Most likely explanation (INFERENCE, not confirmed): Sheets' collaborative-edit channel was already open before the log was cleared, and the update arrived as a streamed chunk on that existing connection rather than a new top-level request this tool's HTTP-level listener would catch. Confirming this would need a proper DevTools Network-panel WS-frames trace, not just a request list.

## Competitor Comparisons
| Capability | Google Forms (this record) | Zoho Forms (see [[entries-filter-panel]] / [[entries-kanban-view]]) | Typeform (see [[typeform-analytics-dashboard]]) | Paperform (see [[paperform-submissions-results-view]]) |
|---|---|---|---|---|
| Per-question chart type | Pie (choice), bar/histogram (scale), plain scrollable text list (open text) — each keyed directly to the question type, confirmed for all 3 types tested | Not chart-based — a raw Entries list/Kanban board, no confirmed per-question aggregate chart in this library | Real SVG charting via visx (Airbnb's React+D3 primitives) — bar/pie with computed axis ticks; no load-in animation confirmed | Not chart-based in the Submissions list itself — Reports → Segments hosts per-question charts, a separate surface from the raw list |
| Individual-response navigation | Prev/next pager + jump-to-N field, read-only rendered form reusing the graded-response layout, inline per-question points-override + private feedback | Not confirmed to have an equivalent single-response drill-down UI in this library | Not confirmed to have an equivalent in this library | A full "inbox" detail page (confirmed in [[paperform-submissions-results-view]]'s PF9 update) with a metadata card (IP/device/platform/browser) and a "Total Charged" card — structurally different (no per-question grading UI, since Paperform isn't quiz-oriented) |
| In-app filtering/segmentation of entries | **None** — confirmed across all 3 sub-views and the export menu; display/aggregate only | **Confirmed true query-builder semantics** on the Entries list itself — checkbox → datatype-aware Select2 operator → value, client-side validated before any network call | Not confirmed to have a comparable list-level filter builder in this library's existing capture | **Structurally split** — search+date only on the raw Submissions list; the real condition-based query builder lives only in Reports → Segments and drives aggregates, not the raw list |
| Export formats | CSV download (independent of the Sheets link), live-linked Sheet, Print all responses | Not confirmed in this library | Not confirmed in this library | **Confirmed CSV only**, delivered via a signed-URL click rather than fetch/XHR (per [[paperform-submissions-results-view]]'s PF9 update) |
| Real-time/live-sync mechanism | Google "bind" long-poll (editor, confirmed); the linked Sheet's own update channel is likely a pre-existing collaborative-edit connection but this is INFERENCE, not confirmed | Not confirmed in this library | **Confirmed no distinct fetch-results call** — results are inlined at load, no distinct "results" request observed | **Confirmed distinct, paginated `GET .../submissions` fetch** — and confirmed in PF9 to duplicate specifically in the editor's own Results panel (the full app's own list endpoint fires once) |

## Best Observed Approach
- **RECOMMENDATION:** Zoho Forms' Entries filter panel remains the strongest confirmed list-level filtering implementation of the four — Google Forms is explicitly display/aggregate-only with zero filtering inside the product itself (filtering only becomes possible once data reaches the linked Sheet or a CSV export), a genuinely different design choice than the other three products, which each keep at least some filtering capability inside the product proper (even if, like Paperform, it's relocated to a separate reporting surface). Google Forms' Individual tab's inline per-question grading UI (points override + private feedback, scoped to one respondent's one answer) has no directly comparable equivalent recorded for any of the other three products — a genuine differentiator tied to Google Forms' quiz-first design.

## Cross-Component Pattern Note
1. **A fourth distinct live-update/results-loading strategy confirmed across this library's four form-builder products** — Typeform inlines with no distinct fetch, Paperform fetches distinctly (and duplicately, in the editor panel specifically), and Google Forms uses a long-poll "bind" channel for the editor while its Sheet-side sync mechanism remains genuinely unresolved. Worth revisiting if DevTools-level (not just HTTP-request-level) tracing becomes available in a future pass.
2. **The per-question-answered vs. per-respondent-total count distinction** (Summary tab reporting "2 responses" for a question two of four respondents never saw) is a subtle but real finding worth checking for on any future results-view capture across products — a naive count implementation might report the full respondent total instead.

## Sources
- OBSERVATION: Live, logged-in exploration of Google Forms, via Claude browser extension, 2026-09-23. Published test form with 4 real submitted responses (3 pre-existing, 1 submitted live during this pass) across varied answers, used specifically to produce the per-question-answered-count finding. Traced via `read_network_requests` while switching tabs and interacting. This pass's own session had no access to the rest of this Research-Library, so its own Competitor Comparisons table was originally scaffolded with placeholders — filled in above from the actual sibling records once accessible.
