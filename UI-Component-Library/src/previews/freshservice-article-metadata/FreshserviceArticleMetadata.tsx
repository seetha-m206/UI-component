import { FreshserviceDeep, type DeepProps } from '../freshservice-shared/FreshserviceDeep';
export function FreshserviceArticleMetadata(props: Omit<DeepProps, 'variant'>) {
  return <FreshserviceDeep {...props} variant="article-metadata" />;
}
