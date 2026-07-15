import { test } from '../fixtures/testSetup.js';
import { attachStepScreenshot } from '../utilities/screenshot.js';

class OrderPage {
  constructor(page) {
    this.page = page;

    this.name = page.locator("#name");
    this.country = page.locator("#country");
    this.city = page.locator("#city");
    this.card = page.locator("#card");
    this.month = page.locator("#month");
    this.year = page.locator("#year");

    this.purchaseBtn = page.locator("//button[text()='Purchase']");
    this.confirmMsg = page.locator(".sweet-alert h2");
  }

  async placeOrder(data) {

    await test.step('Fill Order Details', async () => {
      await this.name.fill(data.name);
      await this.country.fill(data.country);
      await this.city.fill(data.city);
      await this.card.fill(data.card);
      await this.month.fill(data.month);
      await this.year.fill(data.year);
      await attachStepScreenshot(this.page, 'Order Details Filled');
    });

    await test.step('Click Purchase', async () => {
      await this.purchaseBtn.click();
      await attachStepScreenshot(this.page, 'Purchase Clicked');
    });

  }
}

export default OrderPage;