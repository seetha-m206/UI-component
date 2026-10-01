import { Freshservice, type FreshserviceProps } from '../freshservice-shared/Freshservice';
export function FreshserviceTicketEmptyState(props: Omit<FreshserviceProps, 'variant'>) {
  return <Freshservice {...props} variant="ticket-empty-state" />;
}
