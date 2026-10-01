import { Remaining, type RemainingProps } from '../ubersuggest-remaining/Remaining';
export function UbersuggestBulkAnalysis(props: RemainingProps) {
  return <Remaining kind="bulk" {...props} />;
}
