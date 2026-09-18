import styles from './UpgradeCtaButton.module.css';

export interface UpgradeCtaButtonProps {
  /** Button text. Defaults to the literal captured DOM text, "Upgrade Now". */
  label?: string;
  /** Disables the button. Not observed in the source record — see README. */
  disabled?: boolean;
  /**
   * Called on click. In the real product this is `ZFUtil.upgradeAndshowReloadPopup`,
   * which opens an external Zoho Store subscription URL in a new tab (and,
   * conditionally, a reload-prompt modal in the original tab). This preview
   * never navigates anywhere — it hands off through this callback instead.
   * See README "Scoping decision: no real navigation" for the rationale.
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Reconstructed from Zoho Forms' "Upgrade Now" paywall CTA button (observed
 * on Form Settings → Submissions & Storage → Auto-Trash; same
 * `.upgradeButton` class/pattern noted, not individually re-verified, on
 * other gated features such as Double Opt-In and Form Encryption).
 *
 * Source markup is a single `<button class="upgradeButton" anchor_href="...">`
 * whose `onclick` reads the `anchor_href` attribute and opens it via
 * `window.open(url, "_blank")`. This reconstruction keeps the native
 * `<button>` element (already correct in the source — no `javascript:` href
 * anti-pattern to fix here, unlike some of this product's other controls)
 * but replaces the custom `anchor_href` attribute + inline `onclick` with a
 * plain `onClick` callback prop, since a documentation preview must not
 * perform real external navigation.
 */
export function UpgradeCtaButton({
  label = 'Upgrade Now',
  disabled = false,
  onClick,
}: UpgradeCtaButtonProps) {
  return (
    <div className={styles.root}>
      <button type="button" className={styles.button} disabled={disabled} onClick={onClick}>
        {label}
      </button>
    </div>
  );
}
