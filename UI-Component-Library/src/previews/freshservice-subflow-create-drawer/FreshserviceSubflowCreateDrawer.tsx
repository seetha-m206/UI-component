import { FreshserviceDeep, type DeepProps } from '../freshservice-shared/FreshserviceDeep';
export function FreshserviceSubflowCreateDrawer(props: Omit<DeepProps, 'variant'>) {
  return <FreshserviceDeep {...props} variant="subflow-create-drawer" />;
}
