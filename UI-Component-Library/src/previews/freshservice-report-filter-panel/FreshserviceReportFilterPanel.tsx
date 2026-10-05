import { FreshserviceDeep, type DeepProps } from '../freshservice-shared/FreshserviceDeep';
export function FreshserviceReportFilterPanel(props: Omit<DeepProps, 'variant'>) {
  return <FreshserviceDeep {...props} variant="report-filter-panel" />;
}
