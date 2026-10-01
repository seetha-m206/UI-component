import { FreshserviceMore, type MoreProps } from '../freshservice-shared/FreshserviceMore';
export function FreshserviceAnalyticsCatalogue(props: Omit<MoreProps, 'variant'>) {
  return <FreshserviceMore {...props} variant="analytics-catalogue" />;
}
