---
component: 'Theme Editor Shell (Full-Screen Split-Pane Live Preview)'
ui_category: 'Application Layout > Split-pane shell'
source_product: 'Zoho Forms'
last_verified: '2026-09-16'
evidence_state: 'source_reviewed'
status: 'complete'
summary: "Full-screen 'Form Customization' theme editor shell — fixed-width left config panel plus a same-origin iframe holding the actual live form as its 'preview'; config panel writes CSS custom properties directly onto the iframe's body, no network calls until Apply."
---

# Component: Theme Editor Shell (Full-Screen Split-Pane Live Preview)

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location

- **Product:** Zoho Forms
- **Screen(s) it appears on:** Form Builder → Themes tab → "Create from Scratch" (and by extension any entry point into the full-screen theme editor). Entry point opens a full-viewport modal (`#themePopup`) titled "Form Customization".

## Structure

- Full-screen modal eclipsing the whole viewport, ~1662×970 in the tested window. Top to bottom / left to right:
  - **Header/toolbar** — `.zf-tb-HeaderWrapper` (50px tall): title "Form Customization" (left), "Restore theme defaults" link, green Apply button (`#createFromScratch.zf-tb-ApplyButton`), and a close link (`.zf-tb-Close`) (right).
  - **Left config panel** — `#leftPaneCont.zf-tb-leftContainer.leftPane`, fixed 415px total width, itself two sub-strips:
    - 90px icon-only vertical tab menu (`.zf-leftSmallTabMenu`): GENERAL, WELCOME PAGE, HEADER, FIELDS, CONTAINER, PAGES, SPECIAL FIELDS, BUTTONS, PROGRESS BAR.
    - 325px detail panel (`.fullPageThmeBuilder`) with collapsible sections (General, Wallpaper, Font, etc.) holding the actual controls (layout pickers, color swatches, sliders, dropdowns).
  - A small collapse toggle (`#toggleDiv.zf-tb-slide.expandColDiv`) folds the entire left pane away.
  - **Right live preview pane** — everything from x=415px to the right edge. Not a custom-built preview widget: it is an `<iframe>` (`#fpCustomThemeEditor.themeEditorIframe`) rendering the actual live form document, same-origin (`src: /{account}/form/{formLinkName}/currenttheme`).
- Screenshot: not captured this pass (see Sources — DOM/CSS/JS/network data pulled programmatically).

## Actions

| Element                                                        | User Action  | Function                                                                                                                                                                                           | Result                                                                                                                                              | Destination screen/state                                                 |
| -------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Config control (e.g. Container → Background → Gradient swatch) | Click/select | Parent-document JS handler mutates the iframe's `document.body.style` custom properties directly (same-origin DOM write, no `postMessage`)                                                         | Preview updates instantly in place; only the affected element's computed background recomputes — no wholesale DOM re-render of the rest of the form | Same screen, live preview reflects new value                             |
| `#toggleDiv` collapse arrow                                    | Click        | Folds/unfolds the left config panel                                                                                                                                                                | Left pane hides/shows; preview iframe area does not resize/reflow to fill the freed space (fixed-width panes, not a real flex/resizable split)      | Same screen                                                              |
| Green Apply button (`#createFromScratch.zf-tb-ApplyButton`)    | Click        | Persists all pending theme edits to the form (network call — not directly captured this pass, only inferred from "Changes are not applied to the form" exit-warning copy; see Technical Data note) | Theme applied server-side                                                                                                                           | Same screen or returns to builder, theme now live                        |
| Close link (`.zf-tb-Close`) with unsaved changes pending       | Click        | Fires a native-style confirmation dialog: _"Changes are not applied to the form. Are you sure you want to exit?"_ (No / Yes)                                                                       | Choosing Yes discards all pending edits client-side and exits without any network call                                                              | Returns to prior screen (Themes tab / builder), original theme untouched |

## Behavior & States

