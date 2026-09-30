import { UbersuggestPreview, type UbersuggestProps } from '../ubersuggest-shared/Ubersuggest';
export function UbersuggestSearchAction(props: UbersuggestProps) {
  return <UbersuggestPreview kind="search" {...props} />;
}
