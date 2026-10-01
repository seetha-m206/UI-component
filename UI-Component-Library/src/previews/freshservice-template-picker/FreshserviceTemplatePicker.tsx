import { Freshservice, type FreshserviceProps } from '../freshservice-shared/Freshservice';
export function FreshserviceTemplatePicker(props: Omit<FreshserviceProps, 'variant'>) {
  return <Freshservice {...props} variant="template-picker" />;
}
