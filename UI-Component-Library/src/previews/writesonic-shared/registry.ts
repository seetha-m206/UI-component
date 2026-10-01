import { WritesonicPlanSelectionBoundary } from '../writesonic-plan-selection-boundary/WritesonicPlanSelectionBoundary';
import { fixtures as planFixtures } from '../writesonic-plan-selection-boundary/fixtures';
import type { PreviewRegistry } from '../types';
import { sourceRegistry } from '../sourceRegistry';
import { previewConfig, propsSchema } from './config';
import { WritesonicOnboardingReportShell as C0 } from '../writesonic-onboarding-report-shell/WritesonicOnboardingReportShell';
import { fixtures as f0 } from '../writesonic-onboarding-report-shell/fixtures';
import { WritesonicCompetitiveAnalysisReport as C1 } from '../writesonic-competitive-analysis-report/WritesonicCompetitiveAnalysisReport';
import { fixtures as f1 } from '../writesonic-competitive-analysis-report/fixtures';
import { WritesonicCitationsReport as C2 } from '../writesonic-citations-report/WritesonicCitationsReport';
import { fixtures as f2 } from '../writesonic-citations-report/fixtures';
import { WritesonicActionItemsReport as C3 } from '../writesonic-action-items-report/WritesonicActionItemsReport';
import { fixtures as f3 } from '../writesonic-action-items-report/fixtures';
import { WritesonicAnswersReport as C4 } from '../writesonic-answers-report/WritesonicAnswersReport';
import { fixtures as f4 } from '../writesonic-answers-report/fixtures';
import { WritesonicReportPageHeader as C5 } from '../writesonic-report-page-header/WritesonicReportPageHeader';
import { fixtures as f5 } from '../writesonic-report-page-header/fixtures';
import { WritesonicReportTabs as C6 } from '../writesonic-report-tabs/WritesonicReportTabs';
import { fixtures as f6 } from '../writesonic-report-tabs/fixtures';
import { WritesonicVisibilityMetricCards as C7 } from '../writesonic-visibility-metric-cards/WritesonicVisibilityMetricCards';
import { fixtures as f7 } from '../writesonic-visibility-metric-cards/fixtures';
import { WritesonicMetricHelpTrigger as C8 } from '../writesonic-metric-help-trigger/WritesonicMetricHelpTrigger';
import { fixtures as f8 } from '../writesonic-metric-help-trigger/fixtures';
import { WritesonicCompetitorRankingTable as C9 } from '../writesonic-competitor-ranking-table/WritesonicCompetitorRankingTable';
import { fixtures as f9 } from '../writesonic-competitor-ranking-table/fixtures';
import { WritesonicSentimentIndicator as C10 } from '../writesonic-sentiment-indicator/WritesonicSentimentIndicator';
import { fixtures as f10 } from '../writesonic-sentiment-indicator/fixtures';
import { WritesonicCitationSourceRow as C11 } from '../writesonic-citation-source-row/WritesonicCitationSourceRow';
import { fixtures as f11 } from '../writesonic-citation-source-row/fixtures';
import { WritesonicRecommendationCard as C12 } from '../writesonic-recommendation-card/WritesonicRecommendationCard';
import { fixtures as f12 } from '../writesonic-recommendation-card/fixtures';
import { WritesonicAnswerCard as C13 } from '../writesonic-answer-card/WritesonicAnswerCard';
import { fixtures as f13 } from '../writesonic-answer-card/fixtures';
import { WritesonicAnswerDisclosure as C14 } from '../writesonic-answer-disclosure/WritesonicAnswerDisclosure';
import { fixtures as f14 } from '../writesonic-answer-disclosure/fixtures';
import { WritesonicReportStepFooter as C15 } from '../writesonic-report-step-footer/WritesonicReportStepFooter';
import { fixtures as f15 } from '../writesonic-report-step-footer/fixtures';
import { WritesonicGuardedReportAction as C16 } from '../writesonic-guarded-report-action/WritesonicGuardedReportAction';
import { fixtures as f16 } from '../writesonic-guarded-report-action/fixtures';
export const writesonicPreviews: PreviewRegistry = {
  'writesonic-plan-selection-boundary': {
    type: 'reconstructed',
    Component: WritesonicPlanSelectionBoundary,
    label: 'Observed subscription boundary - fictional plan fixture',
    evidence:
      '2026-10-01 standard app entry redirected to Select a plan. All provider controls unexercised. Main product access and billing outcomes need verification.',
    runtimeVerified: false,
    fixtures: planFixtures,
    config: previewConfig,
    propsSchema,
  },
  'writesonic-onboarding-report-shell': {
    type: 'reconstructed',
    Component: C0,
    label: 'Observed onboarding UI · fictional reconstruction',
    evidence:
      '2026-10-01 live onboarding report. Local fixtures only. Provider calculations, main workspace access, plan actions, failure states and tooltip text need verification.',
    runtimeVerified: false,
    fixtures: f0,
    config: previewConfig,
    propsSchema,
  },
  'writesonic-competitive-analysis-report': {
    type: 'reconstructed',
    Component: C1,
    label: 'Observed onboarding UI · fictional reconstruction',
    evidence:
      '2026-10-01 live onboarding report. Local fixtures only. Provider calculations, main workspace access, plan actions, failure states and tooltip text need verification.',
    runtimeVerified: false,
    fixtures: f1,
    config: previewConfig,
    propsSchema,
  },
  'writesonic-citations-report': {
    type: 'reconstructed',
    Component: C2,
    label: 'Observed onboarding UI · fictional reconstruction',
    evidence:
      '2026-10-01 live onboarding report. Local fixtures only. Provider calculations, main workspace access, plan actions, failure states and tooltip text need verification.',
    runtimeVerified: false,
    fixtures: f2,
    config: previewConfig,
    propsSchema,
  },
  'writesonic-action-items-report': {
    type: 'reconstructed',
    Component: C3,
    label: 'Observed onboarding UI · fictional reconstruction',
    evidence:
      '2026-10-01 live onboarding report. Local fixtures only. Provider calculations, main workspace access, plan actions, failure states and tooltip text need verification.',
    runtimeVerified: false,
    fixtures: f3,
    config: previewConfig,
    propsSchema,
  },
  'writesonic-answers-report': {
    type: 'reconstructed',
    Component: C4,
    label: 'Observed onboarding UI · fictional reconstruction',
    evidence:
      '2026-10-01 live onboarding report. Local fixtures only. Provider calculations, main workspace access, plan actions, failure states and tooltip text need verification.',
    runtimeVerified: false,
    fixtures: f4,
    config: previewConfig,
    propsSchema,
  },
  'writesonic-report-page-header': {
    type: 'reconstructed',
    Component: C5,
    label: 'Observed onboarding UI · fictional reconstruction',
    evidence:
      '2026-10-01 live onboarding report. Local fixtures only. Provider calculations, main workspace access, plan actions, failure states and tooltip text need verification.',
    runtimeVerified: false,
    fixtures: f5,
    config: previewConfig,
    propsSchema,
  },
  'writesonic-report-tabs': {
    type: 'reconstructed',
    Component: C6,
    label: 'Observed onboarding UI · fictional reconstruction',
    evidence:
      '2026-10-01 live onboarding report. Local fixtures only. Provider calculations, main workspace access, plan actions, failure states and tooltip text need verification.',
    runtimeVerified: false,
    fixtures: f6,
    config: previewConfig,
    propsSchema,
  },
  'writesonic-visibility-metric-cards': {
    type: 'reconstructed',
    Component: C7,
    label: 'Observed onboarding UI · fictional reconstruction',
    evidence:
      '2026-10-01 live onboarding report. Local fixtures only. Provider calculations, main workspace access, plan actions, failure states and tooltip text need verification.',
    runtimeVerified: false,
    fixtures: f7,
    config: previewConfig,
    propsSchema,
  },
  'writesonic-metric-help-trigger': {
    type: 'reconstructed',
    Component: C8,
    label: 'Observed onboarding UI · fictional reconstruction',
    evidence:
      '2026-10-01 live onboarding report. Local fixtures only. Provider calculations, main workspace access, plan actions, failure states and tooltip text need verification.',
    runtimeVerified: false,
    fixtures: f8,
    config: previewConfig,
    propsSchema,
  },
  'writesonic-competitor-ranking-table': {
    type: 'reconstructed',
    Component: C9,
    label: 'Observed onboarding UI · fictional reconstruction',
    evidence:
      '2026-10-01 live onboarding report. Local fixtures only. Provider calculations, main workspace access, plan actions, failure states and tooltip text need verification.',
    runtimeVerified: false,
    fixtures: f9,
    config: previewConfig,
    propsSchema,
  },
  'writesonic-sentiment-indicator': {
    type: 'reconstructed',
    Component: C10,
    label: 'Observed onboarding UI · fictional reconstruction',
    evidence:
      '2026-10-01 live onboarding report. Local fixtures only. Provider calculations, main workspace access, plan actions, failure states and tooltip text need verification.',
    runtimeVerified: false,
    fixtures: f10,
    config: previewConfig,
    propsSchema,
  },
  'writesonic-citation-source-row': {
    type: 'reconstructed',
    Component: C11,
    label: 'Observed onboarding UI · fictional reconstruction',
    evidence:
      '2026-10-01 live onboarding report. Local fixtures only. Provider calculations, main workspace access, plan actions, failure states and tooltip text need verification.',
    runtimeVerified: false,
    fixtures: f11,
    config: previewConfig,
    propsSchema,
  },
  'writesonic-recommendation-card': {
    type: 'reconstructed',
    Component: C12,
    label: 'Observed onboarding UI · fictional reconstruction',
    evidence:
      '2026-10-01 live onboarding report. Local fixtures only. Provider calculations, main workspace access, plan actions, failure states and tooltip text need verification.',
    runtimeVerified: false,
    fixtures: f12,
    config: previewConfig,
    propsSchema,
  },
  'writesonic-answer-card': {
    type: 'reconstructed',
    Component: C13,
    label: 'Observed onboarding UI · fictional reconstruction',
    evidence:
      '2026-10-01 live onboarding report. Local fixtures only. Provider calculations, main workspace access, plan actions, failure states and tooltip text need verification.',
    runtimeVerified: false,
    fixtures: f13,
    config: previewConfig,
    propsSchema,
  },
  'writesonic-answer-disclosure': {
    type: 'reconstructed',
    Component: C14,
    label: 'Observed onboarding UI · fictional reconstruction',
    evidence:
      '2026-10-01 live onboarding report. Local fixtures only. Provider calculations, main workspace access, plan actions, failure states and tooltip text need verification.',
    runtimeVerified: false,
    fixtures: f14,
    config: previewConfig,
    propsSchema,
  },
  'writesonic-report-step-footer': {
    type: 'reconstructed',
    Component: C15,
    label: 'Observed onboarding UI · fictional reconstruction',
    evidence:
      '2026-10-01 live onboarding report. Local fixtures only. Provider calculations, main workspace access, plan actions, failure states and tooltip text need verification.',
    runtimeVerified: false,
    fixtures: f15,
    config: previewConfig,
    propsSchema,
  },
  'writesonic-guarded-report-action': {
    type: 'reconstructed',
    Component: C16,
    label: 'Observed onboarding UI · fictional reconstruction',
    evidence:
      '2026-10-01 live onboarding report. Local fixtures only. Provider calculations, main workspace access, plan actions, failure states and tooltip text need verification.',
    runtimeVerified: false,
    fixtures: f16,
    config: previewConfig,
    propsSchema,
  },
};
for (const id of Object.keys(writesonicPreviews)) {
  const shared = sourceRegistry['writesonic-shared']?.files ?? [];
  const own = sourceRegistry[id]?.files ?? [];
  sourceRegistry[id] = {
    files: [
      ...own,
      ...shared
        .filter((f) => f.fileName !== 'registry.ts')
        .map((f) => ({ ...f, fileName: '../writesonic-shared/' + f.fileName })),
    ],
  };
}
