import { useEffect, useRef, useState } from 'react';
import styles from './PaperformAiCreate.module.css';

export type CreatePath = 'text' | 'image';
export type CreateStep = 'landing' | 'clarify-1' | 'clarify-2' | 'generating' | 'preview' | 'editor';

interface PollEntry {
  id: number;
  text: string;
}

export interface PaperformAiCreateProps {
  initialStep?: CreateStep;
  initialPath?: CreatePath;
  onContinueInEditor?: () => void;
}

const TEXT_FIELDS = [
  { label: 'Multiple Choice — Visit frequency', detail: 'Daily / A few times a week / Monthly' },
  { label: 'Multiple Choice — Favorite drink', detail: 'Espresso / Flat white / Filter coffee' },
  { label: 'Rating — Overall experience', detail: '5-star' },
  { label: 'Rating — Service', detail: '5-star' },
  { label: 'Comment box', detail: 'Anything else you’d like to share?' },
];

const IMAGE_FIELDS = [
  { label: 'Short Answer — Full name', detail: 'required' },
  { label: 'Date — Start date', detail: 'required' },
  { label: 'Phone Number — Contact number', detail: 'required' },
  { label: 'Dropdown — Membership type', detail: 'required' },
  { label: 'Short Answer — Address', detail: 'required' },
  { label: 'Short Answer — Emergency contact', detail: 'required' },
  { label: 'Signature', detail: 'required' },
];

/**
 * Reconstructed from Paperform's AI Create (PF11). Confirmed and reproduced
 * faithfully: the text-prompt path is conversational, not single-shot --
 * two rounds of AI-asked clarifying questions precede generation, and the
 * resulting fields use the exact values supplied in those rounds; the
 * image/PDF path skips clarification entirely and generates directly;
 * generation is poll-based (reproduced as a visible, timestamped poll log,
 * not a single immediate response, unlike paperform-calculation-field-ai-helper);
 * an unrelated marketing survey pop-up appears during the wait, dismissible;
 * the preview screen offers a "Request changes" box (present but inert here,
 * matching that it was never exercised in the source capture) and
 * "Continue in the editor", which lands in the same normal builder view for
 * both paths -- no separate AI-only editing surface, matching the confirmed
 * pattern shared with zia-ai-form-generator and typeform-ai-chat-to-create.
 */
