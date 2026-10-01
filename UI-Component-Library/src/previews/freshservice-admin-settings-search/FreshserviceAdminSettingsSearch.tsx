import { FreshserviceMore, type MoreProps } from '../freshservice-shared/FreshserviceMore';
export function FreshserviceAdminSettingsSearch(props: Omit<MoreProps, 'variant'>) {
  return <FreshserviceMore {...props} variant="admin-settings-search" />;
}
