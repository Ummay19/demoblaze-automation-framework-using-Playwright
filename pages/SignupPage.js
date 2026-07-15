import { test } from '../fixtures/testSetup.js';
import { attachStepScreenshot } from '../utilities/screenshot.js';

class SignupPage {

  constructor(page) {
    this.page = page;
    this.signupLink = page.locator('#signin2');
    this.username = page.locator('#sign-username');
    this.password = page.locator('#sign-password');
    this.signupBtn = page.locator("button[onclick='register()']");
  }

  async openModal() {
    await this.signupLink.click();
    await this.page.waitForSelector('#sign-username');
  }

  async signup(username, password) {

    await test.step('Open Signup Modal', async () => {
      await this.openModal();
    });

    await this.username.fill(username);
    await this.password.fill(password);

    await test.step('Submit Signup', async () => {

      // click without waiting for dialog
      await this.signupBtn.click();

      // wait max 3 seconds for dialog
      try {
        const dialog = await this.page.waitForEvent('dialog', { timeout: 3000 });
        await dialog.accept();
      } catch (e) {
        // no dialog appeared (empty field case)
      }

      await attachStepScreenshot(this.page, 'Signup Attempted');
    });

  }

}

export default SignupPage;