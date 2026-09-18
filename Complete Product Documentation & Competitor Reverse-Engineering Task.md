# Product Documentation & Competitor Reverse-Engineering Task

## 1. Main Objective

The overall goal is to study existing products and competitor applications in depth and build a **universal product/UI documentation and benchmarking system**.

The purpose is to understand how the best products solve UX problems, identify the strongest patterns across products, and use that knowledge to help build a **better UX/product**.

The work is therefore much broader than ordinary documentation.

The complete process is:

```text
Research Products
       ↓
Explore Actual Applications
       ↓
Document Screens & Features
       ↓
Document Components & Actions
       ↓
Reverse Engineer UI Behavior
       ↓
Capture HTML / CSS / JS / Network Information
       ↓
Organize Everything into Categories
       ↓
Benchmark Multiple Competitors
       ↓
Create Universal Component/UX Knowledge
       ↓
Use the Best Patterns for New Product UX
```

---

# 2. Product and Market Research

For each product, first understand the product at a high level.

Research:

- Company
- Product name
- Product purpose
- Target users
- Major features
- Market positioning
- Pricing
- Free trial
- Product categories
- Competitors
- Integrations/platforms

For example, products such as **ZOHO Social** should be researched as complete products rather than looking at only one feature.

The goal is to understand what the product offers and how it is positioned in the market.

---

# 3. Create a Product Buffer

The speaker says that there should be a **buffer of multiple products**.

For example, instead of researching only one product at a time:

```text
Product 1
Product 2
Product 3
Product 4
Product 5
```

Maintain several products in the pipeline.

This allows the team to continuously move from one product to the next.

The speaker also discusses a target of approximately **one product/project documentation per week**, while building a larger library over time.

---

# 4. Explore the Actual Website/Application

After researching a product, log into the actual application where necessary and explore it.

The important point is:

> **Do not rely only on the public marketing website.**

The actual application must be explored.

For example:

```text
Login
  ↓
Dashboard
  ↓
Social
  ↓
Publishing
  ↓
Content
  ↓
Analytics
  ↓
Settings
```

Every meaningful area should be explored.

---

# 5. Document Every Screen

For every screen, identify:

- Screen name
- Screen purpose
- URL/route
- Screenshot
- Layout
- Navigation
- Sections
- Components
- Buttons
- Links
- Inputs
- Dropdowns
- Tabs
- Toggles
- Menus
- Modals
- Tables
- Cards
- Empty states
- Loading states
- Error states

The documentation should allow another person to understand the screen without having to explore the original product themselves.

---

# 6. Document Components

Each important component should be documented independently.

Example:

```text
Component: Social Post

Contains:
- Post content
- Media
- Platform selection
- Schedule
- Publish button
- Status
```

A component may also contain multiple tabs or sections.

For example:

```text
Component
 ├── Preview
 ├── Code
 ├── Rules
 ├── Legends
 └── Vectors
```

The speaker wants these relationships documented.

---

# 7. Document Every Action

This is one of the central requirements.

For every interactive element:

```text
Element
   ↓
User Action
   ↓
Action/Function
   ↓
Result
   ↓
New Screen or State
```

Example:

```text
Connect Facebook
      ↓
Click
      ↓
Connection action
      ↓
Network/API request
      ↓
Connection state changes
      ↓
UI updates
```

If one button produces multiple actions, document all of them.

For example:

```text
Button
 ├── Action A
 ├── Action B
 └── Action C
```

---

# 8. Build Screen-to-Screen Mapping

The interactions should be converted into a user-flow map.

Example:

```text
Dashboard
   │
   ├── Social
   │      ↓
   │   Social Screen
   │      ↓
   │   Create Post
   │      ↓
   │   Publish
   │
   └── Settings
          ↓
       Settings Screen
```

The objective is to understand the complete user journey rather than isolated screens.

---

# 9. Go Beyond the Visible UI

This is where the task becomes **reverse engineering**.

The speaker explains that when a user clicks a button, there may be a chain of technical events behind it.

For example:

```text
User Click
    ↓
DOM Event
    ↓
JavaScript
    ↓
Network Call
    ↓
API / Backend
    ↓
Response
    ↓
Application State
    ↓
HTML/UI Change
    ↓
CSS
    ↓
Animation
```

Therefore, where technically possible, document:

### DOM
Which HTML element receives the interaction?

### JavaScript
What code/event handles the interaction?

### Network
Does a network request occur?

### API
Which endpoint/URL is involved?

### Response
What does the application receive?

### State
How does the application's state change?

### HTML
What UI structure is generated/changed?

### CSS
What styles change?

### Animation
Is there an animation or transition?

---

# 10. Capture the Technical Data

The speaker specifically mentions collecting:

- Network calls
- CSS
- HTML
- JavaScript

This information should be captured and associated with the relevant component/action.

For example:

```text
Component: Toggle

UI:
Toggle button

Action:
Click

DOM:
<element>

JavaScript:
Click handler

Network:
API request

Response:
Success

CSS:
Active-state styles

Animation:
Toggle transition
```

This creates a much deeper representation of the component.

---

# 11. Browser Sessions and Login

Because some products require authentication, the team should use a controlled browser session.

The discussion mentions avoiding unnecessary use of personal accounts—for example, instead of connecting a personal Facebook account to a competitor product, use an appropriate test/account setup.

The idea is to:

```text
Open controlled browser session
        ↓
Login to test account
        ↓
Record session/cookies where appropriate
        ↓
Explore product
        ↓
Capture documentation
```

This allows the product to be explored without unnecessarily affecting personal accounts.

---

# 12. Screenshot and Visual Documentation

