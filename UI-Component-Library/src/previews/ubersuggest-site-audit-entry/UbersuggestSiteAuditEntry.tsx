import { Remaining, type RemainingProps } from '../ubersuggest-remaining/Remaining';
export function UbersuggestSiteAuditEntry(props: RemainingProps) {
  return <Remaining kind="audit" {...props} />;
}
