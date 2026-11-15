import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';
//import { loginTestData } from '../test-data/loginTestData';
import { readExcelData } from '../utils/excelReader';
import type { LoginData } from '../types/login.types';


test('Verify login with valid credentials', async ({ page }) => {

    try {
        const loginPage = new LoginPage(page);
        const data = readExcelData<LoginData>( 'loginTestData.xlsx','LoginData', 'validLogin')[0];
        await loginPage.navigateToLoginPage();
        await loginPage.login(data.username, data.password);

        // Verify navigation to Dashboard
        await expect(page).toHaveURL(/dashboard/i);

        // Verify Dashboard is visible
        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
        console.log('Login test passed successfully');

    }
    catch (error) {
        console.log('Login test failed');

        // Ensure Playwright reports the test failure
        throw error;
    }
    finally {
        console.log('Login test execution completed');
    }
});


test('Verify login with invalid credentials', async ({ page }) => {

    const data = readExcelData<LoginData>('loginTestData.xlsx','LoginData','invalidLogin')[0];

    const loginPage = new LoginPage(page);
    
    await loginPage.navigateToLoginPage();
    await loginPage.login(data.username,data.password);

    await expect(page.getByText(data.expectedResult, { exact: false })).toBeVisible();
});