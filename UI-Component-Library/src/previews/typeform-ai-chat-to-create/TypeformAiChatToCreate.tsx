import { useEffect, useId, useRef, useState } from 'react';
import styles from './TypeformAiChatToCreate.module.css';

export type ChatToCreateStep = 'closed' | 'generating' | 'result';
export type ResultViewTab = 'suggested-changes' | 'preview';

interface ConversationMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
}

/**
 * The exact tested prompt from the source record's Sources section:
 * "submitting an actual AI generation prompt ('Create a customer feedback
 * survey with 3 questions')." Used as the default so a fixture mounted
 * directly into 'generating'/'result' shows the real tested exchange, not
 * an invented one.
 */
const DEFAULT_PROMPT = 'Create a customer feedback survey with 3 questions';

/**
 * The record's own network capture, verbatim: `POST
 * /copilot/transform-actions-tense` maps the past-tense action string to
 * its present-continuous form for the loading state. Both strings are
 * fixed/canned here — see README "Deliberate scoping decision: canned
 * generated content."
 */
const ACTION_PAST_TENSE = 'Created a three-question feedback survey.';
const ACTION_PRESENT_CONTINUOUS = 'Creating a three-question feedback survey.';
const FOLLOW_UP_MESSAGE = 'Added. Is there anything else you’d like to include?';
const GENERATED_FORM_TITLE = 'Customer Feedback Survey';

interface SuggestedQuestion {
  id: string;
  number: number;
  icon: string;
  tone: 'rating' | 'text';
  title: string;
  description: string;
}

/**
 * The canned "Suggested changes" outline. Field types/order (rating, then
 * two deep_dive questions) and the icon color-coding (green for rating,
 * blue for text) are directly documented in the source record; the exact
 * question wording is this reconstruction's own reasonable placeholder —
 * the record never captured the literal generated question text, only the
 * field types and count. See README.
 */
const SUGGESTED_QUESTIONS: SuggestedQuestion[] = [
  {
    id: 'q1',
    number: 1,
    icon: '★',
    tone: 'rating',
    title: 'How satisfied are you with our product?',
    description: 'Rating — 5-step star',
  },
  {
    id: 'q2',
    number: 2,
    icon: '✎',
    tone: 'text',
    title: 'What did you like most about your experience?',
    description: 'Open-ended, AI-enhanced follow-up',
  },
  {
    id: 'q3',
    number: 3,
    icon: '✎',
    tone: 'text',
    title: 'What could we improve?',
    description: 'Open-ended, AI-enhanced follow-up',
  },
];

let messageIdCounter = 0;
function nextMessageId(prefix: string): string {
  messageIdCounter += 1;
  return `${prefix}-${messageIdCounter}`;
}

export interface TypeformAiChatToCreateProps {
  /** Which step the component starts on. Defaults to 'closed' (just the
   * persistent bottom-anchored trigger input). This component owns its own
   * step/conversation state from then on via internal useState — the same
   * self-managed pattern as `new-form-chooser`. Mounting directly into
   * 'generating' or 'result' shows a frozen snapshot of that stage (no
   * timer is scheduled for a fixture-driven mount — see README); the timer
   * only ever runs as a result of a real, in-preview prompt submission. */
  initialStep?: ChatToCreateStep;
  /** Which right-pane view is active when step is 'result'. Defaults to
   * 'suggested-changes'. */
  initialActiveTab?: ResultViewTab;
  /** The user's prompt text. Prefills the trigger input when `initialStep`
   * is 'closed', and is shown as the first conversation bubble when
   * mounted directly into 'generating'/'result'. Defaults to the record's
   * own tested prompt. */
  initialPrompt?: string;
  /** How long the simulated "generating" phase lasts after a real
   * in-preview submission, in milliseconds. Kept short and deterministic
   * for testability (fake timers) rather than mimicking the record's
   * actual ~5–7s — see README. Defaults to 600ms. */
  generationDelayMs?: number;
  /** Fired when "Create form" is clicked. Closes the modal and resets to
   * 'closed'. No real form is created. */
  onCreateForm?: () => void;
  /** Fired when the discard-confirmation dialog's "Discard suggestions" is
   * confirmed. Closes the modal and resets to 'closed'. */
  onDiscard?: () => void;
}

interface FeedbackButtonsProps {
  messageId: string;
  vote: 'up' | 'down' | null;
  onVote: (messageId: string, vote: 'up' | 'down') => void;
}

