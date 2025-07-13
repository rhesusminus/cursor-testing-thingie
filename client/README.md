# Star Wars Explorer - React + TypeScript + Vite Project

A modern, fully-typed React application that provides an interactive interface for exploring Star Wars universe data. Built with cutting-edge web technologies for optimal performance and developer experience.

## ✨ Features

- 🚀 **Fast Development**: Powered by Vite for lightning-fast hot module replacement
- 🔍 **Star Wars Data Explorer**: Browse characters and planets from the Star Wars universe
- 🎨 **Modern Styling**: Type-safe CSS-in-JS with PandaCSS
- 🧪 **Comprehensive Testing**: Unit and integration tests with Vitest
- 📱 **Responsive Design**: Mobile-first, accessible UI components
- 🔧 **Developer Experience**: TypeScript, linting, formatting, and more
- ⚡ **Performance**: Optimized builds and efficient data fetching with React Query

## Tech Stack

### Core Technologies
- **React** (v19.0.0) - A JavaScript library for building user interfaces
- **TypeScript** (v5.7.2) - Adds static typing to JavaScript for better development experience
- **Vite** (v6.3.2) - Next generation frontend tooling, offering extremely fast development server and build process
- **React Router** (v7.5.0) - Declarative routing for React applications
- **TanStack React Query** (v5.72.1) - Powerful data synchronization for React

### Testing Tools
- **Vitest** (v3.1.3) - Fast Vite-native testing framework
- **Testing Library** (v16.3.0) - Utilities for testing React components
- **JSDOM** (v26.1.0) - A JavaScript implementation of the DOM for testing

### Development Dependencies
- **@vitejs/plugin-react** (v4.3.4) - Official React plugin for Vite
- **@types/react** (v19.0.10) - TypeScript type definitions for React
- **@types/react-dom** (v19.0.4) - TypeScript type definitions for React DOM

### Code Quality Tools
- **Biome** (v1.6.1) - A performant linter and formatter
- **PandaCSS** (v0.53.3) - Modern CSS-in-JS solution
- **PostCSS** (v8.5.3) - A tool for transforming CSS with JavaScript

## Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** (v9 or higher)

### Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/rhesusminus/cursor-testing-thingie.git
   cd cursor-testing-thingie/client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   This will start both the development server at `http://localhost:5173` and the PandaCSS codegen in watch mode

