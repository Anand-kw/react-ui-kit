# React UI Kit

<div align="center">

### Modern React & Next.js UI Kit

Reusable components, responsive form designs, tables, modals, authentication screens, and custom hooks built with **Next.js 15+, TypeScript, and Tailwind CSS**.



\

</div>

---

## About

**React UI Kit** is a scalable frontend component library and showcase project designed for modern web applications.

The project demonstrates:

* Reusable UI components
* Authentication page layouts
* Responsive design patterns
* Custom React hooks
* Clean folder architecture
* Type-safe development with TypeScript
* Modern Next.js App Router conventions

This repository is intended to be both a **portfolio project** and a **reference architecture** for React/Next.js applications.

---

## Tech Stack

* **Next.js 15+ (App Router)**
* **React 19**
* **TypeScript**
* **Tailwind CSS**
* **ESLint**
* **Turbopack**

---

## Project Structure

```text
react-ui-kit/
├── app/                         # Next.js App Router (all routes)
│   ├── layout.tsx
│   ├── page.tsx
│   ├── auth/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── register/
│   │   │   └── page.tsx
│   │   ├── forgot-password/
│   │   │   └── page.tsx
│   │   ├── change-password/
│   │   │   └── page.tsx
│   │   └── mfa/
│   │       └── page.tsx
│   ├── dashboard/
│   │   └── page.tsx
│   └── examples/
│       ├── buttons/
│       │   └── page.tsx
│       ├── forms/
│       │   └── page.tsx
│       └── tables/
│           └── page.tsx
│
├── src/
│   ├── components/
│   │   ├── ui/                 # Primitive reusable components
│   │   │   ├── button/
│   │   │   │   └── Button.tsx
│   │   │   ├── input/
│   │   │   │   └── Input.tsx
│   │   │   ├── modal/
│   │   │   │   └── Modal.tsx
│   │   │   └── table/
│   │   │       └── Table.tsx
│   │   ├── forms/              # Composed business forms
│   │   │   ├── LoginForm.tsx
│   │   │   ├── RegisterForm.tsx
│   │   │   └── ForgotPasswordForm.tsx
│   │   └── layout/             # Shared layout components
│   │       ├── Header.tsx
│   │       ├── Sidebar.tsx
│   │       └── Footer.tsx
│   │
│   ├── hooks/                  # Custom React hooks
│   │   ├── useDebounce.ts
│   │   ├── useToggle.ts
│   │   └── useLocalStorage.ts
│   │
│   ├── lib/                    # API clients & integrations
│   ├── utils/                  # Pure utility functions
│   ├── constants/              # Application constants
│   ├── types/                  # TypeScript types/interfaces
│   └── styles/                 # Shared styles
│
├── public/
├── package.json
└── README.md
```

---

## Architecture Overview

### `app/` — Routing Layer

The `app` directory contains all application routes using the **Next.js App Router**.

Example:

```text
app/auth/login/page.tsx
```

This automatically creates the route:

```text
/auth/login
```

### `src/` — Application Code

The `src` directory contains reusable and framework-agnostic code:

* UI components
* Hooks
* Utilities
* Types
* Constants
* Shared styles

This separation keeps routing concerns isolated from business and UI logic.

---

## Naming Conventions

The project follows consistent naming conventions to improve readability and scalability.

### Repository

```text
react-ui-kit
```

* **kebab-case** for repository names

### Route Folders

```text
app/auth/change-password/
app/dashboard/user-profile/
```

* **lowercase**
* **kebab-case**
* Mirrors the URL structure

### React Components

```text
Button.tsx
Input.tsx
LoginForm.tsx
Sidebar.tsx
```

* **PascalCase**
* One component per file

### Component Folders

```text
src/components/ui/button/
src/components/ui/input/
```

* **lowercase**
* **kebab-case**
* Contains the PascalCase component file

### Custom Hooks

```text
useDebounce.ts
useToggle.ts
useLocalStorage.ts
```

Rules:

* Must start with `use`
* Use **camelCase**

### Utility Files

```text
dateFormatter.ts
currencyFormatter.ts
validators.ts
```

* **camelCase**
* Pure helper functions

### Type Files

```text
auth.ts
component.ts
api.ts
```
 
* **camelCase**
* Export interfaces, types, and DTOs

---

## Why This Structure?

This architecture was chosen to provide:

* Clear separation of concerns
* Easy onboarding for new developers
* Scalable growth from small to large applications
* Compatibility with modern Next.js best practices
* Better maintainability in enterprise projects

---

## Available Component Categories

### UI Components

* Button
* Input
* Modal
* Table
* Card *(planned)*
* Select *(planned)*
* Checkbox *(planned)*
* Loader *(planned)*

### Form Components

* Login Form
* Register Form
* Forgot Password Form
* Change Password Form *(planned)*
* MFA Verification Form *(planned)*

### Layout Components

* Header
* Sidebar
* Footer
* Dashboard Layout

---

## Custom Hooks Included

| Hook              | Purpose                                       |
| ----------------- | --------------------------------------------- |
| `useToggle`       | Toggle boolean state                          |
| `useDebounce`     | Delay expensive operations (search/API calls) |
| `useLocalStorage` | Persist state in localStorage                 |

Additional hooks planned:

* `useOutsideClick`
* `usePrevious`
* `useWindowSize`
* `useDarkMode`
* `useCopyToClipboard`

---

## Getting Started

### Prerequisites

* Node.js 22+
* npm / pnpm / yarn

### Installation

```bash
git clone https://github.com/Anand-kw/react-ui-kit.git
cd react-ui-kit
npm install
```

### Run the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Example Routes

| Route                   | Description         |
| ----------------------- | ------------------- |
| `/`                     | Landing page        |
| `/auth/login`           | Login screen        |
| `/auth/register`        | Registration screen |
| `/auth/forgot-password` | Password recovery   |
| `/dashboard`            | Dashboard layout    |
| `/examples/buttons`     | Button showcase     |
| `/examples/forms`       | Form showcase       |
| `/examples/tables`      | Table showcase      |

---

## Import Examples

### Button

```tsx
import Button from '@/components/ui/button/Button';

export default function Example() {
  return <Button>Click Me</Button>;
}
```

### Custom Hook

```tsx
import { useToggle } from '@/hooks/useToggle';

export default function Example() {
  const [open, toggle] = useToggle();

  return (
    <button onClick={toggle}>
      {open ? 'Close' : 'Open'}
    </button>
  );
}
```

---

## Development Principles

This project follows:

* **DRY** — Don’t Repeat Yourself
* **Component Composition**
* **Single Responsibility Principle**
* **Type Safety First**
* **Responsive by Default**
* **Accessibility Awareness**
* **Clean Code Practices**

---

## Future Roadmap

* [ ] Storybook integration
* [ ] Dark mode system
* [ ] Theme tokens
* [ ] Component documentation pages
* [ ] Animation utilities
* [ ] Data table with pagination
* [ ] Form validation examples
* [ ] npm package publishing
* [ ] CI/CD with GitHub Actions

---

## Author

### Anand Sheshmani Yadav

**Java Full Stack Developer | React | Spring Boot | Microservices**

* 4+ years of industry experience
* Banking, E-commerce, and Supply Chain Management domains
* Passionate about scalable architecture, reusable UI systems, and clean engineering practices

GitHub: **[@Anand-kw](https://github.com/Anand-kw)**

---

## License

This project is licensed under the **MIT License**.

---

<div align="center">

### If this project helps you, consider giving it a ⭐

Built with ❤️ using **Next.js + React + TypeScript + Tailwind CSS**

</div>
