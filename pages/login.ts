import { Page } from '@playwright/test';
import { loginLocators } from '../locators/loginLocators';

export class LoginPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToLoginPage() {

        await this.page.goto('/', {
        waitUntil: 'domcontentloaded',
        timeout: 60000
    });

    }

    async login(username: string, password: string) {
        await this.page.getByPlaceholder('Username').fill(username);
        await this.page.getByPlaceholder('Password').fill(password);
        await this.page.getByRole('button', { name: loginLocators.signInButton }).click();
    }
}