- Default state: opens with the form's current theme rendered live in the iframe; left panel defaults to the GENERAL icon tab.
- Interactive/hover/focus state: not separately captured this pass.
- Active/selected state: N/A at the shell level (individual controls inside the panel have their own states, out of scope for this shell-level record).
- Disabled state: not observed.
- Loading state: not observed — the property-change → preview-update path is synchronous with no visible loading indicator.
- Empty state: N/A.
- Error state: not observed at the shell level.

## Rules & Validation

- No functional resizable drag-divider exists between the two panes despite a `.dividerSvgDiv` class suggesting one — that element is a decorative 0×0 icon glyph, not a drag handle. The 415px left-pane width is fixed regardless of viewport size (not independently tested across multiple viewport widths).
- Unsaved-changes exit guard: navigating away (closing the modal) with pending edits always triggers the confirmation dialog described above — this is the only "unsaved changes" signal; there is no visible dirty-state indicator elsewhere in the UI (e.g. no asterisk on the title, no inline "unsaved" badge) confirmed during this pass.

## Technical Data

> OBSERVATION, directly captured via browser DOM/JS/network inspection (2026-09-16), Claude browser extension session, 14+33 actions across two passes.

- **DOM:**

```html
div.zf-themeBuilder.zf-thmemeRewamp ├─ div#headerWrapperCont.zf-tb-HeaderWrapper (toolbar) └─ div
(positioned 0,50,1662,920) ├─ div#leftPaneCont.zf-tb-leftContainer.leftPane (415px) │ └─
div#fullpageLeftPane.classicWrapper.props_layout1.gridType1 │ ├─ div.zf-leftSmallTabMenu (90px icon
nav) │ └─ div.fullPageThmeBuilder (325px detail panel) ├─ div#toggleDiv.zf-tb-slide.expandColDiv
(collapse arrow) └─ div#customThemeFormContainerDiv.cusThemeFormContDiv.windowModel └─
iframe#fpCustomThemeEditor.themeEditorIframe src: /{account}/form/{formLinkName}/currenttheme
```

Inside that iframe (same-origin, direct `contentDocument` access confirmed):

```html
body#fullpageCustomStyle.themeEditorPage.bgTransparent.pageWrapper.layout1... └─ div#fullpageContDiv
└─ div#mainWrapper.mainWrapper └─ div#formContainer.fieldContWrapper └─ div.centerContainer ← the
element that visibly changes on edit └─ form#test
```

**Ghost/decoy elements** — 10 `<iframe>` elements exist in the parent document total; only `#fpCustomThemeEditor` is the real, visible preview. Confirmed via `getBoundingClientRect()` on each before trusting a match (per established methodology — do not trust a DOM/selector match without verifying real bounding-box dimensions in this app, which has a history of duplicate/hidden/ghost elements, see [[sidebar-settings-subnav]]):

- `#themePrevIframe.previewIframe` — 1152×0 at y=2552 (off-screen/collapsed; appears to be a legacy/unused preview mechanism not exercised by this flow).
- `#oldStandardIframe` / `#newStandardIframe` — both 0×0 (form-type conversion iframes, unrelated).
- `#pconnect` (payment connect) and `#micssdktoserverIframe` — both 0×0 (tracking/analytics, unrelated).
- An unrelated `tipengine.zoho.in/Notification` iframe, plus two more 0×0 `.../themes` iframes nested inside `display:none` hidden contact-us modal containers.

- **JavaScript:** No dedicated public API observed for the update path; behavior reverse-engineered via a `MutationObserver` on the iframe's `<body>` `style` attribute plus `fetch`/`XMLHttpRequest` hooks in both parent and iframe `window` contexts. On a config-panel property change (tested: Container Background solid → Gradient, red color pick), the observer captured a direct diff on the iframe body's inline `style` attribute — i.e. the parent-document JS reaches into `iframe.contentDocument.body.style.setProperty(...)` directly. This works without `postMessage` specifically because the iframe is same-origin (`forms.zoho.in` on both sides) — a same-origin same-app assumption baked into the architecture, not a generically reusable cross-origin preview pattern.

