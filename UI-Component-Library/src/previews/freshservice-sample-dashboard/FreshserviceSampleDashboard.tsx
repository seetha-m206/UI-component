import { FreshserviceMore, type MoreProps } from '../freshservice-shared/FreshserviceMore';
export function FreshserviceSampleDashboard(props: Omit<MoreProps, 'variant'>) {
  return <FreshserviceMore {...props} variant="sample-dashboard" />;
}
