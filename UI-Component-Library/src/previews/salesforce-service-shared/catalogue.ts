import { salesforceIndividualComponents } from './individualCatalogue';
import { salesforceActionComponents } from './actionCatalogue';
import { salesforceRemainingComponents } from './remainingCatalogue';
export const salesforceInitialComponents = [
  {
    id: 'salesforce-application-shell',
    title: 'Application Shell',
    variant: 'shell',
    capture: 'cases-baseline',
    category: 'Application Layout > App Shell',
    summary:
      'Left product rail, trial strip, global header, Service navigation, Cases workspace and bottom utility bar.',
    gaps: 'Exact commercial edition, responsive breakpoints and other app entitlements are not established.',
  },
  {
    id: 'salesforce-sidebar',
    title: 'Product Sidebar',
    variant: 'sidebar',
    capture: 'cases-baseline',
    category: 'Application Layout > Sidebar',
    summary:
      'Dark vertical icon-and-label rail with Home, Contacts, Accounts, Sales, Service, Marketing, Commerce, Your Account, Automation and DevOps Center.',
    gaps: 'Rail reordering and destinations outside this pass were not exercised.',
  },
  {
    id: 'salesforce-global-header',
    title: 'Global Header',
    variant: 'header',
    capture: 'cases-baseline',
    category: 'Application Layout > Header',
    summary:
      'Global Search, Agentforce, Guidance Center, Help, Quick Settings, Notifications and profile affordances.',
    gaps: 'Search execution, Agentforce, profile controls and Help outcomes were not exercised.',
  },
  {
    id: 'salesforce-main-content',
    title: 'Main Content Area',
    variant: 'main',
    capture: 'case-filters',
    category: 'Application Layout > Main Content Area',
    summary:
      'Cases content wrapper contains page header, list toolbar, empty grid and a right filter drawer which reduces available grid width.',
    gaps: 'Populated-row wrapping, virtualization and responsive breakpoints remain unverified.',
  },
  {
    id: 'salesforce-page-header',
    title: 'Cases Page Header',
    variant: 'page-header',
    capture: 'cases-baseline',
    category: 'Application Layout > Page Header',
    summary:
      'Object label above All Open Cases title, colored object icon, list picker, pinned indicator and New/Change Owner/Merge Cases/Printable View/actionable-list actions.',
    gaps: 'Bulk ownership, merge, print and actionable-list outcomes were not executed.',
  },
  {
    id: 'salesforce-service-navigation',
    title: 'Service Navigation',
    variant: 'navigation',
    capture: 'cases-baseline',
    category: 'Navigation > Module Navigation',
    summary:
      'Cases, Contacts, Accounts, Quick Text, Messaging Sessions, Analytics and Knowledge tabs with per-object dropdown triggers.',
    gaps: 'Messaging Sessions, Analytics and tab personalization remain unobserved.',
  },
  {
    id: 'salesforce-trial-banner',
    title: 'Trial Banner',
    variant: 'trial',
    capture: 'cases-baseline',
    category: 'Onboarding > Trial Banner',
    summary:
      'Mint banner carries a promotional message, Buy Now and a right-aligned remaining-trial-days badge.',
    gaps: 'Checkout, eligibility, pricing and exact subscription edition are not verified.',
  },
  {
    id: 'salesforce-cases-empty-table',
    title: 'Cases Empty Table',
    variant: 'cases',
    capture: 'cases-baseline',
    category: 'Enterprise Tables > Empty Table',
    summary:
      'Zero-item table with Case Number, Contact Name, Subject, Status, Priority, Date/Time Opened and Case Owner Alias.',
    gaps: 'No populated cases, row actions, pagination, sorting result or bulk actions were observed. Zero applies only to the displayed filtered view.',
  },
  {
    id: 'salesforce-case-view-picker',
    title: 'Case View Picker',
    variant: 'views',
    capture: 'case-view-picker',
    category: 'Search and Filtering > Saved Views',
    summary:
      'Search lists combobox and listbox with All Open Cases (Pinned list), My Cases, My Open Cases, Recently Viewed, Recently Viewed Cases and Unassigned.',
    gaps: 'Typed search and selecting or pinning a different view were not exercised.',
  },
  {
    id: 'salesforce-list-view-controls',
    title: 'List View Controls',
    variant: 'controls',
    capture: 'list-view-controls',
    category: 'Actions > Overflow Menu',
    summary:
      'Menu contains New, Clone, Rename, Sharing Settings, Select Fields to Display, Delete and disabled Reset Column Widths.',
    gaps: 'Every mutation and field-configuration dialog remains unexecuted.',
  },
  {
    id: 'salesforce-display-menu',
    title: 'List Display Menu',
    variant: 'display',
    capture: 'display-menu',
    category: 'Actions > View Switcher',
    summary: 'Menuitemcheckbox controls offer Table (checked), Kanban and Split View.',
    gaps: 'Kanban and Split View destinations and persistence were not exercised.',
  },
  {
    id: 'salesforce-case-filters',
    title: 'Case Filter Drawer',
    variant: 'filters',
    capture: 'case-filters',
    category: 'Search and Filtering > Filter Drawer',
    summary:
      'Right drawer contains Filter by Owner: All cases, Matching all of these filters, Date/Time Opened equals LAST 30 DAYS and Closed equals False.',
    gaps: 'Changing, applying, adding, deleting or persisting criteria was not exercised.',
  },
  {
    id: 'salesforce-new-case-form',
    title: 'New Case Form',
    variant: 'case-form',
    capture: 'new-case-form',
    category: 'Forms > Record Modal',
    summary:
      'Centered modal groups Case Information, Contact Information and Description Information.',
    gaps: 'No text was entered, no checkbox was changed and no save or server validation was attempted.',
  },
  {
    id: 'salesforce-case-status-picker',
    title: 'Case Status Picker',
    variant: 'status',
    capture: 'case-status-options',
    category: 'Forms > Dropdown',
    summary: 'Required Status combobox defaults to New.',
    gaps: 'Allowed transitions and required-field validation remain untested.',
  },
  {
    id: 'salesforce-case-origin-picker',
    title: 'Case Origin Picker',
    variant: 'origin',
    capture: 'case-origin-options',
    category: 'Forms > Dropdown',
    summary: 'Optional Case Origin combobox defaults to --None--.',
    gaps: 'Channel ingestion, automatic origin assignment and persistence remain untested.',
  },
  {
    id: 'salesforce-case-priority-picker',
    title: 'Case Priority Picker',
    variant: 'priority',
    capture: 'case-priority-options',
    category: 'Forms > Dropdown',
    summary: 'Priority defaults to Medium with --None--, High, Medium and Low options.',
    gaps: 'SLA mapping and downstream urgency rules remain unverified.',
  },
  {
    id: 'salesforce-contact-lookup',
    title: 'Contact Lookup',
    variant: 'lookup',
    capture: 'contact-lookup',
    category: 'Forms > Relationship Lookup',
    summary: 'Contact Name and Account Name lookup fields have search icons.',
    gaps: 'No lookup query, record selection or related contact creation was attempted.',
  },
  {
    id: 'salesforce-case-description',
    title: 'Case Description Fields',
    variant: 'description',
    capture: 'new-case-form',
    category: 'Forms > Text Input and Text Area',
    summary:
      'Full-width Subject input and multiline Description field share the Description Information group.',
    gaps: 'Typing, limits, formatting, attachments and content validation were not exercised.',
  },
  {
    id: 'salesforce-case-notification-option',
    title: 'Case Notification Option',
    variant: 'notification-option',
    capture: 'new-case-form',
    category: 'Notifications > Delivery Option',
    summary:
      'Unchecked Send notification email to contact checkbox sits at the left side of the case modal footer.',
    gaps: 'No provider toggle or notification delivery was tested.',
  },
  {
    id: 'salesforce-notifications',
    title: 'Notification Centre',
    variant: 'notifications',
    capture: 'notifications-empty',
    category: 'Notifications > Notification Centre',
    summary:
      'Header bell opens a compact popover with Notifications title, close control and no-notifications message.',
    gaps: 'Unread, read, populated, delivery and mark-read behavior remain unobserved.',
  },
  {
    id: 'salesforce-quick-settings',
    title: 'Quick Settings Drawer',
    variant: 'settings',
    capture: 'quick-settings',
    category: 'Account/Settings > Settings Navigation',
    summary: 'Right-side panel groups Customization and Company links.',
    gaps: 'No settings destination or setting change was executed.',
  },
  {
    id: 'salesforce-knowledge-list',
    title: 'Knowledge Empty List',
    variant: 'knowledge',
    capture: 'knowledge-list',
    category: 'Enterprise Tables > Article Inventory',
    summary:
      'Recently Viewed Knowledge table has Article Title, Summary, Article Number, Published Date, Publication Status and Validation Status columns.',
    gaps: 'Zero recently viewed items does not establish an empty global knowledge base. Publishing, assignments, archive and deletion remain untested.',
  },
  {
    id: 'salesforce-new-knowledge-form',
    title: 'New Knowledge Form',
    variant: 'knowledge-form',
    capture: 'new-knowledge-form',
    category: 'Content Creation > Article Form',
    summary:
      'Modal contains required Title and URL Name, Article Body textbox, Visibility and read-only Details labels.',
    gaps: 'Body editor toolbar, slug generation, validation, save and publication remain unobserved.',
  },
  {
    id: 'salesforce-article-visibility',
    title: 'Article Visibility Controls',
    variant: 'visibility',
    capture: 'new-knowledge-form',
    category: 'Forms > Visibility Controls',
    summary:
      'Visibility section shows Visible In Internal App as True and an unchecked Visible to Customer checkbox.',
    gaps: 'No visibility setting, access rule or permission was changed or verified.',
  },
  {
    id: 'salesforce-quick-text-library',
    title: 'Quick Text Library',
    variant: 'quick-library',
    capture: 'quick-text-list',
    category: 'Content Creation > Template Library',
    summary:
      'Library has Recent breadcrumb, zero-item status, search, New Quick Text, New Folder and a grouped left navigation for Quick Text, Folders and Favorites.',
    gaps: 'Other folders, favorites, search results, new-folder creation and list preferences were not exercised.',
  },
  {
    id: 'salesforce-quick-text-form',
    title: 'Quick Text Composer',
    variant: 'quick-form',
    capture: 'new-quick-text',
    category: 'Content Creation > Reusable Message Composer',
    summary:
      'Modal contains required Quick Text Name and Message, merge-field group, folder selector, Category Greetings, channel transfer lists and checked Include in selected channels.',
    gaps: 'Preview execution, folder/category choices, validation and save were not exercised.',
  },
  {
    id: 'salesforce-merge-field',
    title: 'Merge Field Selector',
    variant: 'merge',
    capture: 'quick-text-merge-options',
    category: 'Content Creation > Merge Field',
    summary: 'Related To offers Account, Case, Contact, Lead, Opportunity, Organization and User.',
    gaps: 'Dependent field values, insertion and resolved-personalization behavior remain unobserved.',
  },
  {
    id: 'salesforce-channel-transfer',
    title: 'Channel Transfer Lists',
    variant: 'channels',
    capture: 'new-quick-text',
    category: 'Forms > Dual Listbox',
    summary: 'Available lists Event, Task, CaseComment and Knowledge.',
    gaps: 'Transfer, reorder, channel inclusion and persistence were not exercised in Salesforce. Local fixture actions are reconstructions only.',
  },
] as const;

export const salesforceComponents = [
  ...salesforceInitialComponents,
  ...salesforceRemainingComponents,
  ...salesforceActionComponents,
  ...salesforceIndividualComponents,
] as const;
