import { Freshservice, type FreshserviceProps } from '../freshservice-shared/Freshservice';
export function FreshserviceNewIncidentForm(props: Omit<FreshserviceProps, 'variant'>) {
  return <Freshservice {...props} variant="new-incident-form" />;
}
