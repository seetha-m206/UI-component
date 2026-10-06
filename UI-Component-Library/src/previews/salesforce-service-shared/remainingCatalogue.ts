export const salesforceRemainingComponents = [
  {
    id: 'salesforce-global-search-panel',
    title: 'Global Search Panel',
    variant: 'global-search-panel',
    group: 'utility',
    category: 'Search and Filtering > Global Search',
    capture: 'global-search',
    summary:
      'Search dialog with object scope, search input, suggested case queries, recent assets and a search-help column.',
    actions: [
      ['Open global Search', 'Suggestions and help become visible. No search query was submitted.'],
    ],
    gaps: 'Search results, object scope selection and query interpretation were not exercised.',
  },
  {
    id: 'salesforce-messaging-session-list',
    title: 'Messaging Sessions Inventory',
    variant: 'messaging-session-list',
    group: 'messaging',
    category: 'Enterprise Tables > Empty Table',
    capture: 'messaging-views-loaded',
    summary:
      'Recently Viewed table with session name, channel, user, owner, platform, status, start and end columns. The captured view has zero rows and an across-channels empty state.',
    actions: [
      [
        'Navigate to Messaging Sessions',
        'Recently Viewed loads with zero visible rows. Charts and Filters are disabled.',
      ],
    ],
    gaps: 'Conversation detail, channel setup, delivery, session routing and populated rows are unobserved.',
  },
  {
    id: 'salesforce-messaging-view-picker',
    title: 'Messaging View Picker',
    variant: 'messaging-view-picker',
    group: 'messaging',
    category: 'Search and Filtering > Saved Views',
    capture: 'messaging-views-loaded',
    summary: 'Search lists input and a single observed Recently Viewed option.',
    actions: [
      [
        'Open the list picker',
        'Recently Viewed appears as the only displayed option. Picker was closed without a selection change.',
      ],
    ],
    gaps: 'Additional views, typed search, pinning and saved views are unverified.',
  },
  {
    id: 'salesforce-analytics-workspace',
    title: 'Analytics Workspace',
    variant: 'analytics-workspace',
    group: 'analytics',
    category: 'Application Layout > Main Content Area',
    capture: 'analytics-home-loaded',
    summary:
      'Inner Analytics sidebar with Home, Browse, Favorites and Collections beside a search header, For You cards and My Analytics table.',
    actions: [
      ['Navigate to Analytics', 'Analytics loads inside an embedded frame with Home selected.'],
    ],
    gaps: 'Sidebar personalization, collection management and provider responsive layout are unobserved.',
  },
  {
    id: 'salesforce-analytics-recommendations',
    title: 'Analytics For You Cards',
    variant: 'analytics-recommendations',
    group: 'analytics',
    category: 'Analytics/Reporting > Recommendation Cards',
    capture: 'analytics-home-loaded',
    summary:
      'Horizontal cards group Recently Updated, Shared With Me and Created By Me assets, with type icons, dates and row menus.',
    actions: [
      ['Open Analytics Home', 'The For You carousel and its navigation controls are visible.'],
    ],
    gaps: 'Carousel movement and recommendation ranking are not verified.',
  },
  {
    id: 'salesforce-analytics-recents',
    title: 'My Analytics Recents',
    variant: 'analytics-recents',
    group: 'analytics',
    category: 'Enterprise Tables > Grouped Inventory',
    capture: 'analytics-home-loaded',
    summary:
      'Recents and Favorites tabs above a table grouped by Today and Last 7 days, with title, last viewed and modification metadata.',
    actions: [
      ['Open Analytics Home', 'The Recents table is populated with report and dashboard assets.'],
    ],
    gaps: 'Favoriting, tab persistence and sorting results are not exercised. Public asset titles, owners and dates are fictional.',
  },
  {
    id: 'salesforce-analytics-browser',
    title: 'Analytics Asset Browser',
    variant: 'analytics-browser',
    group: 'analytics',
    category: 'Enterprise Tables > Asset Inventory',
    capture: 'analytics-browse',
    summary:
      'All Items, Dashboards, Reports and Folders filters above creator/date controls, selection summary and an asset table.',
    actions: [
      [
        'Open Browse',
        'Populated assets expose type, location, creator and modification columns plus row action buttons.',
      ],
    ],
    gaps: 'Bulk operations, limit behavior, sorting, search and selected asset mutations are unverified.',
  },
  {
    id: 'salesforce-analytics-creator-filter',
    title: 'Analytics Creator Filter',
    variant: 'analytics-creator-filter',
    group: 'analytics',
    category: 'Search and Filtering > Owner Filter',
    capture: 'analytics-creator-filter',
    summary: 'Creator dropdown offers search, Anybody, Not Me and the current user option.',
    actions: [['Open creator filter', 'The picker appears. No choice was applied.']],
    gaps: 'Filter application and persistence are unobserved.',
  },
  {
    id: 'salesforce-analytics-date-filter',
    title: 'Analytics Date Filter',
    variant: 'analytics-date-filter',
    group: 'analytics',
    category: 'Search and Filtering > Date Filter',
    capture: 'analytics-date-filter',
    summary: 'Date menu offers Any Date, Last 7, 30, 90 and 180 Days plus Custom Range.',
    actions: [['Open date filter', 'Preset menu opens. No date range was selected.']],
    gaps: 'Custom date entry, timezone interpretation and applied results are unverified.',
  },
  {
    id: 'salesforce-analytics-create-menu',
    title: 'Analytics Create Menu',
    variant: 'analytics-create-menu',
    group: 'analytics',
    category: 'Actions > Create Menu',
    capture: 'analytics-create-menu',
    summary: 'Create menu provides Lightning Report, Lightning Folder and Lightning Dashboard.',
    actions: [
      [
        'Open Create and choose Lightning Report',
        'A report-type chooser opens. It was canceled before continuing.',
      ],
    ],
    gaps: 'Folder and dashboard creation and all saved outcomes remain unobserved.',
  },
  {
    id: 'salesforce-report-type-chooser',
    title: 'Report Type Chooser',
    variant: 'report-type-chooser',
    group: 'analytics',
    category: 'Forms > Type Selection Dialog',
    capture: 'report-type-chooser',
    summary:
      'Choose Report Type dialog has category navigation, report-type search, a scrollable type list and Cancel/Continue controls.',
    actions: [
      [
        'Choose Lightning Report from Create',
        'All categories and types are exposed. Cancel exits before a type is chosen or Continue is used.',
      ],
    ],
    gaps: 'Report builder, type selection details, generation and saving are not observed.',
  },
  {
    id: 'salesforce-analytics-asset-actions',
    title: 'Analytics Asset Actions',
    variant: 'analytics-asset-actions',
    group: 'analytics',
    category: 'Actions > Overflow Menu',
    capture: 'analytics-report-actions',
    summary:
      'Report row menu exposes Share, Add to Collections, Edit, Move, Subscribe, Export, Delete, Add To Dashboard, Favorite and Details.',
    actions: [['Open report row actions', 'The menu is displayed. No operation was activated.']],
    gaps: 'Sharing, export, deletion, subscription, editing and metadata dialogs are unobserved.',
  },
  {
    id: 'salesforce-service-collection',
    title: 'Service Analytics Collection',
    variant: 'service-collection',
    group: 'analytics',
    category: 'Analytics/Reporting > Collection Cards',
    capture: 'analytics-service-collection',
    summary:
      'Service collection header has item count, update context and Pin/Share/Add/actions. Cards show report thumbnails, titles, folder context and overflow.',
    actions: [
      ['Open the Service collection', 'A grid of service report and dashboard cards loads.'],
    ],
    gaps: 'Pinning, sharing, adding and managing collection membership are unobserved.',
  },
  {
    id: 'salesforce-case-report-viewer',
    title: 'Case Report Viewer',
    variant: 'case-report-viewer',
    group: 'analytics',
    category: 'Analytics/Reporting > Report Viewer',
    capture: 'case-report-viewer',
    summary:
      'Report header, action toolbar, Total Records summary, empty result canvas and row/detail/total toggles.',
    actions: [
      [
        'Open a case report',
        'Closed Cases shows Total Records 0 and No Results. A separate Open Cases report also returned zero.',
      ],
    ],
    gaps: 'Populated report rows, editing, export and drill-through to a case are not observed.',
  },
  {
    id: 'salesforce-report-filter-drawer',
    title: 'Report Filter Drawer',
    variant: 'report-filter-drawer',
    group: 'analytics',
    category: 'Search and Filtering > Filter Drawer',
    capture: 'case-report-filters',
    summary:
      'Report filters drawer shows Show Me All cases, Opened Date All Time, Units Hours and Status equals Closed.',
    actions: [
      [
        'Open Filters on the case report',
        'The current filter values are displayed in a right drawer. No filter was changed.',
      ],
    ],
    gaps: 'Edited filters, operators, applying results and persistence are unverified.',
  },
  {
    id: 'salesforce-service-kpi-dashboard',
    title: 'Service KPI Dashboard',
    variant: 'service-kpi-dashboard',
    group: 'analytics',
    category: 'Analytics/Reporting > Dashboard',
    capture: 'service-kpi-dashboard-loaded',
    summary:
      'Dashboard header and responsive-looking card grid of case counts, priority, age, handling time, trend and article metrics, with per-widget refresh, expand and View Report.',
    actions: [
      [
        'Open Service KPIs Dashboard',
        'The captured widgets settle to zero/empty data. Dashboard opening refreshes its displayed state automatically.',
      ],
    ],
    gaps: 'Manual refresh, live data correctness, editing, sharing, subscriptions and layout breakpoints are unverified.',
  },
  {
    id: 'salesforce-dashboard-expanded-widget',
    title: 'Expanded Dashboard Widget',
    variant: 'dashboard-expanded-widget',
    group: 'analytics',
    category: 'Analytics/Reporting > Chart Detail Dialog',
    capture: 'dashboard-expanded-widget',
    summary:
      'Expanded widget dialog with chart, count summary, timestamp, viewer context, Cancel, Download Chart and previous/next controls.',
    actions: [
      [
        'Activate Expand on Open Cases widget',
        'The expanded chart shows Record Count 0. Cancel returns to the dashboard.',
      ],
    ],
    gaps: 'Download, widget navigation, populated charts and report drill-down outcomes are not exercised.',
  },
  {
    id: 'salesforce-dashboard-actions',
    title: 'Dashboard Actions',
    variant: 'dashboard-actions',
    group: 'analytics',
    category: 'Actions > Overflow Menu',
    capture: 'dashboard-actions',
    summary:
      'Dashboard menu offers Download, Save Dashboard As, New Dashboard, Change Owner and Delete Dashboard.',
    actions: [['Open More actions', 'The menu is visible. No operation was selected.']],
    gaps: 'All download, copy, owner, creation and deletion outcomes are unobserved.',
  },
  {
    id: 'salesforce-automation-overview',
    title: 'Automation Overview',
    variant: 'automation-overview',
    group: 'automation',
    category: 'Application Layout > Main Content Area',
    capture: 'automation-home',
    summary:
      'Automation navigation contains Home, Flows, Integrations, Monitor and Action Hub. Overview promotes connector integrations with a top-integrations card row and Get Started.',
    actions: [['Navigate to Automation', 'Overview content and connector recommendations load.']],
    gaps: 'Get Started, installation, external authorization and integration execution are unobserved.',
  },
  {
    id: 'salesforce-flow-inventory',
    title: 'Flow Inventory',
    variant: 'flow-inventory',
    group: 'automation',
    category: 'Enterprise Tables > Automation Inventory',
    capture: 'automation-flows',
    summary:
      'Recently Viewed flow inventory with New, list controls, disabled unavailable controls and a Nothing to see here empty state.',
    actions: [['Open Flows', 'Recently Viewed shows zero flow rows.']],
    gaps: 'Existing flow details, run history, activation, debug and execution are unavailable in the inspected view.',
  },
  {
    id: 'salesforce-automation-type-chooser',
    title: 'New Automation Chooser',
    variant: 'automation-type-chooser',
    group: 'automation',
    category: 'Forms > Type Selection Dialog',
    capture: 'new-automation-chooser',
    summary:
      'New Automation modal in Flow Builder presents search, Triggered/Scheduled/Screen/Autolaunched categories and frequently used flow type cards.',
    actions: [
      [
        'Activate New from Flows',
        'A temporary builder tab opens with the chooser. No flow type was chosen and the tab was closed.',
      ],
    ],
    gaps: 'Builder canvas, generated draft, save, run, debug and activation were not exercised.',
  },
  {
    id: 'salesforce-triggered-automation-catalogue',
    title: 'Triggered Automation Catalogue',
    variant: 'triggered-automation-catalogue',
    group: 'automation',
    category: 'Search and Filtering > Template Catalogue',
    capture: 'triggered-automation-types',
    summary:
      'Triggered category displays type and template sections with category checkboxes, search and result count. Five trigger-type cards precede template cards.',
    actions: [
      [
        'Select the Triggered category with Space',
        'The chooser filters to Triggered Automations. No flow or template card was activated.',
      ],
    ],
    gaps: 'Template details, type selection, flow creation and execution remain unobserved.',
  },
  {
    id: 'salesforce-integration-inventory',
    title: 'Integration Connection Inventory',
    variant: 'integration-inventory',
    group: 'automation',
    category: 'Account/Settings > Integrations',
    capture: 'integrations-catalogue',
    summary:
      'Connector recommendations above All Connections, New Connection, zero-item count and empty collection.',
    actions: [['Open Integrations', 'Connector shortcuts and an empty connection inventory load.']],
    gaps: 'No connector was authorized and no connection was created. Absence applies only to this displayed inventory.',
  },
  {
    id: 'salesforce-connector-catalogue',
    title: 'Connector Catalogue',
    variant: 'connector-catalogue',
    group: 'automation',
    category: 'Search and Filtering > Integration Catalogue',
    capture: 'connector-picker',
    summary:
      'Browse Connectors modal with search, total count, connector cards, descriptions, Beta badges, IdeaExchange link and Close.',
    actions: [
      [
        'Activate View All Connectors',
        'Catalogue opens and was closed without choosing a connector.',
      ],
    ],
    gaps: 'Search result behavior, connector setup, credentials and authorization were not exercised. Public examples use fictional connector names.',
  },
  {
    id: 'salesforce-flow-monitor',
    title: 'Flow Interview Monitor',
    variant: 'flow-monitor',
    group: 'automation',
    category: 'Enterprise Tables > Monitoring Table',
    capture: 'automation-monitor',
    summary:
      'All Flow Interviews table with status, flow identifiers, versions, type, error details, pause reason, owner and modified-date columns.',
    actions: [['Open Monitor', 'Flows tab displays zero items and No items to display.']],
    gaps: 'Interview detail, error drill-down, resume, retry and row actions are not observed.',
  },
  {
    id: 'salesforce-monitor-filter-drawer',
    title: 'Monitor Filter Drawer',
    variant: 'monitor-filter-drawer',
    group: 'automation',
    category: 'Search and Filtering > Filter Drawer',
    capture: 'automation-monitor-filters',
    summary:
      'Right Filters drawer shows Filter by Owner All flow interviews, Add Filter and Remove All.',
    actions: [
      [
        'Open Monitor Filters',
        'The drawer opens and reduces table width. No filter is added or removed.',
      ],
    ],
    gaps: 'Filter editor, applied results and saved configuration are unobserved.',
  },
  {
    id: 'salesforce-action-hub-inventory',
    title: 'Action Hub Inventory',
    variant: 'action-hub-inventory',
    group: 'automation',
    category: 'Enterprise Tables > Action Catalogue',
    capture: 'automation-action-types',
    summary:
      'Action Hub Beta displays permission-scoped guidance, an Action Type filter, search and a populated Label/Type/Description/Name table.',
    actions: [
      [
        'Open Action Hub and wait for loading to finish',
        'The initial zero/loading placeholder resolves to a populated action catalogue.',
      ],
    ],
    gaps: 'Availability does not prove permission to execute. No action was run. Public action rows are fictional.',
  },
  {
    id: 'salesforce-action-type-filter',
    title: 'Action Type Filter',
    variant: 'action-type-filter',
    group: 'automation',
    category: 'Search and Filtering > Type Filter',
    capture: 'automation-action-types',
    summary:
      'Action Type list includes All, Standard Actions, API, External Connector, Flows, prompt actions, Quick Actions, Salesforce API Platform, notifications and Slack actions.',
    actions: [['Open Action Type', 'Options are visible. No type was applied.']],
    gaps: 'Filtering results, permission transitions and action execution remain unobserved.',
  },
  {
    id: 'salesforce-action-usage-detail',
    title: 'Action Usage Detail',
    variant: 'action-usage-detail',
    group: 'automation',
    category: 'Analytics/Reporting > Usage Detail',
    capture: 'automation-action-detail',
    summary:
      'Definition header shows label, type, Runs in Last 14 Days, REST API and description. Usage tab groups Flow Builder, Agentforce Builder and Prompt Builder references.',
    actions: [
      [
        'Open an action definition',
        'A definition for an external connector action is displayed. Each builder usage section shows Nothing to see here.',
      ],
    ],
    gaps: 'No invocation or builder link was activated. An attempted row target differed from the resulting heading, so only the displayed definition is evidence.',
  },
  {
    id: 'salesforce-action-parameter-tables',
    title: 'Action Parameter Tables',
    variant: 'action-parameter-tables',
    group: 'automation',
    category: 'Enterprise Tables > Schema Table',
    capture: 'automation-action-parameters',
    summary:
      'Parameters tab contains Inputs and Outputs tables with Label, Name, Data Type, Description and Required. Connection is shown as a required id input.',
    actions: [['Activate Parameters', 'Input and output schema rows become visible.']],
    gaps: 'These are rendered UI schema declarations, not captured API contracts or execution validation.',
  },
  {
    id: 'salesforce-contacts-empty-table',
    title: 'Contacts Empty Inventory',
    variant: 'contacts-empty-table',
    group: 'records',
    category: 'Enterprise Tables > Empty Table',
    capture: 'contacts-list',
    summary:
      'All Contacts list exposes Name, Account Name, Title, Phone, Email and Contact Owner Alias, plus Import, campaign, email and New actions.',
    actions: [
      ['Open Service Contacts', 'All Contacts displays zero items and an add-contact empty state.'],
    ],
    gaps: 'Populated contact detail, import, campaign membership, email and bulk actions were not exercised.',
  },
  {
    id: 'salesforce-new-contact-form',
    title: 'New Contact Form',
    variant: 'new-contact-form',
    group: 'records',
    category: 'Forms > Record Modal',
    capture: 'new-contact-form-clear',
    summary:
      'New Contact modal groups About and Get in Touch fields. Last Name and Account Name have required markers, with owner context, name, relationship, phone, email and mailing address fields.',
    actions: [
      [
        'Open New and dismiss guidance',
        'The blank form is displayed. Last Name shows Complete this field after focus leaves it. Cancel closes the form.',
      ],
    ],
    gaps: 'No Save was used. Full submit validation, relationship lookup results, duplicate detection and persistence remain unobserved.',
  },
  {
    id: 'salesforce-contact-salutation-picker',
    title: 'Contact Salutation Picker',
    variant: 'contact-salutation-picker',
    group: 'records',
    category: 'Forms > Dropdown',
    capture: 'contact-salutation',
    summary: 'Name group has a Salutation menu with None, Mr., Ms., Mrs., Dr., Prof. and Mx.',
    actions: [['Open Salutation', 'Options are visible with None selected. Escape closes it.']],
    gaps: 'No salutation was selected or saved and naming validation is not established.',
  },
  {
    id: 'salesforce-contact-mailing-address',
    title: 'Contact Mailing Address',
    variant: 'contact-mailing-address',
    group: 'records',
    category: 'Forms > Address Group',
    capture: 'contact-address-picker',
    summary:
      'Mailing address group contains country listbox, street, city, zip/postal code and state/province. Country menu exposes a long alphabetical list.',
    actions: [
      [
        'Open Mailing Country',
        'The country list is visible. It was closed without choosing a country.',
      ],
    ],
    gaps: 'Country-dependent state choices, address validation and normalization were not exercised.',
  },
  {
    id: 'salesforce-accounts-empty-table',
    title: 'Accounts Empty Inventory',
    variant: 'accounts-empty-table',
    group: 'records',
    category: 'Enterprise Tables > Empty Table',
    capture: 'accounts-list',
    summary:
      'All Accounts list has Account Name, Phone, Website, Billing City, Billing State/Province and Owner Alias with New, Import, actionable-list and label actions.',
    actions: [
      ['Open Service Accounts', 'All Accounts displays zero items and an add-account empty state.'],
    ],
    gaps: 'Account detail, hierarchy, import, labels and bulk actions were not exercised.',
  },
  {
    id: 'salesforce-new-account-form',
    title: 'New Account Form',
    variant: 'new-account-form',
    group: 'records',
    category: 'Forms > Record Modal',
    capture: 'new-account-form',
    summary:
      'New Account modal contains About and Get in Touch sections with required Account Name, website, type, description, parent lookup, owner, phone and two address groups.',
    actions: [
      ['Open New Account', 'The blank form loads. Cancel closes it without data entry or saving.'],
    ],
    gaps: 'Duplicate detection, parent account results, submit rules and persisted records are unobserved.',
  },
  {
    id: 'salesforce-account-type-picker',
    title: 'Account Type Picker',
    variant: 'account-type-picker',
    group: 'records',
    category: 'Forms > Dropdown',
    capture: 'account-type-picker',
    summary:
      'Type menu includes None, Analyst, Competitor, Customer, Integrator, Investor, Partner, Press, Prospect, Reseller and Other.',
    actions: [
      [
        'Open Type',
        'Options appear. Empty Account Name also displays Complete this field after focus leaves it.',
      ],
    ],
    gaps: 'No type was selected or saved. Only the visible blur-related warning is established, not submission validation.',
  },
  {
    id: 'salesforce-account-address-groups',
    title: 'Account Address Groups',
    variant: 'account-address-groups',
    group: 'records',
    category: 'Forms > Address Group',
    capture: 'new-account-form',
    summary:
      'Separate Billing and Shipping address groups each contain country, street, city, zip/postal code and state/province fields.',
    actions: [
      ['Open blank New Account', 'Both address groups are visible in the scrollable form body.'],
    ],
    gaps: 'Copying addresses, country dependencies, normalization and persistence are unobserved.',
  },
  {
    id: 'salesforce-todo-utility-panel',
    title: 'To Do Utility Panel',
    variant: 'todo-utility-panel',
    group: 'utility',
    category: 'Application Layout > Utility Panel',
    capture: 'todo-panel',
    summary:
      'Bottom utility opens a docked To Do List with navigation, All, search, refresh, sort, filter, list actions, empty state and New Task.',
    actions: [
      [
        'Open To Do List',
        'The loaded panel shows zero items sorted by Created Date and an empty task state.',
      ],
    ],
    gaps: 'Pop-out, task completion, label management and populated activity behavior are unobserved.',
  },
  {
    id: 'salesforce-todo-filter-dialog',
    title: 'To Do Filter Dialog',
    variant: 'todo-filter-dialog',
    group: 'utility',
    category: 'Search and Filtering > Filter Dialog',
    capture: 'todo-filter-loaded',
    summary:
      'Filters dialog has Tasks scope, related record and target object pickers, Due Date, action type checkboxes, priority, status, Cancel, Reset and Apply.',
    actions: [
      [
        'Open Filter in To Do List',
        'Loaded controls show their current checked and disabled states. Cancel dismisses without applying.',
      ],
    ],
    gaps: 'Filter application, object-dependent lookup behavior, reset persistence and results are unobserved.',
  },
  {
    id: 'salesforce-new-task-composer',
    title: 'New Task Composer',
    variant: 'new-task-composer',
    group: 'utility',
    category: 'Forms > Task Composer',
    capture: 'new-task-composer',
    summary:
      'Task Information includes assigned-user chip, related object, subject, contact, due date and comments. Additional Information shows required status and priority with Not Started and Normal defaults.',
    actions: [
      [
        'Open New Task',
        'The blank composer opens with the current user assigned. It was canceled without input or Save.',
      ],
    ],
    gaps: 'Task save, assignment, quick text insertion, reminders and delivery outcomes are unobserved.',
  },
  {
    id: 'salesforce-task-date-picker',
    title: 'Task Due Date Picker',
    variant: 'task-date-picker',
    group: 'utility',
    category: 'Forms > Date Picker',
    capture: 'task-date-picker',
    summary:
      'Date popover shows month navigation, year selector, a weekday calendar grid and Today, anchored to the due date field.',
    actions: [
      [
        'Open Select a date for Due Date',
        'Calendar opens with the current month. No date was selected.',
      ],
    ],
    gaps: 'Date selection, parsing, locale changes, range limits and saved values remain unverified.',
  },
  {
    id: 'salesforce-object-navigation-menu',
    title: 'Object Navigation Menu',
    variant: 'object-navigation-menu',
    group: 'utility',
    category: 'Navigation > Object Shortcuts',
    capture: 'object-navigation-menu-loaded',
    summary:
      'Accounts tab dropdown groups New Account, recent lists All Accounts/My Accounts/New This Week and opening the current list in a new tab.',
    actions: [['Open Accounts List', 'Menu appears with recent-list shortcuts. Escape closes it.']],
    gaps: 'Shortcut navigation, new-tab behavior and personalization remain unobserved.',
  },
  {
    id: 'salesforce-guidance-center',
    title: 'Guidance Center',
    variant: 'guidance-center',
    group: 'utility',
    category: 'Onboarding > Guidance Panel',
    capture: 'guidance-center',
    summary:
      'Right panel groups Selected for You guidance sets, Salesblazer content and Related to This Page learning, with counts, durations and panel controls.',
    actions: [
      [
        'Open Guidance Center',
        'Recommendations and contextual resources are visible. Close dismisses the panel.',
      ],
    ],
    gaps: 'Starting guidance, completion tracking, pin persistence and external learning destinations are unobserved.',
  },
  {
    id: 'salesforce-help-agent-panel',
    title: 'Help Agent Panel',
    variant: 'help-agent-panel',
    group: 'utility',
    category: 'Feedback > Help Panel',
    capture: 'help-menu',
    summary:
      'Salesforce Help opens an AI support introduction with suggested questions, Ask Agentforce input and a disabled Send message button while blank.',
    actions: [
      [
        'Open Salesforce Help',
        'Help introduction and starter prompts are visible. No question or suggestion was sent.',
      ],
    ],
    gaps: 'Support responses, routing, cost claims and conversation persistence are unverified.',
  },
  {
    id: 'salesforce-agentforce-enable-panel',
    title: 'Agentforce Enablement Panel',
    variant: 'agentforce-enable-panel',
    group: 'utility',
    category: 'Onboarding > Feature Enablement',
    capture: 'agentforce-entry',
    summary:
      'Agentforce side panel shows a Turn on Agentforce explanation, feature list, generative-AI link and Agree and Enable action.',
    actions: [
      [
        'Open Agentforce',
        'The enablement gate is shown. Close exits without accepting or enabling.',
      ],
    ],
    gaps: 'Consent, entitlement, setup, data access, generation and enabled workspace behavior remain unobserved.',
  },
  {
    id: 'salesforce-in-app-guidance',
    title: 'In-App Guidance Callout',
    variant: 'in-app-guidance',
    group: 'utility',
    category: 'Onboarding > Walkthrough',
    capture: 'accounts-list',
    summary:
      'Explore your apps callout has a step counter, Close, Skip, Next, drag handle and keyboard prompt. A contact-specific guidance callout was also observed.',
    actions: [
      [
        'Navigate into a section',
        'The walkthrough overlays navigation. Close or Dismiss clears the visible prompt.',
      ],
    ],
    gaps: 'Next steps, completion, snooze persistence and walkthrough personalization were not exercised.',
  },
] as const;
