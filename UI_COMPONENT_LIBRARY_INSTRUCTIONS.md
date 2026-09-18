# Instructions for Building a Product UI Component Documentation Library

## Purpose

Build a searchable, static documentation website for another product using the same information architecture and UI pattern as the Centilio Sessions Ecommerce library.

The library must be generated from structured files stored beside each documented component. It must not depend on manually editing navigation or index pages whenever a component is added. One component folder produces one documentation page, and the home page is rebuilt from all valid component folders.

This specification is framework-neutral. A team may implement the generator with Python, Node.js, React, Next.js, or another stack, provided the generated UI and content contract described below are preserved.

## What the reference UI contains

The inspected reference site has 92 generated pages and two primary page types:

1. A catalogue/overview page that introduces the product system and lists all documentation entries by group.
2. A detail page for each foundation, primitive, component, feature, backend flow, compliance rule, or institutional-knowledge entry.

The same neutral documentation shell surrounds every page. Product-specific branding appears inside previews and examples, not across the documentation shell.

## 1. Documentation shell

### Desktop layout

- Use a fixed, full-height left sidebar.
- Reference width: approximately `272px` to `278px`.
- Give the sidebar its own vertical scroll.
- Place the main content to the right of the sidebar.
- Reference main-content padding: approximately `80px` horizontally and `72px` vertically on wide screens.
- Keep the shell visually neutral: white content surface, very light gray sidebar, subtle borders, and restrained shadows.
- Use a highly legible UI font such as Inter with system fallbacks.
- Reference body size: `14px` with semibold section headings.
- Constrain the inner reading width so prose and code remain readable on wide displays.

### Responsive layout

- At approximately `991px` and below, stop fixing the sidebar.
- Stack the sidebar above the main content and allow both to use the viewport width.
- Reduce main-content padding at tablet and mobile widths.
- Allow segmented tab rows to scroll horizontally instead of wrapping into an unreadable layout.
- Make wide tables horizontally scrollable.
- Keep code blocks scrollable without forcing the entire page wider than the viewport.

### Sidebar structure

Render the following elements in order:

1. Product/library identity block
   - Organization or suite name
   - Product name
   - Optional small brand tags
   - Link the identity block to the overview page
2. Search input
   - Placeholder: `Search components…`
   - Accessible label: `Search components`
3. Overview link
4. Changelog link, when the library has a global changelog
5. Grouped navigation
   - Group label
   - Component/page links
   - Optional status pill such as `beta`, `stable`, `deprecated`, or `compliance`
6. Active-page indication

The search must filter the sidebar immediately as the user types. Match against at least title, summary, ID, group, brand/product, status, and tags. Keep the product identity/home link visible while filtering. Clear search restores the complete grouped navigation.

Recommended keyboard behavior:

- `/` focuses search when focus is not already inside an editable control.
- `Escape` clears search.
- The active page uses `aria-current="page"`.

## 2. Overview page

The overview is both an introduction and a complete catalogue.

### Required sections

#### Hero

- Library title: `<Product Name> design system`
- One-paragraph explanation of what the library documents and how it is generated
- Generation metadata: timestamp, page count, and rebuild command

Example:

```text
generated 2026-09-16 09:30 UTC · 48 component pages · rebuild with npm run docs:build
```

#### Product operating context (optional)

Use a visually distinct panel for product-specific operational knowledge. It may link to:

- System map
- Repositories
- Files
- Team lanes/domains
- Task or incident ledgers
- Plugin/tool inventory
- AI-readable index such as `llms.txt`

Omit this panel if the new product only needs a component library.

#### Design foundations

Show live tokens instead of only describing them:

- Semantic palette: primary, secondary, success, information, warning, danger, dark, and light
- Soft/tinted versions of semantic colors
- Neutral/gray ramp
- Typography samples
- Spacing scale
- Border-radius scale
- Shadow/elevation levels
- Motion durations and easing curves
- Breakpoints

