import { useState } from 'react';
import type { FormEvent } from 'react';
import styles from '../semrush-shared.module.css';

export type SemrushAiVisibilityLandingState =
  | 'default'
  | 'filled'
  | 'faq-one'
  | 'faq-multiple'
  | 'coming-soon'
  | 'guarded-action';

export interface SemrushAiVisibilityLandingProps {
  initialState?: SemrushAiVisibilityLandingState;
  disabled?: boolean;
}

const faqs = [
  {
    question: 'What is the AI SEO Toolkit?',
    answer:
      'It tracks how a brand and its competitors appear in generative AI results, then turns prompts, mentions, citations, tracking, and crawlability evidence into recommendations.',
  },
  {
    question: 'How does it work?',
    answer:
      'It collects relevant AI-platform queries, analyzes the answers, and translates the evidence into visibility and growth insights.',
  },
  {
    question: 'Which AI platforms are tracked?',
    answer:
      'The observed screen named ChatGPT, Google AI Overviews, and Google AI Mode, and noted that more platforms may be added.',
  },
  {
    question: 'Can I track competitors?',
    answer:
      'Yes. The screen described competitor share of voice, sentiment, winning prompts, and visibility gaps.',
  },
  {
    question: 'How often is data updated?',
    answer:
      'The FAQ described daily prompt tracking, weekly Brand Performance reports, and monthly Visibility Overviews.',
  },
  {
    question: 'Why does AI crawlability matter?',
    answer:
      'Crawlability checks identify technical barriers that may prevent AI systems from accessing or interpreting site content.',
  },
  {
    question: 'How can I access the toolkit?',
    answer:
      'The live FAQ described a paid subscription, an interactive sample report, per-domain Brand Performance capacity, and account-settings cancellation.',
  },
  {
    question: 'How is AI SEO different from traditional SEO?',
    answer:
      'Traditional SEO targets ranked search results. AI SEO adds evidence about representation in generative answers and complements traditional search work.',
  },
];

const openQuestionsFor = (state: SemrushAiVisibilityLandingState) => {
  if (state === 'faq-one') return [faqs[0].question];
  if (state === 'faq-multiple') return [faqs[0].question, faqs[1].question];
  return [];
};

