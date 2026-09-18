import { useEffect, useId, useRef, useState } from 'react';
import styles from './ThemeColorPickerGradient.module.css';

export type ColorPickerMode = 'solid' | 'gradient';

export interface ThemeColorValue {
  mode: ColorPickerMode;
  solidColor: string;
  gradientStart: string;
  gradientEnd: string;
  /** Degrees, 0-350 in 10° steps (source: `aria-valuemin=0`/`aria-valuemax=36` step index × 10°). */
  angle: number;
}

export interface ThemeColorPickerGradientProps {
  value: ThemeColorValue;
  onChange?: (value: ThemeColorValue) => void;
  disabled?: boolean;
  label: string;
  description?: string;
}

/**
 * Deterministic placeholder palette — exact swatch values were not captured
 * in the source record (only the 8x10 "Preset Colors" + 1x10 "Standard
 * Colors" grid layout was, not the specific hex values in each cell). Sized
 * down from ~90 swatches to 20 for a maintainable reconstruction; flagged in
 * this folder's README.
 */
const PRESET_COLORS = [
  '#FFFFFF',
  '#F5F6F8',
  '#E7EAF3',
  '#B8C0CC',
  '#677788',
  '#39404E',
  '#1A1F29',
  '#000000',
  '#F84A4D',
  '#FF8A65',
  '#FFCA00',
  '#24A68A',
  '#16A34A',
  '#0284C7',
  '#2563EB',
  '#245BA7',
  '#7C3AED',
  '#C026D3',
  '#FFDED6',
  '#BFACFE',
];

const HEX_PATTERN = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

function isValidHex(candidate: string) {
  return HEX_PATTERN.test(candidate.trim());
}

/**
 * Reconstructed from Zoho Forms' Themes editor color picker — the
 * `zcolorpicker`/`zslider` widget family (see the source record's
 * Cross-Component Pattern Note; likely a shared Zoho design-system layer,
 * not bespoke to Forms). The source's own JS handlers for swatch selection
 * and slider drag were never traced to named functions (internal event
 * delegation, no global namespace exposed) and its live-gradient CSSOM
 * injection mechanism could not be located — so only the externally
 * observable structure/behavior is reconstructed here, as plain React
 * state, not any `zcolorpicker`/`zslider` internals. See this folder's
 * README for the full list of flagged assumptions (preset palette values,
 * angle-control granularity/representation, and the "No Fill"/"Default
 * Color"/"More Colors"/"Other Used Colors" affordances observed in the
 * source but intentionally left out of the reconstructed value model).
 */
