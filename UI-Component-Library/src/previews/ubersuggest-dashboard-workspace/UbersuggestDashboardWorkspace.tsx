import { UbersuggestPreview, type UbersuggestProps } from '../ubersuggest-shared/Ubersuggest';
export function UbersuggestDashboardWorkspace(props: UbersuggestProps) {
  return <UbersuggestPreview kind="dashboard" {...props} />;
}