function FeedbackButtons({ messageId, vote, onVote }: FeedbackButtonsProps) {
  return (
    <div className={styles.feedbackRow}>
      <button
        type="button"
        aria-label="Mark response as helpful"
        aria-pressed={vote === 'up'}
        className={
          vote === 'up' ? `${styles.feedbackButton} ${styles.feedbackButtonActive}` : styles.feedbackButton
        }
        onClick={() => onVote(messageId, 'up')}
      >
        &#128077;
      </button>
      <button
        type="button"
        aria-label="Mark response as not helpful"
        aria-pressed={vote === 'down'}
        className={
          vote === 'down'
            ? `${styles.feedbackButton} ${styles.feedbackButtonActive}`
            : styles.feedbackButton
        }
        onClick={() => onVote(messageId, 'down')}
      >
        &#128078;
      </button>
    </div>
  );
}

/**
 * Reconstructed from Typeform's "Ask Typeform AI" / "Chat to create"
 * copilot: a persistent bottom-anchored trigger input, and — once a prompt
 * is submitted — a full-viewport two-pane "Typeform AI" modal (chat thread
 * left, Suggested-changes/Preview toggle right). Manages its own
 * step/conversation state internally; see this folder's README for the
 * full evidence trail, and in particular the two deliberate scoping
 * decisions (canned generated content; no real multi-turn regeneration)
 * called out there explicitly.
 */
