---
component: 'Two-Line-Option Dropdown & Collapsible Accordion Section'
ui_category: 'Data Input > Dropdown/Select'
source_product: 'Zoho Forms'
last_verified: '2026-09-16'
evidence_state: 'source_reviewed'
status: 'complete'
summary: "Share screen two-line permission dropdown, and the Theme editor accordion — the accordion uses slideDown()/slideUp(), mechanically distinct from the toggle field's fadeIn()/fadeOut() pattern."
---

# Component: Two-Line-Option Dropdown & Collapsible Accordion Section

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location

- **Product:** Zoho Forms
- **Screen(s) it appears on:** Share → Specific Users tab (Permission selector, two-line dropdown); full-screen Theme editor → Container tab (accordion sections: Border, Edges Spacing & Shadow, Form responsiveness, Scroll behaviour).

## Structure

- **Permission dropdown:** a Select2-styled control (not native `<select>`) beside the "Search Email Address" field. Labeled "Permission" caption above, current value below with a chevron. Opening it reveals three stacked two-line rows, each a genuine title + subtitle wrapper: "Submit Form" / "View & submit form", "Modify Form" / "Modify form & configurations, Submit form", "Modify Form, Entries, Reports" / "All permissions given under Modify Form + Edit entries, Create & modify reports". Currently-selected option is highlighted (light green background, green title text) even before hovering.
- **Accordion sections:** Theme editor's Container tab lists five sections — "Container" (open by default), "Border", "Edges, Spacing & Shadow", "Form responsiveness", "Scroll behaviour" (collapsed by default). Each header row is the full click target, not just a small chevron icon. Content stays in the DOM at all times (never added/removed), only shown/hidden.
- Screenshot: not captured this pass (see Sources — DOM/CSS/JS data pulled programmatically).

## Actions

| Element                          | User Action | Function                     | Result                                                                                                                                     | Destination screen/state |
| -------------------------------- | ----------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ |
| Permission dropdown trigger      | Click       | Select2's own open handler   | Panel opens showing 3 two-line options                                                                                                     | Same screen              |
| A permission option              | Click       | Select2's own select handler | Panel closes, displayed value updates immediately; selection is held locally, never submitted until the separate "Share" button is clicked | Same screen              |
| Accordion header (e.g. "Border") | Click       | `toggleOfElemCont(this)`     | Section expands/collapses; sibling sections below shift position to make room; auto-scrolls the newly-revealed content into view on expand | Same screen              |

## Behavior & States

- Permission dropdown: default shows "Submit Form" (or whatever was last set); selected-row highlight uses Select2's default `select2-results__option--highlighted` styling — plain off-the-shelf behavior, not a custom addition.
- Accordion: default state has "Container" open, the other four sections closed (`status="close"`, class `toggleClose` on the header). Expanded state removes `toggleClose`, content becomes `display:inline-block`. Chevron icon visibly rotates through a mid-transition state (confirmed via a mid-animation screenshot), not an instant icon swap.
- Disabled/loading/error states: not observed for either control this pass.

## Rules & Validation

- Permission dropdown: no validation — a selection is always one of the three fixed options; the value is only meaningful once the outer "Share" action is taken (not exercised this pass, per safety constraint).
- Accordion: no validation; purely a visibility toggle.

## Technical Data

> OBSERVATION, directly captured via browser DOM/JS/network inspection (2026-09-16), Claude browser extension session, ~52 actions, including direct extraction of the accordion's live toggle handler source and a mid-animation screenshot capture.

- **DOM — Permission dropdown (Select2 with a custom `templateResult`):**

```html
<li class="select2-results__option" role="treeitem" aria-selected="false">
  <div>Modify Form</div>
  <span class="sharingTxtDis">Modify form &amp; configurations, Submit form</span>
</li>
```

Each option is genuinely a title + subtitle wrapper, not one element with two text nodes. Trigger is `span.select2-selection__rendered` inside nested `select2SharePermission select2SpecificPermission` wrapper classes — reused Select2 boilerplate, with two custom classes marking this as the specific "permission on a shared-with-user row" instance. A second, currently-hidden instance of the same widget exists, presumably a template row cloned per added user.

- **DOM — Accordion:** `div.pageBuilderHd[onclick="toggleOfElemCont(this)"][status="open"|"close"]` immediately followed by its sibling content `div.fullPageThemeWrap`. Collapsed state adds class `toggleClose` to the header and leaves content at `display:none`; expanded state removes `toggleClose`, content becomes `display:inline-block`.

