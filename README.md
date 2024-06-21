## Installation & Configuraion

1. Execute from the root folder: npm install.<br />
2. Create a .env file for secret storage -> this file will not be pushed into the Git repository.<br />
3. Generate a token on https://gorest.co.in/ and create a TOKEN field in the .env file.<br />
4. Api authorisation is configured in the playwright.config.ts.<br />

   ```
   Authorization: `Bearer ${process.env.TOKEN}`,

   ```

5. Install playwright pluging for Visual studio Code - Playwright Test for VSCode.

https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright

Playwright has its own test runner for end-to-end tests, it is called Playwright Test.

## Tools & Libraries:

1. **Depcheck<**is a tool for analyzing the dependencies in a project to see how each dependency is used.
2. **Ajv** - JSON schema validator.
3. **Allure-playwright** reporter.

## Project structure

**Folders:**<br />

- lib - folder where you can find all framework logic.<br />
- lib/api - classes responsible for API requests.<br />
- lib/data/mocks - objects to use in the requests.<br />
- lib/data/schemas - JSON schemas for validation.<br />
- tests - folder to create different folders to group your tests.<br />

## Writing tests

File name should have structure FileName.spec.ts <br />

Assertions: By default, failed assertion will terminate test execution. Playwright also supports [soft assertions](https://playwright.dev/docs/test-assertions#soft-assertions): failed soft assertions do not terminate test execution, but mark the test as failed.<br />
Use soft assertions where it is possible<br />

Before you start writing tests read [Playwright best practices](https://playwright.dev/docs/best-practices)

### How to run tests:<br />

1. npx playwright tests - will run tests<br />
2. npx playwright test --debug - will run tests in debug mode<br />
3. npx playwright test specName.spec.ts - run specific file<br />
4. package.json -> right mouse click on "test" script -> "run script"<br />

### Run Allure reporter locally:
