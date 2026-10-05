import { FreshserviceDeep, type DeepProps } from '../freshservice-shared/FreshserviceDeep';
export function FreshserviceReportExportSettings(props: Omit<DeepProps, 'variant'>) {
  return <FreshserviceDeep {...props} variant="report-export-settings" />;
}
