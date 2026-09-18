import styles from './ViewSwitcher.module.css';

export type AudienceView = 'technical' | 'human' | 'ai';

const OPTIONS: { id: AudienceView; label: string }[] = [
  { id: 'technical', label: 'Technical' },
  { id: 'human', label: 'Human' },
  { id: 'ai', label: 'AI Context' },
];

interface ViewSwitcherProps {
  active: AudienceView;
  onChange: (view: AudienceView) => void;
}

export function ViewSwitcher({ active, onChange }: ViewSwitcherProps) {
  return (
    <div className={styles.track} role="radiogroup" aria-label="Documentation audience view">
      {OPTIONS.map((option) => (
        <button
          key={option.id}
          type="button"
          role="radio"
          aria-checked={active === option.id}
          className={
            active === option.id ? `${styles.option} ${styles.optionActive}` : styles.option
          }
          onClick={() => onChange(option.id)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
