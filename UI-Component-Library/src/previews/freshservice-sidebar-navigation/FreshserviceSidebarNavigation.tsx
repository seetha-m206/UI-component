import { Freshservice, type FreshserviceProps } from '../freshservice-shared/Freshservice';
export function FreshserviceSidebarNavigation(props: Omit<FreshserviceProps, 'variant'>) {
  return <Freshservice {...props} variant="sidebar-navigation" />;
}
