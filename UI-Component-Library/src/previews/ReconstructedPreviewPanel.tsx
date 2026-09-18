import { useState } from 'react';
import type { ReconstructedPreviewEntry } from './types';
import { PreviewBoundary } from './PreviewBoundary';
import styles from './ReconstructedPreviewPanel.module.css';

interface ReconstructedPreviewPanelProps {
  entry: ReconstructedPreviewEntry;
  componentName: string;
}

interface FixtureStageProps {
  Component: ReconstructedPreviewEntry['Component'];
  fixture: ReconstructedPreviewEntry['fixtures'][number];
  disabledOverride: boolean | null;
  requiredOverride: boolean | null;
  componentName: string;
}

function FixtureStage({
  Component,
  fixture,
  disabledOverride,
  requiredOverride,
  componentName,
}: FixtureStageProps) {
  const [value, setValue] = useState(fixture.props.value);

  // Not every reconstructed component is scalar-value-shaped (a dashboard or
  // a list-editor may take a `data`/`choices` prop instead of `value`) — only
  // forward the value/onChange/disabled/required/error contract for the keys
  // a given fixture actually declares, so components with a different prop
  // shape aren't handed unused/overriding props they never asked for.
  const hasValue = 'value' in fixture.props;
  const hasDisabled = disabledOverride !== null || 'disabled' in fixture.props;
  const hasRequired = requiredOverride !== null || 'required' in fixture.props;

  const disabled = hasDisabled ? (disabledOverride ?? fixture.props.disabled ?? false) : undefined;
  const required = hasRequired ? (requiredOverride ?? fixture.props.required ?? false) : undefined;
  // Live-reactive, not a frozen fixture snapshot: the "required" error only
  // shows while genuinely unanswered, and clears the moment a value is
  // picked — demonstrating real accessible validation behavior rather than
  // a static prop.
  const error =
    hasValue && required && value == null
      ? fixture.props.error || 'This field is required.'
      : undefined;

  const overrides: Record<string, unknown> = {};
  if (hasValue) {
    overrides.value = value;
    overrides.onChange = setValue;
    overrides.error = error;
  }
  if (hasDisabled) overrides.disabled = disabled;
  if (hasRequired) overrides.required = required;

  return (
    <PreviewBoundary componentName={componentName} exampleTitle={fixture.title}>
      <Component {...fixture.props} {...overrides} />
    </PreviewBoundary>
  );
}

export function ReconstructedPreviewPanel({
  entry,
  componentName,
}: ReconstructedPreviewPanelProps) {
  const { Component, fixtures, config, label, evidence, runtimeVerified } = entry;
  const [fixtureId, setFixtureId] = useState(fixtures[0].id);
  const [viewportId, setViewportId] = useState(config.viewports[0].id);
  const [disabledOverride, setDisabledOverride] = useState<boolean | null>(null);
  const [requiredOverride, setRequiredOverride] = useState<boolean | null>(null);

  const fixture = fixtures.find((f) => f.id === fixtureId) ?? fixtures[0];
  const viewport = config.viewports.find((v) => v.id === viewportId) ?? config.viewports[0];

  return (
    <div>
      <div className={styles.notice} role="note">
        <p className={styles.noticeText}>
          Reconstructed interactive preview based on documented Zoho Forms behavior. This is not the
          original Zoho source component.
        </p>
        <div className={styles.noticeMeta}>
          <span>{label}</span>
          <span>Evidence: {evidence}</span>
          <span>Runtime verified: {runtimeVerified ? 'Yes' : 'No'}</span>
        </div>
      </div>

      <div className={styles.toolbar}>
        <div className={styles.controlGroup}>
          <span className={styles.controlLabel}>Viewport</span>
          <div className={styles.controlRow} role="radiogroup" aria-label="Preview viewport">
            {config.viewports.map((v) => (
              <button
                key={v.id}
                type="button"
                role="radio"
                aria-checked={viewportId === v.id}
                className={
                  viewportId === v.id
                    ? `${styles.controlButton} ${styles.controlButtonActive}`
                    : styles.controlButton
                }
                onClick={() => setViewportId(v.id)}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.controlGroup}>
          <span className={styles.controlLabel}>Component state</span>
          <div className={styles.controlRow} role="radiogroup" aria-label="Preview fixture">
            {fixtures.map((f) => (
              <button
                key={f.id}
                type="button"
                role="radio"
                aria-checked={fixtureId === f.id}
                className={
                  fixtureId === f.id
                    ? `${styles.controlButton} ${styles.controlButtonActive}`
                    : styles.controlButton
                }
                onClick={() => setFixtureId(f.id)}
              >
                {f.title}
              </button>
            ))}
          </div>
        </div>

        {config.toggles.map((toggle) => {
          // Fixed set of override states declared above (never inside this
          // loop) — the map here only selects which one each toggle reads
          // from, it doesn't call any hooks itself.
          const current = toggle.id === 'disabled' ? disabledOverride : requiredOverride;
          const setCurrent = toggle.id === 'disabled' ? setDisabledOverride : setRequiredOverride;
          const isOn = Boolean(
            current ??
            (toggle.id === 'disabled' ? fixture.props.disabled : fixture.props.required) ??
            false
          );
          return (
            <div key={toggle.id} className={styles.controlGroup}>
              <span className={styles.controlLabel}>{toggle.label}</span>
              <div className={styles.controlRow} role="radiogroup" aria-label={toggle.label}>
                <button
                  type="button"
                  role="radio"
                  aria-checked={!isOn}
                  className={
                    !isOn
                      ? `${styles.controlButton} ${styles.controlButtonActive}`
                      : styles.controlButton
                  }
                  onClick={() => setCurrent(false)}
                >
                  {toggle.offLabel}
                </button>
                <button
                  type="button"
                  role="radio"
                  aria-checked={isOn}
                  className={
                    isOn
                      ? `${styles.controlButton} ${styles.controlButtonActive}`
                      : styles.controlButton
                  }
                  onClick={() => setCurrent(true)}
                >
                  {toggle.onLabel}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.stageOuter}>
        <div className={styles.stage} style={{ maxWidth: viewport.width }}>
          <FixtureStage
            key={fixtureId}
            Component={Component}
            fixture={fixture}
            disabledOverride={disabledOverride}
            requiredOverride={requiredOverride}
            componentName={componentName}
          />
        </div>
      </div>
    </div>
  );
}
