PLAYWRIGHT_AUTOMATION PROJECT

This is a test framework containing several tests covering a general functionality of the Bunch Help Center

TEST SCENARIOS

The framework contains the following test scenarios in two suites - Navigation and Search:
1. A user should be able to navigate to the main website page from Help Center
2. A user should be able to open article collection
3. A user should be able to see that each search result list item contains a key word typed in the search field
4. A user should be able to open article

PREREQUISITES

1. Operating System: Playwright can run on Windows, Mac, and Linux

2. nodejs : Download and Install Node JS from

https://nodejs.org/en/download/

3. Visual Studio Code: This is the best IDE to work with Playwright

https://code.visualstudio.com/download

4. Playwright

npm: npm init playwright@latest
yarn: yarn create playwright
pnpm: pnpm create playwright

Run the install command and select the following to get started:

    Choose between TypeScript or JavaScript (default is TypeScript)
    Name of your Tests folder (default is tests or e2e if you already have a tests folder in your project)
    Add a GitHub Actions workflow to easily run tests on CI
    Install Playwright browsers (default is true)

HOW TO RUN THE PROJECT

1. Clone the repo using below URL

https://github.com/NailyaD/Playwright-Automation.git

2. Navigate to test folder and install npm packages using:

npm install

HOW TO RUN TESTS

To run all tests on all browsers in a headless mode: npx playwright test
To run a specific test file: npx playwright test navigation.spec.ts
To run on a specific browser: npx playwright test --project=chromium
To run tests in a headed mode: npx playwright test --headed
To run tests in a debug mode: npx playwright test --debug

CONTRIBUTORS

Nailya Doskanova, IschenkoArtem, alexAtBunchCapital