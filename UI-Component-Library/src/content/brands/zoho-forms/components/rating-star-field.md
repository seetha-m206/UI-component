---
component: 'Rating Field (5-Star Selector)'
ui_category: 'Data Input > Form'
source_product: 'Zoho Forms'
last_verified: '2026-09-15'
evidence_state: 'source_reviewed'
status: 'complete'
summary: '5-star selector using index-comparison fill logic; aria-checked is wired in markup but confirmed to never actually flip — a real accessibility gap.'
---

# Component: Rating Field (5-Star Selector)

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location

- **Product:** Zoho Forms
- **Screen(s) it appears on:** Form builder (Rating Scales category) → tested in Preview mode (renders inside an iframe, per methodological note in [[yes-no-toggle-field]]).

## Structure

- `div.ratingWrapper.star[elname="ratingSubData"]` containing 5 `<a role="radio">` elements, each wrapping an SVG star icon (`svg.icon.icon-star`).
- Each anchor carries `rating_value` (its position, 1–5), `rating_count="5"` (group size), a shared `name` attribute (grouping identifier, not used for native radio semantics), and a `value` attribute that — notably — holds the _current overall rating_, identically on all 5 anchors, not each star's own index.

## Actions

| Element                                     | User Action | Function                                     | Result                                                                                                                                                                                       | Destination screen/state                   |
| ------------------------------------------- | ----------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `a[rating_value="N"]`                       | Click       | `selectRating(this, N, 5, ratingSubType)`    | Fills stars 1..N solid gold, leaves stars N+1..5 outlined; sets `elattr="selected"` on star N only; updates shared `value` attribute on all 5 to N; updates a `.ratingCount` display element | Same screen, visual fill state change only |
| Click on the already-selected boundary star | Click       | `selectRating` (toggle-off branch)           | Resets all 5 stars to unfilled/unset (`value=""`, `elattr=""`), rating count display → 0                                                                                                     | Same screen, rating cleared                |
| Hover over a star (`onmouseover`)           | Hover       | `mouseOverRating(this, N, 5, ratingSubType)` | Handler fires and its guard condition passes, but **no visible preview-fill was observed** in this test — see note below                                                                     | Same screen (no confirmed visual change)   |

## Behavior & States

- Default state: all 5 stars outlined/unfilled — transparent fill, gold stroke.
- Selected state: stars up to and including the clicked one filled solid gold (`rgb(255,202,0)`); stroke stays gold on unfilled stars too (outline never disappears).
- Hover/preview state: wired in JS (`mouseOverRating`/`mouseOutRating`) but did not produce an observable visual change in this test — flagged as inconclusive (see Technical Data), not confirmed absent.
- Toggle-off state: clicking the current boundary star again clears the whole group to unset.
- Disabled state: not observed.
- Loading state: none — purely client-side.
- Error state: `aria-describedby` references an `error-Rating` element, implying a validation-error state exists (e.g. required-rating not given) — not independently exercised this pass.

## Rules & Validation

- Selection logic is **index-comparison across the whole group** (`index < ratingElemCnt` fills a star), not an independent per-star toggle — structurally different from a checkbox group.
- `aria-checked` is present in the markup on every star but **was observed to remain `"false"` on all 5 stars regardless of selection state** — despite `role="radio"` semantics implying it should track the checked star. This is a likely accessibility gap: screen readers relying on `aria-checked` would not perceive the actual selection.

## Technical Data

> OBSERVATION, directly captured via browser DOM/JS/network inspection (2026-09-15), including a request-count hook confirming zero network activity and a full pre/post-click attribute diff across all 5 stars.

- **DOM:**

```html
<div class="ratingWrapper star" elname="ratingSubData">
  <a
    role="radio"
    aria-describedby="Rating-arialabel hint-Rating error-Rating"
    aria-label="1 Star"
    tabindex="0"
    aria-checked="false"
    href="javascript:;"
    onclick="selectRating(this,1,5,1); ZFLive.prefillFieldLabel(this);"
    onmouseover="mouseOverRating(this,1,5,1)"
    onmouseout="mouseOutRating(this,1,5,1)"
    rating_value="1"
    rating_count="5"
    name="Rating"
    elattr=""
  >
    <svg class="icon icon-star">...</svg>
  </a>
  <!-- 4 more <a> siblings for stars 2–5 -->
</div>
```

Post-click (rating = 3) attribute diff across all 5 stars:

| star | value | elattr     | svgFill  | aria-checked |
| ---- | ----- | ---------- | -------- | ------------ |
| 1    | "3"   | ""         | filled   | false        |
| 2    | "3"   | ""         | filled   | false        |
| 3    | "3"   | "selected" | filled   | false        |
| 4    | "3"   | ""         | unfilled | false        |
| 5    | "3"   | ""         | unfilled | false        |

