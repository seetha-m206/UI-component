import { useEffect, useId, useRef, useState } from 'react';
import styles from './PublishShareFlow.module.css';

export type ShareSection = 'share-with' | 'embed' | 'email' | 'utm' | 'gtm';
export type ShareWithSubItem = 'public' | 'specific-users' | 'groups' | 'all-users';
export type EmbedSubItem =
  | 'iframe'
  | 'javascript'
  | 'hyperlink'
  | 'lightbox'
  | 'html-css'
  | 'website-builders';

const SHARE_METHODS: { id: ShareSection; label: string }[] = [
  { id: 'share-with', label: 'Share With' },
  { id: 'embed', label: 'Embed' },
  { id: 'email', label: 'Email Campaigns' },
  { id: 'utm', label: 'UTM Tracking' },
  { id: 'gtm', label: 'Google Tag Manager & Custom Tracking' },
];

const SHARE_WITH_ITEMS: { id: ShareWithSubItem; label: string }[] = [
  { id: 'public', label: 'Public' },
  { id: 'specific-users', label: 'Specific Users' },
  { id: 'groups', label: 'Groups' },
  { id: 'all-users', label: 'All Users' },
];

const EMBED_ITEMS: { id: EmbedSubItem; label: string }[] = [
  { id: 'iframe', label: 'iframe' },
  { id: 'javascript', label: 'JavaScript' },
  { id: 'hyperlink', label: 'Hyperlink' },
  { id: 'lightbox', label: 'Lightbox Pop-up Form' },
  { id: 'html-css', label: 'HTML & CSS' },
  { id: 'website-builders', label: 'Website Builders' },
];

/** Fixed fake permalink — the embed code below is built from this via plain
 * string templating, client-side, matching the confirmed real finding that
 * embed code is generated client-side rather than fetched over the network. */
const FAKE_PERMALINK =
  'https://forms.zohopublic.com/acmeinc/form/CustomerFeedbackSurvey/formperma/6VvV6PbT4qkX9mYh2wZcR8fDsAeJpLxN';
const FAKE_SHORT_URL = 'https://zfrms.co/f/AbC123';

const CONFIRM_COPY =
  'On disabling the public sharing, this form will no longer be accessible through its Permalink URL and social media links. Forms embedded on websites will also be disabled. Would you like to proceed?';

export interface PublishShareFlowProps {
  /** Whether public sharing starts enabled. Defaults to true. This is the
   * one and only "publish" mechanism in the real product — there is no
   * separate Publish button. */
  initialEnabled?: boolean;
  /** Which left-hand sharing-method card starts selected. Defaults to
   * 'share-with'. */
  initialSection?: ShareSection;
  /**
   * Seeds the disable-confirmation dialog open, for a fixture that shows
   * that exact state directly (only meaningful together with
   * initialEnabled: true and initialSection: 'share-with', since the
   * dialog is only reachable from the enabled Public panel).
   */
  initialConfirmOpen?: boolean;
  /** Called whenever public sharing's enabled state actually changes — after
   * the confirm dialog is accepted (Enabled -> Disabled) or immediately
   * (Disabled -> Enabled, the observed ungated direction). */
  onToggle?: (enabled: boolean) => void;
}

interface PublicDetailPaneProps {
  enabled: boolean;
  onToggleClick: () => void;
  toggleRef: React.RefObject<HTMLButtonElement | null>;
  shortened: boolean;
  onShorten: () => void;
  headingId: string;
}

