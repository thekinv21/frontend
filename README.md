# Frontend Application

A modern React application built with TypeScript, Vite, and Feature-Sliced Design (FSD) architecture.

## 🚀 Tech Stack

### Core Technologies

- **React 19.1.0** - UI library
- **TypeScript 5.8.3** - Type safety
- **Vite 6.3.5** - Build tool and dev server
- **React Router DOM 7.6.2** - Client-side routing

### State Management & Data Fetching

- **Zustand 5.0.5** - Lightweight state management
- **TanStack React Query 5.80.10** - Server state management
- **Axios 1.10.0** - HTTP client

### UI & Forms

- **React Hook Form 7.58.1** - Form handling
- **Sonner 2.0.5** - Toast notifications
- **Date-fns 4.1.0** - Date utilities

### Development Tools

- **ESLint 9.29.0** - Code linting
- **Prettier 3.5.3** - Code formatting
- **Husky 9.1.7** - Git hooks
- **Lint-staged 16.1.2** - Pre-commit linting

## 📁 Project Structure (Feature-Sliced Design)

```
src/
├── app/                    # Application layer
│   ├── ambient/           # Global types and declarations
│   ├── fonts/             # Font assets (Poppins)
│   ├── index.css          # Global styles
│   ├── index.tsx          # Application entry point
│   ├── providers/         # Global providers (QueryClient, Toast)
│   └── routers/           # Routing configuration
│
├── entities/              # Business entities
│   ├── role/              # Role entity
│   │   ├── api/           # API calls
│   │   ├── lib/           # Utilities
│   │   ├── schema/        # Validation schemas
│   │   └── ui/            # UI components
│   └── user/              # User entity
│       ├── api/           # API calls
│       ├── lib/           # Utilities
│       ├── schema/        # Validation schemas
│       └── ui/            # UI components
│
├── features/              # Business features
│   ├── role/              # Role-related features
│   │   ├── api/           # Feature-specific API
│   │   ├── lib/           # Feature utilities
│   │   ├── schema/        # Feature validation
│   │   └── ui/            # Feature components
│   └── user/              # User-related features
│       ├── api/           # Feature-specific API
│       ├── lib/           # Feature utilities
│       ├── schema/        # Feature validation
│       └── ui/            # Feature components
│
├── pages/                 # Page components
│   ├── auth/              # Authentication pages
│   ├── not-found/         # 404 page
│   ├── role/              # Role management pages
│   └── user/              # User management pages
│
├── shared/                # Shared utilities and components
│   ├── api/               # API configuration
│   ├── config/            # Application configuration
│   ├── constants/         # Global constants
│   ├── hooks/             # Custom hooks
│   ├── lib/               # Utility functions
│   ├── store/             # Global state
│   └── ui/                # Reusable UI components
│
└── widgets/               # Complex UI compositions
    ├── header/            # Header widget
    └── sidebar/           # Sidebar widget
```

## 🛠️ Getting Started

### Prerequisites

- **Node.js** >= 21.0.0
- **npm** >= 9.0.0

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/thekinv21/frontend.git
   cd frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

   The application will open automatically at `http://localhost:3000`

### Available Scripts

| Script                 | Description                              |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Start development server with hot reload |
| `npm run build`        | Build for production                     |
| `npm run preview`      | Preview production build locally         |
| `npm run format`       | Format code with Prettier                |
| `npm run format:check` | Check code formatting                    |
| `npm run lint`         | Run ESLint                               |

## 📋 Project Rules & Guidelines

### Code Style

#### TypeScript

- Use strict TypeScript configuration
- Avoid `any` type - use proper typing
- Prefer nullish coalescing (`??`) over logical OR (`||`)
- Use optional chaining (`?.`) for safe property access
- Enable all strict type checking rules

#### React

- Use functional components with hooks
- Follow React Hooks rules strictly
- Use proper prop types and interfaces
- Avoid direct DOM manipulation
- Use React.memo for performance optimization when needed

#### Import Organization

```typescript
// 1. React imports
import React from 'react'

// 2. Third-party libraries
import { useQuery } from '@tanstack/react-query'

import { useUser } from '@/entities/user'

// 3. Internal imports (using @ alias)
import { Button } from '@/shared/ui'
```

### File Naming Conventions

- **Components**: PascalCase (e.g., `UserProfile.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useUserData.ts`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.ts`)
- **Types/Interfaces**: PascalCase (e.g., `UserTypes.ts`)

### FSD Architecture Rules

#### Layer Dependencies

```
app → pages → widgets → features → entities → shared
```

---

## 🧾 Layer Access Rules

| Layer       | Can access                                  |
| ----------- | ------------------------------------------- |
| `app`       | all layers                                  |
| `pages`     | `widgets`, `features`, `entities`, `shared` |
| `processes` | `features`, `entities`, `shared`            |
| `widgets`   | `features`, `entities`, `shared`            |
| `features`  | `entities`, `shared`                        |
| `entities`  | `shared`                                    |
| `shared`    | no other dependencies                       |

---

- Higher layers can import from lower layers
- Lower layers cannot import from higher layers
- Shared layer can be imported by any layer
- App layer should not be imported by other layers

#### Slice Structure

Each slice (entity/feature/widget) should follow this structure:

```
slice/
├── api/       # API calls and data fetching
├── lib/       # Utility functions
├── schema/    # Validation schemas
└── ui/        # UI components
```

### Git Workflow

- Use conventional commit messages
- Pre-commit hooks run linting and formatting
- All code must pass ESLint and Prettier checks
- Use feature branches for development

### Performance Guidelines

- Use React.memo for expensive components
- Implement proper loading states
- Use React Query for server state management
- Optimize bundle size with code splitting
- Use lazy loading for routes

### Security

- Validate all user inputs
- Sanitize data before rendering
- Use HTTPS in production
- Implement proper authentication/authorization
- Avoid exposing sensitive information in client-side code

## 🔧 Configuration Files

- **`vite.config.ts`** - Vite build configuration
- **`tsconfig.json`** - TypeScript configuration
- **`eslint.config.js`** - ESLint rules and plugins
- **`package.json`** - Dependencies and scripts

## 📦 Key Dependencies

### Production Dependencies

- `@tanstack/react-query` - Server state management
- `axios` - HTTP client
- `date-fns` - Date manipulation
- `react-hook-form` - Form handling
- `react-router-dom` - Routing
- `sonner` - Toast notifications
- `zustand` - State management

### Development Dependencies

- `@vitejs/plugin-react` - React support for Vite
- `typescript-eslint` - TypeScript ESLint rules
- `prettier` - Code formatting
- `husky` - Git hooks
- `lint-staged` - Pre-commit linting

## 📄 License

This project is private and proprietary.
