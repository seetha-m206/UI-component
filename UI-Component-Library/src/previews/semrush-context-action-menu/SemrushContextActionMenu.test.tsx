import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushContextActionMenu } from './SemrushContextActionMenu';
describe('SemrushContextActionMenu', () => {
  it('opens and guards an action locally', async () => { render(<SemrushContextActionMenu />); await userEvent.click(screen.getByRole('button', { name: 'Open folder actions' })); await userEvent.click(screen.getByRole('menuitem', { name: 'Settings' })); expect(screen.getByRole('status')).toHaveTextContent(/needs verification/i); });
});
