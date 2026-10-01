import { FreshserviceMore, type MoreProps } from '../freshservice-shared/FreshserviceMore';
export function FreshserviceArticleTemplatesEmpty(props: Omit<MoreProps, 'variant'>) {
  return <FreshserviceMore {...props} variant="article-templates-empty" />;
}
