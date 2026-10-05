import { useEffect, useRef, useState } from 'react';
import styles from './JotformAiAgents.module.css';

export type AgentBuilderStep = 'prompt' | 'generating' | 'built';
export type BuilderTab = 'build' | 'train' | 'publish';
export type TrainSection = 'knowledge' | 'forms' | 'workflows';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
}

/**
 * The record's own tested prompt and exact resulting agent (Structure
 * finding 2, 2026-10-05): typing "Create a Coffee Club loyalty assistant
 * that answers questions about rewards and membership" produced a fixed,
 * AI-generated human-persona title and greeting — not the user's literal
 * prompt text. Kept canned here regardless of what's typed, matching the
 * same "canned generated content" precedent as
 * `typeform-ai-chat-to-create` (see this folder's README).
 */
const AGENT_TITLE = 'Ian: Coffee Club Loyalty Assistant';
const AGENT_GREETING = "Hi, I'm Ian, your AI Agent and Coffee Club Loyalty Assistant. How can I help?";
const QUICK_REPLIES = ['Check rewards', 'Learn more'] as const;
const QUICK_REPLY_RESPONSES: Record<string, string> = {
  'Check rewards': 'You currently have 120 points — redeem them for a free coffee at 150!',
  'Learn more': 'Coffee Club members earn 1 point per $1 spent, plus exclusive monthly perks.',
};

const CATEGORY_CHIPS = ['Customer support', 'Recruitment', 'Appointment', 'Feedback'] as const;
const CHANNELS = ['Chatbot', 'Standalone', 'Instagram', 'WhatsApp'] as const;
const FIXTURE_FORMS = ['Coffee Club Membership Signup', 'Customer Feedback Survey'] as const;
const TEST_CALL_NUMBER = '+1 601 843 6706';
const TEST_CALL_EXTENSION = '01826';
const VOICES = ['Liam — English, American, Male, Young', 'Maya — English, American, Female, Young'];

let messageIdCounter = 0;
function nextMessageId(prefix: string): string {
  messageIdCounter += 1;
  return `${prefix}-${messageIdCounter}`;
}

function builtMessages(): ChatMessage[] {
  // "a pre-populated sample exchange already visible in the test-chat pane"
  // (Structure finding 2) — reproduced as the greeting plus one already-used
  // quick reply, leaving the second quick reply still fresh to click.
  return [
    { id: nextMessageId('ai'), sender: 'ai', text: AGENT_GREETING },
    { id: nextMessageId('user'), sender: 'user', text: 'Check rewards' },
    { id: nextMessageId('ai'), sender: 'ai', text: QUICK_REPLY_RESPONSES['Check rewards'] },
  ];
}

export interface JotformAiAgentsProps {
  /** Which step the component starts on. Defaults to 'prompt'. Mounting
   * directly into 'generating' shows a frozen snapshot (no timer is
   * scheduled for a fixture-driven mount) — same precedent as
   * `typeform-ai-chat-to-create`. */
  initialStep?: AgentBuilderStep;
  /** Which BUILD/TRAIN/PUBLISH tab is active once built. Defaults to 'build'. */
  initialTab?: BuilderTab;
  /** Which TRAIN left-rail section is active. Defaults to 'knowledge'. */
  initialTrainSection?: TrainSection;
  /** How long each of the two generation steps ("Crafting your perfect
   * agent" / "Customizing conversations to match your needs") takes, in
   * milliseconds. Kept short and deterministic for testability rather than
   * the record's real multi-second wait. Defaults to 500ms. */
  stepDelayMs?: number;
  /** Fired once generation completes and the BUILD tab is shown. */
  onAgentGenerated?: (prompt: string) => void;
  /** Fired when "Buy Number" is clicked. No real purchase is made. */
  onBuyNumber?: () => void;
  /** Fired when "Make a Test Call" is clicked. No real call is placed. */
  onTestCall?: () => void;
}

/**
 * Reconstructed from JotForm's AI Agent Builder (see
 * Research-Library/04-Component-Library/jotform/jotform-ai-agents.md, JF10,
 * 2026-10-05): a "Describe your agent" prompt entry point that runs a
 * two-step generation sequence before landing on a purple-to-blue
 * BUILD/TRAIN/PUBLISH tab shell with a fully-built, test-ready conversational
 * agent. The AI generation and the Phone Agent purchase flow are both
 * simulated here — see this folder's README.
 */
