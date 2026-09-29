import type { PreviewFixture, PropSchemaField } from '../types';
import type { PaperformAiCreateProps } from './PaperformAiCreate';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialStep',
    type: "'landing' | 'clarify-1' | 'clarify-2' | 'generating' | 'preview' | 'editor'",
    required: false,
    description: "Which step of the flow the preview mounts showing. Defaults to 'landing'.",
  },
  {
    name: 'initialPath',
    type: "'text' | 'image'",
    required: false,
    description: "Which generation path is active. Defaults to 'text'.",
  },
  {
    name: 'onContinueInEditor',
    type: '() => void',
    required: false,
    description: 'Fired when "Continue in the editor" is clicked.',
  },
];

export const fixtures: PreviewFixture<PaperformAiCreateProps>[] = [
  {
    id: 'landing',
    title: 'Landing — prompt or attach an image/PDF',
    props: {
      initialStep: 'landing',
    },
  },
  {
    id: 'text-path-clarify',
    title: 'Text path — conversational clarifying questions (round 1)',
    props: {
      initialStep: 'clarify-1',
      initialPath: 'text',
    },
  },
  {
    id: 'text-path-preview',
    title: 'Text path — generated preview (exact clarified options)',
    props: {
      initialStep: 'preview',
      initialPath: 'text',
    },
  },
  {
    id: 'image-path-preview',
    title: 'Image path — generated preview (7 fields, correct types)',
    props: {
      initialStep: 'preview',
      initialPath: 'image',
    },
  },
  {
    id: 'editor',
    title: 'Continue in the editor — same builder, no AI-only surface',
    props: {
      initialStep: 'editor',
      initialPath: 'text',
    },
  },
];
