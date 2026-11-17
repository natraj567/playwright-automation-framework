
import { test, expect } from '../../fixtures/test-fixtures';
import { readExcelData } from '../../utils/excelReader';
import type { LoginData } from '../../types/login.types';

// Test Case 1: Login with valid credentials
test('Verify login with valid credentials', async ({ page, loginPage }) => {

    try {
        // Read valid login data from Excel
        const data = readExcelData<LoginData>('loginTestData.xlsx', 'LoginData', 'validLogin')[0];

        // Navigate and login
        await loginPage.navigateToLoginPage();
        await loginPage.login(data.username, data.password);

        // Verify navigation to Dashboard
        await expect(page).toHaveURL(/dashboard/i);

        // Verify Dashboard is visible
        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

        console.log('Login test passed successfully');

    } catch (error) {

        console.log('Login test failed');

        // Ensure Playwright reports the test failure
        throw error;

    } finally {

        console.log('Login test execution completed');
    }
});


// Test Case 2: Login with invalid credentials
test('Verify login with invalid credentials', async ({ page, loginPage }) => {

    // Read invalid login data from Excel
    const data = readExcelData<LoginData>('loginTestData.xlsx', 'LoginData', 'invalidLogin')[0];

    // Navigate and login
    await loginPage.navigateToLoginPage();
    await loginPage.login(data.username, data.password);

    // Verify expected error message
    await expect(page.getByText(data.expectedResult, { exact: false })).toBeVisible();

    console.log('Invalid login test passed successfully');
});
