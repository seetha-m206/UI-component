import { describe, expect, it } from 'vitest';
import { getBrands, getProductGroup } from './loadComponents';

describe('getProductGroup', () => {
  it('uses consistent primary product categories', () => {
    expect(getProductGroup('pipedrive')).toBe('CRM');
    expect(getProductGroup('freshchat')).toBe('Chat');
    expect(getProductGroup('framer')).toBe('Sites');
    expect(getProductGroup('zendesk')).toBe('Support');
    expect(getProductGroup('semrush')).toBe('SEO');
    expect(getProductGroup('jotform')).toBe('Forms');
    expect(getProductGroup('zapier')).toBe('Automation');
    expect(getProductGroup('asana')).toBe('Project Management');
    expect(getProductGroup('clickup')).toBe('Project Management');
    expect(getProductGroup('monday')).toBe('Project Management');
    expect(getProductGroup('trello')).toBe('Project Management');
  });

  it('categorizes specialist HubSpot products by their product function', () => {
    expect(getProductGroup('hubspot-sales-hub')).toBe('CRM');
    expect(getProductGroup('hubspot-service-hub')).toBe('Support');
    expect(getProductGroup('hubspot-content-hub')).toBe('Content');
    expect(getProductGroup('hubspot-reporting')).toBe('Analytics & Reporting');
  });

  it('categorizes every documented competitor product', () => {
    const uncategorizedBrands = getBrands().filter(
      (brand) => getProductGroup(brand) === 'Other',
    );

    expect(uncategorizedBrands).toEqual([]);
  });

  it('keeps unknown brands in Other', () => {
    expect(getProductGroup('unmapped-product')).toBe('Other');
  });
});
