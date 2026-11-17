
import { test as base, expect } from '@playwright/test';
import type { APIRequestContext } from '@playwright/test';
import { LoginPage } from '../pages/login';

// Define custom fixture types
type MyFixtures = {
    loginPage: LoginPage;
    apiContext: APIRequestContext;
};

// Extend Playwright with custom fixtures
export const test = base.extend<MyFixtures>({

    // UI Login Page Fixture
    loginPage: async ({ page }, use) => {

        const loginPage = new LoginPage(page);

        await use(loginPage);

    },

    // Centralized API Authentication Fixture
    apiContext: async ({ playwright }, use) => {

        const baseURL = process.env.ORANGEHRM_API_BASE_URL;
        const token = process.env.ORANGEHRM_API_TOKEN;

        // Validate environment variables
        if (!baseURL) {
            throw new Error('ORANGEHRM_API_BASE_URL is missing in .env');
        }

        if (!token) {
            throw new Error('ORANGEHRM_API_TOKEN is missing in .env');
        }

        // Create authenticated API request context
        const context = await playwright.request.newContext({

            extraHTTPHeaders: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }

        });

        // Provide API context to the test
        try {
            await use(context);
        } finally {
            // Dispose API context after test execution
            await context.dispose();
        }
    }

});

// Export expect
export { expect };
