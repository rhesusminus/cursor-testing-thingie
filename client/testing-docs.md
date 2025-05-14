# Testing Guidelines for Star Wars Character Explorer App

This project uses Vitest along with React Testing Library for testing React components. Below is an outline of the types of tests we write and best practices to follow when adding new tests.

## Testing Setup

- **Test Framework**: Vitest
- **Testing Library**: React Testing Library
- **Test Files Location**: Co-located with components (e.g., `Component.test.tsx` next to `Component.tsx`)

## Running Tests

```sh
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Types of Tests

### 1. Unit Tests

For testing individual components in isolation. Example: Testing a Button component renders correctly with different props.

```tsx
it('renders correctly with primary variant', () => {
  render(<Button variant="primary">Click me</Button>);
  expect(screen.getByRole('button')).toHaveClass('primary');
});
```

### 2. Component Tests

Testing React components, including their rendering, state management, and event handling.

```tsx
it('toggles visibility when button is clicked', () => {
  render(<Accordion title="Section 1">Content</Accordion>);
  
  // Initially content is not visible
  expect(screen.queryByText('Content')).not.toBeVisible();
  
  // Click to expand
  fireEvent.click(screen.getByText('Section 1'));
  expect(screen.getByText('Content')).toBeVisible();
});
```

### 3. Integration Tests

Testing interactions between multiple components or with external data sources.

```tsx
it('fetches and displays data correctly', async () => {
  // Mock API
  vi.mocked(api.getData).mockResolvedValue([{ id: 1, name: 'Item 1' }]);
  
  render(<DataList />);
  
  // Check loading state
  expect(screen.getByText('Loading...')).toBeInTheDocument();
  
  // Wait for data to load
  await waitFor(() => {
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });
});
```

## Mocking

We use Vitest's mocking capabilities to mock external dependencies:

```tsx
// Mock API module
vi.mock('../api', () => ({
  getData: vi.fn(),
}));

// In tests
vi.mocked(api.getData).mockResolvedValue(mockData);
```

## Best Practices

1. **Test behaviors, not implementation details**
   - Focus on what users would see and interact with
   - Avoid testing internal state directly

2. **Use appropriate queries**
   - Prefer accessible queries like `getByRole`, `getByLabelText`
   - Fall back to `getByText` or `getByTestId` when necessary

3. **Write maintainable tests**
   - Keep test setup concise and readable
   - Use helper functions for common test patterns
   - Avoid duplicating test logic

4. **Test error states and loading states**
   - Cover all possible component states
   - Test error handling

5. **Use test coverage as a guide, not a goal**
   - Aim for meaningful test coverage rather than a specific percentage

## Example Test Structure

```tsx
describe('Component Name', () => {
  // Setup that runs before each test
  beforeEach(() => {
    // Common setup...
  });

  // Group related tests
  describe('when in default state', () => {
    it('renders correctly', () => {
      // Test...
    });
  });

  describe('when interacted with', () => {
    it('updates accordingly', () => {
      // Test...
    });
  });

  // Cleanup if needed
  afterEach(() => {
    // Cleanup...
  });
});
```
