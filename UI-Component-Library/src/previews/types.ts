import type { ComponentType } from 'react';

export interface PreviewExample<P = Record<string, unknown>> {
  title: string;
  description?: string;
  props: P;
}

/** A static, non-interactive set of pre-rendered example props (the original Preview pattern). */
export interface StaticPreviewEntry {
  type?: 'static';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: ComponentType<any>;
  examples: PreviewExample[];
}

export interface PreviewViewport {
  id: string;
  label: string;
  width: number;
}

export interface PreviewToggleControl {
  id: string;
  label: string;
  onLabel: string;
  offLabel: string;
}

export interface PreviewConfig {
  viewports: PreviewViewport[];
  toggles: PreviewToggleControl[];
}

export interface PreviewFixture<P = Record<string, unknown>> {
  id: string;
  title: string;
  props: P;
}

export interface PropSchemaField {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

/**
 * A hand-reimplemented, genuinely interactive preview (mouse + keyboard), with a
 * viewport/state/toggle control harness. This is the canonical pattern going
 * forward — see src/previews/yes-no-toggle-field/ for the reference implementation.
 */
export interface ReconstructedPreviewEntry {
  type: 'reconstructed';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: ComponentType<any>;
  label: string;
  evidence: string;
  runtimeVerified: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fixtures: PreviewFixture<any>[];
  config: PreviewConfig;
  propsSchema: PropSchemaField[];
}

export type PreviewEntry = StaticPreviewEntry | ReconstructedPreviewEntry;
export type PreviewRegistry = Record<string, PreviewEntry>;
