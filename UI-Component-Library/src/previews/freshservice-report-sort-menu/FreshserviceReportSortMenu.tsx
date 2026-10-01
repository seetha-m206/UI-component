import { FreshserviceMore, type MoreProps } from '../freshservice-shared/FreshserviceMore';
export function FreshserviceReportSortMenu(props: Omit<MoreProps, 'variant'>) {
  return <FreshserviceMore {...props} variant="report-sort-menu" />;
}
