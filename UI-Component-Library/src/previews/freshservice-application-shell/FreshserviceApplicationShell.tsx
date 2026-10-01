import { Freshservice, type FreshserviceProps } from '../freshservice-shared/Freshservice';
export function FreshserviceApplicationShell(props: Omit<FreshserviceProps, 'variant'>) {
  return <Freshservice {...props} variant="application-shell" />;
}
