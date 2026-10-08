import { createHash } from 'node:crypto';
import { writeFileSync } from 'node:fs';
import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { livechatPreviews } from './registry';

type ActionReceipt = {
  control: string;
  controlType: string;
  disabled: boolean;
  readOnly: boolean;
  exercise: 'clicked' | 'typed' | 'presence-only' | 'disabled';
  stateChanged: boolean;
  status: string | null;
  networkCalls: number;
};

const normalize = (value: string | null | undefined) => value?.replace(/\s+/g, ' ').trim() ?? '';

const digest = (value: string) => createHash('sha256').update(value).digest('hex');

function controlName(control: HTMLElement) {
  return (
    control.getAttribute('aria-label') ||
    normalize(control.textContent) ||
    control.getAttribute('placeholder') ||
    control.getAttribute('name') ||
    control.getAttribute('type') ||
    control.tagName.toLowerCase()
  );
}

describe('LiveChat action-level fixture evidence', () => {
  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
  });

  it('exercises every safe local fixture control without provider network calls', async () => {
    const records: Array<{ record: string; fixture: string; actions: ActionReceipt[] }> = [];

    for (const [record, preview] of Object.entries(livechatPreviews)) {
      if (preview.type !== 'reconstructed') continue;
      const Component = preview.Component;

      for (const fixture of preview.fixtures) {
        const inventory = render(<Component {...fixture.props} />);
        const controlCount = inventory.container.querySelectorAll(
          'button, input, select, textarea, a[href]'
        ).length;
        inventory.unmount();
        const actions: ActionReceipt[] = [];

        for (let index = 0; index < controlCount; index += 1) {
          const fetch = vi.fn();
          vi.stubGlobal('fetch', fetch);
          const view = render(<Component {...fixture.props} />);
          const controls = view.container.querySelectorAll<HTMLElement>(
            'button, input, select, textarea, a[href]'
          );
          const control = controls[index];
          const disabled =
            control.hasAttribute('disabled') || control.getAttribute('aria-disabled') === 'true';
          const readOnly = control.hasAttribute('readonly');
          const before = digest(view.container.innerHTML);
          let exercise: ActionReceipt['exercise'] = 'presence-only';

          if (disabled) {
            exercise = 'disabled';
          } else if (control instanceof HTMLButtonElement) {
            await userEvent.click(control);
            exercise = 'clicked';
          } else if (
            control instanceof HTMLInputElement &&
            ['text', 'email', 'search', ''].includes(control.type) &&
            !readOnly
          ) {
            await userEvent.type(control, 'fixture@example.invalid');
            exercise = 'typed';
          } else if (
            control instanceof HTMLInputElement &&
            ['checkbox', 'radio'].includes(control.type) &&
            !readOnly
          ) {
            await userEvent.click(control);
            exercise = 'clicked';
          }

          const receipt: ActionReceipt = {
            control: controlName(control),
            controlType:
              control instanceof HTMLInputElement
                ? `input:${control.type || 'text'}`
                : control.tagName.toLowerCase(),
            disabled,
            readOnly,
            exercise,
            stateChanged: before !== digest(view.container.innerHTML),
            status: normalize(view.container.querySelector('[role="status"]')?.textContent) || null,
            networkCalls: fetch.mock.calls.length,
          };
          expect(receipt.networkCalls, `${record}/${fixture.id}/${receipt.control}`).toBe(0);
          actions.push(receipt);
          view.unmount();
          vi.unstubAllGlobals();
        }

        records.push({ record, fixture: fixture.id, actions });
      }
    }

    expect(new Set(records.map((record) => record.record)).size).toBe(88);
    const receiptPath = process.env.LIVECHAT_ACTION_RECEIPT;
    if (receiptPath) {
      const actionCount = records.reduce((sum, record) => sum + record.actions.length, 0);
      const exercisedCount = records.reduce(
        (sum, record) =>
          sum +
          record.actions.filter((action) => ['clicked', 'typed'].includes(action.exercise)).length,
        0
      );
      writeFileSync(
        receiptPath,
        `${JSON.stringify(
          {
            captured_at: new Date().toISOString(),
            evidence_class: 'fictional local fixture action receipt',
            limitation:
              'This receipt proves local React fixture behavior and absence of fixture network calls. It does not prove LiveChat provider behavior.',
            records: new Set(records.map((record) => record.record)).size,
            fixture_states: records.length,
            controls: actionCount,
            exercised_controls: exercisedCount,
            states: records,
          },
          null,
          2
        )}\n`
      );
    }
  }, 30_000);
});