export function JotformAiAgents({
  initialStep = 'prompt',
  initialTab = 'build',
  initialTrainSection = 'knowledge',
  stepDelayMs = 500,
  onAgentGenerated,
  onBuyNumber,
  onTestCall,
}: JotformAiAgentsProps) {
  const [step, setStep] = useState<AgentBuilderStep>(initialStep);
  const [generatingPhase, setGeneratingPhase] = useState<0 | 1>(0);
  const [promptText, setPromptText] = useState('');
  const [activeTab, setActiveTab] = useState<BuilderTab>(initialTab);
  const [selectedChannel, setSelectedChannel] = useState<string>('Chatbot');
  const [trainSection, setTrainSection] = useState<TrainSection>(initialTrainSection);
  const [showMoreSources, setShowMoreSources] = useState(false);
  const [formPickerOpen, setFormPickerOpen] = useState(false);
  const [connectedForms, setConnectedForms] = useState<string[]>([]);
  const [messages, setMessages] = useState<ChatMessage[]>(() =>
    initialStep === 'built' ? builtMessages() : []
  );
  const [buyNumberNotice, setBuyNumberNotice] = useState(false);
  const [testCallNotice, setTestCallNotice] = useState(false);
  const [voiceIndex, setVoiceIndex] = useState(0);

  const timeout1Ref = useRef<ReturnType<typeof setTimeout> | null>(null);
  const timeout2Ref = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeout1Ref.current) clearTimeout(timeout1Ref.current);
      if (timeout2Ref.current) clearTimeout(timeout2Ref.current);
    };
  }, []);

  function submitPrompt(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setGeneratingPhase(0);
    setStep('generating');

    // Two sequential, real, controllable timed transitions — matching the
    // record's confirmed "Crafting your perfect agent" (checkmark) →
    // "Customizing conversations to match your needs" (spinner) sequence.
    timeout1Ref.current = setTimeout(() => {
      setGeneratingPhase(1);
      timeout2Ref.current = setTimeout(() => {
        setMessages(builtMessages());
        setActiveTab('build');
        setStep('built');
        onAgentGenerated?.(trimmed);
      }, stepDelayMs);
    }, stepDelayMs);
  }

  function handleQuickReply(label: string) {
    const response = QUICK_REPLY_RESPONSES[label];
    if (!response) return;
    setMessages((prev) => [
      ...prev,
      { id: nextMessageId('user'), sender: 'user', text: label },
      { id: nextMessageId('ai'), sender: 'ai', text: response },
    ]);
  }

  function handleAddForm(formName: string) {
    setConnectedForms((prev) => (prev.includes(formName) ? prev : [...prev, formName]));
    setFormPickerOpen(false);
  }

  function handleBuyNumber() {
    setBuyNumberNotice(true);
    onBuyNumber?.();
  }

  function handleTestCall() {
    setTestCallNotice(true);
    onTestCall?.();
  }

  if (step === 'prompt' || step === 'generating') {
    return (
      <div className={styles.root}>
        <div className={styles.promptScreen}>
          <h2 className={styles.promptHeading}>Describe your agent</h2>
          <p className={styles.promptSubheading}>Automate tasks and conversations with AI</p>

          <div className={styles.promptBox}>
            <textarea
              className={styles.promptInput}
              aria-label="Describe your agent"
              placeholder="Create a Customer Support Agent who assists customers with inquiries about services, troubleshooting issues, and providing updates on services."
              value={promptText}
              disabled={step === 'generating'}
              onChange={(e) => setPromptText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  submitPrompt(promptText);
                }
              }}
            />
            <div className={styles.promptBoxActions}>
              <span
                className={styles.decorativeIcon}
                aria-hidden="true"
                title="Upload — not implemented in this reconstruction"
              >
                &#128206;
              </span>
              <span
                className={styles.decorativeIcon}
                aria-hidden="true"
                title="Add Website — not implemented in this reconstruction"
              >
                &#127760;
              </span>
              <span
                className={styles.decorativeIcon}
                aria-hidden="true"
                title="Voice input — not implemented in this reconstruction"
              >
                &#127908;
              </span>
              <button
                type="button"
                className={styles.createButton}
                disabled={!promptText.trim() || step === 'generating'}
                onClick={() => submitPrompt(promptText)}
              >
                Create
              </button>
            </div>
          </div>

          <div className={styles.chipRow}>
            {CATEGORY_CHIPS.map((chip) => (
              <button
                key={chip}
                type="button"
                className={styles.chip}
                disabled={step === 'generating'}
                onClick={() => setPromptText(`Create a ${chip} agent`)}
              >
                {chip}
              </button>
            ))}
          </div>

          {step === 'generating' && (
            <div className={styles.generatingPanel} role="status" aria-live="polite">
              <p className={generatingPhase >= 1 ? styles.generatingStepDone : styles.generatingStep}>
                <span aria-hidden="true">{generatingPhase >= 1 ? '✓' : <span className={styles.spinner} />}</span>
                Crafting your perfect agent
              </p>
              <p className={generatingPhase >= 1 ? styles.generatingStepActive : styles.generatingStepPending}>
                <span aria-hidden="true">{generatingPhase >= 1 ? <span className={styles.spinner} /> : ''}</span>
                Customizing conversations to match your needs
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.root}>
      <header className={styles.topBar}>
        <span className={styles.brand}>AI Agent Builder &#9662;</span>
        <span className={styles.agentTitle}>{AGENT_TITLE}</span>
        <nav className={styles.topBarActions} aria-label="Builder utility links">
          <span>Features</span>
          <span>Support</span>
          <span>Settings</span>
        </nav>
      </header>

      <div className={styles.modeTabBar} role="tablist" aria-label="Agent builder mode">
        {(['build', 'train', 'publish'] as BuilderTab[]).map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={activeTab === tab}
            className={activeTab === tab ? `${styles.modeTab} ${styles.modeTabActive}` : styles.modeTab}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {activeTab === 'build' && (
        <div className={styles.buildBody}>
          <aside className={styles.channelsRail} aria-label="Channels">
            <p className={styles.railHeading}>CHANNELS</p>
            <ul className={styles.channelList}>
              {CHANNELS.map((channel) => (
                <li key={channel}>
                  <button
                    type="button"
                    className={
                      selectedChannel === channel
                        ? `${styles.channelItem} ${styles.channelItemActive}`
                        : styles.channelItem
                    }
                    aria-pressed={selectedChannel === channel}
                    onClick={() => setSelectedChannel(channel)}
                  >
                    {channel}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className={styles.chatPane} aria-label="Agent test chat">
            <div className={styles.chatHeader}>
              <span className={styles.avatar} aria-hidden="true">
                &#128100;
              </span>
              <span>{AGENT_TITLE}</span>
            </div>
            <div className={styles.messageList}>
              {messages.map((message) => (
                <p
                  key={message.id}
                  className={message.sender === 'ai' ? styles.aiBubble : styles.userBubble}
                >
                  {message.text}
                </p>
              ))}
            </div>
            <div className={styles.quickReplyRow}>
              {QUICK_REPLIES.map((label) => (
                <button key={label} type="button" className={styles.quickReplyButton} onClick={() => handleQuickReply(label)}>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'train' && (
        <div className={styles.buildBody}>
          <aside className={styles.channelsRail} aria-label="Train navigation">
            <ul className={styles.channelList}>
              <li>
                <button
                  type="button"
                  className={
                    trainSection === 'knowledge'
                      ? `${styles.channelItem} ${styles.channelItemActive}`
                      : styles.channelItem
                  }
                  onClick={() => setTrainSection('knowledge')}
                >
                  KNOWLEDGE BASE
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={
                    trainSection === 'forms'
                      ? `${styles.channelItem} ${styles.channelItemActive}`
                      : styles.channelItem
                  }
                  onClick={() => setTrainSection('forms')}
                >
                  FORMS
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={
                    trainSection === 'workflows'
                      ? `${styles.channelItem} ${styles.channelItemActive}`
                      : styles.channelItem
                  }
                  onClick={() => setTrainSection('workflows')}
                >
                  WORKFLOWS <span className={styles.newBadge}>NEW</span>
                </button>
              </li>
            </ul>
          </aside>

          <div className={styles.trainContent}>
            {trainSection === 'knowledge' && (
              <div>
                <p className={styles.trainHeading}>Add Knowledge</p>
                <div className={styles.chipRow}>
                  <span className={styles.chip}>Text</span>
                  <span className={styles.chip}>File</span>
                  <span className={styles.chip}>Link</span>
                  <span className={styles.chip}>Questions &amp; Answer</span>
                </div>
                {showMoreSources && (
                  <p className={styles.trainHint}>Website, Google Drive, Notion, Help Center…</p>
                )}
                <button type="button" className={styles.linkButton} onClick={() => setShowMoreSources((v) => !v)}>
                  {showMoreSources ? 'Show fewer sources' : 'Show more sources'}
                </button>
              </div>
            )}

            {trainSection === 'forms' && (
              <div>
                <p className={styles.trainHeading}>Connect forms to your agent to use form data</p>
                <ul className={styles.connectedList}>
                  {connectedForms.map((form) => (
                    <li key={form} className={styles.connectedItem}>
                      {form}
                    </li>
                  ))}
                </ul>
                <div className={styles.formPickerWrap}>
                  <button
                    type="button"
                    className={styles.linkButton}
                    aria-expanded={formPickerOpen}
                    aria-haspopup="listbox"
                    onClick={() => setFormPickerOpen((v) => !v)}
                  >
                    + Add New Form
                  </button>
                  {formPickerOpen && (
                    <ul className={styles.formPickerList} role="listbox" aria-label="Choose a form to connect">
                      {FIXTURE_FORMS.map((form) => (
                        <li key={form}>
                          <button
                            type="button"
                            role="option"
                            aria-selected={connectedForms.includes(form)}
                            className={styles.formPickerOption}
                            onClick={() => handleAddForm(form)}
                          >
                            {form}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )}

            {trainSection === 'workflows' && (
              <div>
                <p className={styles.trainHeading}>
                  Create multi-step automations <span className={styles.newBadge}>NEW</span>
                </p>
                <p className={styles.trainHint}>Trigger a Jotform Workflow mid-conversation.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'publish' && (
        <div className={styles.publishBody}>
          <section className={styles.phoneAgentCard}>
            <h3 className={styles.sectionHeading}>Phone Agent</h3>
            <p className={styles.sectionBody}>
              Buy an AI Agent Phone Number — Use for calls, starting from just $10/month
            </p>
            <button type="button" className={styles.buyButton} onClick={handleBuyNumber}>
              Buy Number
            </button>
            {buyNumberNotice && (
              <p className={styles.demoNotice} role="status">
                Demo only — this would start checkout for a dedicated phone number ($10/month). No
                real purchase was made.
              </p>
            )}

            <div className={styles.testCallPanel}>
              <p className={styles.sectionHeading}>Make a Test Call</p>
              <p className={styles.sectionBody}>
                Try this agent by phone before buying a dedicated number — dial the shared number
                below and enter the extension.
              </p>
              <dl className={styles.testCallDetails}>
                <div>
                  <dt>Number</dt>
                  <dd>{TEST_CALL_NUMBER}</dd>
                </div>
                <div>
                  <dt>Extension</dt>
                  <dd>{TEST_CALL_EXTENSION}</dd>
                </div>
                <div>
                  <dt>Voice</dt>
                  <dd>
                    {VOICES[voiceIndex]}{' '}
                    <button
                      type="button"
                      className={styles.linkButton}
                      onClick={() => setVoiceIndex((i) => (i + 1) % VOICES.length)}
                    >
                      Change
                    </button>
                  </dd>
                </div>
              </dl>
              <button type="button" className={styles.testCallButton} onClick={handleTestCall}>
                Make a Test Call
              </button>
              {testCallNotice && (
                <p className={styles.demoNotice} role="status">
                  Demo only — no real call is placed in this reconstruction.
                </p>
              )}
            </div>
          </section>

          <p className={styles.otherChannelsNote}>
            Other channels: Instagram Agent, WhatsApp Agent, Gmail Agent, AI Chatbot for WordPress,
            Presentation Agent.
          </p>
        </div>
      )}
    </div>
  );
}
