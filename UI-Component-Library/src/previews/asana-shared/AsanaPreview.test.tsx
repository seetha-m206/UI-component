import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { AsanaPreview } from './AsanaPreview';
import { asanaIds } from './registry';
import { previewRegistry } from '../registry';
import { sourceRegistry } from '../sourceRegistry';

describe('AsanaPreview', () => {
  it('registers every Asana record with a runtime fixture and Code-tab source', () => {
    expect(asanaIds).toHaveLength(65);
    for (const id of asanaIds) {
      const preview = previewRegistry[id];
      expect(preview?.type, id).toBe('reconstructed');
      expect(sourceRegistry[id]?.files.length, id).toBeGreaterThan(0);
    }
  });

  it('renders a fictional application shell without provider identity', () => {
    const { container } = render(<AsanaPreview variant="application-shell" />);
    expect(screen.getByRole('complementary', { name: 'Workspace navigation' })).toBeInTheDocument();
    expect(container.textContent).not.toMatch(/\b[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}\b/);
  });

  it('keeps global create actions local and guarded', async () => {
    const user = userEvent.setup();
    render(<AsanaPreview variant="global-create-menu" />);
    await user.click(screen.getByRole('menuitem', { name: 'Task' }));
    expect(screen.getByRole('status')).toHaveTextContent('No task was created.');
  });

  it('switches home task categories locally', async () => {
    const user = userEvent.setup();
    render(<AsanaPreview variant="home-my-tasks-widget" />);
    await user.click(screen.getByRole('button', { name: 'Overdue' }));
    expect(screen.getByText(/No overdue tasks/i)).toBeInTheDocument();
  });

  it('shows all My tasks control families without saving state', async () => {
    const user = userEvent.setup();
    render(<AsanaPreview variant="my-tasks-view-controls" />);
    await user.click(screen.getByRole('button', { name: 'Sort' }));
    expect(screen.getByRole('button', { name: 'Alphabetical' })).toBeInTheDocument();
  });

  it('guards board task completion', async () => {
    const user = userEvent.setup();
    render(<AsanaPreview variant="board-task-card" />);
    await user.click(screen.getByRole('button', { name: '○' }));
    expect(screen.getByRole('status')).toHaveTextContent('The task was not completed.');
  });

  it('does not save the reconstructed default view', async () => {
    const user = userEvent.setup();
    render(<AsanaPreview variant="default-view-onboarding" />);
    await user.click(screen.getByRole('button', { name: 'Continue' }));
    expect(screen.getByRole('status')).toHaveTextContent('Default view was not saved');
  });

  it('captures every safely observed workflow hub in one guarded fixture', async () => {
    const user = userEvent.setup();
    render(<AsanaPreview variant="workflow-library" />);
    await user.click(screen.getByRole('button', { name: /Status templates/i }));
    expect(screen.getByRole('heading', { name: 'Status templates' })).toBeInTheDocument();
    expect(screen.getByText(/Creation remains disabled/i)).toBeInTheDocument();
  });

  it('keeps settings values fictional and unsaved', async () => {
    const user = userEvent.setup();
    render(<AsanaPreview variant="settings-dialog" />);
    await user.click(screen.getByRole('button', { name: 'Apps' }));
    expect(screen.getByRole('heading', { name: 'Apps' })).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent('Values are fictional and controls do not save');
  });

  it('reconstructs the bounded task lifecycle with fictional data', async () => {
    const user = userEvent.setup();
    render(<AsanaPreview variant="task-lifecycle" />);
    const completion = screen.getByRole('button', { name: /Verify lifecycle behavior/i });
    expect(completion).toHaveTextContent('✓');
    await user.click(completion);
    expect(completion).toHaveTextContent('○');
    expect(screen.getByRole('status')).toHaveTextContent('does not call Asana');
  });

  it('labels the form fixture as unpublished and blocks publication', () => {
    render(<AsanaPreview variant="project-form-builder" />);
    expect(screen.getByText(/UNPUBLISHED · ORGANIZATION ONLY/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Publish' })).toBeDisabled();
  });

  it('keeps import, export, sync and public-link actions inert', () => {
    render(<AsanaPreview variant="project-import-export-sync" />);
    expect(screen.getByRole('button', { name: 'Export · JSON' })).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent('No file was uploaded, downloaded, exported, synchronized, printed, or shared.');
  });

  it('records the empty AI teammate result without implying teammate creation', () => {
    render(<AsanaPreview variant="ai-teammate-suggestion-result" />);
    expect(screen.getByRole('heading', { name: 'No AI Teammate suggestions found' })).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent('No teammate was created or applied.');
  });
});