export function PaperformAiCreate({
  initialStep = 'landing',
  initialPath = 'text',
  onContinueInEditor,
}: PaperformAiCreateProps) {
  const [step, setStep] = useState<CreateStep>(initialStep);
  const [path, setPath] = useState<CreatePath>(initialPath);
  const [pollLog, setPollLog] = useState<PollEntry[]>([]);
  const [surveyVisible, setSurveyVisible] = useState(false);
  const [surveyDismissed, setSurveyDismissed] = useState(false);
  const pollIdRef = useRef(0);
  const pollTimerRef = useRef<number | undefined>(undefined);

  const fields = path === 'text' ? TEXT_FIELDS : IMAGE_FIELDS;

  useEffect(() => {
    if (step !== 'generating') return;
    pollIdRef.current = 0;

    function poll() {
      pollIdRef.current += 1;
      const n = pollIdRef.current;
      setPollLog((prev) => [
        ...prev,
        { id: n, text: `GET /api/v1/ai-create/jobs/<jobId>  (poll #${n} — status: ${n < 3 ? 'processing' : 'complete'})` },
      ]);
      if (n === 2) setSurveyVisible(true);
      if (n >= 3) {
        window.clearInterval(pollTimerRef.current);
        window.setTimeout(() => setStep('preview'), 400);
        return;
      }
    }
    window.setTimeout(poll, 0);
    pollTimerRef.current = window.setInterval(poll, 700);
    return () => window.clearInterval(pollTimerRef.current);
  }, [step]);

  function beginGenerating() {
    setPollLog([]);
    setSurveyVisible(false);
    setSurveyDismissed(false);
    setStep('generating');
  }

  function startTextPath() {
    setPath('text');
    setStep('clarify-1');
  }

  function startImagePath() {
    setPath('image');
    beginGenerating();
  }

  function continueInEditor() {
    setStep('editor');
    onContinueInEditor?.();
  }

  return (
    <div className={styles.root}>
      {step === 'landing' && (
        <div className={styles.panel}>
          <label htmlFor="ai-prompt" className={styles.label}>
            Describe the form you want to create
          </label>
          <textarea
            id="ai-prompt"
            className={styles.textarea}
            placeholder="a customer feedback form for a coffee shop, asking about visit frequency, favorite drink, and a 5-star rating"
            defaultValue="a customer feedback form for a coffee shop, asking about visit frequency, favorite drink, and a 5-star rating"
          />
          <div className={styles.landingActions}>
            <button type="button" className={styles.primaryButton} onClick={startTextPath}>
              Generate
            </button>
            <button type="button" className={styles.secondaryButton} onClick={startImagePath}>
              Attach a PDF or image
            </button>
          </div>
        </div>
      )}

      {step === 'clarify-1' && (
        <div className={styles.panel}>
          <p className={styles.chatBubble}>
            Round 1: How should visit frequency be offered? How should they pick a drink? What&apos;s the
            5-star rating for? Any extra questions to include?
          </p>
          <button type="button" className={styles.primaryButton} onClick={() => setStep('clarify-2')}>
            Answer &amp; continue
          </button>
        </div>
      )}

      {step === 'clarify-2' && (
        <div className={styles.panel}>
          <p className={styles.chatBubble}>
            Round 2: What are the actual frequency options and drink choices? How should service be rated?
          </p>
          <button type="button" className={styles.primaryButton} onClick={beginGenerating}>
            Answer &amp; generate
          </button>
        </div>
      )}

      {step === 'generating' && (
        <div className={styles.panel}>
          <p className={styles.hint} aria-live="polite">
            Generating your form…
          </p>
          <div className={styles.pollLog}>
            <span className={styles.pollLogLabel}>
              Network (confirmed poll-based, not a single immediate response):
            </span>
            <ul>
              {pollLog.map((entry) => (
                <li key={entry.id}>{entry.text}</li>
              ))}
            </ul>
          </div>
          {surveyVisible && !surveyDismissed && (
            <div className={styles.surveyPopup} role="dialog" aria-label="How did you first hear about Paperform?">
              How did you first hear about Paperform?
              <button
                type="button"
                className={styles.surveyClose}
                aria-label="Dismiss survey"
                onClick={() => setSurveyDismissed(true)}
              >
                ✕
              </button>
            </div>
          )}
        </div>
      )}

      {step === 'preview' && (
        <div className={styles.panel}>
          <h3 className={styles.previewTitle}>
            {path === 'text' ? 'Coffee Shop Feedback' : 'Gym Membership Application'}
          </h3>
          <ul className={styles.fieldList}>
            {fields.map((f) => (
              <li key={f.label} className={styles.fieldCard}>
                <strong>{f.label}</strong>
                <span className={styles.fieldDetail}>{f.detail}</span>
              </li>
            ))}
          </ul>
          <label htmlFor="request-changes" className={styles.label}>
            Request changes
          </label>
          <textarea id="request-changes" className={styles.textarea} placeholder="Describe what to change…" />
          <button type="button" className={styles.primaryButton} onClick={continueInEditor}>
            Continue in the editor
          </button>
        </div>
      )}

      {step === 'editor' && (
        <div className={styles.panel}>
          <p className={styles.hint}>
            Now in the normal document-canvas builder — the same editor used for every other Paperform
            form (see document-canvas-editor-shell). No separate AI-only editing surface.
          </p>
          <ul className={styles.fieldList}>
            {fields.map((f) => (
              <li key={f.label} className={styles.fieldCard}>
                <strong>{f.label}</strong>
                <span className={styles.fieldDetail}>{f.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
