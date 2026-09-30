import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushFeatureUpgradeGate } from './SemrushFeatureUpgradeGate';
describe('SemrushFeatureUpgradeGate', () => { it('guards the provider upgrade action', async () => { render(<SemrushFeatureUpgradeGate />); await userEvent.click(screen.getByRole('button', { name: 'Upgrade to Guru' })); expect(screen.getByRole('status')).toHaveTextContent('guarded locally'); }); });