#### Component catalogue

Group entries into product-appropriate categories. Each catalogue row/card contains:

- Linked title
- Product or brand label
- One concise summary
- Optional status pill

The reference layout uses simple vertical lists rather than dense visual cards. This keeps a large catalogue scannable.

Suggested groups for a general product:

- Foundations
- Primitives
- Forms
- Navigation
- Data display
- Feedback and overlays
- Commerce or domain features
- Pages and layouts
- Backend/API flows
- Accessibility and compliance
- Intelligence/architecture
- Getting started
- Changelog and institutional record

Only create groups that match the product. Do not preserve ecommerce-specific groups in an unrelated product.

#### Architecture footer

Link to the repository README, architecture documentation, contribution guide, and build instructions.

## 3. Detail page anatomy

Every documentation entry uses the same page template.

### Header

Render:

- Uppercase group eyebrow
- Page/component title as `h1`
- One-sentence summary
- Metadata/specification grid

The metadata grid supports:

- `BRAND` or `PRODUCT`
- `GROUP`
- `ID`
- `STATUS` and optional `since` version
- `FILES`, listing real source paths

Long file lists may wrap, but each path should remain easy to copy.

### Demo card

Place documentation views inside a bordered card with:

- Card heading such as `Demo`
- Anchor link for direct linking
- Segmented tab track
- Active tab styling
- Content pane

Render a tab only when its source data exists. Empty tabs must not appear.

### Supported primary tabs

| Tab | Purpose | Source |
|---|---|---|
| Preview | Live or static visual example using product styling | `preview.html` |
| Props | Component inputs, types, required state, defaults, descriptions | `registry.json.props` |
| Endpoint | Backend route, method, parameters, responses, and errors | backend registry/endpoint data |
| Usage | Import and implementation guidance | `registry.json.usage` or `usage.md` |
| Code | Real production source excerpts with provenance | `code.*` |
| Rules | Normative constraints that future changes must preserve | `rules.md` |
| Lessons | Regression history, root causes, and durable fixes | `lessons.md` |
| A11y | Keyboard, focus, semantic, contrast, and assistive-tech requirements | `registry.json.a11y` or `a11y.md` |
| Changelog | Versioned changes for this entry | `registry.json.changelog` or `changelog.md` |
| Vector | Machine-readable retrieval record | `vector.json` |

For backend pages, use `Endpoint` in place of `Props` when endpoint metadata exists. A backend page can omit Preview entirely.

### Variant previews

A component may contain several named variants. For each variant:

- Render the variant title.
- Provide a nested `Preview` / `Code` toggle.
- Isolate preview styles beneath a unique wrapper class or inside an iframe/shadow root.
- Include a Copy button in the code view.

The primary tab row and nested variant tab rows are separate controls. Use proper tab semantics or clearly labelled button groups so screen-reader users can distinguish them.

### Props table

Use these columns:

| Column | Meaning |
|---|---|
| Prop | Public property name |
| Type | TypeScript or framework-appropriate type |
| Required | Required/optional state |
| Default | Default value or em dash |
| Description | Behavior, constraints, and important edge cases |

Use monospace styling for property names, types, and literal defaults.

### Code presentation

- Show only real source excerpts, not invented sample implementations presented as production code.
- Put the source path and optional line reference at the top of every excerpt.
- Add syntax highlighting.
- Add a Copy button per block.
- Preserve horizontal scrolling.
- Announce copy success with an accessible status message.

Example source header:

```js
// SOURCE: ~/workspace/example-product/src/components/Button.tsx (excerpt)
```

### Rules and lessons

Rules state what must remain true. Lessons explain why the rule exists.

A strong lesson entry includes:

1. Incident, ticket, or version reference
2. What broke
3. Root cause or mechanism
4. Corrective change
5. Regression guard or verification method

Avoid entries such as “fixed styling issue.” Record enough mechanism that another engineer will not repeat the defect.