4. Run tests:
   ```bash
   npm test
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## Available Scripts

- `npm run dev` - Start development server and PandaCSS codegen in watch mode
- `npm run build` - Generate PandaCSS styles, run TypeScript build, and create production build
- `npm run lint` - Run Biome linter
- `npm run format` - Format code using Biome
- `npm run preview` - Preview production build locally
- `npm run prepare` - Generate PandaCSS styles
- `npm test` - Run tests once
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage reports

## Project Structure

```
client/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Layout.tsx     # Main layout component
│   │   ├── Navbar.tsx     # Navigation component
│   │   ├── Footer.tsx     # Footer component
│   │   └── *.styles.ts    # Component-specific styles
│   ├── pages/            # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Persons.tsx   # Star Wars characters page
│   │   ├── Persons.test.tsx # Tests for Persons page
│   │   └── Planets.tsx   # Star Wars planets page
│   ├── api.ts            # API-related code for fetching data
│   ├── mocks.ts          # Mock data for testing
│   ├── types.ts          # TypeScript type definitions
│   ├── test-setup.ts     # Test setup for component testing
│   ├── App.tsx           # Root component
│   └── main.tsx          # Application entry point
├── public/               # Static assets
├── vitest.config.ts      # Vitest configuration
├── setupTests.ts         # Global test setup
├── testing-docs.md       # Documentation for testing practices
└── styled-system/        # PandaCSS generated styles
```

## Styling with PandaCSS

The project uses PandaCSS for styling with the following approach:

1. **Component-Specific Styles**
   - Each component has its own `.styles.ts` file
   - Styles are organized by component for better maintainability
   - Example: `Navbar.styles.ts`, `Layout.styles.ts`, etc.

2. **Layout Structure**
   - Main layout with header, main content, and footer
   - Responsive design with proper spacing and alignment
   - Consistent styling across components

3. **Navigation**
   - Sticky navigation bar with active state indicators
   - Responsive menu structure
   - Clear visual feedback for current page

4. **Pages**
   - Consistent page layouts
   - Responsive content containers
   - Form styling with proper validation states

## TypeScript Configuration

The project includes three TypeScript configuration files:
- `tsconfig.json` - Base TypeScript configuration
- `tsconfig.node.json` - Configuration for Vite and other Node.js files
- `tsconfig.app.json` - Configuration for the React application

## Code Quality

- Biome is used for:
  - Fast and efficient linting with TypeScript support
  - Consistent code formatting
  - Import organization
  - Modern JavaScript/TypeScript best practices
- PandaCSS provides type-safe CSS-in-JS solutions

## Testing Framework

The project uses Vitest with React Testing Library for testing:

- **Unit Tests**: Testing individual components and utilities
- **Component Tests**: Testing React components including rendering, state, and events
- **Integration Tests**: Testing interactions between components and with data

### Test Structure

```tsx
describe('Component Name', () => {
  // Tests grouped by functionality or state
  describe('when in a specific state', () => {
    it('behaves as expected', () => {
      // Arrange, Act, Assert...
    });
  });
});
```

### Running Tests

- `npm test` - Runs all tests once
- `npm run test:watch` - Runs tests in watch mode for development
- `npm run test:coverage` - Generates test coverage reports

## Features

### Star Wars Data Explorer

The application provides interfaces to explore Star Wars data:

1. **Characters Page** (`Persons.tsx`)
   - Displays a list of Star Wars characters
   - Uses React Query for data fetching and caching
   - Responsive layout with styled components

2. **Planets Page** (`Planets.tsx`)
   - Displays information about Star Wars planets
   - Shows climate, terrain, and population data
   - Consistent styling with other pages

## Development Workflow

### Daily Development
1. **Start development environment**:
   ```bash
   npm run dev
   ```
   This starts both Vite dev server and PandaCSS watch mode

2. **Run tests during development**:
   ```bash
   npm run test:watch
   ```

3. **Format and lint your code**:
   ```bash
   npm run format
   npm run lint
   ```

### Before Committing
1. **Run all tests**:
   ```bash
   npm test
   ```

2. **Check test coverage**:
   ```bash
   npm run test:coverage
   ```

3. **Ensure build works**:
   ```bash
   npm run build
   ```

## Contributing

1. **Code Style**: Follow the existing patterns and use the provided tools
   - Run `npm run format` for consistent formatting
   - Run `npm run lint` to catch potential issues
   
2. **TypeScript**: Maintain type safety
   - All new code should be properly typed
   - Avoid using `any` - use proper type definitions
   
3. **Testing**: Write tests for new features
   - Follow the existing test patterns in `*.test.tsx` files
   - Aim for good test coverage
   - Refer to `testing-docs.md` for detailed testing guidelines
   
4. **Styling**: Use the PandaCSS system
   - Create component-specific `.styles.ts` files
   - Follow the existing component structure pattern
   
5. **Components**: Follow React best practices
   - Keep components focused and reusable
   - Use proper prop typing
   - Include accessibility features

## 💡 Development Tips

- **Hot Reload**: Changes to React components and styles are reflected instantly
- **Type Safety**: TypeScript will catch errors at compile time - pay attention to the type checker
- **PandaCSS**: Use the generated styles from `styled-system/` for consistent design
- **Testing**: Tests run automatically in watch mode during development
- **Debugging**: Use browser dev tools and React Developer Tools for debugging

## 🚀 Deployment

The project is configured for easy deployment:

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

The built files will be in the `dist/` directory and can be deployed to any static hosting service.

## License

This project is part of a testing repository and is intended for educational/experimental purposes.

---
*Last updated: July 13, 2025*
