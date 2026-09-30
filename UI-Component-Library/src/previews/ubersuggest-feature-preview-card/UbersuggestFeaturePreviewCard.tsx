import { UbersuggestPreview, type UbersuggestProps } from '../ubersuggest-shared/Ubersuggest';
export function UbersuggestFeaturePreviewCard(props: UbersuggestProps) {
  return <UbersuggestPreview kind="feature" {...props} />;
}