### Deep links

- Give major headings stable anchor IDs.
- Show a subtle `#` link beside headings.
- Preserve IDs across rebuilds unless a migration/redirect is provided.

## 4. Content and folder contract

Use one folder per generated page.

```text
product-ui-docs/
├── brands/
│   └── <product-or-brand>/
│       ├── brand.yaml
│       ├── components/
│       │   └── <component-id>/
│       │       ├── component.yaml
│       │       ├── registry.json
│       │       ├── preview.html
│       │       ├── variants/
│       │       │   └── <variant-id>.html
│       │       ├── code.tsx
│       │       ├── usage.md
│       │       ├── rules.md
│       │       ├── lessons.md
│       │       ├── a11y.md
│       │       ├── changelog.md
│       │       └── vector.json
│       └── backend/
│           └── <flow-id>/
│               └── ...same contract...
├── intelligence/
│   └── <topic-id>/
│       └── ...same contract...
├── design/
│   └── tokens.yaml
├── docs/
│   ├── build.py or build.mjs
│   ├── templates/
│   ├── static/
│   └── ARCHITECTURE.md
└── public/ or dist/
```

All content files are optional except `component.yaml`. The generator must include only the tabs and sections backed by valid content.

### `component.yaml`

Keep the discovery file simple and human-editable.

```yaml
id: button
title: Button
brand: example-product
group: primitives
summary: Primary interaction control with semantic variants, loading state, icons, and destructive-action treatment.
status: stable
since: v1.0
files:
  - ~/workspace/example-product/src/components/Button/Button.tsx
  - ~/workspace/example-product/src/components/Button/Button.module.css
tags:
  - action
  - form
  - accessibility
```

Required fields:

- `id`: stable kebab-case identifier
- `title`: human-readable title
- `group`: navigation/catalogue group
- `summary`: one useful sentence

Recommended fields:

- `brand` or `product`
- `status`
- `since`
- `files`
- `tags`
- `order`

Quote YAML values containing `#`, `:`, or other ambiguous punctuation.

### `registry.json`

Use the registry for structured UI data.

```json
{
  "status": "stable",
  "since": "v1.0",
  "usage": {
    "import": "import { Button } from '@example/ui';",
    "notes": [
      "Use one primary action per surface.",
      "Use the danger variant only for destructive actions."
    ]
  },
  "props": [
    {
      "name": "variant",
      "type": "'primary' | 'secondary' | 'danger'",
      "required": false,
      "default": "'primary'",
      "description": "Controls semantic emphasis and visual treatment."
    }
  ],
  "variants": [
    {
      "id": "primary",
      "title": "Primary",
      "file": "variants/primary.html"
    }
  ],
  "a11y": [
    "Use a native button element for actions.",
    "Keep a visible focus indicator.",
    "Expose loading state with aria-busy."
  ],
  "related": ["icon", "spinner", "button-group"],
  "changelog": [
    {
      "version": "v1.0",
      "date": "2026-09-16",
      "change": "Initial documented contract."
    }
  ]
}
```

Validate this file during the build and report the precise component path for invalid entries.

### `preview.html`

- Store an HTML fragment, not a complete document.
- Scope CSS beneath a unique component wrapper.
- Use design tokens wherever possible.
- Demonstrate real states and realistic data.
- Do not make network calls from previews.
- Do not embed secrets or production customer data.
- If stronger isolation is needed, render the fragment in a sandboxed iframe.

### `code.*`

- Include one or more real excerpts.
- The first line identifies the source.
- Keep the excerpt focused on the documented behavior.
- Redact credentials, private keys, personal data, and environment-specific secrets.

### `rules.md`

Write normative requirements using `must`, `must not`, `should`, and `may` consistently.

### `lessons.md`

Use ticket IDs or version markers when they exist. Never invent an incident reference.

### `vector.json`

