## Project Structure

```text
OrangeHRM/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── locators/
│   └── loginLocators.ts
│
├── pages/
│   └── login.ts
│
├── test-data/
│   ├── loginTestData.ts
│   └── loginTestData.xlsx
│
├── tests/
│   └── login.spec.ts
│
├── types/
│   └── login.types.ts
│
├── utils/
│   ├── excelReader.ts
│   └── index.ts
│
├── playwright.config.ts
├── tsconfig.json
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

### Folder Responsibilities

- **tests:** Contains Playwright test scenarios.
- **pages:** Contains Page Object Model classes and page actions.
- **locators:** Maintains reusable web element selectors.
- **test-data:** Stores test data in TypeScript and Excel formats.
- **types:** Contains TypeScript interfaces and type definitions.
- **utils:** Contains reusable helper functions, including Excel reading.
- **.github/workflows:** Contains GitHub Actions workflow configuration.
