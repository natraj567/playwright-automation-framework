import { test, expect } from '../../fixtures/test-fixtures'
import { readExcelData } from '../../utils/excelReader';
import type { LoginData } from '../../types/login.types';
import { UserManagementPage } from '../../pages/userMangement';

test('Verify navigation to User Management page', async ({ page, loginPage }) => {

    const userManagementPage = new UserManagementPage(page);

    // Read invalid login data from Excel
    const data = readExcelData<LoginData>('loginTestData.xlsx', 'LoginData', 'validLogin')[0];

    // Navigate and login
    await loginPage.navigateToLoginPage();
    await loginPage.login(data.username, data.password);

    const employeeId = await userManagementPage.addEmployee();
});