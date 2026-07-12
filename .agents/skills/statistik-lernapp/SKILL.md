```markdown
# statistik-lernapp Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill covers the development patterns and conventions found in the `statistik-lernapp` JavaScript repository. The project is a statistics learning application, with a focus on code organization, naming conventions, and testing patterns suitable for JavaScript projects without a specific framework.

## Coding Conventions

### File Naming
- Use **camelCase** for file names.
  - Example: `userProfile.js`, `quizManager.js`

### Import Style
- Use **relative imports** for modules within the project.
  - Example:
    ```javascript
    import { calculateMean } from './statisticsUtils.js';
    ```

### Export Style
- Use **named exports** for functions, constants, and objects.
  - Example:
    ```javascript
    // statisticsUtils.js
    export function calculateMean(numbers) { ... }
    export const DEFAULT_SAMPLE_SIZE = 30;
    ```

### Commit Messages
- Freeform commit messages, typically around 73 characters.
  - Example: `add feature to calculate median and mode for quiz results`

## Workflows

### Adding a New Feature
**Trigger:** When you need to implement a new functionality.
**Command:** `/add-feature`

1. Create a new camelCase-named file if needed.
2. Write your feature using named exports.
3. Use relative imports to include dependencies.
4. Add or update corresponding test files (`*.test.js`).
5. Commit with a clear, descriptive message.

### Fixing a Bug
**Trigger:** When a bug is reported or discovered.
**Command:** `/fix-bug`

1. Locate the relevant file(s) using camelCase naming.
2. Apply the fix, maintaining code style and conventions.
3. Update or add tests to cover the bug scenario.
4. Commit with a message describing the fix.

### Writing Tests
**Trigger:** When adding or updating features/bug fixes.
**Command:** `/write-test`

1. Create or update a test file matching the pattern `*.test.js`.
2. Write tests for all exported functions or components.
3. Use clear, descriptive test names.
4. Run the tests to ensure correctness.

## Testing Patterns

- Test files follow the `*.test.js` naming pattern.
- The specific test framework is not detected, but tests should be placed alongside or near the code they test.
- Example test file:
  ```javascript
  // statisticsUtils.test.js
  import { calculateMean } from './statisticsUtils.js';

  test('calculateMean returns correct average', () => {
    expect(calculateMean([1, 2, 3])).toBe(2);
  });
  ```

## Commands
| Command        | Purpose                                    |
|----------------|--------------------------------------------|
| /add-feature   | Start workflow for adding a new feature    |
| /fix-bug       | Start workflow for fixing a bug            |
| /write-test    | Start workflow for writing or updating tests|
```
