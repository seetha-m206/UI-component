# Guarded Search Action

Hand-built reconstruction of Ubersuggest observations from 2026-09-30. Shared implementation and scoped CSS are in `../ubersuggest-shared/`.

Provider loading, error, empty results, quotas, credit use, result tables, report filters and export are NOT OBSERVED. The synthetic error fixture belongs to the screen preview only.

The provider action is type=submit, 36 px high with an 8 px radius. Local onSubmit prevents default and reports an explicit needs-verification status without fetch, navigation or persistence.

All values are fictional. No provider endpoint, storage, cookie, account identifier or credentials are used. Tests in `../ubersuggest-shared/Ubersuggest.test.tsx` exercise meaningful behavior and the no-network submission boundary.