```json
{
  "id": "example-product/button",
  "brand": "example-product",
  "group": "primitives",
  "summary": "Accessible semantic button with variants and loading behavior.",
  "tags": ["button", "action", "forms", "a11y"],
  "lesson_refs": ["components/button/lessons.md", "UI-142"],
  "embed_text": "A compact retrieval-oriented digest of the component contract, important rules, source location, and known regression history. Keep this under 300 words."
}
```

Use this file for AI/search retrieval without forcing an indexer to parse rendered HTML.

## 5. Brand and design-token model

Keep documentation-shell tokens separate from product-preview tokens.

```yaml
docs_shell:
  font_family: Inter, system-ui, sans-serif
  background: "#ffffff"
  sidebar_background: "#fbfbfc"
  text: "#39404e"
  muted_text: "#677788"
  border: "#e7eaf3"
  focus: "#2563eb"

product:
  primary: "#0057d9"
  secondary: "#6b7280"
  success: "#16a34a"
  info: "#0284c7"
  warning: "#d97706"
  danger: "#dc2626"
  dark: "#111827"
  light: "#f9fafb"
  font_family: Inter, system-ui, sans-serif
```

Generate predictable derivative tokens rather than adding arbitrary hex colors in components:

- Hover color
- Active color
- Soft background
- Focus ring
- Disabled foreground/background
- Border color
- Contrast-safe foreground

Document the derivation rule. For example, the reference uses consistent hover/active shade changes rather than hand-picked values.

## 6. Generator behavior

The build pipeline should follow this order:

1. Discover all page folders beneath configured roots.
2. Parse and validate `component.yaml`.
3. Parse optional `registry.json` and `vector.json`.
4. Read optional Markdown, code, preview, and variant files.
5. Determine which tabs have valid content.
6. Generate a stable URL such as `<brand>--<id>.html`.
7. Render the detail page using the shared shell.
8. Add the entry to grouped sidebar navigation.
9. Add the entry to the overview catalogue.
10. Build a client-side search index.
11. Generate the global changelog and optional `llms.txt`.
12. Report warnings and a final page count.
13. Run link, accessibility, and visual smoke checks.

### Failure policy

- A malformed optional file may be skipped with a visible build warning.
- A missing required field in `component.yaml` must fail that page clearly.
- Duplicate IDs or duplicate output URLs must fail the build.
- Missing referenced variant files must fail validation.
- Broken source-file references should be warnings locally and errors in CI if source paths are expected to exist there.
- Never silently publish a page with an empty tab.

### Generated search index

Generate a compact JSON index containing:

```json
[
  {
    "id": "button",
    "title": "Button",
    "brand": "example-product",
    "group": "primitives",
    "summary": "Primary interaction control...",
    "status": "stable",
    "tags": ["action", "form"],
    "url": "example-product--button.html"
  }
]
```

Normalize search text once at build time. On the client, perform case-insensitive token matching and hide empty groups.

## 7. Accessibility requirements

- Use landmarks: `nav` for the sidebar and `main` for page content.
- Provide a skip link to main content.
- Give search an accessible label.
- Mark the active navigation item with `aria-current="page"`.
- Implement tab controls with `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`, and keyboard navigation, or use an equally accessible progressive-enhancement pattern.
- Keep visible focus indicators on every interactive element.
- Use real buttons for actions and links for navigation.
- Do not communicate status using color alone.
- Meet WCAG 2.1 AA contrast.
- Make Copy success available to assistive technology through an `aria-live` region.
- Respect `prefers-reduced-motion` in both the shell and product previews.
- Preserve heading order and unique IDs.
- Give preview frames useful titles.

## 8. Visual design rules

### Shell

- Neutral, quiet, documentation-first appearance
- Thin borders and modest elevation
- Compact sidebar navigation
- Clear type hierarchy
- Small uppercase metadata labels
- Monospace styling for IDs, paths, types, and code
- Rounded segmented tab track with a distinct active tab

### Product previews

