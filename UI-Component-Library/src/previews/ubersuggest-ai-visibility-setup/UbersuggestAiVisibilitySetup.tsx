import { Remaining, type RemainingProps } from '../ubersuggest-remaining/Remaining';
export function UbersuggestAiVisibilitySetup(props: RemainingProps) {
  return <Remaining kind="visibility" {...props} />;
}
