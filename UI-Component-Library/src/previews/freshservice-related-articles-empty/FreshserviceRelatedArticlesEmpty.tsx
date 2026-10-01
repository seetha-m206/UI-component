import { Freshservice, type FreshserviceProps } from '../freshservice-shared/Freshservice';
export function FreshserviceRelatedArticlesEmpty(props: Omit<FreshserviceProps, 'variant'>) {
  return <Freshservice {...props} variant="related-articles-empty" />;
}
