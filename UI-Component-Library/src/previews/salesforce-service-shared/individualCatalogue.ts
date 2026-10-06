export const salesforceIndividualComponents = [
  {
    id: 'salesforce-chart-type-picker',
    title: 'Chart Type Picker',
    variant: 'chart-type-picker',
    category: 'Forms > Dropdown',
    batch: 'screens-actions-20261006',
    capture: 'list-chart-type-options',
    parent: 'salesforce-list-chart-form',
    summary: 'Chart Type shows Vertical Bar Chart, Horizontal Bar Chart selected and Donut Chart.',
    actions: [['Open Chart Type', 'Three rendered options appear. No type was changed.']],
    gaps: 'Selection result and saved chart rendering are unobserved.',
  },
  {
    id: 'salesforce-chart-aggregate-picker',
    title: 'Chart Aggregate Type Picker',
    variant: 'chart-aggregate-picker',
    category: 'Forms > Dropdown',
    batch: 'screens-actions-20261006',
    capture: 'list-chart-aggregate-options',
    parent: 'salesforce-list-chart-form',
    summary: 'Aggregate Type menu contains Count as the selected and only displayed option.',
    actions: [
      [
        'Open Aggregate Type',
        'Count is displayed. No other aggregate was visible in this menu state.',
      ],
    ],
    gaps: 'Edition-dependent aggregate options and computed results are unverified.',
  },
  {
    id: 'salesforce-chart-grouping-picker',
    title: 'Chart Grouping Field Picker',
    variant: 'chart-grouping-picker',
    category: 'Forms > Dropdown',
    batch: 'screens-actions-20261006',
    capture: 'list-chart-grouping-options',
    parent: 'salesforce-list-chart-form',
    summary:
      'Grouping Field offers Account Name selected and a scrollable list of case, contact, owner, priority, status, subject and type fields.',
    actions: [['Open Grouping Field', 'The rendered field list appears. No field was chosen.']],
    gaps: 'Grouping selection, chart results and persistence are unobserved.',
  },
  {
    id: 'salesforce-filter-field-picker',
    title: 'Case Filter Field Picker',
    variant: 'filter-field-picker',
    category: 'Search and Filtering > Field Picker',
    batch: 'screens-actions-20261006',
    capture: 'case-filter-field-options',
    parent: 'salesforce-case-filter-editor',
    summary:
      'Field menu defaults to Account Name and lists case number, origin, owner, reason, contact, dates, priority, status, subject and type fields.',
    actions: [
      [
        'Open Field in the temporary filter editor',
        'The long option list appears. No field change was applied.',
      ],
    ],
    gaps: 'Field choice effects and dependent value inputs are unobserved.',
  },
  {
    id: 'salesforce-filter-operator-picker',
    title: 'Case Filter Operator Picker',
    variant: 'filter-operator-picker',
    category: 'Search and Filtering > Operator Picker',
    batch: 'screens-actions-20261006',
    capture: 'case-filter-operator-options',
    parent: 'salesforce-case-filter-editor',
    summary:
      'Operator menu defaults to equals and includes not equal to, comparisons, contains, does not contain and starts with.',
    actions: [
      [
        'Open Operator in the temporary filter editor',
        'Nine options appear. No operator was applied.',
      ],
    ],
    gaps: 'Value interpretation, operator applicability and saved filtering are unobserved.',
  },
  {
    id: 'salesforce-visible-field-transfer',
    title: 'Visible Field Transfer Controls',
    variant: 'visible-field-transfer',
    category: 'Forms > Dual Listbox Controls',
    batch: 'screens-actions-20261006',
    capture: 'list-field-display-dialog',
    parent: 'salesforce-list-field-display',
    summary:
      'Available and Visible Fields listboxes are separated by transfer buttons, with up/down reorder controls beside visible fields.',
    actions: [
      [
        'Open Select Fields to Display',
        'Arrow controls and keyboard hints are visible. No provider transfer or reorder occurred.',
      ],
    ],
    gaps: 'Transfer behavior, maximum columns, shortcut results and saved layout are unobserved.',
  },
  {
    id: 'salesforce-navigation-reorder-item',
    title: 'Navigation Reorder Item',
    variant: 'navigation-reorder-item',
    category: 'Navigation > Reorder Row',
    batch: 'screens-actions-20261006',
    capture: 'service-navigation-editor',
    parent: 'salesforce-service-navigation-editor',
    summary:
      'Each current Service navigation item appears in an ordered list with a Drag handle and icon. Save is disabled while unchanged.',
    actions: [
      [
        'Open Edit Service App Navigation Items',
        'Seven reorderable rows appear. No provider row was moved.',
      ],
    ],
    gaps: 'Drag/drop, keyboard move, changed Save state and persistence are unobserved.',
  },
  {
    id: 'salesforce-analytics-type-tabs',
    title: 'Analytics Asset Type Tabs',
    variant: 'analytics-type-tabs',
    category: 'Search and Filtering > Segmented Tabs',
    batch: 'screens-actions-20261006',
    capture: 'analytics-keyword-results',
    parent: 'salesforce-analytics-keyword-results',
    summary: 'All Items is selected beside Dashboards, Reports and Folders above keyword results.',
    actions: [
      [
        'Open the settled Keyword Results screen',
        'Four filter buttons are visible. No alternate type was selected.',
      ],
    ],
    gaps: 'Applied type filtering and result counts are unobserved.',
  },
  {
    id: 'salesforce-analytics-report-row',
    title: 'Analytics Report Result Row',
    variant: 'analytics-report-row',
    category: 'Enterprise Tables > Asset Row',
    batch: 'screens-actions-20261006',
    capture: 'analytics-keyword-results',
    parent: 'salesforce-analytics-keyword-results',
    summary:
      'Report rows include checkbox, title, type, location, created and modified metadata, and an actions menu button.',
    actions: [
      [
        'Inspect the three settled keyword results',
        'Three report rows appear. No row was selected.',
      ],
    ],
    gaps: 'Row selection, opening and menu outcomes are unobserved on this specific result screen. Public identities are fictional.',
  },
  {
    id: 'salesforce-analytics-bulk-selector',
    title: 'Analytics Bulk Selection Bar',
    variant: 'analytics-bulk-selector',
    category: 'Actions > Bulk Selection',
    batch: 'screens-actions-20261006',
    capture: 'analytics-keyword-results',
    parent: 'salesforce-analytics-keyword-results',
    summary:
      'A count line states 0 Items Selected (Limit 50) beside Bulk Actions and an information control.',
    actions: [
      [
        'Inspect Keyword Results with zero selected',
        'The count and menu trigger are visible. Bulk guidance describes changes to owner and collection membership.',
      ],
    ],
    gaps: 'Selecting items, 50-item enforcement and executing Bulk Actions were not tested.',
  },
  {
    id: 'salesforce-collection-display-toggle',
    title: 'Collection Show and Pin Controls',
    variant: 'collection-display-toggle',
    category: 'Account/Settings > Collection Toggles',
    batch: 'screens-actions-20261006',
    capture: 'manage-collections-dialog',
    parent: 'salesforce-manage-collections-dialog',
    summary:
      'Manage Collections rows have separate Show and Pin checkboxes. Sales and Service are shown and unpinned in the captured state.',
    actions: [
      [
        'Open Manage Collections',
        'Checked Show and unchecked Pin controls are displayed. No value was changed.',
      ],
    ],
    gaps: 'Effect of toggling, resulting sidebar, access and saved preference are unobserved.',
  },
  {
    id: 'salesforce-collection-color-swatch',
    title: 'Collection Color Swatches',
    variant: 'collection-color-swatch',
    category: 'Forms > Color Swatch',
    batch: 'screens-actions-20261006',
    capture: 'collection-color-picker',
    parent: 'salesforce-collection-color-picker',
    summary: 'Default color palette exposes 13 hex swatches with #1b96ff selected.',
    actions: [
      [
        'Open Color from blank New Collection',
        'Swatches and Cancel/Done are visible. The palette was canceled without a new choice.',
      ],
    ],
    gaps: 'Color selection and persisted collection appearance are unobserved.',
  },
  {
    id: 'salesforce-report-copy-link',
    title: 'Report Copy Link Control',
    variant: 'report-copy-link',
    category: 'Actions > Copy Link',
    batch: 'screens-actions-20261006',
    capture: 'report-get-url-dialog',
    parent: 'salesforce-report-url-dialog',
    summary: 'Get URL tab contains an access notice, URL textbox and Copy Link button.',
    actions: [
      [
        'Open Share/Get URL for a report',
        'Control is visible. Copy Link was not activated or shared.',
      ],
    ],
    gaps: 'Clipboard result, access enforcement and recipient behavior are unobserved. Local URL is example.invalid.',
  },
  {
    id: 'salesforce-case-sort-header',
    title: 'Case Table Sort Header',
    variant: 'case-sort-header',
    category: 'Enterprise Tables > Sort Header',
    batch: 'provider',
    capture: 'cases-baseline',
    parent: 'salesforce-cases-empty-table',
    summary: 'Case Number header shows ascending sort while each visible column has a Sort button.',
    actions: [
      [
        'Inspect All Open Cases table',
        'Ascending Case Number indicator is visible. No sort result was exercised.',
      ],
    ],
    gaps: 'Sort direction changes, server order and persistence are unobserved in the empty table.',
  },
  {
    id: 'salesforce-case-column-resize',
    title: 'Case Column Width Handle',
    variant: 'case-column-resize',
    category: 'Enterprise Tables > Resize Handle',
    batch: 'provider',
    capture: 'cases-baseline',
    parent: 'salesforce-cases-empty-table',
    summary: 'Visible case columns expose named width sliders in the rendered accessibility tree.',
    actions: [
      ['Inspect All Open Cases table', 'Width controls are present. No handle was dragged.'],
    ],
    gaps: 'Resize interaction, limits, width persistence and populated-cell wrapping are unobserved.',
  },
  {
    id: 'salesforce-case-select-all',
    title: 'Case Select All Checkbox',
    variant: 'case-select-all',
    category: 'Enterprise Tables > Selection Checkbox',
    batch: 'provider',
    capture: 'cases-baseline',
    parent: 'salesforce-cases-empty-table',
    summary: 'Select All is disabled in the empty All Open Cases grid.',
    actions: [
      ['Inspect the empty case list', 'The header checkbox is disabled with zero visible rows.'],
    ],
    gaps: 'Selection state and bulk behavior with populated rows are unobserved.',
  },
  {
    id: 'salesforce-task-state-controls',
    title: 'Task Status and Priority Controls',
    variant: 'task-state-controls',
    category: 'Forms > State Controls',
    batch: 'remaining-20261006',
    capture: 'new-task-composer',
    parent: 'salesforce-new-task-composer',
    summary:
      'New Task Additional Information shows required Status default Not Started and Priority default Normal.',
    actions: [
      [
        'Open blank New Task',
        'Both current values and Save/Save & New actions are visible. The composer was canceled.',
      ],
    ],
    gaps: 'Option lists, transitions, save validation, reminders and assignment outcomes are unobserved.',
  },
] as const;
