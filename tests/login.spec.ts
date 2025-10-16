import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { loginData } from '../test-data/loginData';

test.describe('Login Functionality', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('should login successfully with valid credentials', async () => {
        const { username, password } = loginData.validUser;
        await loginPage.login(username, password);
        await loginPage.verifySuccessfulLogin();
    });

    // You can add more test cases here using different test data
    test('should show error with invalid credentials', async () => {
        const { username, password } = loginData.invalidUser;
        await loginPage.login(username, password);
        // Add validation for error message
    });
});