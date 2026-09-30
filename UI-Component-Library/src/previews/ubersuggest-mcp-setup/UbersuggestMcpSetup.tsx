import { Remaining, type RemainingProps } from '../ubersuggest-remaining/Remaining';
export function UbersuggestMcpSetup(props: RemainingProps) {
  return <Remaining kind="mcp" {...props} />;
}