export function SemrushAiVisibilityLanding({
  initialState = 'default',
  disabled = false,
}: SemrushAiVisibilityLandingProps) {
  const [domain, setDomain] = useState(initialState === 'filled' ? 'atlas.example' : '');
  const [openQuestions, setOpenQuestions] = useState(() => new Set(openQuestionsFor(initialState)));
  const [status, setStatus] = useState(
    initialState === 'guarded-action'
      ? 'Analysis was not started. This reconstruction keeps the action local.'
      : '',
  );

  const toggleFaq = (question: string) => {
    if (disabled) return;
    setOpenQuestions((current) => {
      const next = new Set(current);
      if (next.has(question)) next.delete(question);
      else next.add(question);
      return next;
    });
  };

  const guardSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('Analysis was not started. This reconstruction keeps the action local.');
  };

  const domainForm = (compact = false) => (
    <form className={styles.landingForm} onSubmit={guardSubmit} aria-label={compact ? 'Bottom domain check' : 'Domain check'}>
      <label className={styles.srOnly} htmlFor={compact ? 'landing-domain-bottom' : 'landing-domain'}>
        {compact ? 'Bottom website domain' : 'Primary website domain'}
      </label>
      <input
        id={compact ? 'landing-domain-bottom' : 'landing-domain'}
        className={styles.landingInput}
        value={domain}
        placeholder={compact ? 'Enter a website' : 'Enter domain, subdomain or URL'}
        aria-invalid="false"
        disabled={disabled}
        onChange={(event) => setDomain(event.target.value)}
      />
      <button className={styles.gradientButton} type="submit" disabled={disabled}>
        {compact ? 'Check AI Visibility' : 'Get started'}
      </button>
    </form>
  );

  return (
    <div className={styles.root}>
      <main className={styles.landingCanvas}>
        <section className={styles.landingHero} aria-labelledby="landing-title">
          <span className={styles.landingEyebrow}>AI Visibility</span>
          <h2 id="landing-title" className={styles.landingHeadline}>
            Win Every Search
            <span>From Traditional SEO to AI Discovery</span>
          </h2>
          <p>Track brand visibility, find gaps, and grow across traditional and AI search.</p>
          {domainForm()}
          <div className={styles.historyRow}>
            <span>Last checked:</span>
            <button type="button" disabled={disabled} onClick={() => setStatus('Historical analysis navigation was not run in this reconstruction.')}>
              atlas.example
            </button>
          </div>
          {status && <p className={styles.actionStatus} role="status">{status}</p>}
        </section>

        <section aria-labelledby="landing-benefits">
          <h3 id="landing-benefits" className={styles.sectionTitle}>See how you rank and where to grow</h3>
          <div className={styles.benefitGrid}>
            <article className={styles.benefitCard}><strong>Track AI visibility</strong><p>Review visibility, share of voice, and improvement priorities.</p></article>
            <article className={styles.benefitCard}><strong>Compare competitors</strong><p>Find prompts, mentions, and sources where rivals appear.</p></article>
            <article className={styles.benefitCard}><strong>Turn insights into growth</strong><p>Convert evidence into content and reputation opportunities.</p></article>
          </div>
        </section>

        <section className={styles.capabilityGrid} aria-label="AI visibility capabilities">
          <article className={styles.capabilityCard}><strong>Track any brand in LLMs</strong><p>Monitor mentions, citations, priority prompts, and recommendations.</p></article>
          <article className={styles.capabilityCard}><strong>Discover audience prompts</strong><p>Explore relevant questions and trending topics.</p></article>
          <article className={styles.capabilityCard}><strong>Spot competitive gaps</strong><p>Compare mentions, sources, and sentiment.</p></article>
          <article className={styles.capabilityCard}><strong>Prepare content for AI search</strong><p>Remove crawlability barriers and improve machine understanding.</p></article>
          <article className={styles.capabilityCard}><strong>Own the brand narrative</strong><p>Benchmark sentiment and address perception gaps.</p></article>
          <article className={`${styles.capabilityCard} ${styles.comingSoonCard}`} data-highlighted={initialState === 'coming-soon'}>
            <span className={styles.comingSoonBadge}>Coming soon</span>
            <strong>Prove AI visibility ROI</strong>
            <p>Combine visibility, traffic, analytics, and conversion reporting.</p>
          </article>
        </section>

        <section className={styles.faqSection} aria-labelledby="landing-faq-title">
          <h3 id="landing-faq-title" className={styles.sectionTitle}>AI SEO Toolkit FAQs</h3>
          <div className={styles.faqList}>
            {faqs.map(({ question, answer }) => {
              const open = openQuestions.has(question);
              const panelId = `faq-${question.replaceAll(/[^a-z0-9]+/gi, '-').toLowerCase()}`;
              return (
                <article className={styles.faqItem} key={question}>
                  <h4>
                    <button
                      className={styles.faqTrigger}
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      disabled={disabled}
                      onClick={() => toggleFaq(question)}
                    >
                      <span>{open ? '⌄' : '›'}</span>{question}
                    </button>
                  </h4>
                  {open && <div className={styles.faqPanel} id={panelId}>{answer}</div>}
                </article>
              );
            })}
          </div>
        </section>

        <section className={styles.ctaBand} aria-labelledby="landing-cta-title">
          <h3 id="landing-cta-title">Lead in AI Search while others are still guessing</h3>
          <p>Be the brand AI recommends and customers choose.</p>
          {domainForm(true)}
          <div className={styles.brandStrip} aria-label="Example trusted brands">
            <span>Northstar</span><span>Acme</span><span>Orbit</span><span>Beacon</span>
          </div>
        </section>
      </main>
    </div>
  );
}
