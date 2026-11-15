# OrangeHRM - Playwright Automation Framework

## Project Overview

This project is an end-to-end test automation framework developed using Playwright with TypeScript.

The framework automates OrangeHRM application functionalities using the Page Object Model (POM) design pattern.

It is designed to provide maintainable, reusable, and scalable automation test scripts.

## Technologies Used

- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)
- Git and GitHub
- Excel-based test data management

## Features

- Page Object Model architecture
- Data-driven testing
- Reusable page classes and locators
- Positive and negative login test scenarios
- Playwright assertions
- Automated browser testing
- HTML test reporting

## Project Structure

```text
OrangeHRM/
│
├── .github/
│   └── workflows/
│
├── locators/
│
├── pages/
│
├── test-data/
│
├── tests/
│
├── types/
│
├── utils/
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/natraj567/playwright-automation-framework.git
```

### 2. Navigate to the project directory

```bash
cd playwright-automation-framework
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install Playwright browsers

```bash
npx playwright install
```

## Execution Commands

### Run all test cases

```bash
npx playwright test
```

### Run tests in headed mode

```bash
npx playwright test --headed
```

### Run a specific test file

```bash
npx playwright test tests/login.spec.ts
```

### Run tests in debug mode

```bash
npx playwright test --debug
```

### Generate and open HTML report

```bash
npx playwright show-report
```

## Reporting

Playwright HTML reports are used to analyze test execution results, including passed, failed, and skipped test cases.

## Repository

GitHub: https://github.com/natraj567/playwright-automation-framework

## Author

Natraj Pache

Automation QA Engineer