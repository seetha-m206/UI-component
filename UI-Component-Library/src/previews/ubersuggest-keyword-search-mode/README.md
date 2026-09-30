# Keyword Search Mode Switch

Hand-built reconstruction of Ubersuggest observations from 2026-09-30. Shared implementation and scoped CSS are in `../ubersuggest-shared/`.

Draft preservation across modes, query normalization and submitted result differences are NEEDS VERIFICATION.

Provider renders buttons with aria-pressed rather than tab roles. Both measured 46 px high. The standalone reconstruction shows a descriptive mode result, and the screen preview swaps the full form.

All values are fictional. No provider endpoint, storage, cookie, account identifier or credentials are used. Tests in `../ubersuggest-shared/Ubersuggest.test.tsx` exercise meaningful behavior and the no-network submission boundary.