- Use the product's actual tokens, typography, and visual language.
- Keep preview CSS isolated from the shell.
- Show multiple meaningful states, not only the ideal state.
- Include mobile or constrained-width examples where the component changes materially.
- Prefer realistic data that is safe to publish.

## 9. Content-authoring templates

### Rules template

```md
# Rules — <component name>

- The component must ...
- The component must not ...
- Consumers should ...
- When <edge case>, the component must ...
```

### Lessons template

```md
# Lessons — <component name>

## <TICKET-ID> — <short mechanism-focused title>

**What broke:** ...

**Root cause:** ...

**Fix:** ...

**Regression guard:** ...
```

### Accessibility template

```md
# Accessibility — <component name>

- Semantic element/role: ...
- Accessible name: ...
- Keyboard behavior: ...
- Focus behavior: ...
- Screen-reader announcements: ...
- Contrast requirements: ...
- Reduced-motion behavior: ...
```

## 10. Quality and verification gates

A new or changed page is complete only when all applicable checks pass.

### Content checks

- Required metadata is present.
- Summary is useful in both search and catalogue contexts.
- Source paths are real.
- Code excerpts identify their source.
- Rules are normative and testable.
- Lessons describe mechanisms and regression guards.
- Props and variants match the production component.
- Accessibility expectations are explicit.
- Changelog entry uses a real date/version.
- Vector data is valid JSON and stays concise.

### Build checks

- Generator exits successfully.
- No duplicate IDs or routes exist.
- All internal links resolve.
- All expected pages appear in navigation and search.
- Tabs with content appear; tabs without content do not.
- Copy controls work.
- HTML validates.

### Visual checks

- Inspect the generated overview page.
- Inspect at least one page from every group.
- Test wide desktop, tablet, and narrow mobile widths.
- Check long titles, long source paths, wide props tables, and long code lines.
- Verify active navigation, search filtering, anchors, tabs, and nested variant toggles.
- Confirm product-preview styling does not leak into the shell.

### Accessibility checks

- Complete keyboard-only navigation.
- Verify focus order and focus visibility.
- Run an automated WCAG scan.
- Manually confirm tab semantics and Copy announcements.
- Test reduced motion.

## 11. Recommended implementation milestones

### Milestone 1 — shell and discovery

- Implement the desktop/mobile shell.
- Discover `component.yaml` files.
- Generate sidebar navigation and the overview catalogue.
- Add search.

### Milestone 2 — core detail pages

- Render metadata, Preview, Code, Rules, and Lessons.
- Add syntax highlighting, Copy controls, and anchors.

### Milestone 3 — structured contracts

- Render Props or Endpoint, Usage, A11y, Changelog, and Vector.
- Add variant Preview/Code toggles.
- Add schema validation.

### Milestone 4 — quality automation

- Add broken-link checks.
- Add accessibility tests.
- Add responsive screenshots or visual regression tests.
- Add CI build verification.

### Milestone 5 — institutional memory

- Add architecture/system-map pages.
- Add incident or regression ledgers where useful.
- Generate an AI-readable index and ingest `vector.json` records.

## 12. Definition of done

The new product library is ready when:

- A contributor can create one component folder and obtain a complete page without editing shared navigation code.
- The overview and sidebar are generated from the same data source.
- Search finds entries by more than title alone.
- Every page clearly identifies its product, group, stable ID, status, and source files.
- Tabs are data-driven and never empty.
- Variants can show both rendered output and code.
- Rules and lessons preserve product knowledge beyond visual examples.
- The shell works on desktop and mobile.
- Accessibility and link checks run in CI.
- Another engineer or AI agent can orient itself using only the library, repository links, and structured records.

## Source-of-truth rule

When documentation, generator behavior, and the rendered site disagree, use this order:

1. Verified production component behavior
2. Current rendered documentation behavior
3. Generator and schema implementation
4. Written contribution notes

Update stale written instructions in the same change so the disagreement does not persist.
