import { Freshservice, type FreshserviceProps } from '../freshservice-shared/Freshservice';
export function FreshserviceDescriptionEditor(props: Omit<FreshserviceProps, 'variant'>) {
  return <Freshservice {...props} variant="description-editor" />;
}
