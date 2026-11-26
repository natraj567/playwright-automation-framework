import { Page } from '@playwright/test';

export class UserManagementLocators {

    constructor(private page: Page) { }

    get pimMenu() {
        return this.page.getByText('PIM');
    }

    get addButton() {
        return this.page.getByRole('button', { name: 'Add' });
    }

    get firstName() {
        return this.page.getByPlaceholder('First Name');
    }

    get middleName() {
        return this.page.getByPlaceholder('Middle Name');
    }

    get lastName() {
        return this.page.getByPlaceholder('Last Name');
    }

    get employeeId() {
        return this.page
            .locator('div.oxd-input-group')
            .filter({ hasText: 'Employee Id' })
            .locator('input');
    }

    get saveButton() {
        return this.page.getByRole('button', { name: 'Save' });
    }

    get addEmployeeHeading() {
        return this.page.getByRole('heading', {
            name: 'Add Employee'
        });

    }

    get successMessage() {
        return this.page.getByText('Successfully Saved');
    }
}