- **Network:** Zero requests fired on the property-change itself (confirmed via `fetch`/`XHR` hooks catching nothing during the edit). The only network activity inferred (not directly captured this pass — flagged for a second pass) is on the green **Apply** button, based on the exit-dialog's copy ("Changes are not applied to the form") implying Apply is the sole persistence trigger — consistent with the decoupled-local-state-until-explicit-Save pattern already confirmed elsewhere in this product (see [[toggle-radio-switch]]).

- **Response:** N/A — no response captured this pass (Apply's request/response not directly inspected; flagged for a second pass with the network tab open specifically on the Apply click).

- **State change:** All pending edits are held entirely client-side, as CSS custom-property values written directly onto the iframe body's inline `style`, until the explicit Apply action. No optimistic or draft/autosave persistence at any point during editing — confirmed by the discard-on-exit dialog leaving zero server-side trace when "Yes" is chosen.

- **CSS:**
  - The property-change mechanism combines a **CSS custom-property update** with, for some modes, a **class swap**:
    - `body#fullpageCustomStyle` classlist gains `grad_formCont` (boolean mode-switch class) the first time gradient mode is turned on for the container background.
    - The actual color/opacity/angle values are pushed as raw custom properties directly on `body.style`, e.g. `--form-cont-gradient-start-clr: 239, 22, 22` (raw RGB triplet, no `rgb()` wrapper) plus a companion `--form-cont-gradient-start-clr-opacity: 1`.
  - Before/after diff captured on the iframe body's `style` attribute:

```diff
- style="--page-left-cont-bdr-clr:#9ea6bc; --star-stroke-clr:#ffca00; ...; --default-matrix-style:1;"
+ style="--page-left-cont-bdr-clr:#9ea6bc; --star-stroke-clr:#ffca00; ...; --default-matrix-style:1;
+        --form-cont-gradient-start-clr: 239, 22, 22; --form-cont-gradient-start-clr-opacity: 1;"
```

- `.centerContainer`'s `background-image` is computed from a **static, pre-written rule** in an externally-hosted stylesheet (`fullpagethemepreview.<hash>.css` — cross-origin, rule text not directly readable, but presence confirmed via `getComputedStyle`) that reads `var(--form-cont-gradient-start-clr)` etc. Only the custom-property _values_ are injected live; the rule itself never changes.
- `.centerContainer` itself carries **no inline style** — `el.style.cssText` was empty even while displaying the gradient; all values live upstream on `body`, not on the target element directly. This is a notable pattern: the "live update" targets a shared ancestor's custom properties, not the visually-changing element itself.

- **Animation/transition:** None. `getComputedStyle('.centerContainer').transitionDuration` reported `0s` and `animationName: none` — the apparently-instant visual update is a plain synchronous CSS recalculation triggered by the custom-property write, not a CSS transition or JS-driven animation.

## Competitor Comparisons

| Competitor                    | Same component implementation | Strengths | Weaknesses |
| ----------------------------- | ----------------------------- | --------- | ---------- |
| _(TODO — not yet researched)_ |                               |           |            |

## Best Observed Approach

- TODO — needs at least one competitor's equivalent live-preview theme/style editor captured before a comparative judgment can be made. Worth comparing against any competitor using an iframe-based live-render preview vs. a same-DOM/virtual-DOM re-render approach, since this pattern (parent writes CSS custom properties directly into a same-origin iframe body) is architecturally distinct from a typical React/Vue live-preview built with the same component tree rendered twice.

## Sources

- OBSERVATION: Live exploration of Zoho Forms (forms.zoho.in), Form Builder → Themes → "Create from Scratch" full-screen editor, via Claude browser extension, 2026-09-16 (two passes, 14 + 33 actions). DOM structure, iframe bounding-rect verification, MutationObserver-captured style diffs, and `fetch`/`XHR` hook results retrieved programmatically through the page's own JS context. No theme was saved — session exited via the "changes not applied" confirmation dialog, discarding all edits; the account's original theme was left untouched.
- Note: the Apply button's actual network request/response was not directly captured this pass (only inferred from the exit-dialog copy) — flagged as a second-pass item: open Network tab specifically on Apply click to confirm method/endpoint/payload and compare against the settings-persistence pattern already confirmed for other Form Settings toggles (`PUT .../settings/{feature}`).
