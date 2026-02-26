# UI Coding Standards

## Component Library

**shadcn/ui is the ONLY component library permitted in this project.**

- All UI elements MUST use shadcn/ui components.
- Do NOT create custom components. If a shadcn/ui component exists for the use case, use it.
- If a needed component is not yet installed, add it via `npx shadcn@latest add <component>`.
- Compose pages and features by combining shadcn/ui components — do not build bespoke replacements.

## Icons

Use **Lucide React** (`lucide-react`) for all icons, as it is the icon set bundled with shadcn/ui.

## Date Formatting

Use **date-fns** for all date formatting and manipulation.

Dates displayed to the user must follow this format:

```
1st Sep 2025
2nd Aug 2025
3rd Jan 2026
4th Jun 2024
```

Use the `format` function from date-fns with the pattern:

```ts
import { format } from "date-fns";

format(date, "do MMM yyyy");
// → "1st Sep 2025"
```

## Styling

- Use **Tailwind CSS** for all styling.
- Use the `cn()` utility (from `lib/utils`) to merge class names when needed.
