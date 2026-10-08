export type EvidenceState =
  | 'documented'
  | 'source_reviewed'
  | 'reproduced_offline'
  | 'runtime_verified'
  | 'runtime_pending'
  | 'historical_only'
  | 'open_finding'
  | 'documentation_corrected';

export interface ComponentFrontmatter {
  component: string;
  ui_category: string;
  source_product: string;
  last_verified: string;
  status: 'complete' | 'partial' | 'incomplete';
  summary: string;
  evidence_state: EvidenceState;
  parent_workflow?: string;
  component_level?: string;
}

export interface ComponentSection {
  heading: string;
  bodyMarkdown: string;
}

export interface ComponentEntry {
  id: string;
  brand: string;
  frontmatter: ComponentFrontmatter;
  sections: ComponentSection[];
  url: string;
}