export function TypeformAiChatToCreate({
  initialStep = 'closed',
  initialActiveTab = 'suggested-changes',
  initialPrompt = DEFAULT_PROMPT,
  generationDelayMs = 600,
  onCreateForm,
  onDiscard,
}: TypeformAiChatToCreateProps) {
  const [step, setStep] = useState<ChatToCreateStep>(initialStep);
  const [activeTab, setActiveTab] = useState<ResultViewTab>(initialActiveTab);
  const [triggerText, setTriggerText] = useState(initialStep === 'closed' ? initialPrompt : '');
  const [followUpText, setFollowUpText] = useState('');
  const [messages, setMessages] = useState<ConversationMessage[]>(() => {
    if (initialStep === 'closed') return [];
    const seedUserMessage: ConversationMessage = {
      id: nextMessageId('seed'),
      sender: 'user',
      text: initialPrompt,
    };
    if (initialStep === 'generating') {
      // A frozen "still generating" snapshot — no AI response exists yet.
      return [seedUserMessage];
    }
    // 'result': the full exchange, so a fixture mounted directly into this
    // step shows exactly what a completed generation cycle looks like,
    // not just the user's half of it.
    return [
      seedUserMessage,
      { id: nextMessageId('seed-ai'), sender: 'ai', text: ACTION_PAST_TENSE },
      { id: nextMessageId('seed-ai-followup'), sender: 'ai', text: FOLLOW_UP_MESSAGE },
    ];
  });
  const [votes, setVotes] = useState<Record<string, 'up' | 'down'>>({});
  const [discardConfirmOpen, setDiscardConfirmOpen] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const discardCancelButtonRef = useRef<HTMLButtonElement>(null);
  const modalHeadingId = useId();
  const discardHeadingId = useId();

  const aiResponseMessage = messages.find((m) => m.sender === 'ai' && m.text === ACTION_PAST_TENSE);

  // Auto-focus something inside whichever overlay just opened, both as
  // standard modal-focus-management practice and so Escape (which relies
  // on the keydown bubbling up through the dialog's own onKeyDown) has
  // something focused to bubble from — the same pattern `new-form-chooser`
  // establishes for its own overlays. Runs for both a live step transition
  // and a fixture-driven direct mount into 'generating'/'result'.
  useEffect(() => {
    if (step === 'generating' || step === 'result') {
      closeButtonRef.current?.focus();
    }
  }, [step]);

  useEffect(() => {
    if (discardConfirmOpen) {
      discardCancelButtonRef.current?.focus();
    }
  }, [discardConfirmOpen]);

  function beginGeneration(promptText: string) {
    const trimmed = promptText.trim();
    if (!trimmed) return;
    setMessages([{ id: nextMessageId('user'), sender: 'user', text: trimmed }]);
    setActiveTab('suggested-changes');
    setStep('generating');
    setTriggerText('');

    // Real, controllable timed transition (not an unbounded async wait) —
    // per the task's explicit instruction, `generationDelayMs` lets tests
    // use `vi.useFakeTimers()` to assert on both the interim "generating"
    // state and the final "result" state deterministically.
    timeoutRef.current = setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: nextMessageId('ai-checklist'), sender: 'ai', text: ACTION_PAST_TENSE },
        { id: nextMessageId('ai-followup'), sender: 'ai', text: FOLLOW_UP_MESSAGE },
      ]);
      setStep('result');
    }, generationDelayMs);
  }

  function handleTriggerSubmit() {
    beginGeneration(triggerText);
  }

  /**
   * The second, in-modal chat input for multi-turn conversation. Per the
   * task's instruction, multi-turn regeneration was never actually tested
   * in the source record (flagged in its own "Recommended Second Pass").
   * This reconstruction honestly reflects that: a follow-up message is
   * genuinely appended to the thread (real, testable interaction), but no
   * second AI response/regeneration is invented — see README.
   */
  function handleFollowUpSubmit() {
    const trimmed = followUpText.trim();
    if (!trimmed) return;
    setMessages((prev) => [...prev, { id: nextMessageId('user-followup'), sender: 'user', text: trimmed }]);
    setFollowUpText('');
  }

  function handleVote(messageId: string, vote: 'up' | 'down') {
    setVotes((prev) => ({ ...prev, [messageId]: prev[messageId] === vote ? prev[messageId] : vote }));
  }

  function resetAll() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setStep('closed');
    setMessages([]);
    setTriggerText('');
    setFollowUpText('');
    setDiscardConfirmOpen(false);
  }

  function requestClose() {
    // Per the record: "Closing the chat before clicking 'Create form'
    // triggers a confirmation." Whether this also fires mid-generation
    // specifically (vs. only once a result exists) wasn't independently
    // distinguished in the record — treated the same way here, since both
    // states represent an active, unapplied AI interaction. See README.
    if (step === 'generating' || step === 'result') {
      setDiscardConfirmOpen(true);
      return;
    }
    resetAll();
  }

  function confirmDiscard() {
    onDiscard?.();
    resetAll();
  }

  function cancelDiscard() {
    setDiscardConfirmOpen(false);
    closeButtonRef.current?.focus();
  }

  function handleCreateForm() {
    onCreateForm?.();
    resetAll();
  }

  function handleModalKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Escape') {
      event.preventDefault();
      requestClose();
    }
  }

  return (
    <div className={styles.root}>
      {/* ---- Persistent bottom-anchored trigger input ---- */}
      <div className={styles.triggerBar}>
        <span className={styles.decorativeIcon} aria-hidden="true" title="Voice dictation — not implemented in this reconstruction">
          &#127908;
        </span>
        <input
          type="text"
          className={styles.triggerInput}
          placeholder="Ask Typeform AI to build a form…"
          aria-label="Ask Typeform AI"
          value={triggerText}
          onChange={(e) => setTriggerText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleTriggerSubmit();
            }
          }}
        />
        <span className={styles.decorativeIcon} aria-hidden="true" title="Add Files — not implemented in this reconstruction">
          &#128206;
        </span>
        <span className={styles.decorativeIcon} aria-hidden="true" title="More options — not implemented in this reconstruction">
          &#8943;
        </span>
        <button
          type="button"
          className={styles.sendButton}
          aria-label="Ask Typeform AI"
          disabled={!triggerText.trim()}
          onClick={handleTriggerSubmit}
        >
          &#10148;
        </button>
      </div>

      {(step === 'generating' || step === 'result') && (
        <div className={styles.overlay}>
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby={modalHeadingId}
            onKeyDown={handleModalKeyDown}
          >
            <div className={styles.modalHeader}>
              <h2 id={modalHeadingId} className={styles.modalHeading}>
                Typeform AI
                <span className={styles.betaBadge}>Beta</span>
              </h2>
              <button
                ref={closeButtonRef}
                type="button"
                className={styles.closeButton}
                aria-label="Close copilot chat"
                onClick={requestClose}
              >
                &#10005;
              </button>
            </div>

            <div className={styles.modalBody}>
              {/* ---- Left pane: conversation ---- */}
              <div className={styles.conversationPane}>
                <div className={styles.messageList} aria-live="polite">
                  {messages.map((message) =>
                    message.sender === 'user' ? (
                      <p key={message.id} className={styles.userBubble}>
                        {message.text}
                      </p>
                    ) : (
                      <div key={message.id} className={styles.aiBubble}>
                        {message.text === ACTION_PAST_TENSE ? (
                          <>
                            <p className={styles.aiIntro}>Here&rsquo;s what we did:</p>
                            <ul className={styles.checklist}>
                              <li>
                                <span aria-hidden="true">&#10003;</span> {message.text}
                              </li>
                            </ul>
                            <FeedbackButtons
                              messageId={message.id}
                              vote={votes[message.id] ?? null}
                              onVote={handleVote}
                            />
                          </>
                        ) : (
                          <p>{message.text}</p>
                        )}
                      </div>
                    )
                  )}
                  {step === 'generating' && (
                    <div className={styles.generatingBubble} role="status">
                      <span className={styles.generatingSpinner} aria-hidden="true" />
                      {ACTION_PRESENT_CONTINUOUS}
                    </div>
                  )}
                </div>

                {step === 'result' && (
                  <div className={styles.followUpRow}>
                    <input
                      type="text"
                      className={styles.followUpInput}
                      placeholder="Ask Typeform AI"
                      aria-label="Continue the conversation with Typeform AI"
                      value={followUpText}
                      onChange={(e) => setFollowUpText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleFollowUpSubmit();
                        }
                      }}
                    />
                    <button
                      type="button"
                      className={styles.sendButton}
                      aria-label="Send follow-up message"
                      disabled={!followUpText.trim()}
                      onClick={handleFollowUpSubmit}
                    >
                      &#10148;
                    </button>
                  </div>
                )}
              </div>

              {/* ---- Right pane: suggested changes / preview ---- */}
              <div className={styles.previewPane}>
                <div className={styles.viewToggle} role="radiogroup" aria-label="View">
                  <button
                    type="button"
                    role="radio"
                    aria-checked={activeTab === 'suggested-changes'}
                    className={
                      activeTab === 'suggested-changes'
                        ? `${styles.viewToggleButton} ${styles.viewToggleButtonActive}`
                        : styles.viewToggleButton
                    }
                    onClick={() => setActiveTab('suggested-changes')}
                  >
                    Suggested changes
                  </button>
                  <button
                    type="button"
                    role="radio"
                    aria-checked={activeTab === 'preview'}
                    className={
                      activeTab === 'preview'
                        ? `${styles.viewToggleButton} ${styles.viewToggleButtonActive}`
                        : styles.viewToggleButton
                    }
                    onClick={() => setActiveTab('preview')}
                  >
                    &#9654; Preview
                  </button>
                </div>

                {step === 'generating' && !aiResponseMessage ? (
                  <p className={styles.previewPlaceholder}>
                    Suggestions will appear here once generation completes.
                  </p>
                ) : activeTab === 'suggested-changes' ? (
                  <div className={styles.suggestedChanges}>
                    <h3 className={styles.suggestedHeading}>Questions to be set:</h3>
                    <div className={styles.card}>
                      <span className={`${styles.cardIcon} ${styles.cardIconWelcome}`} aria-hidden="true">
                        &#128226;
                      </span>
                      <div>
                        <p className={styles.cardTitle}>Welcome Screen</p>
                        <p className={styles.cardDescription}>
                          Invites respondents to start your feedback survey.
                        </p>
                      </div>
                    </div>
                    {SUGGESTED_QUESTIONS.map((question) => (
                      <div key={question.id} className={styles.card}>
                        <span
                          className={`${styles.cardIcon} ${
                            question.tone === 'rating' ? styles.cardIconRating : styles.cardIconText
                          }`}
                          aria-hidden="true"
                        >
                          {question.icon}
                        </span>
                        <div>
                          <p className={styles.cardTitle}>
                            <span className={styles.cardNumber}>{question.number}</span>
                            {question.title}
                          </p>
                          <p className={styles.cardDescription}>{question.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={styles.phoneMockup}>
                    <p className={styles.phoneTitle}>{GENERATED_FORM_TITLE}</p>
                    <p className={styles.phoneDescription}>
                      We&rsquo;d love to hear your feedback — it only takes a minute.
                    </p>
                    <button type="button" className={styles.phoneCta} disabled>
                      Start
                    </button>
                    <p className={styles.phoneTimeEstimate}>&#9201; Takes 1 minute</p>
                  </div>
                )}
              </div>
            </div>

            <div className={styles.modalFooter}>
              {step === 'result' && (
                <button type="button" className={styles.createFormButton} onClick={handleCreateForm}>
                  Create form
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {discardConfirmOpen && (
        <div className={styles.overlay}>
          <div
            className={styles.confirmDialog}
            role="alertdialog"
            aria-modal="true"
            aria-labelledby={discardHeadingId}
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
                event.preventDefault();
                cancelDiscard();
              }
            }}
          >
            <h2 id={discardHeadingId} className={styles.confirmHeading}>
              Discard form suggestions?
            </h2>
            <p className={styles.confirmBody}>
              If you close the chat, you&rsquo;ll lose any unapplied AI suggestions for this form.
            </p>
            <div className={styles.confirmActions}>
              <button
                ref={discardCancelButtonRef}
                type="button"
                className={styles.secondaryButton}
                onClick={cancelDiscard}
              >
                Keep editing
              </button>
              <button type="button" className={styles.discardButton} onClick={confirmDiscard}>
                Discard suggestions
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
