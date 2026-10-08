# monday.com component research

## Evidence boundary

- **OBSERVATION:** 58 reusable monday.com screen and component families were inspected in an authenticated workspace on 2026-10-08.
- **RECONSTRUCTION:** Every preview is fictional and local. Workspace identity, member identity, object IDs, dates, board names and provider payloads are omitted or replaced.
- **OBSERVATION:** Opening Board Options > AI suggestions automatically generated a suggestion preview. It was canceled. No column was added and no board data was saved.
- **NOT OBSERVED:** Creation, editing, deletion, invitations, exports, publishing, installations, prompt submission, uploads, workflow execution, meeting recording, purchases, permission changes, API-key changes or security-setting changes.
- **NEEDS VERIFICATION:** Provider persistence, responsive provider layouts, paid outcomes, automation runs, recurring behavior, model behavior and backend contracts.

## Catalogue

1. monday.com Application Shell
2. monday.com Workspace Overview
3. monday.com Global Search
4. monday.com Board Table
5. monday.com Board Controls
6. monday.com Dashboard and Reporting
7. monday.com AI Workflows Onboarding
8. monday.com Agent Directory
9. monday.com Vibe App Builder
10. monday.com Notetaker Onboarding
11. monday.com My Work Table
12. monday.com My Work Calendar
13. monday.com My Work Customize Drawer
14. monday.com Template Center
15. monday.com Docs Hub AI Draft
16. monday.com Autopilot Health
17. monday.com Autopilot Usage
18. monday.com Sidekick Chat
19. monday.com Sidekick Scheduled Tasks
20. monday.com Sidekick Personalization
21. monday.com Sidekick Skills
22. monday.com Agent Management Table
23. monday.com Agent Directory Card
24. monday.com Agent Model Selector
25. monday.com Vibe App Launcher
26. monday.com Vibe Template Gallery
27. monday.com Vibe Plan Gate
28. monday.com Workflow Template Gallery
29. monday.com Workflow Inventory
30. monday.com Notetaker Meeting History
31. monday.com Notetaker Filter Controls
32. monday.com Workspace Content Table
33. monday.com Workspace Collaborators
34. monday.com Favorites Panel
35. monday.com Notification Center
36. monday.com Update Feed
37. monday.com Help Menu
38. monday.com Products Switcher
39. monday.com User Menu
40. monday.com Import Data Modal
41. monday.com Trash and Archive Tables
42. monday.com Teams Management
43. monday.com Administration Navigation
44. monday.com AI Permissions
45. monday.com AI Credit Usage
46. monday.com AI Usage Limits
47. monday.com AI Agent Governance
48. monday.com AI Account Settings
49. monday.com Board Options Menu
50. monday.com Group Actions Menu
51. monday.com Item Actions Menu
52. monday.com Column Actions Menu
53. monday.com Add Column Menu
54. monday.com Automation Center
55. monday.com AI Automation Templates
56. monday.com Board Integrations
57. monday.com Board View Menu
58. monday.com AI Suggestions Preview

## Safety

Provider navigation was read-only except that the AI suggestions entry automatically exercised provider computation to create a preview. The preview was canceled. Local preview actions update React state only and do not contact monday.com.
