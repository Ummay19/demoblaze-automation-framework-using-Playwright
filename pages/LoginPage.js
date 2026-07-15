import { test } from '../fixtures/testSetup.js';
import { attachStepScreenshot } from '../utilities/screenshot.js';

class LoginPage {

  constructor(page) {
    this.page = page;

    this.loginLink = page.locator('#login2');
    this.username = page.locator('#loginusername');
    this.password = page.locator('#loginpassword');
    this.loginBtn = page.locator("button[onclick='logIn()']");
    this.welcomeUser = page.locator('#nameofuser');
    this.logoutLink = page.locator('#logout2');
  }

  async login(username, password) {

    await test.step('Open Login Modal', async () => {
      await this.loginLink.click();
      await this.page.waitForSelector('#loginusername');
      await attachStepScreenshot(this.page, 'Login Modal Opened');
    });

    await test.step('Enter Username', async () => {
      await this.username.fill(username);
      await attachStepScreenshot(this.page, 'Username Entered');
    });

    await test.step('Enter Password', async () => {
      await this.password.fill(password);
      await attachStepScreenshot(this.page, 'Password Entered');
    });

    await test.step('Click Login Button', async () => {
      await this.loginBtn.click();
      await attachStepScreenshot(this.page, 'Login Clicked');
    });
  }

  async logout() {
    await test.step('Logout User', async () => {
      await this.logoutLink.click();
      await attachStepScreenshot(this.page, 'User Logged Out');
    });
  }

}

export default LoginPage;