import { useId, useState } from 'react';
import styles from './JotformSignBuilder.module.css';

export type SignBuilderMode = 'build' | 'settings' | 'send';

export interface SignerRole {
  id: string;
  label: string;
  /** 'me' is the logged-in account's own role — not deletable/renamable, per the source record. */
  isAccountOwner: boolean;
}

export interface SignatureField {
  id: string;
  label: string;
  roleId: string;
}

export interface JotformSignBuilderProps {
  disabled?: boolean;
  onModeChange?: (mode: SignBuilderMode) => void;
  onSendAttempt?: () => void;
}

const INITIAL_ROLES: SignerRole[] = [
  { id: 'me', label: 'Me', isAccountOwner: true },
  { id: 'tenant', label: 'Tenant/Lessee', isAccountOwner: false },
];

const INITIAL_FIELDS: SignatureField[] = [
  { id: 'field-landlord', label: 'Landlord/Lessor', roleId: 'me' },
  { id: 'field-tenant', label: 'Tenant/Lessee', roleId: 'tenant' },
];

/** Deterministic color coding per role, matching the source record's confirmed
 * orange-for-"Me" / purple-for-the-custom-role pattern. Any further custom role
 * added at runtime cycles through the remaining palette slots. */
const ROLE_COLORS = ['orange', 'purple', 'blue', 'teal'] as const;

function colorForRoleIndex(index: number): string {
  return ROLE_COLORS[index % ROLE_COLORS.length];
}

/**
 * Reconstructed from JotForm Sign's Sign Builder shell (see
 * Research-Library/04-Component-Library/jotform/jotform-sign-builder.md, JF6,
 * 2026-10-05).
 *
 * Reuses the general multi-pane app-shell pattern already established in
 * jotform-app-shell-builder (top bar + mode-tab bar + canvas/right-pane
 * layout) rather than being rebuilt from scratch, per the source record's own
 * finding that Sign Builder is "the identical switcher pattern... same
 * structural pattern, different styling and tab set" as Form Builder.
 *
 * Confirmed and reproduced faithfully:
 * - Green BUILD/SETTINGS/SEND mode-tab bar (vs. Form Builder's orange) with a
 *   "Preview Document" toggle in the same right-aligned slot.
 * - A document canvas with two color-coded signature blocks ("Me" = orange,
 *   a custom role = purple), each paired with a Date field.
 * - Clicking a signature field's role badge opens an "Assign field to:"
 *   popover listing existing roles (with edit/delete icons on non-owner
 *   roles) plus "+ Add new role".
 * - A SEND tab with "Manage Signers (N)", per-role Name/Email inputs, a
 *   "Signing order" toggle defaulting OFF (any order), and a "Send to Sign"
 *   button.
 *
 * Deliberate scope reduction: "Send to Sign" never sends anything. The
 * source record found NO sandbox/test-mode anywhere in the real product's
 * send flow — reproducing a real send (or a fake "success!" email illusion)
 * would be irresponsible for a public demo, so clicking the button instead
 * reveals an inline disclaimer explaining this is a reconstructed demo and
 * no email is ever dispatched. No network calls are made by this
 * client-side preview.
 */
