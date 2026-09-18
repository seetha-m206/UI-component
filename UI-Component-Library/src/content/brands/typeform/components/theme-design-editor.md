---
component: 'Theme/Design Editor (Shared-DOM Popover, No Iframe)'
ui_category: 'Content Creation > Composer/editor'
source_product: 'Typeform'
last_verified: '2026-09-16'
evidence_state: 'source_reviewed'
status: 'complete'
summary: "Typeform's Theme/Design editor — architecturally the inverse of Zoho's iframe-based shell: no iframe at all, builder canvas and preview share one DOM tree."
---

# Component: Theme/Design Editor (Shared-DOM Popover, No Iframe)

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location

- **Product:** Typeform
- **Screen(s) it appears on:** Form builder → "Design" button in the toolbar, opening a popover titled "Design › [Theme name]" with four tabs: Logo, Font, Buttons, Background. This trace focuses on Font and Background (color/font/background scope); Logo and Buttons were only glanced at (Logo appears paid-plan-gated; Buttons not opened).

## Structure

- **Not a true side-by-side split-pane** like Zoho's config-left/preview-right shell (see [[theme-editor-split-pane-shell]]). Instead, a **floating popover/panel overlays the left portion of the existing builder canvas**, leaving the actual question canvas partially visible and live behind/beside it — there is no dedicated, permanently-docked preview pane; the "preview" _is_ the real builder canvas underneath, updating in place.
- Popover: a tab strip (Logo/Font/Buttons/Background) at top, then a scrollable stack of grouped controls — e.g. under Font: a searchable font dropdown, a color swatch, "Size and positioning" with per-scope Sm/Md/Lg toggles and alignment buttons for "Welcome screen and endings" and "Questions" separately.
- Font picker: searchable/type-to-filter dropdown listing "System font" plus dozens of named web fonts (a long alphabetical Google-Fonts-style catalog).
- Color pickers (identical for font color and background color): standard HSV gradient + hue slider + hex input + a row of 10 preset brand/theme swatches.
- A "Save changes" button is persistently visible at the bottom; a "Revert" text-button appears **only once at least one property has been changed** (conditionally rendered on dirty state, not always-present-but-disabled).
- Screenshot: not captured this pass (see Sources — DOM/CSS/network data pulled programmatically).

## Actions

| Element                                 | User Action | Function                                       | Result                                                                                                                                                                                  | Destination screen/state         |
| --------------------------------------- | ----------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| Font dropdown option                    | Click       | React component state update                   | Instant, no flicker: applied simultaneously to every question title on the page (all six `.ql-editor` instances on the test page updated their computed `font-family` in the same tick) | Same screen, canvas updates live |
| Color swatch (title/font color)         | Click       | React component state update                   | Instant, no flicker: computed `color` on the title text changed immediately, no separate "apply" step                                                                                   | Same screen                      |
| Size toggle (Md → Lg)                   | Click       | React component state update                   | Instant, no flicker: computed `font-size` changed immediately                                                                                                                           | Same screen                      |
| "Revert"                                | Click       | Discards pending in-memory changes             | Instantly restores the last-saved state, no confirmation prompt of its own                                                                                                              | Same screen                      |
| "Save changes"                          | Click       | Real network write (see Technical Data)        | Green "Theme updated" success toast; Revert/Save-changes dirty-state indicators disappear                                                                                               | Same screen, saved               |
| Popover "X" close, with unsaved changes | Click       | Custom in-app modal, not native `beforeunload` | "Save changes to theme?" confirmation modal: "Discard changes" / "Save theme"                                                                                                           | Modal open                       |

## Behavior & States

- Default (clean) state: no Revert button shown, only "Save changes" (always present).
- Dirty state: Revert button appears once any property has changed; disappears again after Save.
- **Every property change tested (font, font color, text size, background color) was instant with zero delay and zero flicker** — a consistently instant-update editor, not just for one property type.
- Disabled/loading/error states: not observed.

## Rules & Validation

- No silent autosave: every change is held in client-side/component state only until an explicit "Save changes" click.
- Closing with unsaved changes always triggers the confirmation modal — there is no way to silently lose or silently persist changes.

## Technical Data

> OBSERVATION, directly captured via DOM inspection, live stylesheet inspection (`document.styleSheets`), a custom `window.fetch` interceptor, network request monitoring, and direct interaction (2026-09-16), Claude browser extension session.

