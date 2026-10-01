import { Freshservice, type FreshserviceProps } from '../freshservice-shared/Freshservice';
export function FreshserviceCreateMenu(props: Omit<FreshserviceProps, 'variant'>) {
  return <Freshservice {...props} variant="create-menu" />;
}
