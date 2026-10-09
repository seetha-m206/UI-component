import { useMemo, useState } from 'react';
import catalogueData from './catalogue.json';
import styles from './pandadoc.module.css';

export type PandaDocVariant = (typeof catalogueData)[number]['variant'];

interface CatalogueEntry {
  id: string;
  variant: string;
  title: string;
  category: string;
  kind: string;
  heading: string;
  description: string;
  items: string[];
  actions: string[];
  observed: string[];
  not_observed: string;
}

export const pandadocCatalogue = catalogueData as CatalogueEntry[];
export const pandadocVariants = pandadocCatalogue.map((entry) => entry.variant);

export interface PandaDocPreviewProps {
  variant: PandaDocVariant;
  disabled?: boolean;
}

function Boundary({ message }: { message: string }) {
  return (
    <p className={styles.boundary} role="status">
      {message}
    </p>
  );
}

function Rail() {
  return (
    <nav className={styles.rail} aria-label="Fictional agreement navigation">
      <strong aria-label="Fictional agreement workspace">C</strong>
      {['＋', '⌂', '▤', '▦', '♙', '▥', '▱', '⚙'].map((icon, index) => (
        <button
          type="button"
          aria-label={
            [
              'Create',
              'Home',
              'Documents',
              'Templates',
              'Contacts',
              'Catalog',
              'Reports',
              'Settings',
            ][index]
          }
          disabled
          key={icon}
        >
          {icon}
        </button>
      ))}
    </nav>
  );
}

function Topbar() {
  return (
    <header className={styles.topbar}>
      <button type="button" className={styles.search} disabled>
        ⌕ Search this fictional workspace
      </button>
      <span className={styles.plan}>Trial fixture</span>
      <button type="button" aria-label="Messages" disabled>
        ▱
      </button>
      <button type="button" aria-label="Help" disabled>
        ?
      </button>
      <button type="button" aria-label="Fictional profile" disabled>
        AR
      </button>
    </header>
  );
}

function Tabs({
  items,
  active,
  onChange,
  disabled,
}: {
  items: string[];
  active: number;
  onChange: (index: number) => void;
  disabled?: boolean;
}) {
  return (
    <div className={styles.tabs} role="tablist">
      {items.map((item, index) => (
        <button
          type="button"
          role="tab"
          aria-selected={index === active}
          disabled={disabled}
          onClick={() => onChange(index)}
          key={item}
        >
          {item}
          {index < 5 ? ' 0' : ''}
        </button>
      ))}
    </div>
  );
}

function Toolbar({
  items,
  onAction,
  disabled,
}: {
  items: string[];
  onAction: (action: string) => void;
  disabled?: boolean;
}) {
  return (
    <div className={styles.toolbar}>
      {items.slice(0, 7).map((item) => (
        <button type="button" disabled={disabled} onClick={() => onAction(item)} key={item}>
          {item}⌄
        </button>
      ))}
    </div>
  );
}

function EmptyState({
  heading,
  description,
  onAction,
  disabled,
}: {
  heading: string;
  description: string;
  onAction: (action: string) => void;
  disabled?: boolean;
}) {
  return (
    <section className={styles.empty}>
      <span className={styles.emptyIcon}>▤</span>
      <h3>{heading}</h3>
      <p>{description}</p>
      <button type="button" disabled={disabled} onClick={() => onAction('Primary action')}>
        Primary action
      </button>
    </section>
  );
}

