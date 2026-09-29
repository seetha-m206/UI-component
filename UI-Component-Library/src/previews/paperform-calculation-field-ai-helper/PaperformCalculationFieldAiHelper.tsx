import { useId, useState } from 'react';
import { evaluateFormula } from './formulaEngine';
import styles from './PaperformCalculationFieldAiHelper.module.css';

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
}

export type EditorTab = 'calculation' | 'how-to-use';

export interface PaperformCalculationFieldAiHelperProps {
  initialFormula?: string;
  initialTab?: EditorTab;
  sampleValues?: Record<string, number>;
}

const DEFAULT_SAMPLE_VALUES: Record<string, number> = {
  cmlfb: 12345, // N1 Quantity
  '17gdk': 12345, // N2 Unit price
};

// Verbatim from the source record's captured AI Fix response.
const FIX_RESULT_FORMULA = '{{cmlfb}} * {{17gdk}};';
const FIX_EXPLANATION =
  'The calculation started with "/" which is invalid syntax. Removed the leading "/" and added the required semicolon at the end…';

// Verbatim from the source record's captured free-prompt response.
const DISCOUNT_RESULT_FORMULA = `// Get quantity and unit price
quantity = {{cmlfb}};
unit_price = {{17gdk}};

// Calculate subtotal
subtotal = quantity * unit_price;

// Apply 10% discount if quantity is over 5
discount = IF(quantity > 5, 0.10, 0);

// Calculate final total
total = subtotal * (1 - discount);

total;`;
const DISCOUNT_EXPLANATION =
  'Added a 10% discount that applies automatically when the quantity is greater than 5, using an IF() function on the subtotal.';

/**
 * Reconstructed from Paperform's Calculation field + Calculation Editor
 * modal. Confirmed and reproduced faithfully: the CALCULATION/HOW TO USE
 * tab split; a code pane evaluated live against sample field values (not
 * real answers); an AI panel with a Fix action (shown only while the
 * formula has a parse error) and a free-text prompt, both proposing a full
 * replacement formula with a pre-computed Result that is NOT applied to the
 * code pane until "Apply" is clicked. The two AI responses shown are the
 * source record's own verbatim captured exchanges (a real Fix of a stray
 * leading "/", and a real "add a 10% discount over 5" prompt) — not
 * generated live, since no AI backend is available in a static preview
 * site; any other prompt gets a clearly-labeled canned fallback rather than
 * a fabricated AI response. The formula evaluator is this reconstruction's
 * own small safe (no eval) arithmetic/IF() interpreter, built only to
 * reproduce the two confirmed real results (152399025 and 137159122.5) —
 * not a reimplementation of Paperform's real engine or its full function
 * library.
 */
