import { Freshservice, type FreshserviceProps } from '../freshservice-shared/Freshservice';
export function FreshserviceFeatureAccordion(props: Omit<FreshserviceProps, 'variant'>) {
  return <Freshservice {...props} variant="feature-accordion" />;
}
