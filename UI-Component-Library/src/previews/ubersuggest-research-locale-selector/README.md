# Research Locale Selector

Hand-built reconstruction of Ubersuggest observations from 2026-09-30. Shared implementation and scoped CSS are in `../ubersuggest-shared/`.

Location request payload, debounce timing, full datasets and persistence are NOT OBSERVED. Local Escape restores the selected label as an intentional improvement over the ambiguous provider query-display state.

Provider uses combobox inputs and listbox/option roles. Inputs are 36 px high with 8 px corners. The two contexts use distinct datasets. Local options are an explicitly small captured subset, with synchronous filtering and fictional default All Locations.

All values are fictional. No provider endpoint, storage, cookie, account identifier or credentials are used. Tests in `../ubersuggest-shared/Ubersuggest.test.tsx` exercise meaningful behavior and the no-network submission boundary.
