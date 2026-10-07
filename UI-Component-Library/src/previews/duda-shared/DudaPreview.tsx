import { useId, useRef, useState } from 'react';
import { dudaDefinitions } from './catalogue';
import styles from './duda.module.css';

export interface DudaPreviewProps {
  componentId: string;
  initialState?: string;
  disabled?: boolean;
}
export function DudaPreview({
  componentId,
  initialState = 'default',
  disabled = false,
}: DudaPreviewProps) {
  const def = dudaDefinitions.find((d) => d.id === componentId);
  const prefix = useId();
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(initialState !== 'closed');
  const [query, setQuery] = useState(
    initialState === 'empty' ||
      (componentId === 'duda-widget-search-empty' && initialState === 'default')
      ? 'zz-research-no-match'
      : ''
  );
  const [selected, setSelected] = useState(
    initialState === 'editor'
      ? 'Editor Toolbar Preview'
      : initialState === 'tracking'
        ? 'Tracking'
        : initialState === 'empty' && def?.kind === 'seo'
          ? 'Needs Attention (0)'
          : ''
  );
  const [dynamicStep, setDynamicStep] = useState(initialState);
  const [dynamicCollection, setDynamicCollection] = useState(
    initialState === 'plan-gate' ? 'Blank Collection' : 'Maple Research Services'
  );
  const [dynamicItem, setDynamicItem] = useState(
    initialState === 'first-row' ? '1' : 'maple-inspection'
  );
  const [dynamicField, setDynamicField] = useState(
    initialState === 'number-bound' ? 'Research count' : 'Service label'
  );
  const [dynamicBound, setDynamicBound] = useState(
    initialState === 'bound' || initialState === 'first-row' || initialState === 'number-bound'
  );
  const [message, setMessage] = useState('');
  const [error, setError] = useState(
    initialState === 'validation'
      ? 'Local validation: a name is required.'
      : initialState === 'field-error'
        ? 'Observed failed update: HTTP 400. Field 2 remains unchanged.'
        : ''
  );
  const [name, setName] = useState(
    initialState === 'validation'
      ? ''
      : def?.kind === 'dynamic'
        ? 'Blank Page'
        : def?.kind === 'collection'
          ? 'Maple Research Services'
          : 'Maple Studio Research'
  );
  const [rows, setRows] = useState([
    { id: '1', value: '' },
    {
      id:
        initialState === 'duplicate-item'
          ? '1'
          : initialState === 'empty-item'
            ? ''
            : 'maple-inspection',
      value: 'Fictional roof inspection',
    },
  ]);
  const [field, setField] = useState(initialState === 'field-error' ? 'Field 2' : 'Service label');
  const [numberValue, setNumberValue] = useState(
    initialState === 'number-decimal' ? '-1.5' : initialState === 'number-step' ? '-0.5' : ''
  );
  const [rowOpen, setRowOpen] = useState(
    initialState.startsWith('number-') ||
      initialState === 'row-open' ||
      initialState === 'duplicate-item' ||
      initialState === 'empty-item' ||
      (componentId === 'duda-collection-row-editor' && initialState === 'default')
  );
  const [fieldOpen, setFieldOpen] = useState(false);
  const [draftField, setDraftField] = useState('Field 2');
  const [fieldType, setFieldType] = useState('Plain Text');
  const [checks, setChecks] = useState<Record<string, boolean>>({
    Blog: true,
    'AI Assistant': true,
    Copilot: true,
    'Indexed only': true,
    'Keep comments visible': true,
    'Clients & Team': true,
    'Custom Assets': true,
    'White Label': true,
    'Business Tools': true,
    English: true,
    French: true,
    Spanish: true,
  });
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [device, setDevice] = useState(
    initialState === 'mobile'
      ? 'Mobile'
      : componentId === 'duda-responsive-template-preview'
        ? 'All devices'
        : 'Desktop'
  );
  const [color, setColor] = useState('#f37a1f');
  const [width, setWidth] = useState(initialState === 'mobile' ? 413 : 1105);
  const [post, setPost] = useState('');
  const [comments, setComments] = useState<string[]>([]);
  if (!def) return <p role="alert">Unknown Duda fixture.</p>;
  const blocked = disabled || initialState === 'disabled';
  const labels = def.controls;
  const simulate = (label: string) => {
    setSelected(label);
    setMessage(`${label}: local simulation only. No Duda request.`);
  };
  const button = (label: string, action = () => simulate(label), extraDisabled = false) => (
    <button type="button" key={label} disabled={blocked || extraDisabled} onClick={action}>
      {label}
    </button>
  );
  const choice = (items: string[]) => (
    <div className={styles.tabs} role="tablist" aria-label={`${def.title} sections`}>
      {items.map((label) => (
        <button
          type="button"
          role="tab"
          aria-selected={(selected || items[0]) === label}
          key={label}
          disabled={blocked}
          onClick={() => setSelected(label)}
        >
          {label}
        </button>
      ))}
    </div>
  );
  const search = (label: string) => (
    <div className={styles.search}>
      <label htmlFor={`${prefix}-query`}>{label}</label>
      <input
        id={`${prefix}-query`}
        value={query}
        disabled={blocked}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={label}
      />
      {query && button('Clear', () => setQuery(''))}
    </div>
  );
  const toggle = (label: string, readOnly = false) => (
    <label className={styles.toggle} key={label}>
      <span>{label}</span>
      <input
        type="checkbox"
        checked={!!checks[label]}
        disabled={blocked || readOnly}
        onChange={(e) => setChecks({ ...checks, [label]: e.target.checked })}
      />
    </label>
  );
  const localSave = (label: string) => {
    if (!name.trim()) setError('Local validation: a name is required.');
    else {
      setError('');
      simulate(label);
    }
  };
  const modal = (title: string, content: React.ReactNode, close: () => void) => (
    <div
      className={styles.modal}
      role="dialog"
      aria-label={title}
      aria-modal="false"
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          close();
          trigger.current?.focus();
        }
      }}
    >
      <header>
        <h3>{title}</h3>
        {button('Close', close)}
      </header>
      {content}
    </div>
  );
  let content: React.ReactNode;
  switch (def.kind) {
    case 'dynamic':
      content =
        dynamicStep === 'default' || dynamicStep === 'disabled' ? (
          <>
            <h3>Add Page</h3>
            <p>Start with a preset page or create your own</p>
            {choice(['Blank Page', 'Real Estate', 'Team Member', 'Single Service'])}
            {button('Next', () => setDynamicStep('general'))}
          </>
        ) : dynamicStep === 'general' || dynamicStep === 'plan-gate' ? (
          <>
            <h3>General settings</h3>
            <p>
              Design a page once and use it to create multiple pages based on your content
              collection.
            </p>
            <label>
              Page Name
              <input value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
              Connect to a collection
              <select
                value={dynamicCollection}
                onChange={(e) => setDynamicCollection(e.target.value)}
              >
                <option>Blank Collection</option>
                <option>Maple Research Services</option>
              </select>
            </label>
            {dynamicCollection === 'Blank Collection' && (
              <p>You’ve used the Internal Collection for this site. Upgrade</p>
            )}
            {button('Back', () => setDynamicStep('default'))}
            {button(
              'Add Page',
              () => setDynamicStep('options'),
              dynamicCollection === 'Blank Collection'
            )}
          </>
        ) : (
          <>
            <h3>Dynamic Page</h3>
            <label>
              Item
              <select value={dynamicItem} onChange={(e) => setDynamicItem(e.target.value)}>
                <option value="1">1</option>
                <option value="maple-inspection">maple-inspection</option>
              </select>
            </label>
            {dynamicBound ? (
              <div aria-label="Bound text">
                {dynamicItem === 'maple-inspection'
                  ? dynamicField === 'Service label'
                    ? 'Fictional roof inspection'
                    : dynamicField === 'Research count'
                      ? '3'
                      : ''
                  : ''}
              </div>
            ) : (
              <p>Add your company slogan</p>
            )}
            {button('Connect to Data', () => setDynamicStep('options'))}
            {dynamicStep === 'options' && (
              <div role="dialog" aria-label="Text Block">
                <p>Connect Text to</p>
                <label>
                  Collection field
                  <select value={dynamicField} onChange={(e) => setDynamicField(e.target.value)}>
                    <option>Service label</option>
                    <option>New field</option>
                    <option>Research count</option>
                  </select>
                </label>
                {button('Cancel', () => setDynamicStep('bound'))}
                {button('Connect', () => {
                  setDynamicBound(true);
                  setDynamicStep('bound');
                })}
              </div>
            )}
            <p>
              Local fixture only. Source binding was verified after provider reload and item
              reselection. Reloading this fixture resets its React state.
            </p>
          </>
        );
      break;
    case 'menu':
    case 'category':
      content = (
        <>
          <button
            ref={trigger}
            type="button"
            disabled={blocked}
            aria-expanded={open}
            aria-haspopup="menu"
            onClick={() => setOpen(!open)}
          >
            {selected || def.title.replace(/^Duda /, '')} ▾
          </button>
          {open && (
            <div
              role="menu"
              className={styles.menu}
              onKeyDown={(e) => {
                if (e.key === 'Escape') {
                  setOpen(false);
                  trigger.current?.focus();
                }
              }}
              aria-label={def.title}
            >
              {labels.map((label) => (
                <button
                  type="button"
                  role="menuitem"
                  key={label}
                  disabled={blocked}
                  onClick={() => {
                    simulate(label);
                    setOpen(false);
                    trigger.current?.focus();
                  }}
                >
                  {label}
                  <small>
                    {/Delete|Reset|Transfer|Install|Invite|Publish/.test(label)
                      ? 'Outcome not observed · local simulation'
                      : 'Open local selection'}
                  </small>
                </button>
              ))}
            </div>
          )}
        </>
      );
      break;
    case 'shell':
    case 'editor':
      content = (
        <div className={styles.shell}>
          <nav aria-label="Workspace">{labels.map((l) => button(l))}</nav>
          <main>
            <div className={styles.toolbar}>
              <b>Maple Studio</b>
              <span>Unpublished</span>
              {def.kind === 'editor' && (
                <>
                  {button('Preview')}
                  {button('Publish')}
                </>
              )}
            </div>
            {selected ? (
              <h3>{selected}</h3>
            ) : (
              <h3>{def.kind === 'editor' ? 'Fictional site canvas' : 'Your Projects'}</h3>
            )}
            <div className={styles.canvas}>
              <h2>Maple Studio</h2>
              <p>Fictional design research</p>
              {button('Explore site')}
            </div>
          </main>
        </div>
      );
      break;
    case 'banner':
      content = (
        <div className={styles.banner}>
          <span>
            Your free trial ends in <b>14 days</b>
          </span>
          {button('Choose a Plan')}
        </div>
      );
      break;
    case 'progress':
      content = (
        <div className={styles.empty}>
          <progress aria-label="Creating your new project" />
          <h3>Creating your new project...</h3>
          <p>No project is created by this local preview.</p>
        </div>
      );
      break;
    case 'empty':
      content = (
        <div className={styles.empty}>
          <span className={styles.symbol}>◇</span>
          <h3>
            {componentId.includes('favorites')
              ? 'No favorites marked yet'
              : componentId.includes('popup')
                ? 'No popups yet'
                : 'Create your first custom section'}
          </h3>
          <p>
            {componentId.includes('favorites')
              ? 'Mark templates with a heart to find them here.'
              : 'Fictional empty library. No provider data.'}
          </p>
          {labels.map((l) => button(l))}
        </div>
      );
      break;
    case 'nav':
      content = (
        <div className={styles.split}>
          <nav aria-label={def.title}>{labels.map((l) => button(l))}</nav>
          <section>
            <h3>{selected || labels[0]}</h3>
            <p>Selected panel reconstructed locally.</p>
            {componentId.includes('settings') && (
              <>
                <label>
                  Favicon
                  <input
                    type="file"
                    disabled={blocked}
                    onChange={() => simulate('Favicon selection')}
                  />
                </label>
                <p>Local file selection only. No upload.</p>
              </>
            )}
          </section>
        </div>
      );
      break;
    case 'checklist':
      content = (
        <>
          <h3>Jumpstart your site</h3>
          <progress
            value={labels.filter((label) => checks[label]).length}
            max={labels.length}
            aria-label="Local checklist completion"
          />
          {labels.map((l) => toggle(l))}
          <h3>How-to tutorials</h3>
          <p>Captivating cards · 05:33</p>
          <p>Hero section with two buttons · 03:35</p>
        </>
      );
      break;
    case 'tree':
      content = (
        <>
          <div className={styles.toolbar}>
            {button(Object.values(expanded).some(Boolean) ? 'Collapse All' : 'Expand All', () =>
              setExpanded(
                Object.fromEntries(labels.map((l) => [l, !Object.values(expanded).some(Boolean)]))
              )
            )}
          </div>
          {labels.map((l) => (
            <div className={styles.row} key={l}>
              <button
                type="button"
                aria-expanded={!!expanded[l]}
                disabled={blocked}
                onClick={() => setExpanded({ ...expanded, [l]: !expanded[l] })}
              >
                {expanded[l] ? '▾' : '▸'} {l}
              </button>
              {expanded[l] && (
                <p className={styles.indent}>RECONSTRUCTION · fictional child layer</p>
              )}
            </div>
          ))}
        </>
      );
      break;
    case 'pages':
      content = (
        <>
          {choice(['Pages', 'Popups'])}
          {(selected || 'Pages') === 'Popups' ? (
            <div className={styles.empty}>
              {button('New Popup')}
              <p>No popups</p>
            </div>
          ) : (
            <>
              {button('Add Page', () => setOpen(!open))}
              {open && (
                <div className={styles.toolbar}>
                  {['Blank Page', 'Dynamic Page', 'Page URL'].map((l) => button(l))}
                </div>
              )}
              {labels.map((l) => (
                <div key={l} className={styles.row}>
                  {button(l)}
                  {button(`Actions for ${l}`, () => setSelected(`Actions: ${l}`))}
                </div>
              ))}
              {selected.startsWith('Actions:') && (
                <div className={styles.menu}>
                  {['Rename', 'Duplicate', 'Page URL', 'Edit Page SEO', 'Delete'].map((l) =>
                    button(l)
                  )}
                </div>
              )}
            </>
          )}
        </>
      );
      break;
    case 'dialog':
      content = modal(
        componentId.includes('rename') ? 'Add / Rename Page' : 'Build Your Site',
        <>
          <label>
            {labels[0]}
            <input disabled={blocked} value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          {labels.slice(1).map((l) => button(l, () => localSave(l)))}
        </>,
        () => setOpen(false)
      );
      if (!open) content = button('Open dialog', () => setOpen(true));
      break;
    case 'form':
      content = componentId.includes('content-collection') ? (
        <>
          <h3>Default Content Collection Form</h3>
          <p>1 of 5 · Fictional input</p>
          <label>
            Business or brand name
            <input value={name} disabled={blocked} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Business description
            <textarea disabled={blocked} />
          </label>
          {button('Next', () => localSave('Next step'))}
        </>
      ) : (
        <>
          {choice(['Form Items', 'Submission', 'Integrations'])}
          {(selected || 'Form Items') === 'Form Items' ? (
            <>
              <div className={styles.row}>
                {['Name', 'Phone', 'Select Service'].map((l) =>
                  button(l, () => setSelected(`Field: ${l}`))
                )}
              </div>
              {button('Add field', () => setSelected('Field: New field'))}
              <label>
                Form Button
                <input defaultValue="Get an estimate" disabled={blocked} />
              </label>
              <fieldset>
                <legend>reCAPTCHA position</legend>
                {[
                  'Bottom left icon',
                  'Bottom right icon',
                  'Inline icon',
                  'Inline text',
                  'Inline checkbox',
                ].map((l) => (
                  <label key={l}>
                    <input
                      type="radio"
                      name={prefix}
                      disabled={blocked}
                      defaultChecked={l === 'Bottom left icon'}
                    />
                    {l}
                  </label>
                ))}
              </fieldset>
              <label>
                Form title
                <input value="Contact Us" disabled readOnly />
              </label>
            </>
          ) : selected.startsWith('Field:') ? (
            <>
              <label>
                Field label
                <input defaultValue={selected.slice(7)} disabled={blocked} />
              </label>
              <label>
                Field type
                <select disabled={blocked}>
                  <option>Text</option>
                  <option>Phone</option>
                  <option>Dropdown</option>
                </select>
              </label>
              <label>
                Placeholder
                <input disabled={blocked} />
              </label>
              {toggle('Required field')}
              {toggle('Start new line at this field')}
              <label>
                Field size
                <input type="range" min="1" max="12" defaultValue="12" disabled={blocked} />
              </label>
            </>
          ) : (
            <p>
              {selected}: see dedicated submission / integration preview. No visitor submission.
            </p>
          )}
        </>
      );
      break;
    case 'submission':
      content = (
        <>
          {choice(['Form Items', 'Submission', 'Integrations'])}
          <div className={styles.toolbar}>{labels.map((l) => button(l, () => setSelected(l)))}</div>
          {selected === 'Tracking' ? (
            <label>
              Form conversion code
              <textarea disabled={blocked} placeholder="Paste conversion code here" />
            </label>
          ) : selected === 'New submission notification' ? (
            <p>Notification delivery not observed. No recipients copied.</p>
          ) : (
            <>
              <label>
                Thank you message
                <textarea
                  disabled={blocked}
                  defaultValue="Thank you for contacting us. We will get back to you as soon as possible."
                />
              </label>
              <label>
                Error message
                <textarea
                  disabled={blocked}
                  defaultValue="Oops, there was an error sending your message. Please try again later."
                />
              </label>
              {toggle('Redirect to a page after submission')}
            </>
          )}
        </>
      );
      break;
    case 'integrations':
      content = (
        <>
          <p>Send successful submissions to a third-party service</p>
          <div className={styles.cards}>
            {labels.map((l) => (
              <article key={l}>
                <b>{l}</b>
                {button(`Configure ${l}`)}
              </article>
            ))}
          </div>
        </>
      );
      break;
    case 'design':
      content = (
        <>
          <h3>Contact Form</h3>
          {labels.map((l) => (
            <details key={l}>
              <summary>{l}</summary>
              {l === 'Animation' ? (
                <label>
                  Trigger
                  <select disabled={blocked}>
                    <option>None</option>
                    <option>On entry · reconstructed</option>
                  </select>
                </label>
              ) : (
                <>
                  <label>
                    {l} value
                    <input
                      type={l === 'Spacing' || l === 'Size' ? 'number' : 'text'}
                      defaultValue={
                        l === 'Size'
                          ? '100'
                          : l === 'Spacing'
                            ? '0'
                            : l === 'Button'
                              ? 'Get an estimate'
                              : 'Poppins'
                      }
                      disabled={blocked}
                    />
                  </label>
                  <label>
                    Color
                    <input
                      type="color"
                      value={color}
                      disabled={blocked}
                      onChange={(e) => setColor(e.target.value)}
                    />
                  </label>
                </>
              )}
            </details>
          ))}
          {button('Manage Form')}
        </>
      );
      break;
    case 'workspace':
      content = (
        <>
          {choice(labels.slice(0, 2))}
          <div className={styles.toolbar}>
            Duda · Projects ·{' '}
            {Object.keys(checks)
              .filter((l) => checks[l])
              .join(' · ')}
          </div>
          <h3>{selected || 'Account Toolbar Preview'}</h3>
          {labels.slice(2, 6).map((l) => toggle(l))}
          <fieldset>
            <legend>Workspace languages</legend>
            {labels.slice(6, 9).map((l) => toggle(l, l === 'English'))}
          </fieldset>
          <label>
            Home URL
            <input defaultValue="https://maple.example" disabled={blocked} />
          </label>
          {button('Save All Changes', () => simulate('Settings saved'))}
        </>
      );
      break;
    case 'theme':
      content = (
        <>
          {choice(labels)}
          <h3>{selected || 'Colors'}</h3>
          <div className={styles.swatches}>
            {['#2c393f', '#f37a1f', '#ffffff', '#939393', '#f5f5f5'].map((c) => (
              <button
                key={c}
                aria-label={`Select ${c}`}
                style={{ background: c }}
                disabled={blocked}
                onClick={() => setColor(c)}
              />
            ))}
          </div>
          <label>
            Theme color
            <input
              type="color"
              value={color}
              disabled={blocked}
              onChange={(e) => setColor(e.target.value)}
            />
          </label>
          <div style={{ color }}>
            <h2>Kumbh Sans · Heading</h2>
            <p>Poppins · Paragraph 16</p>
          </div>
          <label>
            Font size
            <input type="number" defaultValue="16" disabled={blocked} />
          </label>
          <p>Local visual change only.</p>
        </>
      );
      break;
    case 'role':
      content = modal(
        'Default role details',
        <>
          <label>
            Role name
            <input value="Blogger" disabled readOnly />
          </label>
          {search('Search permissions')}
          {labels
            .slice(0, -1)
            .filter((l) => l.toLowerCase().includes(query.toLowerCase()))
            .map((l) => toggle(l, true))}
          {button('Cancel', () => setOpen(false))}
          {button('Duplicate Role')}
        </>,
        () => setOpen(false)
      );
      if (!open) content = button('Open role', () => setOpen(true));
      break;
    case 'roles':
      content = (
        <>
          {choice(labels.slice(0, 2))}
          {search('Search roles')}
          {(selected || 'Team members') === 'Roles & permissions' ? (
            ['Admin', 'Blogger', 'Designer', 'Sales', 'Store and Booking Manager']
              .filter((l) => l.toLowerCase().includes(query.toLowerCase()))
              .map((l) => (
                <div className={styles.row} key={l}>
                  {button(l)}
                  <span>Default</span>
                </div>
              ))
          ) : initialState === 'populated' ? (
            <div className={styles.row}>Fictional Maple teammate · Designer</div>
          ) : (
            <div className={styles.empty}>No team members</div>
          )}
          {labels.slice(2).map((l) => button(l))}
        </>
      );
      break;
    case 'access':
      content = (
        <>
          <h3>Add Clients · 0/100</h3>
          {labels.map((l) => button(l))}
          {selected === 'Preview notification email' && (
            <article>
              <h4>Notification preview</h4>
              <p>Fictional preview. No email sent.</p>
            </article>
          )}
          {selected === 'Notified Team Members' && (
            <label>
              Team member
              <select disabled={blocked}>
                <option>No fictional members selected</option>
                <option>Maple Designer</option>
              </select>
            </label>
          )}
        </>
      );
      break;
    case 'comments':
      content = (
        <>
          {choice(labels.slice(0, 2))}
          {toggle('Keep comments visible')}
          <div className={styles.empty}>
            <h3>Start the conversation</h3>
            <p>Click the canvas to add a comment · Shift+C</p>
          </div>
          <label>
            Fictional local comment
            <textarea value={post} disabled={blocked} onChange={(e) => setPost(e.target.value)} />
          </label>
          {button(
            'Add local comment',
            () => {
              setComments([...comments, post]);
              setPost('');
              simulate('Local comment added');
            },
            !post.trim()
          )}
          {comments.map((s, i) => (
            <p key={i}>{s}</p>
          ))}
        </>
      );
      break;
    case 'backup':
      content = (
        <>
          <p>Publication creates backups. Restored versions require republication.</p>
          <label>
            New Version Name
            <input value={name} disabled={blocked} onChange={(e) => setName(e.target.value)} />
          </label>
          {button('Save', () => {
            if (!name.trim()) setError('Local validation: a name is required.');
            else {
              setComments([...comments, name]);
              setError('');
              simulate('Local backup fixture added');
            }
          })}
          <table>
            <thead>
              <tr>
                <th>Version name</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {comments.map((s, i) => (
                <tr key={i}>
                  <td>{s}</td>
                  <td>Fictional date</td>
                </tr>
              ))}
            </tbody>
          </table>
          {!comments.length && <p>No backed-up versions</p>}
        </>
      );
      break;
    case 'sort':
      content = (
        <>
          <fieldset>
            <legend>Sort by</legend>
            {labels.slice(0, 3).map((l) => (
              <label key={l}>
                <input
                  type="radio"
                  name={`${prefix}-sort`}
                  defaultChecked={l === 'Created'}
                  disabled={blocked}
                  onChange={() => simulate(l)}
                />
                {l}
              </label>
            ))}
          </fieldset>
          <fieldset>
            <legend>Order</legend>
            {labels.slice(3, 5).map((l) => (
              <label key={l}>
                <input
                  type="radio"
                  name={`${prefix}-order`}
                  defaultChecked={l === 'Newest'}
                  disabled={blocked}
                  onChange={() => simulate(l)}
                />
                {l}
              </label>
            ))}
          </fieldset>
          {labels.slice(5).map((l) => (
            <label key={l}>
              {l}
              <select disabled={blocked} onChange={() => simulate(l)}>
                <option>All</option>
                <option>Fictional selection</option>
              </select>
            </label>
          ))}
          {button('Save view', () => simulate('View saved'), true)}
          {button('Clear', () => setMessage('Local filter reset'))}
        </>
      );
      break;
    case 'table':
    case 'blog':
      content = (
        <>
          {def.kind === 'blog' && choice(labels.slice(0, 5))}
          {search(
            def.kind === 'blog'
              ? 'Search posts'
              : componentId.includes('responses')
                ? 'Search responses'
                : 'Search projects or clients'
          )}
          <div className={styles.toolbar}>
            {labels.filter((l) => l !== 'Search responses').map((l) => button(l))}
          </div>
          <div className={styles.tableScroll}>
            <table>
              <thead>
                <tr>
                  <th>Select</th>
                  <th>
                    {def.kind === 'blog'
                      ? 'Post'
                      : componentId.includes('client')
                        ? 'Contact details'
                        : 'Name'}
                  </th>
                  <th>Status</th>
                  <th>{def.kind === 'blog' ? 'Date' : 'Subscription'}</th>
                </tr>
              </thead>
              <tbody>
                {!query &&
                  (componentId.includes('populated') ||
                    def.kind === 'blog' ||
                    initialState === 'populated') &&
                  (def.kind === 'blog'
                    ? ['Maple design notes', 'Fictional maintenance guide', 'Roof research']
                    : ['Maple Studio Research']
                  ).map((l) => (
                    <tr key={l}>
                      <td>
                        <input type="checkbox" aria-label={`Select ${l}`} disabled={blocked} />
                      </td>
                      <td>{button(l)}</td>
                      <td>
                        {def.kind === 'blog'
                          ? 'Inherited template badge: Published'
                          : 'Unpublished'}
                      </td>
                      <td>{def.kind === 'blog' ? 'Fictional date' : 'None'}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          {(query ||
            (!componentId.includes('populated') &&
              def.kind !== 'blog' &&
              initialState !== 'populated')) && (
            <div className={styles.empty}>
              {query
                ? 'No matching results'
                : componentId.includes('responses')
                  ? 'Nobody submitted a form yet'
                  : 'No clients yet'}
            </div>
          )}
        </>
      );
      break;
    case 'overview':
      content = (
        <>
          <h3>Maple Studio Research</h3>
          <dl>
            <dt>Status</dt>
            <dd>Not published</dd>
            <dt>Site URL</dt>
            <dd>Not available</dd>
          </dl>
          <div className={styles.toolbar}>
            {labels.map((l) => button(l, () => simulate(l), /Export|Manage Responses/.test(l)))}
          </div>
          <div className={styles.cards}>
            {['Visits', 'Leads', 'Form Responses', 'Clients'].map((l) => (
              <article key={l}>
                <h4>{l}</h4>
                <b>0</b>
                <p>No provider analytics verified</p>
              </article>
            ))}
          </div>
        </>
      );
      break;
    case 'seo':
      content = (
        <>
          <div className={styles.toolbar}>
            {labels.filter((l) => l !== 'Indexed only').map((l) => button(l, () => setSelected(l)))}
          </div>
          {toggle('Indexed only')}
          {selected === 'Needs Attention (0)' ||
          (!selected && componentId.includes('filter-empty')) ? (
            <div className={styles.empty}>
              <h3>All site pages are good</h3>
              <p>All good · Filter-specific empty state, not overall site health</p>
            </div>
          ) : (
            <div className={styles.tableScroll}>
              <table>
                <thead>
                  <tr>
                    <th>Page</th>
                    <th>Title (55 ch.)</th>
                    <th>Description (160 ch.)</th>
                    <th>No Index</th>
                  </tr>
                </thead>
                <tbody>
                  {['Home', 'About', 'Services', 'Project', 'News & Blog', 'Contact'].map((l) => (
                    <tr key={l}>
                      <td>{l}</td>
                      <td>
                        <input
                          aria-label={`${l} SEO title`}
                          maxLength={55}
                          placeholder="Missing title"
                          disabled={blocked}
                        />
                      </td>
                      <td>
                        <textarea
                          aria-label={`${l} SEO description`}
                          maxLength={160}
                          placeholder="Missing description"
                          disabled={blocked}
                        />
                      </td>
                      <td>
                        <input type="checkbox" aria-label={`${l} No Index`} disabled={blocked} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      );
      break;
    case 'audit':
      content = (
        <>
          <div className={styles.cards}>
            {[
              ['High', 2],
              ['Medium', 3],
              ['Notice', 6],
            ].map(([l, n]) => (
              <article key={l}>
                <h4>{l}</h4>
                <b>{n}</b>
              </article>
            ))}
          </div>
          {labels.slice(0, 5).map((l) => (
            <details key={l}>
              <summary>{l}</summary>
              <p>Observed issue group. Individual provider fix result unverified.</p>
              {labels.slice(5).map((a) => button(a))}
            </details>
          ))}
        </>
      );
      break;
    case 'analytics':
      content = (
        <>
          {choice(labels)}
          <div className={styles.banner}>
            Account plan required for AI visibility and other stats
          </div>
          <div className={styles.cards}>
            {['AI visibility', 'Visits', 'Leads', 'Conversion'].map((l) => (
              <article key={l}>
                <h4>{l}</h4>
                <b>—</b>
              </article>
            ))}
          </div>
          <div className={styles.chart} aria-label="Unavailable visits chart">
            Publish and activate to see data
          </div>
          <p>Zero/empty template data is not verified traffic.</p>
        </>
      );
      break;
    case 'device':
      content = (
        <>
          <div className={styles.toolbar}>
            {labels.slice(0, 4).map((l) => (
              <button
                type="button"
                key={l}
                aria-pressed={device === l}
                disabled={blocked}
                onClick={() => {
                  setDevice(l);
                  setWidth(l === 'Mobile' ? 413 : l === 'Tablet' ? 770 : 1105);
                }}
              >
                {l}
              </button>
            ))}
            <label>
              Width
              <input
                type="number"
                value={width}
                min={320}
                max={1920}
                disabled={blocked}
                onChange={(e) => setWidth(Number(e.target.value))}
              />
            </label>
            {labels.slice(4).map((l) => button(l))}
          </div>
          {device === 'All devices' ? (
            <div className={styles.cards} aria-label="All devices composition">
              {['Desktop', 'Tablet', 'Mobile'].map((label) => (
                <div className={styles.device} key={label}>
                  <h3>{label}</h3>
                  <div className={styles.hero}>Maple Studio</div>
                </div>
              ))}
            </div>
          ) : (
            <div
              className={styles.device}
              style={{ maxWidth: device === 'Mobile' ? 300 : device === 'Tablet' ? 500 : '100%' }}
            >
              <h2>Maple Studio</h2>
              <p>
                Fictional {device.toLowerCase()} content · {width}px
              </p>
              <div className={styles.hero}>Design research</div>
            </div>
          )}
        </>
      );
      break;
    case 'cards':
    case 'gallery':
    case 'card':
      content = (
        <>
          {def.kind === 'gallery' && choice(labels)}
          {def.kind === 'gallery' && search('Search templates')}
          <div className={styles.cards}>
            {(def.kind === 'cards'
              ? labels
              : def.kind === 'card'
                ? ['Maple Roofing']
                : ['Maple Roofing', 'Maple Studio', 'Maple Portfolio']
            )
              .filter((l) => l.toLowerCase().includes(query.toLowerCase()))
              .map((l) => (
                <article key={l}>
                  <div className={styles.thumbnail}>
                    <span>{l}</span>
                  </div>
                  <h3>{l}</h3>
                  {def.kind === 'cards' ? (
                    button('Open locally', () => simulate(l))
                  ) : (
                    <>
                      {button('Preview', () => setSelected(`Preview: ${l}`))}
                      {button('Start Building')}
                      {button('Favorite', () => {
                        setChecks({ ...checks, [l]: !checks[l] });
                        simulate(`Favorite ${l}`);
                      })}
                    </>
                  )}
                </article>
              ))}
          </div>
          {query && <p>No matching templates</p>}
          {selected.startsWith('Preview:') &&
            modal('Template preview', <div className={styles.hero}>{selected}</div>, () =>
              setSelected('')
            )}
        </>
      );
      break;
    case 'widgets':
      content = (
        <>
          {search('Search for widgets')}
          {query ? (
            <div className={styles.empty}>
              <h3>No Result for</h3>
              <p>{query}</p>
            </div>
          ) : (
            <div className={styles.split}>
              <nav>{labels.map((l) => button(l, () => setSelected(l)))}</nav>
              <section>
                <h3>{selected || 'Basic'}</h3>
                <div className={styles.cards}>
                  {((selected || 'Basic') === 'Form'
                    ? ['Advanced Form', 'Contact Form']
                    : ['Text', 'Button', 'Table', 'Image']
                  ).map((l) => button(l, () => simulate(`Insert ${l}`)))}
                </div>
              </section>
            </div>
          )}
          <label>
            AI widget prompt
            <textarea placeholder="Describe your widget" disabled={blocked} />
          </label>
          {button('Send')}
        </>
      );
      break;
    case 'collection':
      if (componentId === 'duda-collections-library' && initialState !== 'populated') {
        content = (
          <div className={styles.empty}>
            <h3>Manage content from one place</h3>
            <p>Collections help you create dynamic pages from a shared database.</p>
            {button('New collection', () => setSelected('source-menu'))}
            {button('Learn about collections')}
            {selected === 'source-menu' && (
              <div className={styles.menu}>
                {[
                  'Start from scratch',
                  'Use a template',
                  'Create an image collection',
                  'External collection',
                ].map((l) => button(l))}
              </div>
            )}
          </div>
        );
        break;
      }
      content = (
        <>
          <div className={styles.split}>
            <aside>
              <h3>Collections</h3>
              <p>Collections contain up to 10 items</p>
              {button('Maple Research Services')}
              <p>Internal · {rows.length} items</p>
              {button('New collection', () => setSelected('source-menu'))}
              {selected === 'source-menu' && (
                <div className={styles.menu}>
                  {[
                    'Start from scratch',
                    'Use a template',
                    'Create an image collection',
                    'External collection',
                  ].map((l) => button(l))}
                </div>
              )}
            </aside>
            <section>
              <label>
                Collection name
                <input value={name} disabled={blocked} onChange={(e) => setName(e.target.value)} />
              </label>
              {search('Search by')}
              <div className={styles.toolbar}>
                <span>{rows.length} items</span>
                {button('Add Row', () =>
                  setRows([...rows, { id: String(rows.length + 1), value: '' }])
                )}
                {button('Reorder Columns')}
                {button('Add New Field', () => {
                  setDraftField('Field 2');
                  setFieldOpen(true);
                })}
              </div>
              <div className={styles.tableScroll}>
                <table>
                  <thead>
                    <tr>
                      <th>Item name or URL</th>
                      <th>New field</th>
                      <th>{field}</th>
                      <th>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {!query &&
                      rows.map((r, i) => (
                        <tr key={i}>
                          <td>{r.id}</td>
                          <td>—</td>
                          <td>{r.value}</td>
                          <td>
                            <button
                              type="button"
                              disabled={blocked}
                              onClick={() => {
                                setSelected(String(i));
                                setRowOpen(true);
                              }}
                            >
                              Edit row {i + 1}
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {query && <p>No matching rows</p>}
            </section>
          </div>
          {fieldOpen &&
            modal(
              'Field settings',
              <>
                <label>
                  Field name
                  <input
                    value={draftField}
                    disabled={blocked}
                    onChange={(e) => setDraftField(e.target.value)}
                  />
                </label>
                <label>
                  Field type
                  <select
                    disabled={blocked}
                    value={fieldType}
                    onChange={(e) => setFieldType(e.target.value)}
                  >
                    {[
                      'Plain Text',
                      'Rich Text',
                      'Image',
                      'Link',
                      'Number',
                      'Toggle Switch',
                      'Date & Time',
                      'Business Hours',
                      'Location',
                      'Video',
                      'Email',
                      'Phone',
                      'Social Accounts',
                      'Multi-select',
                      'Single-select',
                      'Icon',
                      'Image Collection',
                      'Dynamic Page',
                    ].map((l) => (
                      <option key={l}>{l}</option>
                    ))}
                  </select>
                </label>
                {button('Save field', () => {
                  setFieldOpen(false);
                  if (!draftField.trim())
                    setError(`Observed failed update: HTTP 400. ${field} remains unchanged.`);
                  else {
                    setField(draftField);
                    setError('');
                    simulate('Field saved');
                  }
                })}
              </>,
              () => setFieldOpen(false)
            )}
          {rowOpen &&
            modal(
              'Collection row',
              <>
                <p>
                  {Number(selected || 1) + 1} of {rows.length} items
                </p>
                {initialState === 'duplicate-item' && <p role="alert">Something went wrong.</p>}
                {initialState === 'empty-item' && (
                  <p>Use URL paths like this: planting/trees/fruit_trees</p>
                )}
                <label>
                  Item name or URL
                  <input
                    disabled={blocked}
                    value={rows[Number(selected || 1)]?.id || ''}
                    onChange={(e) =>
                      setRows(
                        rows.map((r, i) =>
                          i === Number(selected || 1) ? { ...r, id: e.target.value } : r
                        )
                      )
                    }
                  />
                </label>
                <label>
                  {field}
                  <input
                    disabled={blocked}
                    value={rows[Number(selected || 1)]?.value || ''}
                    onChange={(e) =>
                      setRows(
                        rows.map((r, i) =>
                          i === Number(selected || 1) ? { ...r, value: e.target.value } : r
                        )
                      )
                    }
                  />
                </label>
                {initialState.startsWith('number-') && (
                  <label>
                    Research count
                    <input
                      type="number"
                      value={numberValue}
                      onChange={(e) => setNumberValue(e.target.value)}
                    />
                  </label>
                )}
                <p>Changes stay in React state. Reload resets this fixture.</p>
              </>,
              () => setRowOpen(false)
            )}
        </>
      );
      break;
  }
  return (
    <section className={styles.root} data-duda-component={componentId}>
      <div className={styles.evidence}>RECONSTRUCTION · fictional local fixture</div>
      <header className={styles.header}>
        <b className={styles.brand}>duda</b>
        <h2>{def.title.replace(/^Duda /, '')}</h2>
      </header>
      <fieldset disabled={blocked} className={styles.body}>
        <legend className={styles.srOnly}>{def.title}</legend>
        {content}
      </fieldset>
      {error && (
        <p role="alert" className={styles.error}>
          {error}
        </p>
      )}
      {message && (
        <p role="status" className={styles.status}>
          {message}
        </p>
      )}
      <footer>Reference: {def.evidence[0].screenshot} · No provider writes</footer>
    </section>
  );
}
