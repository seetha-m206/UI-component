import { UbersuggestPreview, type UbersuggestProps } from '../ubersuggest-shared/Ubersuggest';
export function UbersuggestWebsiteEntry(props: UbersuggestProps) {
  return <UbersuggestPreview kind="website" {...props} />;
}