export function PaperformCalculationFieldAiHelper({
  initialFormula = '',
  initialTab = 'calculation',
  sampleValues = DEFAULT_SAMPLE_VALUES,
}: PaperformCalculationFieldAiHelperProps) {
  const [tab, setTab] = useState<EditorTab>(initialTab);
  const [formula, setFormula] = useState(initialFormula);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [prompt, setPrompt] = useState('');
  const [proposal, setProposal] = useState<{ formula: string; result: string; explanation: string } | null>(
    null
  );
  const promptId = useId();

  const evaluation = evaluateFormula(formula, sampleValues);

  function respondTo(userText: string, isFix: boolean) {
    const userMessage: ChatMessage = {
      id: `u${messages.length}`,
      sender: 'user',
      text: isFix ? '(Fix requested)' : userText,
    };

    let resultFormula: string;
    let explanation: string;
    if (isFix) {
      resultFormula = FIX_RESULT_FORMULA;
      explanation = FIX_EXPLANATION;
    } else if (/discount/i.test(userText) && /5/.test(userText)) {
      resultFormula = DISCOUNT_RESULT_FORMULA;
      explanation = DISCOUNT_EXPLANATION;
    } else {
      resultFormula = formula;
      explanation =
        "This is a canned demo — only the source record's two real captured exchanges (Fix, and the discount prompt) produce a genuine proposal here. Try \"add a 10% discount if the quantity is over 5\".";
    }

    const resultEval = evaluateFormula(resultFormula, sampleValues);
    const resultText =
      resultEval.error != null ? `Error: ${resultEval.error}` : String(resultEval.value ?? '—');

    const aiMessage: ChatMessage = {
      id: `a${messages.length}`,
      sender: 'ai',
      text: explanation,
    };
    setMessages((prev) => [...prev, userMessage, aiMessage]);
    setProposal({ formula: resultFormula, result: resultText, explanation });
  }

  function handleFix() {
    respondTo('', true);
  }

  function handleSend() {
    if (!prompt.trim()) return;
    respondTo(prompt.trim(), false);
    setPrompt('');
  }

  function handleApply() {
    if (!proposal) return;
    setFormula(proposal.formula);
    setProposal(null);
  }

  return (
    <div className={styles.root}>
      <div className={styles.tabs} role="tablist" aria-label="Calculation Editor">
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'calculation'}
          className={tab === 'calculation' ? `${styles.tab} ${styles.tabActive}` : styles.tab}
          onClick={() => setTab('calculation')}
        >
          CALCULATION
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'how-to-use'}
          className={tab === 'how-to-use' ? `${styles.tab} ${styles.tabActive}` : styles.tab}
          onClick={() => setTab('how-to-use')}
        >
          HOW TO USE
        </button>
      </div>

      {tab === 'calculation' ? (
        <div className={styles.calcLayout}>
          <div className={styles.editorColumn}>
            <label htmlFor={promptId} className={styles.label}>
              Formula
            </label>
            <textarea
              id={`${promptId}-formula`}
              className={styles.codePane}
              value={formula}
              onChange={(e) => setFormula(e.target.value)}
              rows={8}
              spellCheck={false}
              placeholder="e.g. {{cmlfb}} * {{17gdk}};"
            />
            <div className={styles.previewBox} role="status">
              <span className={styles.previewLabel}>Live Preview</span>
              {evaluation.error ? (
                <p className={styles.previewError} role="alert">
                  The formula looks invalid: {evaluation.error}
                </p>
              ) : (
                <p className={styles.previewValue}>{evaluation.value ?? '—'}</p>
              )}
            </div>
          </div>

          <div className={styles.aiColumn}>
            <h3 className={styles.aiHeading}>Ask AI</h3>
            <div className={styles.transcript}>
              {messages.length === 0 && (
                <p className={styles.transcriptEmpty}>
                  Ask AI to write or fix a calculation, or click Fix if the formula has an error.
                </p>
              )}
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={m.sender === 'user' ? `${styles.bubble} ${styles.bubbleUser}` : `${styles.bubble} ${styles.bubbleAi}`}
                >
                  {m.text}
                </div>
              ))}
              {proposal && (
                <div className={styles.proposalCard}>
                  <pre className={styles.proposalFormula}>{proposal.formula}</pre>
                  <div className={styles.proposalResult}>Result: {proposal.result}</div>
                  <button type="button" className={styles.applyButton} onClick={handleApply}>
                    Apply
                  </button>
                </div>
              )}
            </div>
            <div className={styles.aiInputRow}>
              <input
                id={promptId}
                type="text"
                className={styles.aiInput}
                placeholder="What do you want the calculation to do?"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button type="button" className={styles.sendButton} onClick={handleSend}>
                Send
              </button>
            </div>
            {evaluation.error && (
              <button type="button" className={styles.fixButton} onClick={handleFix}>
                Fix
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className={styles.howToUse}>
          <ul className={styles.howToList}>
            <li>
              <strong>Basic maths:</strong> Numbers, Add +, Subtract −, Multiply *, Divide /, Modulo %, Group ()
            </li>
            <li>
              <strong>Basic text:</strong> Typing text, Concatenate ||
            </li>
            <li>
              <strong>Working with answers:</strong> Answer Piping, Variables, Products (
              <code>.quantities.&lt;SKU&gt;</code>, <code>.selectedProducts</code>)
            </li>
            <li>
              <strong>Logic:</strong> Booleans, not, and, or, =, !=, &gt;, &gt;=, &lt;, &lt;=
            </li>
            <li>
              <strong>Functions:</strong> Date and Time · Maths · Logical (IF, IFERROR) · Lookup · Text ·
              Statistical (AVERAGEIF, SUMIF, COUNTIF) · Errors · Information
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
