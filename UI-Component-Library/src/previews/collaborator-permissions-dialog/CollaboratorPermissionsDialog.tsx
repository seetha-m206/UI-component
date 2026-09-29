import { useId, useMemo, useState } from 'react';
import styles from './CollaboratorPermissionsDialog.module.css';

export type SurfaceTab = 'share-specific-users' | 'setup-users';
export type ShareSubTab = 'specific-users' | 'groups' | 'all-users';
export type PermissionTier = 'submit' | 'modify' | 'modify-entries-reports';
export type UserRole = 'Super Admin' | 'Admin' | 'User' | 'Respondent';
export type UserFilterTab = 'all' | 'Admin' | 'User' | 'Respondent';

export interface OrgAccount {
  email: string;
}

export interface OrgUserRow {
  id: string;
  email: string;
  role: UserRole;
}

export interface SharePayload {
  email: string;
  permission: PermissionTier;
  notifyUsers: boolean;
  pushNotification: boolean;
}

const PERMISSION_LABEL: Record<PermissionTier, string> = {
  submit: 'Submit Form',
  modify: 'Modify Form',
  'modify-entries-reports': 'Modify Form, Entries, Reports',
};

const PERMISSION_DESCRIPTION: Record<PermissionTier, string> = {
  submit: 'View & submit form',
  modify: 'Modify form & configurations, Submit form',
  'modify-entries-reports':
    'All permissions given under Modify Form + Edit entries, Create & modify reports',
};

const PERMISSION_ORDER: PermissionTier[] = ['submit', 'modify', 'modify-entries-reports'];

const USER_FILTER_TABS: UserFilterTab[] = ['all', 'Admin', 'User', 'Respondent'];

const MOCK_GROUPS = ['Sales Team', 'Support Team'];

export interface CollaboratorPermissionsDialogProps {
  /** Which top-level surface is showing at mount. Defaults to 'share-specific-users'. */
  initialSurface?: SurfaceTab;
  /** Which "SHARE WITH" sub-tab is active on Surface A. Defaults to 'specific-users'. */
  initialShareSubTab?: ShareSubTab;
  /** Existing org accounts the "Share With" box's autocomplete is restricted to — it is NOT a free-email invite field. */
  orgAccounts: OrgAccount[];
  orgName?: string;
  /** Fired when Share succeeds on Surface A's Specific Users tab (a matched org account was chosen). */
  onShare?: (payload: SharePayload) => void;
  /** Fired when Share is clicked on the Groups sub-tab. */
  onShareGroup?: (group: string) => void;
  /** Fired when Share is clicked on the All Users sub-tab. */
  onShareAllUsers?: () => void;

  /** Surface B: org-level user table. */
  users: OrgUserRow[];
  /** Display-only header stat tiles. Shown exactly as given, NOT derived from `users.length` — the source's own trial-org tiles (3/1/0/2) don't reduce to a simple row count either. */
  totalUsersStat: number;
  activeUsersStat: number;
  inactiveUsersStat: number;
  availableUsersStat: number;
  /**
   * Fired when the "+ Add User" modal's Add button is clicked. No row is
   * appended to `users` — the source deliberately never executed a real
   * invite (it would send a real email and consume a license seat), so
   * what a real post-submit row would look like (default role, seat
   * consumption) is unconfirmed. This reconstruction honestly reflects
   * that gap rather than inventing it.
   */
  onAddUser?: (email: string) => void;
  /**
   * Fired only from the "an Admin already exists" placeholder branch of
   * Change Super Admin — that path was never exercised in the source
   * (the trial org under test had zero Admin-tier users), so only the
   * confirmed blocking-guardrail branch is faithfully reconstructed.
   */
  onChangeSuperAdmin?: () => void;
}

function matchingAccounts(accounts: OrgAccount[], query: string): OrgAccount[] {
  const q = query.trim().toLowerCase();
  if (!q) return accounts;
  return accounts.filter((a) => a.email.toLowerCase().includes(q));
}

/**
 * Reconstructed from Zoho Forms' two structurally distinct collaborator/
 * permission systems: Surface A (Builder -> Share -> Specific Users/
 * Groups/All Users, form-level) and Surface B (hamburger menu -> Setup ->
 * Users, org-level "User Management"). Confirmed-real behavior reproduced
 * faithfully: Surface A's "Share With" box is autocomplete-only against
 * existing org accounts (not a free-email invite) and its Share button
 * shows the exact client-side error "Please choose an email address." with
 * no network attempt when nothing was chosen; only Specific Users gets the
 * 3-tier Permission dropdown (Groups/All Users are fixed grants); Surface
 * B's Super Admin row carries no edit/delete affordance at all; and
 * "Change Super Admin" with zero Admin-tier users blocks with the exact
 * recorded copy. See this preview's evidence notes for the one path never
 * exercised in the source (Change Super Admin when an Admin DOES exist)
 * and the one deliberately unexecuted action (Surface B's real invite
 * submit).
 */
