# Keyword Chip Input

Hand-built reconstruction of Ubersuggest observations from 2026-09-30. Shared implementation and scoped CSS are in `../ubersuggest-shared/`.

Duplicate handling, whitespace normalization beyond tested inputs, paste edge cases, keyboard deletion and server validation are NEEDS VERIFICATION.

Provider token remove buttons are named only Remove. The reconstruction improves them to Remove plus the fictional token. Local Enter handling is a documented addition, while comma behavior and cap are observed.

All values are fictional. No provider endpoint, storage, cookie, account identifier or credentials are used. Tests in `../ubersuggest-shared/Ubersuggest.test.tsx` exercise meaningful behavior and the no-network submission boundary.
