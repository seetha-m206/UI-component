export const salesforceActionComponents = [
  {
    id: 'salesforce-list-sharing-dialog',
    title: 'List Sharing Settings',
    variant: 'list-sharing-dialog',
    group: 'cases',
    category: 'Account/Settings > Sharing Dialog',
    capture: 'list-sharing-dialog',
    summary:
      'Sharing Settings presents Only I and All users radio choices, Help, Cancel and Save. All users is selected in the inspected view.',
    actions: [
      [
        'Open Sharing Settings',
        'The dialog appears with current visibility. Cancel leaves it unchanged.',
      ],
    ],
    gaps: 'Visibility changes, access enforcement and saved outcomes are unobserved.',
  },
  {
    id: 'salesforce-case-chart-drawer',
    title: 'Case Chart Empty Drawer',
    variant: 'case-chart-drawer',
    group: 'cases',
    category: 'Analytics/Reporting > Chart Drawer',
    capture: 'case-chart-empty-drawer',
    summary:
      'Charts drawer contains an empty-chart message, New Chart, a screen-reader table-equivalent control and a List Chart data section.',
    actions: [
      ['Open Charts', 'The drawer reports that this list has no charts. New Chart opens setup.'],
    ],
    gaps: 'Chart rendering, data equivalence, existing chart controls and chart persistence are unobserved.',
  },
  {
    id: 'salesforce-list-chart-form',
    title: 'New List Chart Form',
    variant: 'list-chart-form',
    group: 'cases',
    category: 'Forms > Chart Configuration',
    capture: 'new-list-chart-dialog',
    summary:
      'New Chart contains required Chart Name, Chart Type, Aggregate Type, Aggregate Field and Grouping Field. Horizontal Bar Chart, Count and Account Name are the visible defaults.',
    actions: [
      [
        'Open New Chart and its type, aggregate and grouping pickers',
        'Type offers Vertical Bar Chart, Horizontal Bar Chart and Donut Chart. Aggregate Type offers Count. Grouping exposes case fields. All pickers were closed and setup canceled without choosing or saving.',
      ],
    ],
    gaps: 'Aggregate Field options, selected chart behavior, validation and chart saving are unobserved.',
  },
  {
    id: 'salesforce-case-filter-editor',
    title: 'Case Filter Criterion Editor',
    variant: 'case-filter-editor',
    group: 'cases',
    category: 'Search and Filtering > Filter Editor',
    capture: 'case-filter-editor',
    summary:
      'Add Filter opens a Field, Operator, Value and Done popover with a New Filter draft row. Field defaults to Account Name and Operator to equals.',
    actions: [
      [
        'Open Add Filter and its field and operator pickers',
        'Case fields and nine operators are displayed. Escape closes the editor. Parent Cancel discards the temporary draft.',
      ],
    ],
    gaps: 'Done, applied criteria, value-type dependencies, validation and persisted filtering are unobserved.',
  },
  {
    id: 'salesforce-filter-draft-actions',
    title: 'Unsaved Filter Actions',
    variant: 'filter-draft-actions',
    group: 'cases',
    category: 'Actions > Draft Toolbar',
    capture: 'unsaved-filter-actions',
    summary:
      'Temporary filter editing reveals Cancel, Save and More Filter Options above the filter list and New Filter draft row.',
    actions: [
      [
        'Close the new criterion popover',
        'Unsaved controls remain visible. Cancel returns the existing filter configuration.',
      ],
    ],
    gaps: 'Saving, additional filter options and persistence are unobserved.',
  },
  {
    id: 'salesforce-filter-logic-editor',
    title: 'Filter Logic Editor',
    variant: 'filter-logic-editor',
    group: 'cases',
    category: 'Search and Filtering > Boolean Logic',
    capture: 'filter-logic-editor',
    summary:
      'Add Filter Logic exposes a text field defaulting to 1 AND 2, AND/OR guidance, Remove, Cancel and Save.',
    actions: [
      [
        'Open Add Filter Logic',
        'The logic field appears. Cancel discards the temporary editing state.',
      ],
    ],
    gaps: 'Logic changes, expression validation, application and saved outcomes are unobserved.',
  },
  {
    id: 'salesforce-column-text-menu',
    title: 'Column Text Menu',
    variant: 'column-text-menu',
    group: 'cases',
    category: 'Actions > Column Menu',
    capture: 'case-column-text-menu',
    summary: 'Case Number column actions offer Wrap text and Clip text, with Clip text checked.',
    actions: [
      [
        'Open Case Number Column Actions',
        'The menu and selected presentation mode appear. It was dismissed without changing mode.',
      ],
    ],
    gaps: 'Wrapping results, column persistence and populated cell behavior are unobserved.',
  },
  {
    id: 'salesforce-case-toolbar-overflow',
    title: 'Case Toolbar Overflow',
    variant: 'case-toolbar-overflow',
    group: 'cases',
    category: 'Actions > Overflow Menu',
    capture: 'case-toolbar-overflow',
    summary: 'Show more actions contains Assign Label in the inspected case view.',
    actions: [['Open Show more actions', 'Assign Label is exposed. It was not invoked.']],
    gaps: 'Label selection, assignment, permissions and bulk outcomes are unobserved.',
  },
  {
    id: 'salesforce-bulk-selection-toast',
    title: 'Bulk Selection Error Toast',
    variant: 'bulk-selection-toast',
    group: 'cases',
    category: 'Feedback > Error Toast',
    capture: 'bulk-selection-error-toast-live',
    summary:
      'Error notification states Select at least one record and try again, with Close and keyboard navigation guidance.',
    actions: [
      [
        'Activate Change Owner with zero records selected',
        'The selection warning appears. No ownership form or change occurs.',
      ],
    ],
    gaps: 'Behavior with selected rows, owner picker, permission checks and successful changes are unobserved.',
  },
  {
    id: 'salesforce-service-navigation-editor',
    title: 'Service Navigation Editor',
    variant: 'service-navigation-editor',
    group: 'utility',
    category: 'Navigation > Customization Dialog',
    capture: 'service-navigation-editor',
    summary:
      'Edit Service App Navigation Items lists seven current items, keyboard reorder guidance, Add More Items, Reset Navigation to Default, Cancel and disabled Save.',
    actions: [
      [
        'Open Edit nav items',
        'The current order is visible. Add More Items opens a nested catalogue. Both dialogs were canceled.',
      ],
    ],
    gaps: 'Reordering, renaming, removing, reset and durable navigation changes are unobserved.',
  },
  {
    id: 'salesforce-navigation-item-catalogue',
    title: 'Navigation Item Catalogue',
    variant: 'navigation-item-catalogue',
    group: 'utility',
    category: 'Navigation > Item Selection',
    capture: 'navigation-item-catalogue',
    summary:
      'Add Items dialog provides Favorites and All categories, search, selection count, a loaded item catalogue and disabled Add Nav Items at zero selection.',
    actions: [
      [
        'Open Add More Items and All',
        'The initial loading placeholder resolves to available objects. No item was selected and Cancel closes the dialog.',
      ],
    ],
    gaps: 'Search semantics, favorite membership, selection limits and adding navigation items are unobserved.',
  },
  {
    id: 'salesforce-analytics-favorites-screen',
    title: 'Analytics Favorites Screen',
    variant: 'analytics-favorites-screen',
    group: 'analytics',
    category: 'Application Layout > Main Content Area',
    capture: 'analytics-favorites-screen',
    summary:
      'Favorites uses the Analytics sidebar, search, Create, All Items/Dashboards/Reports/Folders filters and a No items to display empty state with Learn More.',
    actions: [
      [
        'Open Analytics Favorites',
        'The empty results settle. A generic keyword search leads to Keyword Results.',
      ],
    ],
    gaps: 'Favorite creation/removal and filter behavior remain unobserved. Empty Favorites does not establish absence of all analytics assets.',
  },
  {
    id: 'salesforce-manage-collections-dialog',
    title: 'Manage Collections Dialog',
    variant: 'manage-collections-dialog',
    group: 'analytics',
    category: 'Account/Settings > Collection Preferences',
    capture: 'manage-collections-dialog',
    summary:
      'Manage Collections table has Title, Show and Pin columns. Sales and Service are shown and unpinned, with help text, Cancel and Save.',
    actions: [
      [
        'Open Manage Collections',
        'Current preferences are displayed. Cancel leaves them unchanged.',
      ],
    ],
    gaps: 'Preference changes, hiding, pinning and persistence are unobserved.',
  },
  {
    id: 'salesforce-new-collection-dialog',
    title: 'New Collection Dialog',
    variant: 'new-collection-dialog',
    group: 'analytics',
    category: 'Forms > Collection Dialog',
    capture: 'new-collection-dialog',
    summary:
      'New Collection presents required Name, Color default #1b96ff, Description, Cancel and disabled Save while empty.',
    actions: [
      [
        'Open New Collection',
        'Blank creation form appears. Color opens a nested palette. Both dialogs were canceled.',
      ],
    ],
    gaps: 'Name validation, color application and collection creation are unobserved.',
  },
  {
    id: 'salesforce-collection-color-picker',
    title: 'Collection Color Picker',
    variant: 'collection-color-picker',
    group: 'analytics',
    category: 'Forms > Color Picker',
    capture: 'collection-color-picker',
    summary:
      'Color dialog has a Default tab, 13 swatches and Cancel/Done. Blue #1b96ff is selected.',
    actions: [
      [
        'Open Color in New Collection',
        'The swatch palette appears. Cancel returns without changing color.',
      ],
    ],
    gaps: 'Color changes, Done, other palettes and persisted presentation are unobserved.',
  },
  {
    id: 'salesforce-analytics-bulk-guidance',
    title: 'Analytics Bulk Action Guidance',
    variant: 'analytics-bulk-guidance',
    group: 'analytics',
    category: 'Onboarding > Action Guidance',
    capture: 'analytics-bulk-guidance',
    summary:
      'Guidance describes selecting up to 50 assets for simultaneous actions such as changing owner or adding to collections. Close Dialog and Learn More are exposed.',
    actions: [
      [
        'Submit a generic analytics keyword search',
        'A bulk-action guidance dialog appears and was closed.',
      ],
    ],
    gaps: 'The stated selection limit and bulk execution behavior were not tested. The copy is guidance, not outcome evidence.',
  },
  {
    id: 'salesforce-analytics-keyword-results',
    title: 'Analytics Keyword Results Screen',
    variant: 'analytics-keyword-results',
    group: 'analytics',
    category: 'Enterprise Tables > Search Results',
    capture: 'analytics-keyword-results',
    summary:
      'Favorites > Keyword Results shows a search query, type filters, selected count with Limit 50, Bulk Actions and three report rows with location and creator/modifier metadata.',
    actions: [
      [
        'Search Case from Favorites',
        'Three report rows settle despite the previously empty Favorites screen. No rows were selected.',
      ],
    ],
    gaps: 'Search scope, relevance algorithm, bulk selection and saved or shared outcomes are unobserved. Public report names, people and dates are fictional.',
  },
  {
    id: 'salesforce-add-to-collections-dialog',
    title: 'Add to Collections Dialog',
    variant: 'add-to-collections-dialog',
    group: 'analytics',
    category: 'Forms > Collection Membership',
    capture: 'add-to-collections-dialog',
    summary:
      'Dialog offers Create Collection, search, Sales and Service rows with Add buttons, Cancel and Save.',
    actions: [
      [
        'Open Add to Collections from a report menu',
        'The membership picker appears. It was canceled without selecting a collection.',
      ],
    ],
    gaps: 'Adding/removing membership, creating collections here and saving are unobserved.',
  },
  {
    id: 'salesforce-report-url-dialog',
    title: 'Report Get URL Dialog',
    variant: 'report-url-dialog',
    group: 'analytics',
    category: 'Actions > Share Dialog',
    capture: 'report-get-url-dialog',
    summary:
      'Report sharing dialog shows Get URL, a report URL textbox, Copy Link, Close and a notice that only people with access can view the link.',
    actions: [
      [
        'Open Share from the report actions menu',
        'The URL dialog appears. Close dismisses it. No link was copied or transmitted.',
      ],
    ],
    gaps: 'Clipboard outcome, access enforcement, public sharing and recipient access are unobserved. The local preview uses example.invalid.',
  },
  {
    id: 'salesforce-analytics-asset-details',
    title: 'Analytics Asset Details Drawer',
    variant: 'analytics-asset-details',
    group: 'analytics',
    category: 'Application Layout > Detail Drawer',
    capture: 'analytics-asset-details-drawer',
    summary:
      'Details drawer contains report title, folder, created/modified/viewed metadata, description and a Source section identifying the standard report.',
    actions: [
      [
        'Open Details from the settled report actions menu',
        'The metadata drawer loads. Public metadata is replaced by fictional examples.',
      ],
    ],
    gaps: 'Editing metadata, folder navigation, access rules and underlying report execution are unobserved.',
  },
  {
    id: 'salesforce-list-field-display',
    title: 'Select Fields to Display',
    variant: 'list-field-display',
    group: 'cases',
    category: 'Forms > Dual Listbox',
    capture: 'list-field-display-dialog',
    summary:
      'Dialog pairs Available Fields and Visible Fields listboxes with transfer arrows, reorder controls, keyboard hints, Cancel and Save. Seven case columns are visible.',
    actions: [
      [
        'Open Select Fields to Display from List View Controls',
        'Both field lists are displayed. Cancel exits without transfer or reordering.',
      ],
    ],
    gaps: 'Field transfer, order changes, maximum columns, keyboard shortcuts and saved layout are unobserved.',
  },
  {
    id: 'salesforce-new-list-view',
    title: 'New List View Dialog',
    variant: 'new-list-view',
    group: 'cases',
    category: 'Forms > Saved View Dialog',
    capture: 'new-list-view-dialog',
    summary:
      'New List View has required List Name and List API Name, name help, visibility radio group defaulting to Only I, Cancel and Save.',
    actions: [
      [
        'Open New from List View Controls',
        'Blank fields and private visibility default appear. Cancel exits without input or saving.',
      ],
    ],
    gaps: 'API-name generation, validation, visibility enforcement and creating a saved view are unobserved.',
  },
  {
    id: 'salesforce-clone-list-view',
    title: 'Clone List View Dialog',
    variant: 'clone-list-view',
    group: 'cases',
    category: 'Forms > Saved View Dialog',
    capture: 'clone-list-view-dialog',
    summary:
      'Clone List View prepopulates Copy of All Open Cases and Copy_of_All_Open_Cases, with Only I selected, Cancel and Save.',
    actions: [
      [
        'Open Clone from List View Controls',
        'Copy defaults appear. Cancel leaves the source view unchanged.',
      ],
    ],
    gaps: 'Copied filters, API-name validation, permission inheritance and clone persistence are unobserved.',
  },
  {
    id: 'salesforce-rename-list-view',
    title: 'Rename List View Dialog',
    variant: 'rename-list-view',
    group: 'cases',
    category: 'Forms > Saved View Dialog',
    capture: 'rename-list-view-dialog',
    summary:
      'Rename List View has current List Name, disabled List API Name, visibility summary and help, Cancel and Save.',
    actions: [
      [
        'Open Rename from List View Controls',
        'The current name and immutable-looking disabled API-name field appear. Cancel exits unchanged.',
      ],
    ],
    gaps: 'Renaming, permission rules, validation and persisted title changes are unobserved.',
  },
  {
    id: 'salesforce-profile-popover',
    title: 'Profile and Density Popover',
    variant: 'profile-popover',
    group: 'utility',
    category: 'Account/Settings > Profile Menu',
    capture: 'profile-popover',
    summary:
      'Popover presents user name and workspace domain, Settings, Log Out, Display Density with Comfy selected and disabled, Compact, Add Username and Close.',
    actions: [
      [
        'Open View profile',
        'The account menu appears. Close dismisses it without choosing a destination or density.',
      ],
    ],
    gaps: 'Profile navigation, settings, logout, density changes and account switching are unobserved. All preview identity is fictional.',
  },
] as const;
