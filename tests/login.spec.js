import { test, expect } from '../fixtures/testSetup.js';
import loginData from '../testdata/loginData.json' assert { type: 'json' };
import LoginPage from '../pages/LoginPage.js';

test.describe('Login Module', () => {

  test('Login with valid user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const data = loginData.validUsers[0];

    await loginPage.login(data.username, data.password);

    await expect(loginPage.welcomeUser)
      .toContainText(data.expectedUser, { timeout: 10000 });
  });

  test('Login with invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const data = loginData.invalidUsers[0];

    await loginPage.login(data.username, data.password);
    await page.waitForTimeout(2000);
  });

  test('Login with empty username', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('', 'Salarsikandar');
  });

  test('Login with empty password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('Umamah', '');
  });

  test('Login with both fields empty', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('', '');
  });

  test('Logout after login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const data = loginData.validUsers[0];

    await loginPage.login(data.username, data.password);
    await loginPage.logout();
  });

});