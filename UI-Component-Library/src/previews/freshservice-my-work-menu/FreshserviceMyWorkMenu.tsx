import { Freshservice, type FreshserviceProps } from '../freshservice-shared/Freshservice';
export function FreshserviceMyWorkMenu(props: Omit<FreshserviceProps, 'variant'>) {
  return <Freshservice {...props} variant="my-work-menu" />;
}
