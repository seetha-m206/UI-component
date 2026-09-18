import type { PreviewFixture, PropSchemaField } from '../types';
import type { TypeformChoicesListEditorProps } from './TypeformChoicesListEditor';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'choices',
    type: 'TypeformChoiceItem[]',
    required: true,
    description:
      'Ordered list of { id, value } choice rows. Letter badges (A, B, C…) are always derived live from this order — reordering or deleting immediately re-letters every remaining row.',
  },
  {
    name: 'onChange',
    type: '(choices: TypeformChoiceItem[]) => void',
    required: false,
    description:
      'Called with the full next array on add, delete, reorder (drag or keyboard), or a row losing focus after an edit.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description:
      'Prevents all interaction (typing, add, delete, reorder) when true. Defaults to false.',
  },
];

function choices(...values: string[]) {
  return values.map((value, i) => ({ id: `seed-${i}`, value }));
}

/**
 * Deterministic synthetic data only — no real form/account content. The
 * default 3-choice list (Red/Green/Blue) mirrors the record's own tested
 * scenario verbatim.
 */
export const fixtures: PreviewFixture<TypeformChoicesListEditorProps>[] = [
  {
    id: 'default-three',
    title: 'Default (3 choices)',
    props: {
      choices: choices('Red', 'Green', 'Blue'),
      disabled: false,
    },
  },
  {
    id: 'longer-list',
    title: 'Longer list (6 choices)',
    props: {
      choices: choices('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
      disabled: false,
    },
  },
  {
    id: 'disabled',
    title: 'Disabled',
    props: {
      choices: choices('North America', 'Europe', 'Asia Pacific', 'Other'),
      disabled: true,
    },
  },
];
