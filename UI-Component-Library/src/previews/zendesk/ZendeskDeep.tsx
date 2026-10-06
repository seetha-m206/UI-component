import { useState } from 'react';
import './zendesk-deep.css';

export type DeepKind =
  | 'global-search'
  | 'ticket-actions'
  | 'conversation-filter'
  | 'ticket-events'
  | 'ticket-resources'
  | 'approval-request'
  | 'notifications'
  | 'auto-assist'
  | 'admin-macro-list'
  | 'admin-macro-editor';
export interface DeepProps {
  kind?: DeepKind;
  initialOpen?: boolean;
  empty?: boolean;
  disabled?: boolean;
}
const safe = (message: string, update: (value: string) => void) =>
  update(`${message} is shown for reference. No provider request or saved change.`);

export function ZendeskDeepPreview({
  kind = 'global-search',
  initialOpen = false,
  empty = false,
  disabled = false,
}: DeepProps) {
  const [open, setOpen] = useState(initialOpen);
  const [query, setQuery] = useState('');
  const [facet, setFacet] = useState('');
  const [status, setStatus] = useState('');
  const [menu, setMenu] = useState('');
  const [filter, setFilter] = useState('All');
  const [rail, setRail] = useState('Related tickets');
  const [form, setForm] = useState(kind === 'approval-request' && initialOpen);
  const [draft, setDraft] = useState(kind === 'admin-macro-editor' && empty);
  const [warn, setWarn] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [name, setName] = useState(empty ? '' : 'Follow up after no response');
  const [description, setDescription] = useState('');
  const [availability, setAvailability] = useState('All agents');
  const [actions, setActions] = useState<string[]>(
    kind === 'admin-macro-editor' && !empty ? ['Status category', 'Comment/description'] : []
  );
  const [notice, setNotice] = useState('');
  const button = (label: string, action: () => void, active = false) => (
    <button key={label} type="button" aria-pressed={active || undefined} onClick={action}>
      {label}
    </button>
  );
  const actionTypes = [
    'Set subject',
    'Comment/description',
    'Status category',
    'Ticket form',
    'Set tags',
    'Add tags',
    'Remove tags',
    'Add follower',
    'Comment mode',
    'Ticket status',
    'Topic confidence',
    'Sentiment confidence',
    'Pause messaging reminders',
  ];
  let body;
  switch (kind) {
    case 'global-search':
      body = (
        <div className="zd-search">
          <header>{button('Search support', () => setOpen(true))}</header>
          {open && (
            <div className="zd-dialog" role="dialog" aria-label="Search support">
              <div className="zd-row">
                <input
                  aria-label="Search support"
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search support"
                />
                {button('Close search', () => setOpen(false))}
              </div>
              <div className="zd-row">
                {['Tickets', 'Articles', 'Users', 'Organizations', 'Side Conversations'].map((x) =>
                  button(x, () => setFacet(facet === x ? '' : x), facet === x)
                )}
              </div>
              {facet === 'Tickets' && (
                <div className="zd-row">
                  {['Assignee', 'Status', 'Support type', 'Updated'].map((x) =>
                    button(x, () => setMenu(menu === x ? '' : x), menu === x)
                  )}
                </div>
              )}
              {menu === 'Status' && (
                <div role="menu" className="zd-menu">
                  {['New', 'Open', 'In Progress', 'Pending', 'On-hold', 'Solved'].map((x) => (
                    <button
                      role="menuitem"
                      key={x}
                      onClick={() => {
                        setStatus(x);
                        setMenu('');
                      }}
                    >
                      {x}
                    </button>
                  ))}
                </div>
              )}
              {status && (
                <p className="zd-chip">
                  Status: {status} {button('Clear status', () => setStatus(''))}
                </p>
              )}
              <h3>{query ? 'Tickets' : 'Recently viewed'}</h3>
              <p>
                Help with a team subscription <span className="zd-muted">· fictional ticket</span>
              </p>
              {query && !facet && (
                <>
                  <h3>Articles</h3>
                  <p>About our service</p>
                </>
              )}
              <p className="zd-muted">All search results</p>
            </div>
          )}
        </div>
      );
      break;
    case 'ticket-actions':
      body = (
        <>
          <div className="zd-row">
            {button('Ticket Actions', () => setOpen(!open))}
            {button('Conversation filter', () => setMenu(menu === 'filter' ? '' : 'filter'))}
            {button('Events', () => setMenu(menu === 'events' ? '' : 'events'))}
          </div>
          {open && (
            <div role="menu" className="zd-menu">
              {[
                'Create as macro',
                'Merge into another ticket',
                'Print ticket',
                'Suspend user',
                'Mark as spam',
                'Delete',
              ].map((x) => (
                <button role="menuitem" key={x} onClick={() => safe(x, setNotice)}>
                  {x}
                </button>
              ))}
            </div>
          )}
          {menu === 'filter' && <p>All · Public messages · Internal notes</p>}
          {menu === 'events' && (
            <p>Ticket events show field and notification activity in a separate view.</p>
          )}
        </>
      );
      break;
    case 'conversation-filter':
      body = (
        <>
          <div className="zd-row">{button(`Filter: ${filter}`, () => setOpen(!open))}</div>
          {open && (
            <div role="menu" className="zd-menu">
              {['All', 'Public messages', 'Internal notes'].map((x) => (
                <button
                  role="menuitemradio"
                  aria-checked={filter === x}
                  key={x}
                  onClick={() => {
                    setFilter(x);
                    setOpen(false);
                  }}
                >
                  {x}
                </button>
              ))}
            </div>
          )}
          {filter === 'Internal notes' ? (
            <div className="zd-empty">
              No internal notes in sight. When an internal note is created, you’ll see it here.{' '}
              {button('Clear filter', () => setFilter('All'))}
            </div>
          ) : (
            <div className="zd-card">
              <strong>Alex Morgan</strong>
              <p>Please help with our team subscription.</p>
            </div>
          )}
        </>
      );
      break;
    case 'ticket-events':
      body = (
        <>
          <h2>Ticket events</h2>
          <div className="zd-card">
            <strong>Today · 10:42 AM</strong>
            <p>Ticket created · Status Open</p>
          </div>
          <div className="zd-card">
            <strong>Today · 10:43 AM</strong>
            <p>Notification sent · Status Pending</p>
          </div>
          <div className="zd-row">
            {button('Conversation', () => setMenu('conversation'))}
            {button('Events', () => setMenu('events'), true)}
          </div>
        </>
      );
      break;
    case 'ticket-resources':
      body = (
        <div className="zd-rail">
          <div className="zd-row">
            {['Related tickets', 'Side conversations', 'Approval request', 'Tasks', 'Apps'].map(
              (x) => button(x, () => setRail(x), rail === x)
            )}
          </div>
          <h2>{rail}</h2>
          {rail === 'Related tickets' ? (
            <>
              <h3>Merge suggestions</h3>
              <p>No suggestions available</p>
              <h3>Similar resolved tickets</h3>
              <p>No suggestions available</p>
            </>
          ) : rail === 'Side conversations' ? (
            <div className="zd-empty">
              There’s nothing to see here yet. When side conversations are created, you’ll see them
              here.
            </div>
          ) : rail === 'Approval request' ? (
            <>
              <p>No approval requests yet</p>
              {button('Create approval request', () => setForm(true))}
              {form && (
                <div className="zd-card">
                  <label>
                    Approver
                    <input />
                  </label>
                  <label>
                    Subject
                    <input />
                  </label>
                  <label>
                    Description
                    <textarea />
                  </label>
                  {button('Cancel', () => setForm(false))}
                  {button('Send approval request', () => safe('Approval request', setNotice))}
                </div>
              )}
            </>
          ) : rail === 'Tasks' ? (
            <>
              <p>No task list yet. Add a task list to keep track of work.</p>
              {button('Add task list', () => setMenu('tasks'))}
              {menu === 'tasks' && (
                <div className="zd-card">
                  No task lists available to add. Admins can manage setup and access.{' '}
                  {button('Create custom task list', () => safe('Custom task list', setNotice))}
                </div>
              )}
            </>
          ) : (
            <p>Suggested marketplace apps · Browse apps</p>
          )}
        </div>
      );
      break;
    case 'approval-request':
      body = (
        <>
          <h2>Approval request</h2>
          <p>No approval requests yet</p>
          {button('Create approval request', () => setForm(true))}
          {form && (
            <div className="zd-card">
              <label>
                Approver
                <input />
              </label>
              <label>
                Subject
                <input />
              </label>
              <label>
                Description
                <textarea />
              </label>
              <div className="zd-row">
                {button('Cancel', () => setForm(false))}
                {button('Send approval request', () => safe('Approval request', setNotice))}
              </div>
            </div>
          )}
        </>
      );
      break;
    case 'notifications':
      body = (
        <>
          <div className="zd-row">{button('Notifications', () => setOpen(!open))}</div>
          {open && (
            <aside className="zd-drawer">
              <h2>Notifications</h2>
              <div className="zd-row">
                {button('Notification settings', () => safe('Notification settings', setNotice))}
                {button('Mute notifications', () => setMenu(menu === 'mute' ? '' : 'mute'))}
              </div>
              {menu === 'mute' && (
                <div role="menu" className="zd-menu">
                  {['For 30 minutes', 'For 1 hour', 'For 2 hours', 'Until tomorrow'].map((x) => (
                    <button role="menuitem" key={x} onClick={() => safe(`Mute ${x}`, setNotice)}>
                      {x}
                    </button>
                  ))}
                </div>
              )}
              <div className="zd-empty">No notifications from past 30 days</div>
            </aside>
          )}
        </>
      );
      break;
    case 'auto-assist':
      body = (
        <>
          <h2>Auto assist</h2>
          <div className="zd-row">
            {['All', 'Status', 'Channel', 'Sort'].map((x) =>
              button(x, () => setMenu(menu === x ? '' : x))
            )}
          </div>
          <div className="zd-empty">
            <strong>No auto assist work</strong>
            <p>Work with auto assist will appear here.</p>
          </div>
        </>
      );
      break;
    case 'admin-macro-list':
      body = (
        <>
          <div className="zd-breadcrumb">Workspaces / Agent tools / Macros</div>
          <div className="zd-row zd-between">
            <h2>Macros</h2>
            {button('Create macro', () => setMenu('create'))}
          </div>
          <p>
            A macro is a prepared response or action that agents use to respond to common support
            requests.
          </p>
          <div className="zd-row">
            {button('Actions', () => setMenu(menu === 'actions' ? '' : 'actions'))}
            <input
              aria-label="Search macros"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search macros"
            />
            {button('Filter', () => setMenu(menu === 'filter' ? '' : 'filter'))}
          </div>
          {menu === 'actions' && <div className="zd-menu">Manage settings</div>}
          {menu === 'filter' && (
            <div className="zd-drawer">
              <h3>Filter</h3>
              <label>
                Status
                <select>
                  <option>Active</option>
                  <option>All statuses</option>
                  <option>Inactive</option>
                </select>
              </label>
              <label>
                Available for
                <select>
                  <option>All shared macros</option>
                  <option>All agents</option>
                  <option>You</option>
                  <option>Individual agents</option>
                </select>
              </label>
              {button('Cancel', () => setMenu(''))}
              {button('Apply filters', () => {
                setMenu('');
                setNotice('Local filter state applied.');
              })}{' '}
            </div>
          )}
          {menu === 'create' && (
            <div className="zd-card">
              <strong>Add new macro</strong>
              <ZendeskDeepPreview kind="admin-macro-editor" empty />
              {button('Close', () => setMenu(''))}
            </div>
          )}
          <p className="zd-chip">Status Active</p>
          <p>2 active macros</p>
          <div className="zd-table">
            <div className="zd-row zd-table-head">
              <span>Name</span>
              <span>Date created</span>
              <span>Last updated</span>
              <span>Available for</span>
              <span>Usage (last 7 days)</span>
              {button('Show and hide columns', () => setOpen(!open))}
            </div>
            {open && (
              <div className="zd-card">
                {[
                  'Date created',
                  'Last updated',
                  'Available for',
                  'Sort by usage (1h)',
                  'Sort by usage (24h)',
                  'Sort by usage (7d)',
                  'Sort by usage (30d)',
                ].map((x) => (
                  <label key={x}>
                    <input
                      type="checkbox"
                      defaultChecked={[
                        'Date created',
                        'Last updated',
                        'Available for',
                        'Sort by usage (7d)',
                      ].includes(x)}
                    />
                    {x}
                  </label>
                ))}
              </div>
            )}
            {['Follow up after no response', 'Plan change follow up']
              .filter((x) => x.toLowerCase().includes(query.toLowerCase()))
              .map((x) => (
                <div className="zd-row zd-table-row" key={x}>
                  <strong>{x}</strong>
                  <span>Oct 5, 2026</span>
                  <span>Oct 5, 2026</span>
                  <span>All agents</span>
                  <span>0</span>
                </div>
              ))}
          </div>
        </>
      );
      break;
    case 'admin-macro-editor':
      body = (
        <>
          <div className="zd-breadcrumb">
            Workspaces / Agent tools / Macros / {draft ? 'Add new macro' : name}
          </div>
          <div className="zd-row zd-between">
            <h2>{draft ? 'Add new macro' : name}</h2>
            {!draft &&
              button('Actions', () => setMenu(menu === 'editor-actions' ? '' : 'editor-actions'))}
          </div>
          {menu === 'editor-actions' && (
            <div role="menu" className="zd-menu">
              {['Clone', 'Deactivate', 'Delete'].map((x) => (
                <button
                  role="menuitem"
                  key={x}
                  disabled={x === 'Delete'}
                  onClick={() => safe(x, setNotice)}
                >
                  {x}
                </button>
              ))}
            </div>
          )}
          {button(draft ? 'View existing macro' : 'Preview new macro', () => {
            setDraft(!draft);
            setDirty(false);
            setName(draft ? 'Follow up after no response' : '');
            setActions(draft ? ['Status category', 'Comment/description'] : []);
          })}
          <div className="zd-form">
            <label>
              Macro name*
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setDirty(true);
                }}
              />
            </label>
            <label>
              Description
              <textarea
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                  setDirty(true);
                }}
              />
            </label>
            <label>
              Available for
              <select
                value={availability}
                onChange={(e) => {
                  setAvailability(e.target.value);
                  setDirty(true);
                }}
              >
                <option>All agents</option>
                <option>Me only</option>
                <option>Agents in group</option>
              </select>
            </label>
            <h3>Actions</h3>
            <p>Add actions to add a comment to the ticket or update the ticket’s field values.</p>
            {actions.map((x, i) => (
              <div className="zd-card" key={i}>
                <div className="zd-row">
                  <select
                    aria-label={`Action ${i + 1} type`}
                    value={x}
                    onChange={(e) => {
                      setActions(actions.map((a, j) => (j === i ? e.target.value : a)));
                      setDirty(true);
                    }}
                  >
                    {actionTypes.map((a) => (
                      <option key={a}>{a}</option>
                    ))}
                  </select>
                  {button(`Remove action ${i + 1}`, () => {
                    setActions(actions.filter((_, j) => j !== i));
                    setDirty(true);
                  })}
                </div>
                {x === 'Comment/description' ? (
                  <textarea
                    aria-label="Comment text"
                    defaultValue="Hello, please let us know if you need more help."
                  />
                ) : x === 'Status category' ? (
                  <select aria-label="Status category">
                    <option>Pending</option>
                    <option>Open</option>
                    <option>Solved</option>
                  </select>
                ) : (
                  <input aria-label={`${x} value`} />
                )}
              </div>
            ))}
            {button('Add action', () => {
              setActions([...actions, 'Status category']);
              setDirty(true);
            })}
            <div className="zd-row">
              {button('Cancel', () => setWarn(true))}
              <button
                disabled={!name || !actions.length || (!draft && !dirty)}
                onClick={() => safe(draft ? 'Create macro' : 'Save macro', setNotice)}
              >
                {draft ? 'Create' : 'Save'}
              </button>
            </div>
          </div>
          {warn && (
            <div className="zd-modal" role="dialog" aria-label="Unsaved changes">
              <h3>Unsaved changes</h3>
              <p>All unsaved changes will be lost. Are you sure you want to continue?</p>
              {button('No, keep me here', () => setWarn(false))}
              {button('Yes, discard changes', () => {
                setWarn(false);
                setDraft(false);
                setDirty(false);
                setName('Follow up after no response');
                setActions(['Status category', 'Comment/description']);
              })}
            </div>
          )}
        </>
      );
      break;
  }
  return (
    <section className="zd-deep" data-zendesk-deep={kind}>
      <div className="zd-flag">
        Zendesk reference · observed structure · fictional data · local actions
      </div>
      <fieldset disabled={disabled}>{body}</fieldset>
      {notice && (
        <div role="status" className="zd-notice">
          {notice} {button('Dismiss notice', () => setNotice(''))}
        </div>
      )}
    </section>
  );
}
