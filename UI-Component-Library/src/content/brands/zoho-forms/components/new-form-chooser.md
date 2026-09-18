---
component: 'Dashboard "+ New Form" Chooser (Overlay + Create-From-Scratch Sub-Dialog)'
ui_category: 'Navigation > Card selector'
source_product: 'Zoho Forms'
last_verified: '2026-09-17'
evidence_state: 'source_reviewed'
status: 'complete'
summary: "Dashboard '+ New Form' overlay (7 creation paths) and its 'Create From Scratch' sub-dialog (3 form-type cards with video previews) — a deeper technical capture of two card-list-selector instances, confirming a real functional CSS transition on the sub-dialog's cards."
---

# Component: Dashboard "+ New Form" Chooser (Overlay + Create-From-Scratch Sub-Dialog)

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **Relationship to [[card-list-selector]]:** both screens documented here — the top-level 7-card overlay and the "Create From Scratch" sub-dialog's 3-card form-type picker — are **not new discoveries**; they are [[card-list-selector]]'s already-filed "New-Form cards" and "bonus third instance," respectively (same `ul > li` and `div > div` structures, same class names, same declared `0.2s linear` transition). This record is a **deeper technical capture** of those same two instances (full DOM trees, the video-preview streaming mechanics, and a direct before/after state-change test the original pass didn't run), not a 4th independently-built lookalike. See Comparison to [[card-list-selector]] below for what's genuinely new here versus what corroborates the earlier record.

## Location

- **Product:** Zoho Forms
- **Screen(s) it appears on:** Dashboard → "+ New Form" button (top-right) → top-level chooser overlay → "Blank Form" card → "Create From Scratch" sub-dialog.

## Structure

### Top-Level Chooser Overlay

- **Appearance:** full-viewport dark overlay (`rgba(25, 35, 43, 0.85)`) with centered white content area.
- **Heading:** "Choose how to create your form".
- **Layout:** 7 cards arranged in a flex-wrap grid (2 rows: 4 + 3), centered, `gap: 48px 42px`.
- **Close:** X button in top-right corner of overlay.

**7 chooser options:**

| #   | Title                   | Description                                                   | Icon class       |
| --- | ----------------------- | ------------------------------------------------------------- | ---------------- |
| 0   | Blank Form              | Create from scratch with an empty form.                       | `blankFrm`       |
| 1   | AI Forms                | Generate forms instantly with Zia AI.                         | `createZia`      |
| 2   | Form Templates          | Choose from over 100+ pre-built forms.                        | `zfTemplates`    |
| 3   | CRM Forms               | Create forms that capture data and update your Zoho CRM.      | `createCrm`      |
| 4   | PDF to Form             | Convert PDF documents to online forms.                        | `converttoPdf`   |
| 5   | Images to Form          | Convert images to online forms with Zia AI.                   | `converttoImage` |
| 6   | Import Form and Entries | Create a form and import its entries by uploading a CSV file. | `importFormIcon` |

- Card 6 ("Import Form and Entries") has a **"New" badge** (`div.newTagField > span`).
- Icons are CSS sprite backgrounds sourced from `new-form-sprite.*.svg` on `static.zohocdn.com`.

### "Create From Scratch" Sub-Dialog

Opened by clicking the "Blank Form" card. Replaces the chooser overlay with a narrower dialog:

- **Left panel:** form-name text input (no placeholder, no maxlength) + 3 form-type cards + Cancel/Create Form buttons.
- **Right panel:** video preview area — plays a looping preview video for the selected form type.
- **Heading:** "Create From Scratch".
- **Hidden element:** a folder selector (`#folderBasedFormsDiv`) exists in the DOM but is `display:none` — potentially for future folder-based form organization.

**3 form-type cards:**

| #   | Type      | Description                        | elname          | Video                          |
| --- | --------- | ---------------------------------- | --------------- | ------------------------------ |
| 0   | Standard  | Displays multiple fields on a page | `stdForm`       | `standard-form.*.mp4` (4.17s)  |
| 1   | Spotlight | Focuses on one field at a time.    | `spotlightForm` | `spotlight-form.*.mp4` (5.97s) |
| 2   | Card      | Displays one field per page        | `cardForm`      | `card-form.*.mp4` (5.51s)      |

- "Standard" is **pre-selected** by default (`select` class).
- "Spotlight" has a **"New" badge**.
- Selection is mutually exclusive — clicking one deselects the other.
- **Cancel** returns to the top-level chooser; **Create Form** would persist a new form (not tested — safety constraint).

## Actions

| Element                           | User Action | Function                              | Result                                                                                                                                                                                                                                                                                                                 | Destination screen/state |
| --------------------------------- | ----------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| "+ New Form" button               | Click       | Opens overlay                         | Top-level chooser overlay appears (7 cards). No network requests.                                                                                                                                                                                                                                                      | Same screen              |
| "Blank Form" card                 | Click       | Opens sub-dialog                      | "Create From Scratch" sub-dialog opens. 3 video files load via HTTP 206 (partial content). No XHR/fetch API calls.                                                                                                                                                                                                     | Same screen              |
| A form-type card (e.g. Spotlight) | Click       | Client-side class toggle + video swap | Selected card gains `select` class, border turns green `rgb(36, 166, 138)`, background turns `rgb(250, 255, 254)`. Previously selected card reverts to gray border/transparent background. Corresponding `<video>` becomes `display:block` and plays; others become `display:none` and pause. **No network requests.** | Same screen              |
| "Cancel" button                   | Click       | Closes sub-dialog                     | Returns to top-level chooser overlay. No network requests. No form created.                                                                                                                                                                                                                                            | Same screen              |
| X close button (overlay)          | Click       | Dismisses overlay                     | Dashboard returns to normal state. No network requests.                                                                                                                                                                                                                                                                | Same screen              |

**Safety confirmed:** clicked "Blank Form" → explored form-type selection → clicked Cancel → closed overlay. No form was created; dashboard showed only the original test form (1 – 1 of 1 forms) throughout.

## Behavior & States

- Overlay open state: `position: fixed`, `z-index: 99`.
- Card hover/selection: form-type cards toggle between unselected (`rgb(204, 214, 224)` gray border / transparent background) and selected (`rgb(36, 166, 138)` green border / `rgb(250, 255, 254)` near-white green tint) states.
- Hover CSS rules exist but could not be captured via JavaScript `getComputedStyle()` — likely defined in cross-origin stylesheets. Documented as a known limitation of the inspection method.

## Rules & Validation

- Top-level overlay opens with zero network requests — entirely a pre-rendered client-side component.
- Video assets stream progressively via HTTP 206 range requests, loaded only once the sub-dialog opens (not preloaded with the top-level overlay).

## Technical Data

> OBSERVATION, directly captured via browser DOM/JS/network inspection (2026-09-17), Claude browser extension session.

- **DOM (top-level overlay):**

```html
<div class="popUpOverlay newFormPopupDiv" id="newFormPopup">
  <div class="fullLineLoading" id="fullLineLoading"><span></span></div>
  <!-- display:none -->
  <div class="newFormPopupClose">
    <a><svg>...</svg></a>
  </div>
  <!-- X close button -->
  <div class="createFormDivContent">
    <h3>Choose how to create your form</h3>
    <div class="frmCreateandTemplateDiv">
      <ul>
        <!-- display:flex, flex-wrap:wrap, justify-content:center, gap:48px 42px -->
        <li>
          <!-- x7, each 250x228px -->
          <div class="frmCreationListIcon [variant]"></div>
          <!-- 72x80px sprite icon -->
          <span>[Title]</span>
          <p>[Description]</p>
        </li>
        <!-- Card 6 has extra child: <div class="newTagField"><span>New</span></div> -->
      </ul>
    </div>
  </div>
</div>
```

Cards (`li`): `cursor: pointer`, `border: 0.8px solid rgb(221, 225, 255)`, `border-radius: 20px`. No `id` attributes on individual cards; no inline `onclick` handlers — all events attached via JS (likely delegated listeners).

- **DOM (sub-dialog):**

```html
<div class="popNewOverlay topAuto activeAnimate" id="blankformDiv">
  <div class="createFrmWrapper blankformCont animateDivWrap" id="blankformContDiv">
    <div class="createFrmClose">
      <a><svg>...</svg></a>
    </div>
    <div class="newFrmCreationDiv bdrGreen">
      <div class="newFrmCreationHeader">
        <h3>Create From Scratch</h3>
        <div class="frmBasedFolder" id="folderBasedFormsDiv">...</div>
        <!-- display:none -->
      </div>
      <div class="newFrmContainer">
        <div class="newFrmContLeft flLeft" id="createBlankForm">
          <div class="formNameInputDiv" elname="formNameDiv">
            <input type="text" elname="formName" />
          </div>
          <div class="createFlowCont">
            <span class="chooseTxtFrm">Choose a form type</span>
            <div class="createFlowCard crateNewFrmMode"><!-- 3 form-type cards --></div>
          </div>
          <div class="createFormFooter">
            <button class="cancelBtn">Cancel</button>
            <button id="createNewFormBtn">Create Form</button>
          </div>
        </div>
        <div class="newFrmContRight flRight" id="formPreviewVideo">
          <video id="stdFormVid" src="standard-form.*.mp4"></video>
          <video id="cardFormVid" src="card-form.*.mp4"></video>
          <video class="spotLight_FormVid" id="spotLightFormVid" src="spotlight-form.*.mp4"></video>
        </div>
      </div>
    </div>
  </div>
</div>
```

Form-type card structure:

```html
<div class="standardFrmDiv [select]" elname="stdForm|spotlightForm|cardForm">
  [
  <div class="newTagField"><span>New</span></div>
  ]
  <!-- Spotlight only -->
  <div class="frmSelCircle"></div>
  <!-- checkmark when selected -->
  <div class="frmCrteList">
    <div class="frmListContIcon"><div class="frmIconDiv [spotLightIcn|cardFrmIcon]"></div></div>
    <span>[Type Name]</span>
    <em>[Description]</em>
  </div>
</div>
```

- **Network:**

| Trigger                                         | Network Requests                                                                             |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Opening chooser overlay                         | None                                                                                         |
| Clicking "Blank Form" card                      | 3× video loads (HTTP 206 partial content) from `static.zohocdn.com/forms/images/createform/` |
| Switching form type (e.g. Standard → Spotlight) | None — purely client-side class toggle + video swap                                          |
| Clicking "Cancel"                               | None                                                                                         |
| Closing overlay (X)                             | None                                                                                         |

Videos: `standard-form.*.mp4` (4.17s), `card-form.*.mp4` (5.51s), `spotlight-form.*.mp4` (5.97s), all from `static.zohocdn.com/forms/images/createform/`, loaded via HTTP 206 range requests (progressive streaming).

- **CSS/Animation — reconciled against [[card-list-selector]]'s prior capture of these same cards:** [[card-list-selector]] (2026-09-16) already inspected this exact top-level 7-card set (its "New-Form cards" instance) and recorded the identical declared value — `transition: 0.2s linear` on the `<li>` — but its direct `matches(':hover')` before/after comparison found **no measurable computed-style difference**, leaving whether that transition ever visibly fires genuinely inconclusive for these specific cards (flagged there as a Second-Pass item, not resolved). This pass did not re-run that hover test on the top-level cards, so that open question stands as-is.
  What this pass **does** newly confirm as a real, functional transition is the **sub-dialog's form-type cards** (Standard/Spotlight/Card): clicking to select one directly and observably animates the border/background change (gray→green border, transparent→near-white background) over the declared duration — a genuine before/after state-change test, not just a declared value. So the "first real, confirmed-functional CSS transition in this product" finding should be attributed specifically to the **form-type selection cards** in the sub-dialog, not the top-level chooser cards, whose functional status remains exactly as inconclusive as [[card-list-selector]] left it.

```css
/* Both the top-level chooser <li> cards and the sub-dialog's form-type cards */
transition: all 0.2s linear;
```

Card dimensions (top-level): 250×228px; border `0.8px solid rgb(221, 225, 255)`; border-radius `20px`; cursor `pointer`.
"Create Form" button background: `rgb(36, 166, 138)` (Zoho's standard green), matching the selected-card border color.

## Comparison to [[card-list-selector]]

**Correction to this pass's own initial framing:** the top-level chooser's `<li>` cards are the exact same "New-Form cards" instance [[card-list-selector]] already documented on 2026-09-16 (`ul` of `<li data-zf-click=...>`, `transition: 0.2s linear`) — not a structurally distinct 4th lookalike. The sub-dialog's form-type cards likewise match [[card-list-selector]]'s "bonus third instance" (`div.standardFrmDiv` / `div.frmCrteList`). Both are `div`-_and_-`ul/li`-based depending on which of the three original instances is meant — [[card-list-selector]]'s own point was that all three of its instances use **different** container types from each other (`ul>li` for New-Form, `div>a` for Share, `div>div` for form-type), which this record's DOM captures corroborate exactly.

| Aspect                                                      | [[card-list-selector]]'s prior capture                                                    | This record's contribution                                                                                                            |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Top-level chooser DOM structure                             | `ul > li`, confirmed                                                                      | Corroborated, plus full 7-option table (icons, badges, hidden folder selector) not previously itemized                                |
| Sub-dialog form-type card DOM structure                     | `div.standardFrmDiv > div.frmCrteList`, confirmed                                         | Corroborated, plus the video-preview swap mechanics (HTTP 206 streaming, per-type `<video>` elements) — genuinely new capture         |
| Top-level cards' transition — functionally real?            | Declared `0.2s linear`, but hover-test found no measurable effect — **left inconclusive** | Not re-tested this pass — **still inconclusive**, not resolved here despite this record's earlier draft implying otherwise            |
| Sub-dialog form-type cards' transition — functionally real? | Not tested (Second-Pass Flag: "click/selection handler was not traced")                   | **Now confirmed functionally real** — a direct click-to-select test observed the border/background animate over the declared duration |

**Conclusion:** this is **not** a 4th instance of the [[card-list-selector]] pattern — it is a deeper technical pass over two of the same three already-identified instances, resolving one of [[card-list-selector]]'s three Second-Pass Flags (the form-type cards' selection-transition is now confirmed real) while leaving another exactly as open as before (the top-level cards' transition still has no confirmed functional effect).

## Cross-Component Pattern Note

1. **7 form-creation paths** presented as equal-weight cards in a centered flex grid — corroborates [[card-list-selector]]'s "New-Form cards" instance with full option-level detail.
2. **"Create From Scratch" sub-dialog** contains a secondary card selection (3 form types) with video previews — corroborates [[card-list-selector]]'s "bonus third instance," now with the video-streaming mechanics captured for the first time.
3. **First _confirmed-functional_ CSS transition in this product is the sub-dialog's form-type card selection** (`all 0.2s linear`, directly observed animating on click) — the top-level chooser cards declare the identical timing but remain functionally unconfirmed, exactly as [[card-list-selector]] left them.
4. **Entirely client-side interactions** — no network requests for opening the overlay, selecting form types, or canceling. Only video file loads (HTTP 206) when the sub-dialog opens.
5. **Not a 4th independently-built lookalike** — both screens captured here are deeper dives into instances [[card-list-selector]] already identified, not new ones; see Comparison above.
6. **"New" badges** appear on two items: "Import Form and Entries" (top-level) and "Spotlight" (form-type).
7. **Hidden folder selector** (`#folderBasedFormsDiv`) exists in DOM but is not displayed — potentially for future folder-based form organization.

## Competitor Comparisons

| Competitor                    | Same component implementation | Strengths | Weaknesses |
| ----------------------------- | ----------------------------- | --------- | ---------- |
| _(TODO — not yet researched)_ |                               |           |            |

## Best Observed Approach

- TODO — needs at least one competitor's equivalent form-creation chooser captured before a comparative judgment can be made.

## Sources

- OBSERVATION: Live exploration of Zoho Forms (forms.zoho.in), Dashboard → "+ New Form" → chooser overlay → "Create From Scratch" sub-dialog, via Claude browser extension, 2026-09-17. DOM/CSS/network data retrieved programmatically through the page's own JS context.
