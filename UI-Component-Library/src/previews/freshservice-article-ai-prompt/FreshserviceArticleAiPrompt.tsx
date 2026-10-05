import { FreshserviceDeep, type DeepProps } from '../freshservice-shared/FreshserviceDeep';
export function FreshserviceArticleAiPrompt(props: Omit<DeepProps, 'variant'>) {
  return <FreshserviceDeep {...props} variant="article-ai-prompt" />;
}