`value` is a shared current-rating count on all anchors, not a fixed per-star value. `elattr="selected"` marks only the clicked boundary star.

- **JavaScript:**

```js
function selectRating(elem, ratingElemCnt, totalCount, ratingSubType) {
  var parentElem, selectedIdx, ratingId, ratCountEm;
  ratingId = $(elem).attr('name');
  var fldLiElem = getClosestFieldElemLi(elem);
  ratCountEm = $(fldLiElem)
    .find('.ratingCount')
    .find('em[id=' + ratingId + ']');
  parentElem = $(elem).parent();
  $(elem).attr('elattr') == 'selected'
    ? // toggle OFF
      ($(parentElem)
        .find('a')
        .each(function (index, anchorElem) {
          $(anchorElem).removeClass(getRatingOnClass());
          $(anchorElem).attr({ value: '', elattr: '' });
        }),
      $(ratCountEm).html(0))
    : // normal select
      (2 == ratingSubType
        ? ($(parentElem).find('a').attr({ elattr: '', 'aria-checked': !1, value: ratingElemCnt }),
          $(parentElem).find('a').removeClass(getRatingOnClass()))
        : (isOneFieldForm() && $(elem).addClass('selected'),
          isAccessibilitySupported() && $(elem).attr('aria-checked', !0)),
      $(parentElem)
        .find('a')
        .each(function (index, anchorElem) {
          $(anchorElem).attr('elattr', '');
          (index < ratingElemCnt
            ? ($(anchorElem).addClass(getRatingOnClass()),
              index == ratingElemCnt - 1 && $(anchorElem).attr('elattr', 'selected'))
            : $(anchorElem).removeClass(getRatingOnClass()),
            $(anchorElem).attr('value', ratingElemCnt));
        }),
      $(ratCountEm).html(ratingElemCnt));
}
```

Index-comparison fill logic (`index < ratingElemCnt`). Re-clicking the current boundary star triggers the toggle-off branch, resetting the group — an independently-implemented equivalent of the toggle-off affordance also seen in [[yes-no-toggle-field]].

`mouseOverRating`'s guard (`ratingSubType != 2`) passed in this test, meaning the handler executed, but no visible fill-preview change was observed — flagged as inconclusive (possibly a synthetic-event limitation in the test session, not necessarily absent in real user interaction).

- **Network:** Zero requests on click (`reqCount: 0`, same clean XHR-count hook used for [[yes-no-toggle-field]]) — purely client-side.

- **Response:** N/A — no request fired.

- **State change:** Purely client-side; `value`, `elattr`, and CSS class state live entirely in the DOM, no persistence observed at the interaction level.

- **CSS:**
  - Filled star: `fill: rgb(255,202,0)` (solid gold); `stroke: rgb(255,202,0)`; `30×30px`.
  - Unfilled star: `fill: rgba(0,0,0,0)` (transparent); `stroke: rgb(255,202,0)` (outline stays gold even when unfilled).

- **Animation/transition:** `transition: all 0.3s linear` — a genuine CSS transition on the SVG, animating the fill/stroke color change smoothly rather than snapping instantly. Distinct from both [[yes-no-toggle-field]] (`0s`, no transition) and [[toggle-radio-switch]] (`0.2s ease`, applied to a `::after` transform rather than a fill color).

## Cross-Component Pattern Note

- **OBSERVATION:** Rating is a **third distinct implementation** in the same "ARIA role on an `<a>` tag, no native form input, JS-driven class toggling" family as [[yes-no-toggle-field]], but diverges in three ways: (1) selection logic is index-comparison across a group rather than single-element toggle with sibling cleanup; (2) `aria-checked` is present in markup but **never actually flips to `true`** in this test — a likely accessibility gap worth flagging in the product record's Accessibility section; (3) it is the only one of the three controls inspected so far ([[yes-no-toggle-field]], [[toggle-radio-switch]], Rating) with a genuine CSS transition on the fill/color change itself (`0.3s linear`).

## Competitor Comparisons

| Competitor                    | Same component implementation | Strengths | Weaknesses |
| ----------------------------- | ----------------------------- | --------- | ---------- |
| _(TODO — not yet researched)_ |                               |           |            |

## Best Observed Approach

- TODO — needs at least one competitor's equivalent rating field captured before a comparative judgment can be made.

## Sources

- OBSERVATION: Live exploration of Zoho Forms (forms.zoho.in), form builder → Preview mode (iframe), via Claude browser extension, 2026-09-15. DOM/CSS/JS/network data retrieved via the page's own JS context, with a request-count hook confirming zero network activity on interaction.