function PublicDetailPane({
  enabled,
  onToggleClick,
  toggleRef,
  shortened,
  onShorten,
  headingId,
}: PublicDetailPaneProps) {
  return (
    <div className={styles.publicPane}>
      <div className={styles.paneHeader}>
        <h3 id={headingId} className={styles.paneHeading}>
          Public
        </h3>
        <button
          ref={toggleRef}
          type="button"
          role="switch"
          aria-checked={enabled}
          aria-label="Enable public sharing"
          className={
            enabled
              ? `${styles.enableSwitch} ${styles.enableSwitchOn}`
              : `${styles.enableSwitch} ${styles.enableSwitchOff}`
          }
          onClick={onToggleClick}
        >
          <span className={styles.enableKnob} aria-hidden="true" />
          <span className={styles.enableSwitchLabel} aria-hidden="true">
            {enabled ? 'Enabled' : 'Disabled'}
          </span>
        </button>
      </div>

      {!enabled && (
        <div className={styles.warningBanner} role="status">
          <span aria-hidden="true" className={styles.warningIcon}>
            &#9888;
          </span>
          <p className={styles.warningText}>
            Public sharing is disabled. This form is no longer accessible through its Permalink URL
            or social media links, and any website embeds are disabled too.
          </p>
        </div>
      )}

      <div
        className={
          enabled ? styles.publicOptions : `${styles.publicOptions} ${styles.publicOptionsLocked}`
        }
      >
        <label className={styles.fieldLabel} htmlFor={`${headingId}-permalink`}>
          Permalink URL
        </label>
        <div className={styles.permalinkRow}>
          <input
            id={`${headingId}-permalink`}
            type="text"
            readOnly
            disabled={!enabled}
            value={shortened ? FAKE_SHORT_URL : FAKE_PERMALINK}
            className={styles.permalinkInput}
          />
          <button
            type="button"
            disabled={!enabled}
            className={styles.secondaryButton}
            onClick={onShorten}
          >
            {shortened ? 'Show Full URL' : 'Shorten URL'}
          </button>
        </div>

        <div className={styles.qrRow}>
          <div
            className={styles.qrPlaceholder}
            role="img"
            aria-label="QR code for this form (decorative placeholder in this reconstruction — not a real generated code)"
          >
            QR
          </div>
          <button type="button" disabled={!enabled} className={styles.secondaryButton}>
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

interface EmbedIframePaneProps {
  enabled: boolean;
  code: string;
}

function EmbedIframePane({ enabled, code }: EmbedIframePaneProps) {
  return (
    <div className={enabled ? styles.embedPane : `${styles.embedPane} ${styles.embedPaneLocked}`}>
      <h3 className={styles.paneHeading}>iframe</h3>
      <p className={styles.embedHint}>
        Paste this code into your website&rsquo;s HTML where you want the form to appear.
      </p>
      <textarea
        readOnly
        disabled={!enabled}
        value={code}
        className={styles.codeBlock}
        aria-label="Generated iframe embed code"
        rows={4}
      />
    </div>
  );
}

interface PlaceholderPaneProps {
  label: string;
  locked?: boolean;
}

function PlaceholderPane({ label, locked }: PlaceholderPaneProps) {
  return (
    <div
      className={
        locked ? `${styles.placeholderPane} ${styles.placeholderPaneLocked}` : styles.placeholderPane
      }
    >
      <p className={styles.placeholderText}>
        The &ldquo;{label}&rdquo; detail view was out of scope for this reconstruction — see this
        preview&rsquo;s registry evidence string for what is and isn&rsquo;t covered.
      </p>
    </div>
  );
}

/**
 * Reconstructed from Zoho Forms' Publish & Share flow: a three-level
 * master-detail layout (sharing-method cards -> a per-method sub-list ->
 * a detail pane). Real confirmed behavior reproduced faithfully: the
 * Enable/Disable toggle on the Public panel IS the publish mechanism (no
 * separate Publish button anywhere), the disable direction opens a
 * confirmation dialog with the exact recorded warning copy and a solid-red
 * "Yes" button (a deliberate, confirmed exception to this product's usual
 * ghost/outline destructive-button styling, since this is a modal rather
 * than a menu item), re-enabling is direct/ungated, and the iframe embed
 * code is built client-side via plain string templating against a fixed
 * permalink rather than fetched from the network. See this preview's
 * registry evidence string for the full scoping/assumption breakdown.
 */
export function PublishShareFlow({
  initialEnabled = true,
  initialSection = 'share-with',
  initialConfirmOpen = false,
  onToggle,
}: PublishShareFlowProps) {
  const [enabled, setEnabled] = useState(initialEnabled);
  const [section, setSection] = useState<ShareSection>(initialSection);
  const [shareWithSub, setShareWithSub] = useState<ShareWithSubItem>('public');
  const [embedSub, setEmbedSub] = useState<EmbedSubItem>('iframe');
  const [confirmOpen, setConfirmOpen] = useState(initialConfirmOpen);
  const [shortened, setShortened] = useState(false);

  const cancelRef = useRef<HTMLButtonElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const publicHeadingId = useId();
  const confirmHeadingId = useId();
  const confirmDescId = useId();

  useEffect(() => {
    if (confirmOpen) {
      cancelRef.current?.focus();
    }
  }, [confirmOpen]);

  function handleToggleClick() {
    if (enabled) {
      // Gated direction: real product opens a confirm modal before disabling.
      setConfirmOpen(true);
    } else {
      // Ungated direction: real product re-enables immediately, no dialog.
      setEnabled(true);
      onToggle?.(true);
    }
  }

  function confirmDisable() {
    setEnabled(false);
    onToggle?.(false);
    setConfirmOpen(false);
    toggleRef.current?.focus();
  }

  function cancelDisable() {
    setConfirmOpen(false);
    toggleRef.current?.focus();
  }

  function handleDialogKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Escape') {
      event.preventDefault();
      cancelDisable();
    }
  }

  const iframeCode = `<iframe src="${FAKE_PERMALINK}" width="100%" height="700" frameborder="0" marginwidth="0" marginheight="0">Loading…</iframe>`;

  return (
    <div className={styles.root}>
      <div className={styles.layout}>
        <nav className={styles.methodsNav} aria-label="Sharing methods">
          <ul className={styles.methodsList}>
            {SHARE_METHODS.map((method) => (
              <li key={method.id}>
                <button
                  type="button"
                  className={
                    section === method.id
                      ? `${styles.methodItem} ${styles.methodItemActive}`
                      : styles.methodItem
                  }
                  aria-current={section === method.id ? 'true' : undefined}
                  onClick={() => setSection(method.id)}
                >
                  {method.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {section === 'share-with' && (
          <>
            <nav className={styles.subNav} aria-label="Share with options">
              <ul className={styles.subList}>
                {SHARE_WITH_ITEMS.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      className={
                        shareWithSub === item.id
                          ? `${styles.subItem} ${styles.subItemActive}`
                          : styles.subItem
                      }
                      aria-current={shareWithSub === item.id ? 'true' : undefined}
                      onClick={() => setShareWithSub(item.id)}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={styles.detailPane}>
              {shareWithSub === 'public' ? (
                <PublicDetailPane
                  enabled={enabled}
                  onToggleClick={handleToggleClick}
                  toggleRef={toggleRef}
                  shortened={shortened}
                  onShorten={() => setShortened((s) => !s)}
                  headingId={publicHeadingId}
                />
              ) : (
                <PlaceholderPane label={SHARE_WITH_ITEMS.find((i) => i.id === shareWithSub)!.label} />
              )}
            </div>
          </>
        )}

        {section === 'embed' && (
          <>
            <nav className={styles.subNav} aria-label="Embed options">
              <ul className={styles.subList}>
                {EMBED_ITEMS.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      disabled={!enabled}
                      aria-disabled={!enabled}
                      className={
                        embedSub === item.id
                          ? `${styles.subItem} ${styles.subItemActive}`
                          : styles.subItem
                      }
                      aria-current={embedSub === item.id ? 'true' : undefined}
                      onClick={() => enabled && setEmbedSub(item.id)}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={styles.detailPane}>
              {embedSub === 'iframe' ? (
                <EmbedIframePane enabled={enabled} code={iframeCode} />
              ) : (
                <PlaceholderPane
                  label={EMBED_ITEMS.find((i) => i.id === embedSub)!.label}
                  locked={!enabled}
                />
              )}
            </div>
          </>
        )}

        {(section === 'email' || section === 'utm' || section === 'gtm') && (
          <div className={styles.detailPaneWide}>
            <PlaceholderPane label={SHARE_METHODS.find((m) => m.id === section)!.label} />
          </div>
        )}
      </div>

      {confirmOpen && (
        <div className={styles.overlay} onKeyDown={handleDialogKeyDown}>
          <div
            className={styles.confirmDialog}
            role="alertdialog"
            aria-modal="true"
            aria-labelledby={confirmHeadingId}
            aria-describedby={confirmDescId}
          >
            <h2 id={confirmHeadingId} className={styles.confirmHeading}>
              Disable public sharing?
            </h2>
            <p id={confirmDescId} className={styles.confirmBody}>
              {CONFIRM_COPY}
            </p>
            <div className={styles.confirmActions}>
              <button
                ref={cancelRef}
                type="button"
                className={styles.noButton}
                onClick={cancelDisable}
              >
                No
              </button>
              {/*
                Deliberately a SOLID red destructive button, not this
                product's usual ghost/outline destructive treatment — a
                confirmed real exception specific to this modal (as opposed
                to a menu item's destructive row).
              */}
              <button type="button" className={styles.yesButton} onClick={confirmDisable}>
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
