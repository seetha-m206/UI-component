/**
 * A small, safe (no eval) evaluator for the subset of Paperform's
 * calculation syntax actually exercised in the source record: `;`-separated
 * statements, `identifier = expression;` assignment, `{{ fieldKey }}`
 * references (substituted from a sample-value map before parsing), basic
 * arithmetic (+ - * / ()), and `IF(condition, ifTrue, ifFalse)` with
 * comparison operators. The last statement's expression is the result.
 * This is NOT a full reimplementation of Paperform's real engine — it only
 * covers what this preview's fixtures need to demonstrate Live Preview
 * evaluating correctly, per the source record's own confirmed test case
 * (152399025 for {{cmlfb}} * {{17gdk}}).
 */

export interface EvalResult {
  value: number | string | null;
  error: string | null;
}

function substituteFieldRefs(formula: string, sampleValues: Record<string, number>): string {
  return formula.replace(/\{\{\s*([a-zA-Z0-9_]+)\s*\}\}/g, (_match, key: string) => {
    const value = sampleValues[key];
    if (value === undefined) {
      throw new Error(`Unknown field reference {{${key}}}`);
    }
    return String(value);
  });
}

type Token = { type: 'num' | 'ident' | 'op' | 'lparen' | 'rparen' | 'comma'; value: string };

function tokenize(src: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;
  while (i < src.length) {
    const c = src[i];
    if (/\s/.test(c)) {
      i++;
      continue;
    }
    if (/[0-9.]/.test(c)) {
      let j = i;
      while (j < src.length && /[0-9.]/.test(src[j])) j++;
      tokens.push({ type: 'num', value: src.slice(i, j) });
      i = j;
      continue;
    }
    if (/[a-zA-Z_]/.test(c)) {
      let j = i;
      while (j < src.length && /[a-zA-Z0-9_]/.test(src[j])) j++;
      tokens.push({ type: 'ident', value: src.slice(i, j) });
      i = j;
      continue;
    }
    if (c === '(') {
      tokens.push({ type: 'lparen', value: c });
      i++;
      continue;
    }
    if (c === ')') {
      tokens.push({ type: 'rparen', value: c });
      i++;
      continue;
    }
    if (c === ',') {
      tokens.push({ type: 'comma', value: c });
      i++;
      continue;
    }
    if ('+-*/'.includes(c)) {
      tokens.push({ type: 'op', value: c });
      i++;
      continue;
    }
    if ('<>=!'.includes(c)) {
      let j = i + 1;
      if (src[j] === '=') j++;
      tokens.push({ type: 'op', value: src.slice(i, j) });
      i = j;
      continue;
    }
    throw new Error(`Unexpected character "${c}"`);
  }
  return tokens;
}

class Parser {
  private tokens: Token[];
  private pos = 0;
  private vars: Record<string, number>;

  constructor(tokens: Token[], vars: Record<string, number>) {
    this.tokens = tokens;
    this.vars = vars;
  }

  private peek() {
    return this.tokens[this.pos];
  }

  private next() {
    return this.tokens[this.pos++];
  }

  parseExpression(): number {
    return this.parseComparison();
  }

  private parseComparison(): number {
    let left = this.parseAdditive();
    while (this.peek() && this.peek().type === 'op' && /^(>=|<=|==|!=|>|<|=)$/.test(this.peek().value)) {
      const op = this.next().value;
      const right = this.parseAdditive();
      switch (op) {
        case '>':
          left = left > right ? 1 : 0;
          break;
        case '<':
          left = left < right ? 1 : 0;
          break;
        case '>=':
          left = left >= right ? 1 : 0;
          break;
        case '<=':
          left = left <= right ? 1 : 0;
          break;
        case '==':
        case '=':
          left = left === right ? 1 : 0;
          break;
        case '!=':
          left = left !== right ? 1 : 0;
          break;
      }
    }
    return left;
  }

  private parseAdditive(): number {
    let left = this.parseMultiplicative();
    while (this.peek() && this.peek().type === 'op' && (this.peek().value === '+' || this.peek().value === '-')) {
      const op = this.next().value;
      const right = this.parseMultiplicative();
      left = op === '+' ? left + right : left - right;
    }
    return left;
  }

  private parseMultiplicative(): number {
    let left = this.parseUnary();
    while (this.peek() && this.peek().type === 'op' && (this.peek().value === '*' || this.peek().value === '/')) {
      const op = this.next().value;
      const right = this.parseUnary();
      left = op === '*' ? left * right : left / right;
    }
    return left;
  }

  private parseUnary(): number {
    if (this.peek() && this.peek().type === 'op' && this.peek().value === '-') {
      this.next();
      return -this.parseUnary();
    }
    return this.parsePrimary();
  }

  private parsePrimary(): number {
    const tok = this.peek();
    if (!tok) throw new Error('Unexpected end of formula');
    if (tok.type === 'num') {
      this.next();
      return parseFloat(tok.value);
    }
    if (tok.type === 'lparen') {
      this.next();
      const value = this.parseComparison();
      if (!this.peek() || this.peek().type !== 'rparen') throw new Error('Expected ")"');
      this.next();
      return value;
    }
    if (tok.type === 'ident') {
      this.next();
      if (tok.value.toUpperCase() === 'IF' && this.peek()?.type === 'lparen') {
        this.next();
        const cond = this.parseComparison();
        if (!this.peek() || this.peek().type !== 'comma') throw new Error('Expected "," in IF()');
        this.next();
        const ifTrue = this.parseComparison();
        if (!this.peek() || this.peek().type !== 'comma') throw new Error('Expected "," in IF()');
        this.next();
        const ifFalse = this.parseComparison();
        if (!this.peek() || this.peek().type !== 'rparen') throw new Error('Expected ")" to close IF()');
        this.next();
        return cond ? ifTrue : ifFalse;
      }
      if (this.vars[tok.value] !== undefined) {
        return this.vars[tok.value];
      }
      throw new Error(`Unknown identifier "${tok.value}"`);
    }
    throw new Error(`Unexpected token "${tok.value}"`);
  }
}

/** Strips `// ...` line comments, confirmed present in the source's own documented examples. */
function stripComments(formula: string): string {
  return formula
    .split('\n')
    .map((line) => line.replace(/\/\/.*$/, ''))
    .join('\n');
}

export function evaluateFormula(
  formula: string,
  sampleValues: Record<string, number>
): EvalResult {
  const trimmed = stripComments(formula).trim();
  if (!trimmed) return { value: null, error: null };
  try {
    const substituted = substituteFieldRefs(trimmed, sampleValues);
    const statements = substituted.split(';').map((s) => s.trim()).filter(Boolean);
    const vars: Record<string, number> = {};
    let result: number | null = null;
    for (const statement of statements) {
      const assignMatch = statement.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.+)$/);
      if (assignMatch) {
        const [, name, expr] = assignMatch;
        const tokens = tokenize(expr);
        const value = new Parser(tokens, vars).parseExpression();
        vars[name] = value;
        result = value;
      } else {
        const tokens = tokenize(statement);
        result = new Parser(tokens, vars).parseExpression();
      }
    }
    return { value: result, error: null };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Invalid formula';
    return { value: null, error: message };
  }
}