export function ThemeColorPickerGradient({
  value,
  onChange,
  disabled = false,
  label,
  description,
}: ThemeColorPickerGradientProps) {
  const [open, setOpen] = useState(false);
  const [activeStop, setActiveStop] = useState<'start' | 'end'>('start');
  const [hexDraft, setHexDraft] = useState(value.solidColor);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const labelId = useId();
  const descId = useId();
  const popoverId = useId();

  // Derived-state-during-render (React's documented alternative to an
  // effect for "reset local state when a prop changes"): keep the hex draft
  // in sync when the color changes from outside (a preset swatch click, or
  // a different fixture being selected), and force-close the popover when
  // `disabled` flips true — both without an extra render pass from a
  // setState-in-effect.
  const [lastSolidColor, setLastSolidColor] = useState(value.solidColor);
  if (value.solidColor !== lastSolidColor) {
    setLastSolidColor(value.solidColor);
    setHexDraft(value.solidColor);
  }

  const [wasDisabled, setWasDisabled] = useState(disabled);
  if (disabled !== wasDisabled) {
    setWasDisabled(disabled);
    if (disabled) setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    function handlePointerDown(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, [open]);

  function toggleOpen() {
    if (disabled) return;
    setOpen((prev) => !prev);
  }

  function closeAndFocusTrigger() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  function handleRootKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Escape' && open) {
      event.preventDefault();
      closeAndFocusTrigger();
    }
  }

  function setMode(mode: ColorPickerMode) {
    if (disabled) return;
    onChange?.({ ...value, mode });
  }

  function selectPreset(color: string) {
    if (disabled) return;
    if (value.mode === 'solid') {
      onChange?.({ ...value, solidColor: color });
    } else if (activeStop === 'start') {
      onChange?.({ ...value, gradientStart: color });
    } else {
      onChange?.({ ...value, gradientEnd: color });
    }
  }

  function handleHexChange(event: React.ChangeEvent<HTMLInputElement>) {
    const next = event.target.value;
    setHexDraft(next);
    if (isValidHex(next)) {
      onChange?.({ ...value, solidColor: next });
    }
  }

  function handleAngleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange?.({ ...value, angle: Number(event.target.value) });
  }

  const swatchStyle: React.CSSProperties =
    value.mode === 'gradient'
      ? {
          backgroundImage: `linear-gradient(${value.angle}deg, ${value.gradientStart} 0%, ${value.gradientEnd} 100%)`,
        }
      : { backgroundColor: value.solidColor };

  const activeStopColor = activeStop === 'start' ? value.gradientStart : value.gradientEnd;

  return (
    <div className={styles.root} ref={rootRef} onKeyDown={handleRootKeyDown}>
      <span id={labelId} className={styles.label}>
        {label}
      </span>
      {description && (
        <p id={descId} className={styles.description}>
          {description}
        </p>
      )}
      <button
        type="button"
        ref={triggerRef}
        className={styles.trigger}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={open ? popoverId : undefined}
        aria-labelledby={labelId}
        disabled={disabled}
        onClick={toggleOpen}
      >
        <span className={styles.swatch} style={swatchStyle} aria-hidden="true" />
        <span className={styles.triggerValue}>
          {value.mode === 'solid' ? value.solidColor.toUpperCase() : `${value.angle}° gradient`}
        </span>
      </button>

      {open && !disabled && (
        <div
          id={popoverId}
          className={styles.popover}
          role="dialog"
          aria-label={`${label} color picker`}
        >
          <div className={styles.modeGroup} role="radiogroup" aria-label="Fill type">
            {(['solid', 'gradient'] as const).map((mode) => (
              <button
                key={mode}
                type="button"
                role="radio"
                aria-checked={value.mode === mode}
                className={
                  value.mode === mode
                    ? `${styles.modeOption} ${styles.modeOptionSelected}`
                    : styles.modeOption
                }
                onClick={() => setMode(mode)}
              >
                {mode === 'solid' ? 'Solid' : 'Gradient'}
              </button>
            ))}
          </div>

          {value.mode === 'solid' ? (
            <div className={styles.section}>
              <label className={styles.sectionLabel} htmlFor={`${popoverId}-hex`}>
                Hex value
              </label>
              <input
                id={`${popoverId}-hex`}
                type="text"
                className={styles.hexInput}
                value={hexDraft}
                onChange={handleHexChange}
                spellCheck={false}
                maxLength={7}
                aria-invalid={hexDraft.length > 0 && !isValidHex(hexDraft)}
              />
            </div>
          ) : (
            <div className={styles.section}>
              <span className={styles.sectionLabel} id={`${popoverId}-stops-label`}>
                Gradient stops
              </span>
              <div
                className={styles.stopRow}
                role="radiogroup"
                aria-labelledby={`${popoverId}-stops-label`}
              >
                <button
                  type="button"
                  role="radio"
                  aria-checked={activeStop === 'start'}
                  className={
                    activeStop === 'start'
                      ? `${styles.stopButton} ${styles.stopButtonActive}`
                      : styles.stopButton
                  }
                  style={{ backgroundColor: value.gradientStart }}
                  onClick={() => setActiveStop('start')}
                >
                  <span className={styles.srOnly}>Start color, {value.gradientStart}</span>
                </button>
                <button
                  type="button"
                  role="radio"
                  aria-checked={activeStop === 'end'}
                  className={
                    activeStop === 'end'
                      ? `${styles.stopButton} ${styles.stopButtonActive}`
                      : styles.stopButton
                  }
                  style={{ backgroundColor: value.gradientEnd }}
                  onClick={() => setActiveStop('end')}
                >
                  <span className={styles.srOnly}>End color, {value.gradientEnd}</span>
                </button>
                <span className={styles.stopHint}>
                  Editing {activeStop === 'start' ? 'start' : 'end'} color — pick a swatch below.
                </span>
              </div>

              <label className={styles.sectionLabel} htmlFor={`${popoverId}-angle`}>
                Angle: {value.angle}°
              </label>
              <input
                id={`${popoverId}-angle`}
                type="range"
                className={styles.angleInput}
                min={0}
                max={350}
                step={10}
                value={value.angle}
                onChange={handleAngleChange}
                aria-valuetext={`${value.angle} degrees`}
              />
            </div>
          )}

          <div className={styles.section}>
            <span className={styles.sectionLabel} id={`${popoverId}-palette-label`}>
              Preset Colors
            </span>
            <div
              className={styles.paletteGrid}
              role="listbox"
              aria-labelledby={`${popoverId}-palette-label`}
            >
              {PRESET_COLORS.map((color) => {
                const currentColor = value.mode === 'solid' ? value.solidColor : activeStopColor;
                const selected = currentColor.toLowerCase() === color.toLowerCase();
                return (
                  <button
                    key={color}
                    type="button"
                    role="option"
                    aria-selected={selected}
                    aria-label={`Color ${color}`}
                    title={color}
                    className={
                      selected
                        ? `${styles.paletteSwatch} ${styles.paletteSwatchSelected}`
                        : styles.paletteSwatch
                    }
                    style={{ backgroundColor: color }}
                    onClick={() => selectPreset(color)}
                  />
                );
              })}
            </div>
          </div>

          <div className={styles.preview} style={swatchStyle} aria-hidden="true" />
        </div>
      )}
    </div>
  );
}
