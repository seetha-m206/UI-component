import { FreshserviceDeep, type DeepProps } from '../freshservice-shared/FreshserviceDeep';
export function FreshserviceArticleEditor(props: Omit<DeepProps, 'variant'>) {
  return <FreshserviceDeep {...props} variant="article-editor" />;
}
