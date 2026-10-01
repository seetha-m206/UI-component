import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SeRankingApplicationShell } from './SeRankingApplicationShell';
describe('SeRankingApplicationShell', () => { it('renders both authenticated navigation regions', () => { render(<SeRankingApplicationShell />); expect(screen.getByRole('complementary', { name: /product navigation/i })).toBeInTheDocument(); expect(screen.getByRole('button', { name: 'Keyword Research' })).toBeInTheDocument(); }); });
describe('account menu', () => { it('renders the observed account actions', () => { render(<SeRankingApplicationShell initialState="account-open" />); expect(screen.getByRole('menu')).toHaveTextContent('Seetha Lakshmi'); expect(screen.getByRole('menuitem', { name: 'Billing' })).toBeInTheDocument(); expect(screen.getByRole('menuitem', { name: 'Log Out' })).toBeInTheDocument(); }); });
