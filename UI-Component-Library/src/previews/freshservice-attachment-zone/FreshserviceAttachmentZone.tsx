import { Freshservice, type FreshserviceProps } from '../freshservice-shared/Freshservice';
export function FreshserviceAttachmentZone(props: Omit<FreshserviceProps, 'variant'>) {
  return <Freshservice {...props} variant="attachment-zone" />;
}