- **JavaScript — Accordion (the specific comparison requested against [[toggle-radio-switch]]'s dependent-options block):**

```js
function toggleOfElemCont(elem) {
  var parentContDiv = $(elem).closest('div[elname=fullPageThemeProperties]'),
    leftContDimDiv = ($(parentContDiv).find('div[status=open]'), $('#leftContDimDiv'));
  $(leftContDimDiv).show();
  var elemVal = parseInt($(elem).next().height()) + 200,
    elemDelay = elemVal < 400 ? 400 : elemVal > 800 ? 800 : elemVal,
    elemSlideUpDelay = 400 === elemDelay ? elemDelay - 100 : elemDelay - 200;
  'open' === $(elem).attr('status')
    ? ($(elem).attr('status', 'close').addClass('toggleClose'),
      $(elem)
        .next()
        .slideUp(elemSlideUpDelay, function () {
          $(leftContDimDiv).hide();
        }))
    : ($(elem).attr('status', 'open').removeClass('toggleClose'),
      $(elem)
        .next()
        .slideDown(elemDelay, function () {
          $(leftContDimDiv).hide();
          scrollToggleElemIntoViewPort($(elem).closest('div.themeListcont'));
        }));
}
```

Uses jQuery `.slideDown()`/`.slideUp()` — a height + implicit visibility animation — with a **content-height-adaptive duration**: roughly `(content height in px) + 200`, clamped to a 400–800ms range; the collapse (`slideUp`) runs 100–200ms faster than the expand (`slideDown`) for the same section. Also calls `scrollToggleElemIntoViewPort` on expand, auto-scrolling the newly-revealed content into view.

- **Network:** Both controls fired **zero requests** on interaction — the Permission dropdown's selection is purely local-form-state (confirmed via the same `fetch`/`XHR` hook used in prior traces this session), and the accordion is a pure client-side visibility toggle.

- **CSS/Animation — the specific comparison requested:** This is **not** the `fadeIn()`/`fadeOut()` opacity-only pattern documented for [[toggle-radio-switch]]'s dependent-options block. The accordion uses `.slideDown()`/`.slideUp()` — a height + implicit opacity/visibility change with a content-height-adaptive duration (400–800ms) — mechanically different from a fixed-duration pure-opacity fade. A batched click+immediate-screenshot caught a section mid-expansion: partially revealed content with lower sections already shifted down before the full content appeared, confirming a genuine slide rather than a hard cut.

## Cross-Component Pattern Note

- **OBSERVATION:** the Permission dropdown's selected-row highlight is plain off-the-shelf Select2 default behavior with a custom `templateResult` for the subtitle — closer to "off-the-shelf widget + light customization" than a bespoke build, unlike the fully hand-rolled controls documented elsewhere in this product (the Analytics bar chart, the Kanban board — see [[analytics-dashboard-kpi-bar-map]], [[entries-kanban-view]]).
- **Verdict on the accordion-vs-toggle comparison:** genuinely different animation primitives for what looks like the same "reveal more settings" interaction pattern — [[toggle-radio-switch]]'s dependent-options block animates pure opacity (fadeIn/fadeOut, presumably fixed duration), while this accordion animates height (slideDown/slideUp, duration scaled to content). Combined with the two-modal finding in [[destructive-confirm-modal-comparison]], this reinforces that Zoho Forms' interaction layer is a patchwork of independently-built reveal/hide mechanisms rather than one shared "expand/collapse" or "modal" primitive reused everywhere — even though, to an end user, each "click a header to reveal more options" interaction looks like it should be one component apiece.

## Competitor Comparisons

| Competitor | Same component implementation | Strengths | Weaknesses |
| ---------- | ----------------------------- | --------- | ---------- |

## Best Observed Approach

- TODO — needs at least one competitor's equivalent two-line dropdown or accordion section captured before a comparative judgment can be made.

## Sources

- OBSERVATION: Live exploration of Zoho Forms (forms.zoho.in), Share → Specific Users tab and the full-screen Theme editor's Container tab, via Claude browser extension, 2026-09-16 (~52 actions, including direct extraction of the accordion's live toggle-handler source and a mid-animation screenshot). No destructive or persisted action was taken: the permission dropdown selection was never submitted (no "Share" click), and the theme-editor session was fully discarded via the existing "changes not applied" exit path.
