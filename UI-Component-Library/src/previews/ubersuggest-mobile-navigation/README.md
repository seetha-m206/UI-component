# Mobile Navigation Dialog

Hand-built reconstruction of Ubersuggest observations from 2026-09-30. Shared implementation and scoped CSS are in `../ubersuggest-shared/`.

Escape did not produce a confirmed dismissal during the mobile capture. Outside-click dismissal, focus trap, route selection and settings outcomes are NEEDS VERIFICATION.

Provider dialog uses role=dialog and an accessible Sidebar heading and description. The reconstruction adds an explicit Close menu button, reliable Escape dismissal, focus return and a focus trap. These additions are not provider claims.

All values are fictional. No provider endpoint, storage, cookie, account identifier or credentials are used. Tests in `../ubersuggest-shared/Ubersuggest.test.tsx` exercise meaningful behavior and the no-network submission boundary.