function TableView({
  entry,
  onAction,
  disabled,
}: {
  entry: CatalogueEntry;
  onAction: (action: string) => void;
  disabled?: boolean;
}) {
  const headers = entry.items.slice(0, 5);
  return (
    <>
      <Toolbar
        items={entry.actions.length > 2 ? entry.actions : [...entry.actions, 'Filters', 'More']}
        onAction={onAction}
        disabled={disabled}
      />
      <div className={styles.tableWrap}>
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" aria-label="Select all fictional rows" disabled />
              </th>
              {headers.map((item) => (
                <th key={item}>{item}</th>
              ))}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {['Northwind renewal', 'Harbor proposal', 'Pine Street agreement'].map((name, row) => (
              <tr key={name}>
                <td>
                  <input type="checkbox" aria-label={`Select ${name}`} disabled />
                </td>
                {headers.map((header, column) => (
                  <td key={header}>
                    {column === 0
                      ? name
                      : column === 1
                        ? ['Draft', 'In review', 'Completed'][row]
                        : column === 2
                          ? 'Fictional team'
                          : '—'}
                  </td>
                ))}
                <td>
                  <button type="button" disabled aria-label={`Actions for ${name}`}>
                    •••
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={styles.fiction}>
        Fictional rows demonstrate the observed table structure. They are not provider records.
      </p>
    </>
  );
}

function GalleryView({
  entry,
  onAction,
  disabled,
}: {
  entry: CatalogueEntry;
  onAction: (action: string) => void;
  disabled?: boolean;
}) {
  return (
    <div className={styles.gallery}>
      {entry.items.slice(0, 8).map((item, index) => (
        <article className={styles.card} key={item}>
          <div className={`${styles.cover} ${styles[`cover${index % 4}`]}`}>
            <span>{item}</span>
          </div>
          <h3>{item}</h3>
          <p>Reusable fictional agreement pattern</p>
          <div>
            <button type="button" disabled={disabled} onClick={() => onAction(`Preview ${item}`)}>
              Preview
            </button>
            <button type="button" disabled>
              Use
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}

function SettingsView({
  entry,
  onAction,
  disabled,
}: {
  entry: CatalogueEntry;
  onAction: (action: string) => void;
  disabled?: boolean;
}) {
  return (
    <div className={styles.settingsGrid}>
      {entry.items.map((item, index) => (
        <section className={styles.settingRow} key={item}>
          <div>
            <h3>{item}</h3>
            <p>{entry.observed[index % entry.observed.length]}</p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={index % 3 !== 0}
            disabled={disabled}
            onClick={() => onAction(`${item} toggled locally`)}
          >
            <span />
          </button>
        </section>
      ))}
    </div>
  );
}

function EditorView({
  entry,
  onAction,
  disabled,
}: {
  entry: CatalogueEntry;
  onAction: (action: string) => void;
  disabled?: boolean;
}) {
  return (
    <div className={styles.editor}>
      <aside className={styles.palette}>
        <h3>{entry.heading}</h3>
        <div className={styles.roleBadge}>
          AR <span>Approver</span>
        </div>
        {entry.items.map((item) => (
          <button
            type="button"
            disabled={disabled}
            onClick={() => onAction(`${item} selected locally`)}
            key={item}
          >
            {item}
          </button>
        ))}
      </aside>
      <section className={styles.page} aria-label="Fictional agreement page">
        <small>Fictional services agreement · Page 1 of 1</small>
        <h2>Agreed and accepted</h2>
        <div className={styles.signatureLine}>
          <span>Signature</span>
          <b>Approver</b>
        </div>
        <div className={styles.dateField}>
          <span>MM / DD / YYYY</span>
          <b>Approver</b>
        </div>
      </section>
    </div>
  );
}

function DialogView({
  entry,
  onAction,
  disabled,
}: {
  entry: CatalogueEntry;
  onAction: (action: string) => void;
  disabled?: boolean;
}) {
  return (
    <div className={styles.modalBackdrop}>
      <section className={styles.modal} role="dialog" aria-label={entry.heading}>
        <header>
          <h2>{entry.heading}</h2>
          <button
            type="button"
            disabled={disabled}
            onClick={() => onAction('Dialog closed locally')}
            aria-label="Close dialog"
          >
            ×
          </button>
        </header>
        <button
          className={styles.dropzone}
          type="button"
          disabled={disabled}
          onClick={() => onAction('File selection stayed local')}
        >
          <b>Drag and drop one or multiple files</b>
          <span>PDF, DOCX, XLSX, PPTX, JPG or PNG</span>
        </button>
        <GalleryView entry={entry} onAction={onAction} disabled={disabled} />
      </section>
    </div>
  );
}

function ScreenBody({
  entry,
  onAction,
  disabled,
}: {
  entry: CatalogueEntry;
  onAction: (action: string) => void;
  disabled?: boolean;
}) {
  const [active, setActive] = useState(0);
  if (entry.kind === 'dialog')
    return <DialogView entry={entry} onAction={onAction} disabled={disabled} />;
  if (entry.kind === 'editor')
    return <EditorView entry={entry} onAction={onAction} disabled={disabled} />;
  if (entry.kind === 'gallery')
    return <GalleryView entry={entry} onAction={onAction} disabled={disabled} />;
  if (entry.kind === 'table' || entry.kind === 'report')
    return <TableView entry={entry} onAction={onAction} disabled={disabled} />;
  if (entry.kind === 'settings')
    return <SettingsView entry={entry} onAction={onAction} disabled={disabled} />;
  if (entry.kind === 'gate')
    return (
      <EmptyState
        heading={entry.heading}
        description={entry.description}
        onAction={onAction}
        disabled={disabled}
      />
    );
  return (
    <>
      <Tabs
        items={entry.items.slice(0, 5)}
        active={active}
        onChange={setActive}
        disabled={disabled}
      />
      <EmptyState
        heading={entry.heading}
        description={entry.description}
        onAction={onAction}
        disabled={disabled}
      />
    </>
  );
}

export function PandaDocPreview({ variant, disabled }: PandaDocPreviewProps) {
  const entry = useMemo(
    () => pandadocCatalogue.find((item) => item.variant === variant) ?? pandadocCatalogue[0],
    [variant]
  );
  const [notice, setNotice] = useState(
    'All controls operate only inside this fictional local fixture.'
  );
  const onAction = (action: string) => setNotice(`${action}. No provider request was made.`);
  return (
    <div className={styles.preview}>
      <div className={styles.verification}>
        <span>Verify your fictional workspace before sending agreements.</span>
        <button type="button" disabled>
          Resend verification
        </button>
      </div>
      <div className={styles.shell}>
        <Rail />
        <div className={styles.stage}>
          <Topbar />
          <main className={styles.main} id={`${entry.id}-panel-preview`}>
            <div className={styles.titleRow}>
              <div>
                <span className={styles.eyebrow}>{entry.category.split(' > ')[0]}</span>
                <h1>{entry.heading}</h1>
                <p>{entry.description}</p>
              </div>
              <button
                type="button"
                disabled={disabled}
                onClick={() => onAction(entry.actions[0] ?? 'Action')}
              >
                {entry.actions[0] ?? 'Action'}
              </button>
            </div>
            <ScreenBody entry={entry} onAction={onAction} disabled={disabled} />
            <Boundary message={notice} />
          </main>
        </div>
      </div>
    </div>
  );
}