- **DOM — no iframe:** a full-page scan (`document.querySelectorAll('iframe')`) while the Design popover was open found exactly five iframes, **all unrelated to form rendering**: a Google Tag Manager noscript iframe, an `about:blank` placeholder, two empty-`src` iframes, and a customer-support widget launcher. **None render the form/question canvas.** This rules out Zoho's same-origin-iframe-with-injected-CSS-custom-properties trick entirely — Typeform's builder canvas and its "live preview" are the same DOM tree, not a separate document.
- Question titles are rendered via **Quill.js**, a third-party rich-text-editor library — confirmed by `ql-editor`/`ql-container ql-bubble`/`ql-blank` class names (Quill's own naming convention, not Typeform-authored):

```html
<div class="sc-iUHWHT dSaWjY">
  <div class="sc-eODrEC dTFetp">
    <legend class="sc-guWVcn dEURdt sc-daNmkL hDHlrn sc-cJIyfF dbWlgd">
      <div class="sc-guWVcn sc-faJNnW fiwpNP">
        <div class="notranslate ql-container ql-bubble">
          <div class="ql-editor" contenteditable="true">...</div>
        </div>
      </div>
    </legend>
  </div>
</div>
```

No inline `style` attributes anywhere in this chain (`getAttribute('style')` returned `null` at every level from `.ql-editor` up through six ancestors) — every visual property is applied via **CSS classes resolved against the page's stylesheets**, not direct style manipulation.

- **JavaScript:** Standard React/styled-components SPA (`sc-xxxxx` hashed class pattern, same as [[yes-no-field]] and [[rating-field]]), with Quill.js embedded specifically for rich-text question titles — Typeform did not build a custom rich-text title editor from scratch.

- **Network:**
  - **While editing (before Save), zero network requests** — verified three independent ways: (1) network-log filtering to `api.typeform.com` around a font change, a font-color change, and a size change each returned no matching requests; (2) a custom `window.fetch` interceptor watching for `gql`/`theme`/`font` calls, left running across all three Font-tab changes, captured zero matching calls; (3) directly reconfirms an earlier Background-tab finding in the same session (isolated color change + filtered network check, also zero matches).
  - **Clicking "Save changes" fires real network activity:** `GET api.typeform.com/forms/{formId}`, `GET api.typeform.com/forms/{formId}/messages`, `GET api.typeform.com/themes/{themeId}` (consistent with a refetch of the freshly-saved theme object to resync client state) — the initiating write call (likely PUT/PATCH to the themes endpoint) had already scrolled out of the log's rolling buffer by inspection time, but the toast, the disappearance of dirty-state buttons, and the theme-endpoint GET traffic together confirm a genuine server-side save occurred.

- **Response:** Not itemized this pass (the write call itself wasn't captured, only its GET-refetch aftermath).

- **State change:** Held entirely client-side during editing (matching Zoho's general pattern of not saving per-keystroke), with an explicit, discrete Save step performing a real write — different from true silent autosave, and different from Zoho's iframe-based mechanism.

- **CSS — two distinct mechanisms within the same Font tab, the most notable architectural finding of this trace:**
  - **Font family: a static, pre-defined class swap.** Selecting "Georgia" added a literal, human-readable class `.font-georgia` to two wrapper `<div>`s (one scoped to "Welcome screen and endings," one to "Questions"), matching a pre-existing stylesheet rule: `.font-georgia { font-family: Georgia, "Times New Roman", serif; }`. This class is not freshly hashed/generated — it's one of a finite, pre-built set of `.font-{name}` classes shipped with the app.
  - **Font color and background color: a dynamically-generated styled-components class per value** — the same mechanism documented for Background color earlier in the session. Changing color adds a freshly-computed class (e.g. `fiwpNP`) alongside stable "identity" classes (`sc-guWVcn sc-faJNnW`); the actual `color` value lives in a new, uniquely-hashed CSS rule generated at the moment of selection (picking a different color produces a _new_ hashed class each time, e.g. `cPXqbt` → `jnURYx`, not mutating one persistent class or a CSS custom property).
  - **Font size:** also updates instantly on the same computed-style-per-element basis as color; not independently isolated to confirm static-class vs. dynamic-class mechanism in this pass.
  - **No CSS custom properties (`--variable: value`) were found anywhere in this mechanism** — directly contrasting with Zoho's approach of writing CSS custom properties onto a same-origin iframe's `<body>`.

- **Animation/transition:** Not itemized this pass — property changes are instant with no observed flicker, but no transition/duration values were captured for the class-swap or hashed-class mechanisms themselves.

## Save/Exit

- **No silent autosave:** every property change held in client-side/component state only, evidenced by zero network calls per change, the conditional "Revert" appearance, and the explicit unsaved-changes confirmation modal on close.
- **Revert:** instantly discards pending in-memory changes, restores last-saved state, no confirmation of its own (the "cheap/fast" undo path).
- **Save changes:** genuine server write (theme-endpoint network activity + "Theme updated" success toast), after which dirty-state indicators disappear.
- **Closing with unsaved changes:** a deliberate, Typeform-authored modal — "Save changes to theme?" / "You made changes to the [Theme name] theme, but you haven't saved them." / "Discard changes" vs. "Save theme" — not the browser's native `beforeunload` prompt, and it names the actual theme by its current name in the body text.

## Cross-Component Pattern Note

- **OBSERVATION:** Typeform achieves live theming entirely through **shared-DOM immediacy** — the builder canvas and preview were never separate documents, so no iframe indirection is needed at all. Styling indirection instead lives in two parallel class-based systems: a static pre-compiled catalog for fonts, and dynamically-generated per-value classes for colors/sizes. This is architecturally the inverse of Zoho's approach ([[theme-editor-split-pane-shell]]): Zoho achieves live-preview realism via a real same-origin `<iframe>` document plus CSS-custom-property indirection; Typeform achieves it via never having a separate document to sync in the first place.

## Competitor Comparisons — see [[theme-editor-split-pane-shell]]

| Aspect                             | Zoho Forms (existing)                                                                                                 | Typeform (this trace)                                                                                                                                                                                                                                                             |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Overall layout                     | Split-pane: config panel + dedicated preview pane                                                                     | **Not a true split-pane.** A floating popover overlays part of the builder canvas; the canvas itself, live and interactive underneath, _is_ the preview                                                                                                                           |
| Live-preview mechanism             | Same-origin `<iframe>` rendering the actual form, styled via CSS custom properties written onto the iframe's `<body>` | **No iframe at all** — confirmed via full-page scan (only third-party iframes present, none render form content). Builder and "preview" share one DOM tree                                                                                                                        |
| Styling mechanism                  | CSS custom properties (`--variable`) written onto the iframe body                                                     | **Two different mechanisms by property type:** font-family uses a static pre-built class swap (`.font-georgia` etc.); font/background color use a dynamically-generated styled-components class per value (freshly hashed each time). **No CSS custom properties used anywhere.** |
| Action → result speed              | —                                                                                                                     | **Instant, no flicker, in every one of four properties tested** (font, font color, text size, background color)                                                                                                                                                                   |
| Change granularity                 | —                                                                                                                     | Each change applies immediately to the shared canvas and to _every_ matching element at once (all six question titles re-rendered simultaneously)                                                                                                                                 |
| Network behavior during editing    | Zero network calls per property change (per [[theme-editor-split-pane-shell]]'s own documented pattern)               | **Zero network calls per property change**, confirmed via filtered logs and a custom `fetch` interceptor across three separate changes                                                                                                                                            |
| Explicit save step                 | Pattern implied but not directly quoted in Zoho's record                                                              | **Confirmed: yes** — a persistent "Save changes" button performs a real write (theme-endpoint activity + "Theme updated" toast)                                                                                                                                                   |
| Revert/undo                        | —                                                                                                                     | A "Revert" button appears only once changes are pending, instantly restoring last-saved state with no confirmation                                                                                                                                                                |
| Exit-with-unsaved-changes behavior | Warning dialog (per Zoho's own docs)                                                                                  | **Confirmed: a custom, Typeform-authored modal** — theme-name-aware body text, "Discard changes" vs. "Save theme" — not a native browser prompt                                                                                                                                   |

## Best Observed Approach

- Architecturally, Zoho's iframe + CSS-custom-property approach and Typeform's shared-DOM + class-swap approach are both internally coherent, purpose-built solutions rather than one being objectively "better" — Zoho's gives a more literal, isolated preview of the actual respondent-facing document; Typeform's avoids all cross-document sync complexity by never separating the documents in the first place, at the cost of the "preview" not being a fully isolated render. Worth a third competitor's implementation before drawing a firmer conclusion.

## Sources

- OBSERVATION: Live trace on a real Typeform account (admin.typeform.com), form builder, via Claude browser extension, 2026-09-16. Traced via DOM inspection, live stylesheet inspection (`document.styleSheets`), a custom `window.fetch` interceptor, network request monitoring, and direct interaction (color, font, size changes; Revert; Save; exit-with-unsaved-changes). Logo and Buttons tabs were only glanced at, not deeply traced — out of stated scope for this pass.
