import { Freshservice, type FreshserviceProps } from '../freshservice-shared/Freshservice';
export function FreshserviceGlobalHeader(props: Omit<FreshserviceProps, 'variant'>) {
  return <Freshservice {...props} variant="global-header" />;
}