export function JotformSignBuilder({
  disabled = false,
  onModeChange,
  onSendAttempt,
}: JotformSignBuilderProps) {
  const [mode, setMode] = useState<SignBuilderMode>('build');
  const [roles, setRoles] = useState<SignerRole[]>(INITIAL_ROLES);
  const [fields, setFields] = useState<SignatureField[]>(INITIAL_FIELDS);
  const [openPopoverFieldId, setOpenPopoverFieldId] = useState<string | null>(null);
  const [newRoleDraft, setNewRoleDraft] = useState('');
  const [addingRole, setAddingRole] = useState(false);
  const [signers, setSigners] = useState<Record<string, { name: string; email: string }>>({
    me: { name: '', email: '' },
    tenant: { name: '', email: '' },
  });
  const [signingOrder, setSigningOrder] = useState(false);
  const [sendAttempted, setSendAttempted] = useState(false);
  const popoverId = useId();

  function selectMode(next: SignBuilderMode) {
    if (disabled) return;
    setMode(next);
    onModeChange?.(next);
  }

  function togglePopover(fieldId: string) {
    if (disabled) return;
    setAddingRole(false);
    setNewRoleDraft('');
    setOpenPopoverFieldId((current) => (current === fieldId ? null : fieldId));
  }

  function assignFieldToRole(fieldId: string, roleId: string) {
    if (disabled) return;
    setFields((current) => current.map((f) => (f.id === fieldId ? { ...f, roleId } : f)));
    setOpenPopoverFieldId(null);
  }

  function addRole() {
    if (disabled) return;
    const label = newRoleDraft.trim();
    if (!label) return;
    const newId = `role-${Date.now()}`;
    setRoles((current) => [...current, { id: newId, label, isAccountOwner: false }]);
    setSigners((current) => ({ ...current, [newId]: { name: '', email: '' } }));
    setNewRoleDraft('');
    setAddingRole(false);
  }

  function deleteRole(roleId: string) {
    if (disabled) return;
    setRoles((current) => current.filter((r) => r.id !== roleId));
    setFields((current) =>
      current.map((f) => (f.roleId === roleId ? { ...f, roleId: 'me' } : f))
    );
    setSigners((current) => {
      const next = { ...current };
      delete next[roleId];
      return next;
    });
  }

  function updateSigner(roleId: string, key: 'name' | 'email', value: string) {
    if (disabled) return;
    setSigners((current) => ({
      ...current,
      [roleId]: { ...current[roleId], [key]: value },
    }));
  }

  function attemptSend() {
    if (disabled) return;
    setSendAttempted(true);
    onSendAttempt?.();
  }

  const roleIndexById = new Map(roles.map((role, index) => [role.id, index]));

  return (
    <div className={styles.root} data-disabled={disabled}>
      <header className={styles.topBar}>
        <span className={styles.brand}>▤ Sign Builder ▾</span>
        <div className={styles.titleBlock}>
          <span className={styles.titleText}>Simple One Page Lease Agreement Template ▾</span>
        </div>
        <span className={styles.topBarActions}>
          <span className={styles.avatar}>A</span>
        </span>
      </header>

      <div className={styles.modeTabBar} role="tablist" aria-label="Sign Builder mode">
        {(['build', 'settings', 'send'] as SignBuilderMode[]).map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={mode === tab}
            className={mode === tab ? `${styles.modeTab} ${styles.modeTabActive}` : styles.modeTab}
            disabled={disabled}
            onClick={() => selectMode(tab)}
          >
            {tab.toUpperCase()}
          </button>
        ))}
        <label className={styles.previewToggle}>
          <input type="checkbox" disabled={disabled} /> Preview Document
        </label>
      </div>

      {mode === 'build' && (
        <div className={styles.buildBody}>
          <aside className={styles.palette} aria-label="Document Elements palette">
            <div className={styles.paletteHeader}>Document Elements</div>
            <div className={styles.paletteGroup}>
              <span className={styles.paletteGroupLabel}>BASIC ELEMENTS</span>
              <ul className={styles.paletteList}>
                <li>Name</li>
                <li>Email</li>
                <li>Short Text</li>
                <li>Date</li>
              </ul>
            </div>
            <div className={styles.paletteGroup}>
              <span className={styles.paletteGroupLabel}>SIGNATURE ELEMENTS</span>
              <ul className={styles.paletteList}>
                <li>Signature</li>
                <li>Initials</li>
              </ul>
            </div>
          </aside>

          <div className={styles.canvas} data-testid="sign-canvas">
            <div className={styles.document}>
              <p className={styles.documentTitle}>Simple One Page Lease Agreement</p>
              <p className={styles.documentParagraph}>
                This Lease Agreement is entered into between the Landlord/Lessor and the
                Tenant/Lessee named below, for the premises described herein, under the terms set
                forth in this document.
              </p>

              {fields.map((field) => {
                const roleIndex = roleIndexById.get(field.roleId) ?? 0;
                const role = roles.find((r) => r.id === field.roleId);
                const color = colorForRoleIndex(roleIndex);
                return (
                  <div
                    key={field.id}
                    className={styles.signatureBlock}
                    data-color={color}
                    data-testid={`signature-block-${field.id}`}
                  >
                    <div className={styles.signatureRow}>
                      <span className={styles.signatureLine} aria-hidden="true" />
                      <span className={styles.requiredMark} aria-hidden="true">
                        *
                      </span>
                      <div className={styles.roleBadgeWrap}>
                        <button
                          type="button"
                          className={styles.roleBadge}
                          data-color={color}
                          aria-haspopup="true"
                          aria-expanded={openPopoverFieldId === field.id}
                          aria-controls={openPopoverFieldId === field.id ? popoverId : undefined}
                          disabled={disabled}
                          onClick={() => togglePopover(field.id)}
                        >
                          {role?.label ?? 'Me'} ▾
                        </button>

                        {openPopoverFieldId === field.id && (
                          <div
                            id={popoverId}
                            className={styles.popover}
                            role="menu"
                            aria-label="Assign field to"
                          >
                            <p className={styles.popoverTitle}>Assign field to:</p>
                            <ul className={styles.popoverList}>
                              {roles.map((r) => (
                                <li key={r.id} className={styles.popoverItem}>
                                  <button
                                    type="button"
                                    role="menuitem"
                                    className={styles.popoverRoleButton}
                                    disabled={disabled}
                                    onClick={() => assignFieldToRole(field.id, r.id)}
                                  >
                                    {r.label}
                                  </button>
                                  {!r.isAccountOwner && (
                                    <span className={styles.popoverItemActions}>
                                      <button
                                        type="button"
                                        aria-label={`Edit role ${r.label}`}
                                        className={styles.iconButton}
                                        disabled={disabled}
                                        onClick={() => {
                                          setNewRoleDraft(r.label);
                                        }}
                                      >
                                        ✎
                                      </button>
                                      <button
                                        type="button"
                                        aria-label={`Delete role ${r.label}`}
                                        className={styles.iconButton}
                                        disabled={disabled}
                                        onClick={() => deleteRole(r.id)}
                                      >
                                        🗑
                                      </button>
                                    </span>
                                  )}
                                </li>
                              ))}
                            </ul>

                            {addingRole ? (
                              <div className={styles.addRoleForm}>
                                <input
                                  type="text"
                                  className={styles.addRoleInput}
                                  placeholder="Role name"
                                  value={newRoleDraft}
                                  disabled={disabled}
                                  onChange={(e) => setNewRoleDraft(e.target.value)}
                                  aria-label="New role name"
                                />
                                <button
                                  type="button"
                                  className={styles.addRoleConfirm}
                                  disabled={disabled}
                                  onClick={addRole}
                                >
                                  Add
                                </button>
                              </div>
                            ) : (
                              <button
                                type="button"
                                className={styles.addNewRoleButton}
                                disabled={disabled}
                                onClick={() => setAddingRole(true)}
                              >
                                + Add new role
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className={styles.dateFieldRow}>
                      <span className={styles.dateFieldLabel}>Date</span>
                      <span className={styles.dateFieldInput} aria-hidden="true" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {mode === 'settings' && (
        <div className={styles.subNavBody}>
          <aside className={styles.subNavRail} aria-label="Sign Builder settings navigation">
            <div className={styles.subNavItem}>General Settings</div>
            <div className={styles.subNavItem}>Conditions</div>
            <div className={styles.subNavItem}>Notifications</div>
          </aside>
          <div className={styles.subNavContent}>
            Default downloadable-document filename: sign_&#123;documentID&#125;_template.pdf
          </div>
        </div>
      )}

      {mode === 'send' && (
        <div className={styles.sendBody}>
          <div className={styles.sendPanel}>
            <h3 className={styles.sendHeading}>Manage Signers ({roles.length})</h3>
            <ul className={styles.signerList}>
              {roles.map((role, index) => {
                const color = colorForRoleIndex(index);
                const signer = signers[role.id] ?? { name: '', email: '' };
                return (
                  <li key={role.id} className={styles.signerRow} data-color={color}>
                    <span className={styles.signerRoleLabel} data-color={color}>
                      {role.label}
                    </span>
                    <label className={styles.signerField}>
                      <span className={styles.signerFieldLabel}>Name</span>
                      <input
                        type="text"
                        value={signer.name}
                        disabled={disabled}
                        onChange={(e) => updateSigner(role.id, 'name', e.target.value)}
                        aria-label={`${role.label} signer name`}
                      />
                    </label>
                    <label className={styles.signerField}>
                      <span className={styles.signerFieldLabel}>Email</span>
                      <input
                        type="email"
                        value={signer.email}
                        disabled={disabled}
                        onChange={(e) => updateSigner(role.id, 'email', e.target.value)}
                        aria-label={`${role.label} signer email`}
                      />
                    </label>
                  </li>
                );
              })}
            </ul>

            <label className={styles.signingOrderToggle}>
              <input
                type="checkbox"
                checked={signingOrder}
                disabled={disabled}
                onChange={(e) => setSigningOrder(e.target.checked)}
              />
              Signing order {signingOrder ? '(signers sign in listed order)' : '(any order)'}
            </label>

            <button
              type="button"
              className={styles.sendButton}
              disabled={disabled}
              onClick={attemptSend}
            >
              Send to Sign
            </button>

            {sendAttempted && (
              <p className={styles.demoDisclaimer} role="status">
                This is a reconstructed demo — no email is sent. The real Jotform Sign has no
                sandbox/test mode, so this preview intentionally stops here rather than simulating
                a real signature-request send.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
