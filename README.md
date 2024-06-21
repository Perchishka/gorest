README IS STILL IN PROGRESS

## Installation

Install playwright pluging for Visual studio Code

- You can run test via green triangle
  Playwright Test for VSCode

https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright

Playwright has its own test runner for end-to-end tests, we call it Playwright Test.

## Project structure

**Folders:**<br />
lib - folder where you can find all framework logic<br />
lib/api - classes which are responsible for api requests<br />
lib/data/mocks - objects to use in the requests<br />
lib/data/schemas - json schemas for schemas validation<br />
tests - You can create different folders to group your tests inside<br />

## Writing tests

File name should have structure FileName.spec.ts <br />
Assertions: By default, failed assertion will terminate test execution. Playwright also supports [soft assertions](https://playwright.dev/docs/test-assertions#soft-assertions): failed soft assertions do not terminate test execution, but mark the test as failed.<br />
Use soft assertions where it is possible<br />

Before you start writing tests read [Playwright best practices](https://playwright.dev/docs/best-practices)

### How to run tests:<br />

1. npx playwright tests - will run tests in chromium<br />
2. npx playwright test --project='Chromium_local' - will run tests according to the configuration in 'Chromium_local' project<br />
3. npx playwright test --project='Chromium_local' --debug - will run tests according to the configuration in 'Chromium_local' project in debug mode<br />
4. npx playwright test --ui - will run tests in [UI mode](https://playwright.dev/docs/test-ui-mode)<br />
5. npx playwright test specName.spec.ts - run specific file
6. package.json -> right mouse click on "test" script -> "run script"

### Reporter

Install allure: npm i -D allure-playwright
