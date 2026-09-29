import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushCampaignActionGroup } from './SemrushCampaignActionGroup';
describe('SemrushCampaignActionGroup', () => { it('guards every campaign action', async () => { render(<SemrushCampaignActionGroup />); await userEvent.click(screen.getByRole('button', { name: 'Export' })); expect(screen.getByRole('status')).toHaveTextContent(/Export needs verification/i); }); });
