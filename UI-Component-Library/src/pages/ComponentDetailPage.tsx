import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getComponent } from '@utils/loadComponents';
import { Markdown } from '@components/detail/Markdown';
import { Tabs, type TabItem } from '@components/detail/Tabs';
import { EvidenceBanner } from '@components/detail/EvidenceBanner';
import { ResearchCoveragePanel, type CoverageItem } from '@components/detail/ResearchCoveragePanel';
import { ViewSwitcher, type AudienceView } from '@components/detail/ViewSwitcher';
import { HumanView } from '@components/detail/HumanView';
import { AIContextView } from '@components/detail/AIContextView';
import {
  AccessibilityPanel,
  ChangelogPanel,
  PropsEndpointPanel,
  RelatedComponentsPanel,
  SourceFilesPanel,
} from '@components/detail/TechnicalExtras';
import { extractAccessibilityNotes, extractCrossLinks } from '@utils/evidenceExtraction';
import type { ComponentSection } from '@models/content.types';
import { previewRegistry } from '@/previews/registry';
import { PreviewPanel } from '@/previews/PreviewPanel';
import { sourceRegistry } from '@/previews/sourceRegistry';
import { CodePanel } from '@/previews/CodePanel';
import { VectorPanel } from '@/previews/VectorPanel';
import styles from './ComponentDetailPage.module.css';

const TAB_MAP: { id: string; label: string; headings: string[] }[] = [
  {
    id: 'overview',
    label: 'Usage',
    headings: ['Location', 'Structure', 'Actions', 'Behavior & States'],
  },
  { id: 'rules', label: 'Rules', headings: ['Rules & Validation'] },
  {
    id: 'technical',
    label: 'Technical Data',
    headings: [
      'Technical Data',
      'Second-Pass Flags',
      'Recommended Second Pass',
      'Methodological Note',
    ],
  },
  { id: 'lessons', label: 'Lessons', headings: ['Cross-Component Pattern Note'] },
  {
    id: 'comparisons',
    label: 'Comparisons',
    headings: ['Competitor Comparisons', 'Best Observed Approach'],
  },
  { id: 'sources', label: 'Sources', headings: ['Sources'] },
];

function sectionsFor(sections: ComponentSection[], headings: string[]): ComponentSection[] {
  return sections.filter((s) => headings.includes(s.heading));
}

