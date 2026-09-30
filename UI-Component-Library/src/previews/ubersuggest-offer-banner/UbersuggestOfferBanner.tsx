import { UbersuggestPreview, type UbersuggestProps } from '../ubersuggest-shared/Ubersuggest';
export function UbersuggestOfferBanner(props: UbersuggestProps) {
  return <UbersuggestPreview kind="offer" {...props} />;
}
