import { describe, expect, it } from 'vitest';
import { getProductGroup } from './loadComponents';

describe('getProductGroup', () => {
  it('groups Ahrefs and Semrush under SEO & AI Search', () => {
    expect(getProductGroup('ahrefs')).toBe('SEO & AI Search');
    expect(getProductGroup('semrush')).toBe('SEO & AI Search');
  });

  it('keeps unknown brands in Other', () => {
    expect(getProductGroup('unmapped-product')).toBe('Other');
  });
});
