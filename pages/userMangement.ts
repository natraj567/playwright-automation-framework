import { Page, expect } from '@playwright/test';
import { readExcelData } from '../utils/excelReader';
import type { EmployeeScenario } from '../types/userMangement.types.ts';
import { UserManagementLocators } from '../locators/userManagement.locators';
import { TestDataGenerator } from '../utils/testDataGenerator';

export class UserManagementPage {

    private userLocators: UserManagementLocators;

    constructor(private page: Page) {
        this.userLocators = new UserManagementLocators(page);
    }

    async addEmployee(): Promise<string> {
        const employeeData = readExcelData<EmployeeScenario>('userManagementTestData.xlsx', 'EmployeeData', 'validEmployee')[0];

        await this.userLocators.pimMenu.click();
        await this.userLocators.addButton.click();
        await expect(this.userLocators.addEmployeeHeading).toBeVisible();
        await this.userLocators.firstName.fill(employeeData.firstName);
        await this.userLocators.middleName.fill(employeeData.middleName);
        await this.userLocators.lastName.fill(employeeData.lastName);
        const employeeId = this.userLocators.employeeId;
        await employeeId.clear();
        const generatedEmployeeId = TestDataGenerator.generateEmployeeId();
        await employeeId.fill(generatedEmployeeId);
        await this.userLocators.saveButton.click();
        await expect(this.userLocators.successMessage).toBeVisible();
        return generatedEmployeeId;
    }
}