Screenshots are an important part of the documentation.

The speaker emphasizes that the documentation should be **visually understandable**.

It should not simply contain empty text files.

A person should be able to look at the documentation and immediately understand:

> “This is the component, this is its structure, these are its actions, and this is what happens.”

Therefore, documentation should contain appropriate:

- Screenshots
- Component images
- UI mappings
- Flow diagrams
- Structured tables
- Technical information

---

# 13. Create a Common Category System

The same types of components/actions should be grouped across products.

For example:

```text
Category: Authentication
 ├── Login
 ├── Signup
 ├── Forgot Password
 └── Logout

Category: Navigation
 ├── Sidebar
 ├── Tabs
 ├── Breadcrumb
 └── Dropdown

Category: Social
 ├── Publish
 ├── Schedule
 ├── Comment
 ├── Share
 └── Connect Account

Category: Data
 ├── Table
 ├── Filter
 ├── Search
 ├── Sort
 └── Pagination
```

This allows the team to compare equivalent functionality across competitors.

---

# 14. Benchmark Multiple Competitors

The speaker wants to study multiple competitors rather than simply copying one product.

For example:

```text
Social Product A
Social Product B
Social Product C
Social Product D
Social Product E
```

Then compare the same feature:

```text
Feature: Publish Post

Product A → Implementation
Product B → Implementation
Product C → Implementation
Product D → Implementation
Product E → Implementation
```

The team can then identify the strongest UX patterns.

The objective is:

> **Take the best ideas from multiple products rather than blindly copying one competitor.**

---

# 15. Build a Component Library / Knowledge Base

All the research should eventually become a reusable library.

Conceptually:

```text
Universal UI Library
│
├── Authentication
├── Navigation
├── Social
├── Forms
├── Tables
├── Dashboards
├── Notifications
├── Modals
├── Buttons
├── Toggles
└── etc.
```

Each component can contain:

```text
Component
 ├── Screenshot
 ├── Structure
 ├── Behavior
 ├── Actions
 ├── HTML
 ├── CSS
 ├── JavaScript
 ├── Network
 ├── States
 └── Source Product
```

---

# 16. Vectorize the Component Data

The speaker then discusses **vectorization**.

The idea is to convert the structured component information into a representation that can be searched and compared by an AI system.

Conceptually:

```text
Competitor Component
        ↓
Structured Data
        ↓
Component Representation
        ↓
Vector
        ↓
Vector Database
```

Then, if someone asks:

> “Find good examples of social publishing components.”

The system could retrieve relevant components from multiple researched products.

---

# 17. Universal Documentation

The speaker's larger goal appears to be creating **universal documentation** for the products being researched.

Instead of having unrelated documents:

```text
ZOHO documentation
Social product documentation
Dashboard documentation
Other competitor documentation
```

the information should eventually be organized into a common system:

```text
Universal Product Documentation
│
├── Products
├── Screens
├── Features
├── Components
├── Actions
├── User Flows
├── HTML
├── CSS
├── JavaScript
├── Network
├── States
└── Competitor Benchmarks
```

This makes the information reusable across products.

---

# 18. Final Business Goal — Build Better UX

The final purpose is not documentation for documentation's sake.

The speaker explicitly connects the research to building a **best UX**.

The intended process is:

```text
Study Many Products
       ↓
Understand Their UX
       ↓
Understand Their Components
       ↓
Understand Their Technical Behavior
       ↓
Benchmark
       ↓
Group Common Patterns
       ↓
Identify Best Implementations
       ↓
Use Those Insights
       ↓
Build Better UX
```

Therefore, the documentation becomes a **UX/product intelligence system**.

---

# 19. Complete Expected Output

For each product, the final documentation should ideally contain:

### Product Level

- Company
- Product
- Market positioning
- Pricing
- Features
- Competitors

### Screen Level

- Screen ID
- Screen name
- Purpose
- Screenshot
- Components
- States
- Navigation

### Component Level

- Component name
- Screenshot
- Structure
- Purpose
- Variants
- States
- Related screens

### Action Level

- Element
- User action
- Function
- Result
- Destination screen/state

### Technical Level

- DOM/HTML
- JavaScript
- CSS
- Network calls
- API/endpoint information
- State changes
- Animations

### Benchmark Level

- Competitor
- Feature
- Implementation
- UX pattern
- Strengths
- Differences
- Best observed approach

---

# 20. The Entire Task in One Diagram

```text
                  COMPETITOR PRODUCTS
                         │
                         ↓
                  Market Research
                         │
                         ↓
                  Login / Explore
                         │
                         ↓
                 Screen Discovery
                         │
                         ↓
               Component Discovery
                         │
                         ↓
                Action Discovery
                         │
                         ↓
                  User Flow Mapping
                         │
                         ↓
                ┌────────────────┐
                │ Reverse        │
                │ Engineering    │
                └───────┬────────┘
                        ↓
              HTML / DOM / CSS / JS
                        +
                  Network Calls
                        │
                        ↓
                Structured Data
                        │
                        ↓
                Component Library
                        │
                        ↓
               Category / Benchmark
                        │
                        ↓
                  Vector Database
                        │
                        ↓
                AI Retrieval / Search
                        │
                        ↓
                 BEST UX INSIGHTS
                        │
                        ↓
                  NEW PRODUCT UX
```

## Bottom line

The task is **not simply “document competitor websites.”**

It is:

> **Systematically study multiple products, explore their real applications, document every important screen/component/action, reverse-engineer the technical behavior behind those interactions where possible, organize the findings into a common component/category system, benchmark competitors, and eventually create a searchable/vectorized knowledge base that can be used to build better UX and reusable product components.**