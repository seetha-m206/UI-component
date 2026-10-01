import { Freshservice, type FreshserviceProps } from '../freshservice-shared/Freshservice';
export function FreshserviceCcDisclosure(props: Omit<FreshserviceProps, 'variant'>) {
  return <Freshservice {...props} variant="cc-disclosure" />;
}
