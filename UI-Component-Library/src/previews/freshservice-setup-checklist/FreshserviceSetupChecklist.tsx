import { Freshservice, type FreshserviceProps } from '../freshservice-shared/Freshservice';
export function FreshserviceSetupChecklist(props: Omit<FreshserviceProps, 'variant'>) {
  return <Freshservice {...props} variant="setup-checklist" />;
}