export function CollaboratorPermissionsDialog({
  initialSurface = 'share-specific-users',
  initialShareSubTab = 'specific-users',
  orgAccounts,
  orgName = 'zohoforms',
  onShare,
  onShareGroup,
  onShareAllUsers,
  users,
  totalUsersStat,
  activeUsersStat,
  inactiveUsersStat,
  availableUsersStat,
  onAddUser,
  onChangeSuperAdmin,
}: CollaboratorPermissionsDialogProps) {
  const addUserHeadingId = useId();
  const changeSuperAdminHeadingId = useId();

  const [surface, setSurface] = useState<SurfaceTab>(initialSurface);

  // ---- Surface A state ----
  const [shareSubTab, setShareSubTab] = useState<ShareSubTab>(initialShareSubTab);
  const [shareQuery, setShareQuery] = useState('');
  const [shareSelected, setShareSelected] = useState<string | null>(null);
  const [shareSuggestionsOpen, setShareSuggestionsOpen] = useState(false);
  const [permission, setPermission] = useState<PermissionTier>('submit');
  const [notifyUsers, setNotifyUsers] = useState(true);
  const [pushNotification, setPushNotification] = useState(false);
  const [shareError, setShareError] = useState<string | null>(null);
  const [selectedGroup, setSelectedGroup] = useState(MOCK_GROUPS[0]);

  // ---- Surface B state ----
  const [userFilterTab, setUserFilterTab] = useState<UserFilterTab>('all');
  const [addUserOpen, setAddUserOpen] = useState(false);
  const [addUserEmail, setAddUserEmail] = useState('');
  const [superAdminDialog, setSuperAdminDialog] = useState<'none' | 'blocked' | 'exists'>('none');

  const suggestions = useMemo(() => matchingAccounts(orgAccounts, shareQuery), [orgAccounts, shareQuery]);
  const activeAdminCount = users.filter((u) => u.role === 'Admin').length;
  const filteredUsers = useMemo(() => {
    if (userFilterTab === 'all') return users;
    // Super Admin has no filter tab of its own — it's excluded from every
    // role-specific filter, surfaced only via the badge on its own row.
    return users.filter((u) => u.role === userFilterTab);
  }, [users, userFilterTab]);

  function handleShareQueryChange(value: string) {
    setShareQuery(value);
    setShareSelected(null);
    setShareSuggestionsOpen(true);
    setShareError(null);
  }

  function chooseAccount(email: string) {
    setShareQuery(email);
    setShareSelected(email);
    setShareSuggestionsOpen(false);
    setShareError(null);
  }

  function handleShareSpecificUser() {
    if (!shareSelected) {
      // Confirmed: zero network requests fire on this failure mode —
      // rejection happens purely client-side. No fetch is ever wired
      // into this reconstruction to begin with (see evidence notes).
      setShareError('Please choose an email address.');
      return;
    }
    onShare?.({ email: shareSelected, permission, notifyUsers, pushNotification });
    setShareQuery('');
    setShareSelected(null);
    setShareError(null);
  }

  function handleShareGroup() {
    onShareGroup?.(selectedGroup);
  }

  function handleShareAllUsers() {
    onShareAllUsers?.();
  }

  function openAddUser() {
    setAddUserEmail('');
    setAddUserOpen(true);
  }

  function closeAddUser() {
    setAddUserOpen(false);
  }

  function submitAddUser() {
    // The real final "Add" submit was deliberately never executed in the
    // source (it would send a real email and consume a license seat), so
    // this reconstruction does not append a row to `users` — only the
    // callback fires, honestly reflecting that the resulting row shape is
    // unconfirmed.
    if (!addUserEmail.trim()) return;
    onAddUser?.(addUserEmail.trim());
    setAddUserOpen(false);
  }

  function handleChangeSuperAdmin() {
    if (activeAdminCount === 0) {
      setSuperAdminDialog('blocked');
    } else {
      onChangeSuperAdmin?.();
      setSuperAdminDialog('exists');
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.surfaceTabs} role="tablist" aria-label="Collaborator surface">
        <button
          type="button"
          role="tab"
          aria-selected={surface === 'share-specific-users'}
          className={
            surface === 'share-specific-users'
              ? `${styles.surfaceTab} ${styles.surfaceTabActive}`
              : styles.surfaceTab
          }
          onClick={() => setSurface('share-specific-users')}
        >
          Share &rarr; Specific Users
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={surface === 'setup-users'}
          className={
            surface === 'setup-users' ? `${styles.surfaceTab} ${styles.surfaceTabActive}` : styles.surfaceTab
          }
          onClick={() => setSurface('setup-users')}
        >
          Setup &rarr; Users
        </button>
      </div>

      {surface === 'share-specific-users' ? (
        <div className={styles.surfacePanel}>
          <p className={styles.surfaceIntro}>
            Share the form with users within your organization and manage form-specific permissions.
          </p>
          <div className={styles.shareSubTabs} role="tablist" aria-label="Share with">
            {(
              [
                ['specific-users', 'Specific Users'],
                ['groups', 'Groups'],
                ['all-users', 'All Users'],
              ] as [ShareSubTab, string][]
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={shareSubTab === id}
                className={
                  shareSubTab === id ? `${styles.shareSubTab} ${styles.shareSubTabActive}` : styles.shareSubTab
                }
                onClick={() => setShareSubTab(id)}
              >
                {label}
              </button>
            ))}
          </div>

          {shareSubTab === 'specific-users' && (
            <div className={styles.shareForm}>
              <label className={styles.fieldLabel} htmlFor="share-with-input">
                Share With
              </label>
              <div className={styles.autocompleteWrap}>
                <input
                  id="share-with-input"
                  type="text"
                  className={styles.textInput}
                  value={shareQuery}
                  placeholder="Search email address"
                  onChange={(e) => handleShareQueryChange(e.target.value)}
                  onFocus={() => setShareSuggestionsOpen(true)}
                />
                {shareSuggestionsOpen && (
                  <ul className={styles.suggestionsList} role="listbox" aria-label="Matching org accounts">
                    {suggestions.length === 0 ? (
                      <li className={styles.suggestionEmpty}>No more email addresses</li>
                    ) : (
                      suggestions.map((account) => (
                        <li key={account.email}>
                          <button
                            type="button"
                            role="option"
                            aria-selected={shareSelected === account.email}
                            className={styles.suggestionOption}
                            onClick={() => chooseAccount(account.email)}
                          >
                            {account.email}
                          </button>
                        </li>
                      ))
                    )}
                  </ul>
                )}
              </div>

              <label className={styles.fieldLabel} htmlFor="permission-select">
                Permission
              </label>
              <select
                id="permission-select"
                className={styles.textInput}
                value={permission}
                onChange={(e) => setPermission(e.target.value as PermissionTier)}
              >
                {PERMISSION_ORDER.map((tier) => (
                  <option key={tier} value={tier}>
                    {PERMISSION_LABEL[tier]} — {PERMISSION_DESCRIPTION[tier]}
                  </option>
                ))}
              </select>

              <div className={styles.checkboxRow}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={notifyUsers}
                    onChange={(e) => setNotifyUsers(e.target.checked)}
                  />
                  Notify Users
                </label>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={pushNotification}
                    onChange={(e) => setPushNotification(e.target.checked)}
                  />
                  Push Notification to Mobile
                </label>
              </div>

              {shareError && (
                <p className={styles.errorText} role="alert">
                  {shareError}
                </p>
              )}

              <button type="button" className={styles.primaryButton} onClick={handleShareSpecificUser}>
                Share
              </button>
            </div>
          )}

          {shareSubTab === 'groups' && (
            <div className={styles.shareForm}>
              <p className={styles.surfaceIntro}>Share the form with groups in your organization.</p>
              <label className={styles.fieldLabel} htmlFor="group-select">
                Group
              </label>
              <select
                id="group-select"
                className={styles.textInput}
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(e.target.value)}
              >
                {MOCK_GROUPS.map((group) => (
                  <option key={group} value={group}>
                    {group}
                  </option>
                ))}
              </select>
              <p className={styles.fixedPermissionNote}>Permission: Submit Form (fixed — no permission-tier choice)</p>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" defaultChecked />
                Notify group members
              </label>
              <button type="button" className={styles.primaryButton} onClick={handleShareGroup}>
                Share
              </button>
            </div>
          )}

          {shareSubTab === 'all-users' && (
            <div className={styles.shareForm}>
              <span className={styles.orgChip}>{orgName}</span>
              <p className={styles.fixedPermissionNote}>Permission: Submit Form (fixed — no permission-tier choice)</p>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" defaultChecked />
                Notify all users
              </label>
              <button type="button" className={styles.primaryButton} onClick={handleShareAllUsers}>
                Share
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className={styles.surfacePanel}>
          <h3 className={styles.userMgmtHeading}>User Management</h3>
          <div className={styles.statTiles}>
            <div className={styles.statTile}>
              <span className={styles.statValue}>{totalUsersStat}</span>
              <span className={styles.statLabel}>Total Users</span>
            </div>
            <div className={styles.statTile}>
              <span className={styles.statValue}>{activeUsersStat}</span>
              <span className={styles.statLabel}>Active Users</span>
            </div>
            <div className={styles.statTile}>
              <span className={styles.statValue}>{inactiveUsersStat}</span>
              <span className={styles.statLabel}>Inactive Users</span>
            </div>
            <div className={styles.statTile}>
              <span className={styles.statValue}>{availableUsersStat}</span>
              <span className={styles.statLabel}>Available Users</span>
            </div>
          </div>

          <div className={styles.userToolbar}>
            <div className={styles.filterTabs} role="tablist" aria-label="Filter users by role">
              {USER_FILTER_TABS.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={userFilterTab === tab}
                  className={
                    userFilterTab === tab ? `${styles.filterTab} ${styles.filterTabActive}` : styles.filterTab
                  }
                  onClick={() => setUserFilterTab(tab)}
                >
                  {tab === 'all' ? 'All Users' : tab}
                </button>
              ))}
            </div>
            <div className={styles.userToolbarActions}>
              <button type="button" className={styles.secondaryButton} onClick={handleChangeSuperAdmin}>
                Change Super Admin
              </button>
              <button type="button" className={styles.primaryButton} onClick={openAddUser}>
                + Add User
              </button>
            </div>
          </div>

          {userFilterTab === 'Admin' && filteredUsers.length === 0 ? (
            <p className={styles.tableEmptyText}>You have not added an admin</p>
          ) : filteredUsers.length === 0 ? (
            <p className={styles.tableEmptyText}>No users match this filter.</p>
          ) : (
            <table className={styles.userTable}>
              <thead>
                <tr>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col">
                    <span className={styles.visuallyHidden}>Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.email}</td>
                    <td>
                      <span
                        className={
                          user.role === 'Super Admin'
                            ? `${styles.roleBadge} ${styles.roleBadgeSuperAdmin}`
                            : styles.roleBadge
                        }
                      >
                        {user.role}
                      </span>
                    </td>
                    <td>
                      {/*
                        Confirmed: no delete/edit affordance on the Super
                        Admin's own row at all — no hover actions, no
                        kebab menu. That structural absence (not a
                        disabled button) is reproduced here by rendering
                        nothing in this cell for that row.
                      */}
                      {user.role !== 'Super Admin' && (
                        <button type="button" className={styles.rowActionButton}>
                          &#8942;
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}

      {addUserOpen && (
        <div className={styles.overlay}>
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby={addUserHeadingId}
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
                event.preventDefault();
                closeAddUser();
              }
            }}
          >
            <h2 id={addUserHeadingId} className={styles.modalHeading}>
              Add User
            </h2>
            <label className={styles.fieldLabel} htmlFor="add-user-email">
              Email Address
            </label>
            <input
              id="add-user-email"
              type="email"
              className={styles.textInput}
              maxLength={250}
              value={addUserEmail}
              onChange={(e) => setAddUserEmail(e.target.value)}
            />
            {/* No role selector at this stage — confirmed absent in the source. */}
            <div className={styles.modalActions}>
              <button type="button" className={styles.secondaryButton} onClick={closeAddUser}>
                Cancel
              </button>
              <button
                type="button"
                className={styles.primaryButton}
                onClick={submitAddUser}
                disabled={!addUserEmail.trim()}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      {superAdminDialog !== 'none' && (
        <div className={styles.overlay}>
          <div
            className={styles.modal}
            role="alertdialog"
            aria-modal="true"
            aria-labelledby={changeSuperAdminHeadingId}
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
                event.preventDefault();
                setSuperAdminDialog('none');
              }
            }}
          >
            <h2 id={changeSuperAdminHeadingId} className={styles.modalHeading}>
              Change Super Admin
            </h2>
            {superAdminDialog === 'blocked' ? (
              <p className={styles.modalBody}>
                Only an active Admin can be assigned as a Super Admin. Currently, there are no active
                Admins.
              </p>
            ) : (
              <p className={styles.modalBody}>
                Selecting a new Super Admin from your existing Admins was never exercised in the source
                research (the tested org had zero Admin-tier users) — this reconstruction only
                faithfully implements the confirmed blocking guardrail, not this branch.
              </p>
            )}
            <div className={styles.modalActions}>
              <button type="button" className={styles.primaryButton} onClick={() => setSuperAdminDialog('none')}>
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