export function ComponentDetailPage() {
  const { brand = '', id = '' } = useParams();
  const entry = getComponent(brand, id);
  const [view, setView] = useState<AudienceView>('technical');

  if (!entry) {
    return (
      <div className={styles.notFound}>
        <h1>Component not found</h1>
        <p>
          No component matches{' '}
          <code>
            {brand}/{id}
          </code>
          .
        </p>
        <Link to="/">← Back to overview</Link>
      </div>
    );
  }

  const { frontmatter, sections } = entry;

  const previewEntry = previewRegistry[id];
  const sourceEntry = sourceRegistry[id];

  const contentTabById = new Map(
    TAB_MAP.map((tabDef) => {
      const matched = sectionsFor(sections, tabDef.headings);
      const tab: TabItem = {
        id: tabDef.id,
        label: tabDef.label,
        content: matched.map((section) => (
          <div key={section.heading} style={{ marginBottom: 'var(--spacing-4)' }}>
            {matched.length > 1 && <h3>{section.heading}</h3>}
            <Markdown source={section.bodyMarkdown} />
          </div>
        )),
      };
      return [tabDef.id, { tab, hasContent: matched.length > 0 }] as const;
    })
  );

  // Existing research-prose tabs stay hidden when the record has nothing for
  // that heading (unchanged behavior). The new derived tabs below always
  // render — they're evidence-completeness views, not artifact-presence
  // views, so an empty result is shown as an explicit gap, never omitted.
  const usageTab = contentTabById.get('overview')!;
  const rulesTab = contentTabById.get('rules')!;
  const technicalTab = contentTabById.get('technical')!;
  const lessonsTab = contentTabById.get('lessons')!;
  const comparisonsTab = contentTabById.get('comparisons')!;
  const sourcesTab = contentTabById.get('sources')!;

  const tabs: TabItem[] = [
    {
      id: 'preview',
      label: 'Preview',
      content: previewEntry ? (
        <PreviewPanel
          entry={previewEntry}
          componentName={frontmatter.component}
          sourceProduct={frontmatter.source_product}
        />
      ) : (
        <p className={styles.noPreview}>
          No design preview built yet — source: <code>{id}.md</code>
        </p>
      ),
    },
    {
      id: 'props-endpoint',
      label: 'Props/Endpoint',
      content: <PropsEndpointPanel entry={entry} previewEntry={previewEntry} />,
    },
    ...(usageTab.hasContent ? [usageTab.tab] : []),
    ...(sourceEntry
      ? [{ id: 'code', label: 'Code', content: <CodePanel entry={sourceEntry} /> }]
      : []),
    ...(rulesTab.hasContent ? [rulesTab.tab] : []),
    ...(technicalTab.hasContent ? [technicalTab.tab] : []),
    ...(lessonsTab.hasContent ? [lessonsTab.tab] : []),
    { id: 'accessibility', label: 'Accessibility', content: <AccessibilityPanel entry={entry} /> },
    ...(comparisonsTab.hasContent ? [comparisonsTab.tab] : []),
    { id: 'changelog', label: 'Changelog', content: <ChangelogPanel entry={entry} /> },
    ...(sourcesTab.hasContent ? [sourcesTab.tab] : []),
    {
      id: 'source-files',
      label: 'Source Files',
      content: <SourceFilesPanel entry={entry} sourceEntry={sourceEntry} />,
    },
    {
      id: 'related-components',
      label: 'Related Components',
      content: <RelatedComponentsPanel entry={entry} />,
    },
    { id: 'vector', label: 'Vector', content: <VectorPanel entry={entry} /> },
  ];

  const coverageItems: CoverageItem[] = [
    { label: 'Overview', ready: usageTab.hasContent },
    { label: 'Rules', ready: rulesTab.hasContent },
    { label: 'Technical Data', ready: technicalTab.hasContent },
    { label: 'Lessons', ready: lessonsTab.hasContent },
    { label: 'Comparisons', ready: comparisonsTab.hasContent },
    { label: 'Sources', ready: sourcesTab.hasContent },
    { label: 'Interactive preview', ready: Boolean(previewEntry) },
    { label: 'Code', ready: Boolean(sourceEntry) },
    { label: 'Accessibility', ready: extractAccessibilityNotes(sections).length > 0 },
    { label: 'Related components', ready: extractCrossLinks(entry).length > 0 },
  ];

  return (
    // Keyed by brand/id: React Router reuses this same component instance
    // when only the :id param changes (navigating between two different
    // components' pages), so every useState inside this tree — active tab,
    // active Preview fixture, and critically a fixture's live `value` state
    // — would otherwise persist stale across navigation and get handed to
    // the WRONG component. The key forces a full remount on every
    // navigation to a different component, resetting all of that state.
    <article key={`${brand}/${id}`} className={styles.layout}>
      <div className={styles.mainColumn}>
        <div className={styles.eyebrow}>{frontmatter.ui_category}</div>
        <h1 className={styles.title}>{frontmatter.component}</h1>
        <p className={styles.summary}>{frontmatter.summary}</p>

        <div className={styles.metaGrid}>
          <div>
            <div className={styles.metaLabel}>Product</div>
            <div className={styles.metaValue}>{frontmatter.source_product}</div>
          </div>
          <div>
            <div className={styles.metaLabel}>Group</div>
            <div className={styles.metaValue}>{frontmatter.ui_category}</div>
          </div>
          <div>
            <div className={styles.metaLabel}>Status</div>
            <div className={styles.metaValue}>
              <span className={`pill pill--${frontmatter.status}`}>{frontmatter.status}</span>
            </div>
          </div>
          <div>
            <div className={styles.metaLabel}>Last verified</div>
            <div className={styles.metaValue}>{frontmatter.last_verified}</div>
          </div>
          <div>
            <div className={styles.metaLabel}>ID</div>
            <div className={styles.metaValue}>
              {brand}/{id}
            </div>
          </div>
        </div>

        <EvidenceBanner evidenceState={frontmatter.evidence_state} />
        <ViewSwitcher active={view} onChange={setView} />

        {view === 'technical' && (
          <>
            <h2 className={styles.demoHeading}>Demo</h2>
            <div className={styles.card}>
              <Tabs items={tabs} idPrefix={`${brand}-${id}`} />
            </div>
          </>
        )}
        {view === 'human' && (
          <div className={styles.card}>
            <HumanView entry={entry} />
          </div>
        )}
        {view === 'ai' && (
          <div className={styles.card}>
            <AIContextView entry={entry} />
          </div>
        )}
      </div>

      <ResearchCoveragePanel
        category={frontmatter.ui_category}
        product={frontmatter.source_product}
        status={frontmatter.status}
        lastVerified={frontmatter.last_verified}
        items={coverageItems}
      />
    </article>
  );
}
