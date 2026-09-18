import type { PreviewFixture, PropSchemaField } from '../types';
import type { Contact, TypeformContactsModuleProps } from './TypeformContactsModule';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'contacts',
    type: 'Contact[]',
    required: true,
    description:
      'The contacts to render. Static docs preview, not a live GraphQL integration — a contact created by a mapped form response is modeled by including it in this array with a `source`, not by simulating a live submission.',
  },
  {
    name: 'initialView',
    type: "'list' | 'add-panel' | 'detail'",
    required: false,
    description:
      "Which screen/panel is showing at mount. Defaults to 'list'. This component owns its own view/selection state from then on via internal useState, per the same self-managed pattern as new-form-chooser.",
  },
  {
    name: 'initialSelectedContactId',
    type: 'string',
    required: false,
    description: "Required when initialView is 'detail' — which contact's slide-over to open.",
  },
  {
    name: 'onAddContact',
    type: '(draft: NewContactDraft) => void',
    required: false,
    description:
      'Fired when the Add-contact panel is saved. No real contact is appended to `contacts` — this is a static-props preview.',
  },
  {
    name: 'onOpenSource',
    type: '(contact: Contact) => void',
    required: false,
    description:
      "Fired by a contact's \"Sources\" chip. No real navigation — the real product opens the source form's builder screen.",
  },
  {
    name: 'onImportContacts',
    type: '() => void',
    required: false,
    description: 'Fired by any "Import contacts" button. No real CSV file parsing.',
  },
  {
    name: 'onCreateAutomation',
    type: '() => void',
    required: false,
    description: 'Fired by the promo banner\'s "Create automation" button.',
  },
  {
    name: 'onViewSampleAutomations',
    type: '() => void',
    required: false,
    description: 'Fired by the promo banner\'s "View sample automations" link.',
  },
  {
    name: 'onLearnAboutEnrichment',
    type: '() => void',
    required: false,
    description:
      'Fired by the "not enriched" banner\'s "Learn how to enrich contacts" link, alongside opening the Contact settings modal (a reasonable inferred destination, not independently confirmed in the record).',
  },
  {
    name: 'permissionsView',
    type: 'string',
    required: false,
    description:
      'Display-only text in the fixed, non-configurable permissions popover. Defaults to the record\'s exact captured copy: "Everyone in your organization".',
  },
  {
    name: 'permissionsEdit',
    type: 'string',
    required: false,
    description: 'As above, for "Edit contacts". Defaults to "Editors and admins".',
  },
  {
    name: 'onRequestFeatures',
    type: '() => void',
    required: false,
    description: 'Fired by the permissions popover\'s "Request features" link.',
  },
  {
    name: 'initialEnrichOnCreation',
    type: 'boolean',
    required: false,
    description:
      'Initial value of the Contact settings modal\'s "Enrich contacts on creation" toggle. Defaults to false (off), matching the record.',
  },
  {
    name: 'onEnrichOnCreationChange',
    type: '(value: boolean) => void',
    required: false,
    description: 'Fired whenever the "Enrich contacts on creation" toggle changes.',
  },
];

const BASE_CONTACTS: Contact[] = [
  {
    id: 'contact-1',
    email: 'amara.diallo@brightpath.io',
    name: 'Amara Diallo',
    phoneNumber: '+1 415 555 0142',
    jobTitle: 'Head of Growth',
    linkedinUrl: 'https://linkedin.com/in/amaradiallo',
    companyName: 'BrightPath',
    companyDescription: 'Career-coaching platform for early-career professionals.',
    companyIndustry: 'EdTech',
    notes: 'Met at a webinar; interested in the Business plan.',
    address: '221 Market St, San Francisco, CA',
    education: 'UC Berkeley',
    companyAddress: '221 Market St, San Francisco, CA',
    subscriptionStatus: 'subscribed',
    subscriptionUpdatedAt: 'Sep 12, 2026, 9:04 AM',
    subscriptionSyncedBy: 'User',
    enriched: true,
    source: { formName: 'Customer Feedback Survey', date: 'Sep 12, 2026' },
  },
  {
    id: 'contact-2',
    email: 'devon.walsh@northlight.co',
    name: 'Devon Walsh',
    phoneNumber: '+1 646 555 0198',
    companyName: 'Northlight Studio',
    subscriptionStatus: 'never-subscribed',
    subscriptionUpdatedAt: 'Sep 10, 2026, 4:32 PM',
    subscriptionSyncedBy: 'User',
    enriched: false,
    source: { formName: 'Product Waitlist', date: 'Sep 10, 2026' },
  },
  {
    id: 'contact-3',
    email: 'priya.natarajan@example.com',
    name: 'Priya Natarajan',
    subscriptionStatus: 'unsubscribed',
    subscriptionUpdatedAt: 'Aug 29, 2026, 11:20 AM',
    subscriptionSyncedBy: 'User',
    enriched: true,
  },
  {
    id: 'contact-4',
    email: 'ops@fernwood-supply.com',
    subscriptionStatus: 'subscribed',
    subscriptionUpdatedAt: 'Sep 1, 2026, 2:15 PM',
    subscriptionSyncedBy: 'User',
    enriched: true,
    source: { formName: 'Vendor Intake Form', date: 'Sep 1, 2026' },
  },
];

export const fixtures: PreviewFixture<TypeformContactsModuleProps>[] = [
  {
    id: 'empty',
    title: 'Empty state (zero contacts)',
    props: {
      contacts: [],
    },
  },
  {
    id: 'populated-list',
    title: 'Populated list (4 contacts)',
    props: {
      contacts: BASE_CONTACTS,
    },
  },
  {
    id: 'add-panel-open',
    title: '"Add new contact" side panel open',
    props: {
      contacts: BASE_CONTACTS,
      initialView: 'add-panel',
    },
  },
  {
    id: 'detail-open',
    title: 'Contact detail view open (Amara Diallo)',
    props: {
      contacts: BASE_CONTACTS,
      initialView: 'detail',
      initialSelectedContactId: 'contact-1',
    },
  },
  {
    id: 'not-enriched',
    title: 'Contact with "not enriched" banner (Devon Walsh)',
    props: {
      contacts: BASE_CONTACTS,
      initialView: 'detail',
      initialSelectedContactId: 'contact-2',
    },
  },
];
