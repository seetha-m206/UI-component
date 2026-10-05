import { useState } from 'react';
import styles from './freshserviceAdminKnowledge.module.css';

export type AdminKnowledgeVariant =
  | 'admin-roles' | 'admin-role-menu' | 'admin-role-form'
  | 'admin-business-hours' | 'admin-calendar-form' | 'admin-sla'
  | 'admin-field-manager' | 'admin-ticket-fields' | 'admin-knowledge-settings'
  | 'admin-agents' | 'admin-agent-groups' | 'admin-email-notifications' | 'admin-portals'
  | 'knowledge-category' | 'knowledge-category-filter' | 'knowledge-folder'
  | 'knowledge-trash' | 'knowledge-topics' | 'knowledge-import';
export interface AdminKnowledgeProps { variant?: AdminKnowledgeVariant; initialNotice?: string }

const permissionAreas = ['Tickets', 'Problems', 'Changes', 'Releases', 'Freddy AI', 'Alerts', 'On-call schedules', 'Inventory', 'ADM/BSM', 'Contracts', 'Purchase Orders', 'Offboarding requests', 'Journeys', 'Projects', 'Workload', 'Announcements', 'Solutions', 'Reports', 'Checklists'];
const statusOptions = ['Draft', 'In review', 'Edits suggested', 'Approved', 'Published'];
const reviewOptions = ['All articles', 'Within review date', 'Past review date'];
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export function FreshserviceAdminKnowledge({ variant = 'knowledge-category', initialNotice }: AdminKnowledgeProps) {
  const [notice, setNotice] = useState(initialNotice ?? 'Local reconstruction of observed Freshservice screens. No provider request was sent.');
  const [tab, setTab] = useState(variant === 'admin-business-hours' ? 'Business Hours' : variant === 'admin-ticket-fields' ? 'Ticket form' : 'Admin roles');
  const [area, setArea] = useState('Tickets');
  const [trashTab, setTrashTab] = useState('Articles');
  const [status, setStatus] = useState<string[]>([]);
  const [review, setReview] = useState('All articles');
  const [expiry, setExpiry] = useState('Move the article to draft');
  const [days, setDays] = useState(['Monday','Tuesday','Wednesday','Thursday','Friday']);
  const [viewAllowed, setViewAllowed] = useState(false);
  const guard = (action: string) => setNotice(`${action}: local demonstration only. No request was sent.`);
  const toggle = (value: string, selected: string[], setter: (value: string[]) => void) => setter(selected.includes(value) ? selected.filter(x => x !== value) : [...selected, value]);
  const button = (label: string, primary = false) => <button className={primary ? styles.primary : undefined} onClick={() => guard(label)}>{label}</button>;
  const tabs = (items: string[], selected: string, setter: (value: string) => void) => <nav aria-label="Local view tabs" className={styles.tabs}>{items.map(item => <button key={item} className={selected === item ? styles.active : undefined} onClick={() => setter(item)}>{item}</button>)}</nav>;
  const title = ({
    'admin-roles':'Roles', 'admin-role-menu':'New Role', 'admin-role-form':'New Agent role',
    'admin-business-hours':'Business Hours', 'admin-calendar-form':'New Business Hours',
    'admin-sla':'SLA Policies', 'admin-field-manager':'Field Manager',
    'admin-ticket-fields':'Ticket Fields', 'admin-knowledge-settings':'Knowledge Base',
    'admin-agents':'Agents', 'admin-agent-groups':'Agent Groups', 'admin-email-notifications':'Email Notifications', 'admin-portals':'Support Portals',
    'knowledge-category':'Default Category', 'knowledge-category-filter':'Filter articles',
    'knowledge-folder':'Drafts', 'knowledge-trash':'Trash',
    'knowledge-topics':'Recommended topics', 'knowledge-import':'Import articles',
  } as Record<AdminKnowledgeVariant,string>)[variant];
  return <section className={styles.root}>
    <header className={styles.header}><span className={styles.brand}>FRESHSERVICE REFERENCE</span><span>{variant.startsWith('admin') ? 'Admin' : 'Knowledge Base'}</span></header>
    <main className={styles.main}>
      <div className={styles.heading}><h2>{title}</h2>{['admin-roles','admin-business-hours','admin-sla','admin-field-manager','knowledge-category','knowledge-folder'].includes(variant) && button(variant === 'admin-roles' ? 'New Role' : variant === 'admin-business-hours' ? 'Create New' : variant.startsWith('knowledge') ? 'Create article' : 'Open settings', true)}</div>
      {variant === 'admin-roles' && <>{tabs(['Admin roles','Agent roles'],tab,setTab)}<div className={styles.grid}>{(tab === 'Admin roles' ? ['Account Admin','Workspace Admin'] : ['IT Agent','IT Supervisor','Knowledge Contributor']).map(item => <article className={styles.card} key={item}><h3>{item}</h3><p>Role permissions and access scope</p>{button('View role')}</article>)}</div></>}
      {variant === 'admin-role-menu' && <div className={styles.menu} role="menu">{button('Admin role')}{button('Agent role')}</div>}
      {variant === 'admin-role-form' && <><div className={styles.fields}><label>Role Name *<input placeholder="Name this role" /></label><label>Description<textarea placeholder="Describe this role" /></label></div><h3>Permissions</h3><div className={styles.columns}><nav aria-label="Permission areas">{permissionAreas.map(item => <button key={item} className={area === item ? styles.active : undefined} onClick={() => { setArea(item); setViewAllowed(false); }}>{item}</button>)}</nav><div><strong>Agent can</strong>{(area === 'Tickets' ? ['View tickets','Send reply to a ticket','Forward a conversation','Edit notes','Delete a conversation','Edit ticket properties'] : [`View ${area.toLowerCase()}`,`Create or edit ${area.toLowerCase()}`]).map((item,i) => <label className={styles.choice} key={item}><input type="checkbox" disabled={i > 0 && !viewAllowed} checked={i === 0 ? viewAllowed : undefined} onChange={i === 0 ? e => setViewAllowed(e.target.checked) : undefined} />{item}</label>)}</div></div><div className={styles.footer}>{button('Cancel')}{button('Save',true)}</div></>}
      {variant === 'admin-business-hours' && <><p>Business hours control SLA timers and ticket due dates. Holiday schedules and multiple calendars can be configured.</p>{tabs(['Business Hours','Business Hours Policies'],tab,setTab)}<article className={styles.card}><h3>Default</h3><p>Default Business Calendar</p>{button('Open calendar')}</article></>}
      {variant === 'admin-calendar-form' && <><div className={styles.fields}><label>Name *<input placeholder="Example support calendar" /></label><label>Time zone<select><option>Local time zone</option><option>Eastern Time</option></select></label></div><h3>Business hours</h3>{weekdays.map(day => <div className={styles.day} key={day}><label className={styles.choice}><input type="checkbox" checked={days.includes(day)} onChange={() => toggle(day,days,setDays)} />{day}</label><span>{days.includes(day) ? '8:00 am to 5:00 pm' : 'Closed'}</span></div>)}<h3>Yearly Holiday List</h3><p>Holidays will be ignored when calculating SLA for a ticket.</p>{button('Add holiday')}{button('Import Holidays')}<div className={styles.footer}>{button('Cancel')}{button('Save',true)}</div></>}
      {variant === 'admin-sla' && <><p>Service Level Agreements and Operational Level Agreements</p><article className={styles.card}><h3>Default SLA Policy</h3><span className={styles.pill}>Enabled in observed account</span><p>Priority based response and resolution targets</p>{button('View policy')}</article></>}
      {variant === 'admin-field-manager' && <div className={styles.grid}>{['Ticket Fields','Problem Fields','Change Fields','Release Fields','Time Entry Fields'].map(item => <article className={styles.card} key={item}><h3>{item}</h3>{button('Open '+item)}</article>)}</div>}
      {variant === 'admin-ticket-fields' && <><p>Shared fields are used by ticket, problem, change and release forms.</p><div className={styles.tags}>{['Category','Group','Agent','Department','Priority'].map(item => <span key={item}>{item}</span>)}</div><h3>Ticket Fields</h3>{tabs(['Ticket form','Ticket task'],tab,setTab)}<div className={styles.columns}><div className={styles.card}><h3>Drag & Drop Field</h3><p>Field types available in the editor</p></div><div className={styles.card}><h3>{tab === 'Ticket task' ? 'Ticket task' : 'Ticket form'}</h3><p>Local structural preview</p></div></div><div className={styles.footer}>{button('Cancel')}{button('Save',true)}</div></>}
      {variant === 'admin-knowledge-settings' && <><h3>After an article’s review date passes</h3>{['Move the article to draft','Keep the article published'].map(item => <label className={styles.choice} key={item}><input type="radio" name="expiry" checked={expiry===item} onChange={() => setExpiry(item)} />{item}</label>)}<div className={styles.footer}>{button('Cancel')}{button('Save',true)}</div></>}
      {variant === 'admin-agents' && <><div className={styles.toolbar}><input aria-label="Search agents" placeholder="Search agents" />{button('New Agent',true)}</div><div className={styles.card}><h3>Agents</h3>{['Morgan Lee','Alex Rivera'].map(name => <div className={styles.day} key={name}><span>{name}</span>{button('View agent')}</div>)}</div></>}
      {variant === 'admin-agent-groups' && <><div className={styles.toolbar}><input aria-label="Search groups" placeholder="Search groups" />{button('New Group',true)}</div><div className={styles.grid}>{['Service Desk','Infrastructure'].map(name => <article className={styles.card} key={name}><h3>{name}</h3><p>Fictional sample group</p>{button('View group')}</article>)}</div></>}
      {variant === 'admin-email-notifications' && <><p>Email notifications are grouped by recipient and event. This fixture does not toggle provider settings.</p>{['Requester Notification','Agent Notification','CC/Share Notifications'].map(group => <div className={styles.card} key={group}><h3>{group}</h3>{(group === 'Requester Notification' ? ['Agent closes the Ticket','Agent solves the Ticket'] : group === 'Agent Notification' ? ['Requester replies to Ticket','Ticket assigned to Agent'] : ['Post-Incident Report shared','Note added to Ticket']).map(item => <div className={styles.day} key={item}><span>{item}</span><span className={styles.pill}>Observed switch</span></div>)}</div>)}</>}
      {variant === 'admin-portals' && <><div className={styles.toolbar}><input aria-label="Search portals" placeholder="Search portals" />{button('Create portal',true)}</div><article className={styles.card}><h3>Support portal</h3><p>Fictional local portal</p>{button('View portal')}</article></>}
      {variant === 'knowledge-category' && <><div className={styles.toolbar}><input aria-label="Search category" placeholder="Search Default Category" />{button('Filter')}</div><p className={styles.empty}>No articles in category</p>{button('Create article',true)}</>}
      {variant === 'knowledge-category-filter' && <div className={styles.dialog} role="dialog" aria-label="Filter"><h3>Filter</h3><fieldset><legend>Article status</legend>{statusOptions.map(item => <label className={styles.choice} key={item}><input type="checkbox" checked={status.includes(item)} onChange={() => toggle(item,status,setStatus)} />{item}</label>)}</fieldset><label>Article review date status<select value={review} onChange={e => setReview(e.target.value)}>{reviewOptions.map(item => <option key={item}>{item}</option>)}</select></label><div className={styles.footer}>{button('Cancel')}{button('Apply',true)}</div></div>}
      {variant === 'knowledge-folder' && <><div className={styles.toolbar}><input aria-label="Search folder" placeholder="Search Drafts" />{button('More options')}{button('Filter')}</div><p>Folder 0 · Articles 0 · Visible to All · Managed by All Groups</p><p className={styles.empty}>No articles in folder</p>{button('View on Portal')}</>}
      {variant === 'knowledge-trash' && <><p>Items in Trash are automatically deleted after 6 months.</p>{tabs(['Articles','Folders','Categories'],trashTab,setTrashTab)}<p className={styles.empty}>No {trashTab.toLowerCase()} in Trash</p></>}
      {variant === 'knowledge-topics' && <><span className={styles.pill}>Beta</span><h3>Unassigned topics 0</h3><p className={styles.empty}>Analyzing service desk data</p><p>Check back soon for GenAI topic recommendations.</p></>}
      {variant === 'knowledge-import' && <div className={styles.dialog} role="dialog" aria-label="Import articles"><h3>Import articles from documents or a CSV file</h3><div className={styles.drop}>Attach or drop files here<br /><small>.docx, .txt, .xml, .csv, .xlsx</small></div><div className={styles.footer}>{button('Cancel')}<button disabled>Import</button></div></div>}
    </main><div className={styles.notice} role="status">{notice}</div>
  </section>;
}
