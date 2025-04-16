# React + TypeScript + Vite Project

This project is a modern React application bootstrapped with Vite and configured with TypeScript for enhanced development experience.

## Tech Stack

### Core Technologies
- **React** (v19.0.0) - A JavaScript library for building user interfaces
- **TypeScript** (v5.7.2) - Adds static typing to JavaScript for better development experience
- **Vite** (v6.2.0) - Next generation frontend tooling, offering extremely fast development server and build process
- **React Router** (v7.5.0) - Declarative routing for React applications
- **React Query** (v5.72.1) - Powerful data synchronization for React

### Development Dependencies
- **@vitejs/plugin-react** (v4.3.4) - Official React plugin for Vite
- **@types/react** (v19.0.10) - TypeScript type definitions for React
- **@types/react-dom** (v19.0.4) - TypeScript type definitions for React DOM

### Code Quality Tools
- **Biome** (v1.6.1) - A performant linter and formatter
- **PandaCSS** (v0.53.3) - Modern CSS-in-JS solution
- **PostCSS** (v8.5.3) - A tool for transforming CSS with JavaScript

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```
   This will start the development server at `http://localhost:5173`

3. Build for production:
   ```bash
   npm run build
   ```

## Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production
- `npm run lint` - Run Biome linter
- `npm run format` - Format code using Biome
- `npm run preview` - Preview production build locally
- `npm run prepare` - Generate PandaCSS styles

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
│   │   └── Persons.tsx
│   ├── api.ts            # API-related code
│   ├── App.tsx           # Root component
│   └── main.tsx          # Application entry point
├── public/               # Static assets
├── dist/                 # Build output (generated)
└── node_modules/         # Dependencies
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

## Contributing

1. Follow the existing code style
2. Run `npm run lint` and `npm run format` before committing
3. Make sure all TypeScript types are properly defined
4. Keep styles in separate `.styles.ts` files
5. Follow the component structure pattern

## License

This project is private and not licensed for public use.

---
*Documentation written by Claude, an AI assistant, in collaboration with the project maintainers.*
