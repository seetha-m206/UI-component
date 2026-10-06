import { FreshserviceDeep, type DeepProps } from '../freshservice-shared/FreshserviceDeep';
export function FreshserviceReportDetail(props: Omit<DeepProps, 'variant'>) {
  return <FreshserviceDeep {...props} variant="report-detail" />;
}
